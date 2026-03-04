import { generateOgImage } from "./opengraph-image";

export const alt = "Build an Agent with Vercel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage();
}
