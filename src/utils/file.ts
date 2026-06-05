import fs from "fs-extra";

export async function ensureDirectory(path: string): Promise<void> {
  await fs.ensureDir(path);
}

export async function pathExists(path: string): Promise<boolean> {
  return fs.pathExists(path);
}

export async function writeTextFile(path: string, content: string): Promise<void> {
  await fs.outputFile(path, content, "utf8");
}
