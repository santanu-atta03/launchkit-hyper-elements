
import React from "react";
import { writeFile, mkdir, readFile } from "node:fs/promises";
import process from "node:process";

import SocialCard from "../src/templates/SocialCard.jsx";
import { renderImage } from "@hyper-elements/react/image";

async function main() {
  console.log("Generating LaunchKit social media image...");

  await mkdir("out", { recursive: true });

  const fontCandidates = [
    {
      family: "SF Pro Text",
      weight: 400,
      paths: [process.env.LAUNCHKIT_FONT_REGULAR, "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "C:/Windows/Fonts/arial.ttf"],
    },
    {
      family: "SF Pro Text",
      weight: 600,
      paths: [process.env.LAUNCHKIT_FONT_BOLD, "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", "C:/Windows/Fonts/arialbd.ttf"],
    },
  ];
  const fonts = await Promise.all(fontCandidates.map(async ({ family, weight, paths }) => {
    for (const path of paths) {
      if (!path) continue;
      try {
        return { family, src: await readFile(path), weight };
      } catch {
        continue;
      }
    }
    throw new Error(`No font found for ${family} weight ${weight}. Set LAUNCHKIT_FONT_REGULAR and LAUNCHKIT_FONT_BOLD.`);
  }));

  const result = await renderImage(React.createElement(SocialCard), {
    format: "png",
    scale: 1,
    fonts,
  });

  await writeFile("out/launchkit-social.png", result.image);

  console.log("Social image generated successfully!");
  console.log("Dimensions:", result.width, "x", result.height);
  console.log("Output: out/launchkit-social.png");

  if (result.diagnostics.length > 0) {
    console.log("Diagnostics:", result.diagnostics);
  }
}

main().catch((error) => {
  console.error("Image generation failed:", error);
  process.exitCode = 1;
});
