import { initCommand } from "./commands/init";
import { logger } from "./utils/logger";

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
    logger.info(helpMessage);
    return;
  }

  if (command === "init") {
    await initCommand();
    return;
  }

  logger.warn(`Unknown command: ${command}`);
  logger.info(helpMessage);
}

main(process.argv.slice(2)).catch((error: unknown) => {
  const message = error instanceof Error ? error.message : "An unexpected error occurred.";
  logger.error(message);
  process.exitCode = 1;
});
