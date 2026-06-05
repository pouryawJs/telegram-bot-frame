import { ensureDir, outputFile } from "../utils/file";
import { log } from "../utils/logger";

export interface InitCommandOptions {
  dryRun: boolean;
  framework?: "grammy" | "telegraf";
  database?: "mongodb" | "prisma" | "typeorm";
  docker: boolean;
  args: string[];
}

const plannedFileUtilities = [ensureDir.name, outputFile.name].join(", ");

function formatSelection(options: InitCommandOptions): string {
  const framework = options.framework ?? "not selected";
  const database = options.database ?? "not selected";
  const docker = options.docker ? "enabled" : "disabled";

  return `Selected options: framework=${framework}, database=${database}, docker=${docker}`;
}

export async function initCommand(options: InitCommandOptions): Promise<void> {
  if (options.args.length > 0) {
    log.dim(`Ignoring placeholder arguments: ${options.args.join(" ")}`);
  }

  if (options.dryRun) {
    log.info("Dry run: init would prepare project files, but no files were written.");
    log.dim(formatSelection(options));
    log.dim(`Future file utilities: ${plannedFileUtilities}`);
    return;
  }

  log.info("Init command placeholder. Project generation not yet implemented.");
  log.dim(formatSelection(options));
}
