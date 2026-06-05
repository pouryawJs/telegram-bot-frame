import fs from "fs-extra";

export async function ensureDir(path: string): Promise<void> {
  await fs.ensureDir(path);
}

export async function outputFile(path: string, content: string): Promise<void> {
  await fs.outputFile(path, content, "utf8");
}
