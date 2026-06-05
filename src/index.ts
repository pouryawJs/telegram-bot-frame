import { initCommand } from "./commands/init";
import { log } from "./utils/logger";

const helpMessage = `telegram-bot-frame

Usage:
  tbf <command>
  telegram-bot-frame <command>

Commands:
  init    Scaffold a Telegram bot project (placeholder)

This CLI is in MVP development.`;

async function main(argv: string[]): Promise<void> {
  const [command] = argv;

  if (!command || command === "--help" || command === "-h") {
    log.info(helpMessage);
    return;
  }

  if (command === "init") {
    await initCommand();
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
