import { access, copyFile, mkdir, readdir, rm } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = process.cwd();
const sourceDirs = [
  resolve(root, "content", "project-images"),
  resolve(root, "content", "projects-images")
];
const destinationDir = resolve(root, "public", "project-images");
const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await rm(destinationDir, { recursive: true, force: true });
  await mkdir(destinationDir, { recursive: true });

  let copied = 0;

  for (const sourceDir of sourceDirs) {
    if (!(await exists(sourceDir))) {
      continue;
    }

    const entries = await readdir(sourceDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile()) {
        continue;
      }

      const extension = extname(entry.name).toLowerCase();
      if (!allowedExt.has(extension)) {
        continue;
      }

      await copyFile(join(sourceDir, entry.name), join(destinationDir, entry.name));
      copied += 1;
    }
  }

  if (copied === 0) {
    console.warn("No project images copied. Check content/project-images or content/projects-images.");
    return;
  }

  console.log(`Synced ${copied} project images to public/project-images.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
