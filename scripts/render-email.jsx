
import React from "react";
import { writeFile } from "node:fs/promises";

import {
  render,
  formatDiagnostics,
} from "@hyper-elements/react";

import WelcomeEmail from "../src/templates/WelcomeEmail.jsx";

async function main() {
  console.log("Rendering Welcome Email...");

  const result = await render(<WelcomeEmail />);

  await writeFile(
    "welcome-email.html",
    result.html,
    "utf8"
  );

  await writeFile(
    "welcome-email.txt",
    result.text,
    "utf8"
  );

  console.log("Welcome email generated!");

  console.log(formatDiagnostics(result.diagnostics));
}

main().catch((error) => {
  console.error("Email rendering failed:", error);
  process.exitCode = 1;
});
