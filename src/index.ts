import { initCommand } from "./commands/init";
import { log } from "./utils/logger";

type CommandName = "help" | "init";
type FrameworkOption = "grammy" | "telegraf";
type DatabaseOption = "mongodb" | "prisma" | "typeorm";

interface ParsedArgs {
  command: string | undefined;
  flags: {
    dryRun: boolean;
    help: boolean;
    docker: boolean;
    framework?: FrameworkOption;
    database?: DatabaseOption;
  };
  positional: string[];
  error?: string;
}

const frameworkOptions = ["grammy", "telegraf"] as const;
const databaseOptions = ["mongodb", "prisma", "typeorm"] as const;

const commands: Record<CommandName, string> = {
  help: "Show CLI usage information",
  init: "Scaffold a Telegram bot project (placeholder)"
};

const helpMessage = `telegram-bot-frame

Usage:
  tbf <command> [options]
  telegram-bot-frame <command> [options]

Commands:
  help    ${commands.help}
  init    ${commands.init}

Options:
  --framework <grammy|telegraf>          Select future bot framework
  --database <mongodb|prisma|typeorm>    Select future database layer
  --docker                               Include future Docker setup
  --dry-run                              Print what would happen without writing files
  --help, -h                             Show help

This CLI is in MVP development.`;

function isFrameworkOption(value: string): value is FrameworkOption {
  return frameworkOptions.includes(value as FrameworkOption);
}

function isDatabaseOption(value: string): value is DatabaseOption {
  return databaseOptions.includes(value as DatabaseOption);
}

function readOptionValue(argv: string[], index: number, option: string): string | undefined {
  const value = argv[index + 1];

  if (!value || value.startsWith("--")) {
    return undefined;
  }

  if (option === "--framework" || option === "--database") {
    return value;
  }

  return undefined;
}

function parseArgs(argv: string[]): ParsedArgs {
  const flags = {
    dryRun: false,
    help: false,
    docker: false,
    framework: undefined as FrameworkOption | undefined,
    database: undefined as DatabaseOption | undefined
  };
  const positional: string[] = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--dry-run") {
      flags.dryRun = true;
      continue;
    }

    if (arg === "--docker") {
      flags.docker = true;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      flags.help = true;
      continue;
    }

    if (arg === "--framework") {
      const value = readOptionValue(argv, index, arg);

      if (!value) {
        return {
          command: positional[0],
          flags,
          positional: positional.slice(1),
          error: "Missing value for --framework. Expected grammy or telegraf."
        };
      }

      if (!isFrameworkOption(value)) {
        return {
          command: positional[0],
          flags,
          positional: positional.slice(1),
          error: `Invalid framework: ${value}. Expected grammy or telegraf.`
        };
      }

      flags.framework = value;
      index += 1;
      continue;
    }

    if (arg === "--database") {
      const value = readOptionValue(argv, index, arg);

      if (!value) {
        return {
          command: positional[0],
          flags,
          positional: positional.slice(1),
          error: "Missing value for --database. Expected mongodb, prisma, or typeorm."
        };
      }

      if (!isDatabaseOption(value)) {
        return {
          command: positional[0],
          flags,
          positional: positional.slice(1),
          error: `Invalid database: ${value}. Expected mongodb, prisma, or typeorm.`
        };
      }

      flags.database = value;
      index += 1;
      continue;
    }

    if (arg.startsWith("--")) {
      return {
        command: positional[0],
        flags,
        positional: positional.slice(1),
        error: `Unknown option: ${arg}`
      };
    }

    positional.push(arg);
  }

  return {
    command: positional[0],
    flags,
    positional: positional.slice(1)
  };
}

async function main(argv: string[]): Promise<void> {
  const parsed = parseArgs(argv);
  const command = parsed.command;

  if (!command || command === "help" || parsed.flags.help) {
    log.info(helpMessage);
    return;
  }

  if (parsed.error) {
    log.error(parsed.error);
    log.info(helpMessage);
    process.exitCode = 1;
    return;
  }

  if (command === "init") {
    await initCommand({
      dryRun: parsed.flags.dryRun,
      framework: parsed.flags.framework,
      database: parsed.flags.database,
      docker: parsed.flags.docker,
      args: parsed.positional
    });
    return;
  }

  log.warn(`Unknown command: ${command}`);
  log.info(helpMessage);
}

main(process.argv.slice(2)).catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "An unexpected error occurred.";
  log.error(message);
  process.exitCode = 1;
});
