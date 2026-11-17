import { defineTheme } from "@hyper-elements/react";

const launchkitTheme = defineTheme({
  colors: {
    background: "#FFFFFF",
    foreground: "#1D1D1F",
    primary: "#0066CC",
    primaryForeground: "#FFFFFF",
    muted: "#7A7A7A",
    border: "#E0E0E0",
  },
  fonts: {
    body: "SF Pro Text, system-ui, -apple-system, sans-serif",
    heading: "SF Pro Display, system-ui, -apple-system, sans-serif",
  },
  fontSizes: { body: 16 },
  lineHeights: { body: 1.5 },
  elements: {
    Heading: {
      by: {
        level: {
          1: { fontSize: 40, fontWeight: 600 },
          2: { fontSize: 34, fontWeight: 600 },
          3: { fontSize: 21, fontWeight: 600 },
        },
      },
    },
    Button: {
      borderRadius: 8,
      hover: { backgroundColor: "#0071E3" },
    },
  },
  styles: {
    card: {
      backgroundColor: "#FFFFFF",
      padding: 24,
      border: "1px solid #E0E0E0",
      borderRadius: 14,
      gap: 16,
    },
  },
});

export default launchkitTheme;