import { readdir, readFile } from "node:fs/promises";
import { join, basename } from "node:path";
import { parse } from "yaml";

export interface AgentInfo {
  id: string;
  name: string;
  slug: string;
  category: string;
  cron: string;
  scheduleLabel: string;
}

const WORKFLOWS_DIR = join(process.cwd(), ".github", "workflows");

export async function loadAgents(): Promise<AgentInfo[]> {
  const files = await readdir(WORKFLOWS_DIR);
  const ymlFiles = files.filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"));

  const agents: AgentInfo[] = [];

  for (const file of ymlFiles) {
    const filePath = join(WORKFLOWS_DIR, file);
    const raw = await readFile(filePath, "utf-8");
    const doc = parse(raw);

    // Only include workflows with a schedule trigger (i.e., agents)
    if (!doc.on?.schedule) continue;

    const id = basename(file, ".yml").replace(/\.yaml$/, "");
    const name: string = doc.name ?? id;
    const cron: string = doc.on.schedule[0]?.cron ?? "";

    const scheduleLabel = buildScheduleLabel(cron);

    // Extract slug and category from workflow-level env
    const slug = (doc.env as Record<string, string>)?.AGENT_SLUG ?? id;
    const category = (doc.env as Record<string, string>)?.AGENT_CATEGORY ?? "summary";

    agents.push({ id, name, slug, category, cron, scheduleLabel });
  }

  return agents.sort((a, b) => a.name.localeCompare(b.name));
}

function buildScheduleLabel(cron: string): string {
  const parts = cron.split(/\s+/);
  const minute = parts[0];
  const hours = parts[1].split(",").map(Number);

  const fmt = (utcH: number) => {
    const jstH = (utcH + 9) % 24;
    return `${String(jstH).padStart(2, "0")}:${String(Number(minute)).padStart(2, "0")}`;
  };

  const times = hours.map(fmt).join(", ");
  return `Daily at ${times} JST`;
}

