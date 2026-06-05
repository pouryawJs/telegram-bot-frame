import chalk from "chalk";

export const log = {
  success(msg: string): void {
    console.log(chalk.green(`✔ ${msg}`));
  },
  error(msg: string): void {
    console.error(chalk.red(`✖ ${msg}`));
  },
  info(msg: string): void {
    console.log(chalk.cyan(`ℹ ${msg}`));
  },
  warn(msg: string): void {
    console.warn(chalk.yellow(`⚠ ${msg}`));
  },
  dim(msg: string): void {
    console.log(chalk.dim(msg));
  }
};
