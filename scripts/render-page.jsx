
import React from "react";
import { writeFile } from "node:fs/promises";

import {
  render,
  formatDiagnostics,
} from "@hyper-elements/react";

import LaunchKitPage from "../src/templates/LaunchKitPage.jsx";

async function main() {
  console.log("Rendering LaunchKit...");

  const template = <LaunchKitPage />;

  const result = await render(template);

  await writeFile(
    "launchkit-preview.html",
    result.html,
    "utf8"
  );

  console.log("HTML generated successfully!");

  console.log(
    "Diagnostics:",
    formatDiagnostics(result.diagnostics)
  );

  console.log("Output: launchkit-preview.html");
}

main().catch((error) => {
  console.error("Rendering failed:", error);
  process.exitCode = 1;
});
