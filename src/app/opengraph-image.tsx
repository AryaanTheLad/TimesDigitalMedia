import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Times Digital Media: performance marketing agency in Lahore, Pakistan";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Performance marketing agency",
    title: "Meta, Google & YouTube ads that bring more qualified leads.",
  });
}
