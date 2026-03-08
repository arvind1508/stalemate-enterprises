import { access, readFile } from "fs/promises";
import { extname, join, resolve } from "path";

const IMAGE_DIRS = [
  resolve(process.cwd(), "content", "project-images"),
  resolve(process.cwd(), "content", "projects-images")
];

const contentTypeByExtension: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif"
};

export async function GET(_: Request, { params }: { params: { image: string } }) {
  const imageName = params.image;

  if (!imageName || imageName.includes("/") || imageName.includes("..")) {
    return new Response("Invalid image path", { status: 400 });
  }

  let filePath = "";

  for (const directory of IMAGE_DIRS) {
    const candidate = join(directory, imageName);
    if (!resolve(candidate).startsWith(directory)) {
      continue;
    }

    try {
      await access(candidate);
      filePath = candidate;
      break;
    } catch {
      continue;
    }
  }

  if (!filePath) {
    return new Response("Image not found", { status: 404 });
  }

  try {
    const image = await readFile(filePath);
    const extension = extname(imageName).toLowerCase();

    return new Response(image, {
      status: 200,
      headers: {
        "Content-Type": contentTypeByExtension[extension] ?? "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch {
    return new Response("Image not found", { status: 404 });
  }
}
