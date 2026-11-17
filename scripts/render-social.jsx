
import React from "react";
import { writeFile, mkdir, readFile } from "node:fs/promises";

import SocialCard from "../src/templates/SocialCard.jsx";
import { renderImage } from "@hyper-elements/react/image";

async function main() {
  console.log("Generating LaunchKit social media image...");

  await mkdir("out", { recursive: true });

  const regularFont = await readFile("C:/Windows/Fonts/arial.ttf");
  const boldFont = await readFile("C:/Windows/Fonts/arialbd.ttf");

  const result = await renderImage(<SocialCard />, {
    format: "png",
    scale: 1,
    fonts: [
      {
        family: "Arial",
        src: regularFont,
        weight: 400,
      },
      {
        family: "Arial",
        src: boldFont,
        weight: 700,
      },
    ],
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
