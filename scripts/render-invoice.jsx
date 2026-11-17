
import React from "react";
import { writeFile, mkdir } from "node:fs/promises";
import { renderPdf } from "@hyper-elements/react/pdf";
import Invoice from "../src/templates/Invoice.jsx";

async function main() {
  console.log("Generating LaunchKit invoice...");

  await mkdir("out", { recursive: true });

  const result = await renderPdf(<Invoice />);

  await writeFile("out/launchkit-invoice.pdf", result.pdf);

  console.log("Invoice PDF generated successfully!");

  if (result.diagnostics.length > 0) {
    console.log("Diagnostics:", result.diagnostics);
  }

  console.log("Output: out/launchkit-invoice.pdf");
}

main().catch((error) => {
  console.error("PDF generation failed:", error);
  process.exitCode = 1;
});
