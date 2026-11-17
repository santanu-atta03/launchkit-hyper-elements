
import { defineTheme } from "@hyper-elements/react";

const launchkitTheme = defineTheme({
  colors: {
    background: "#FFFFFF",
    foreground: "#172033",
    primary: "#6546E8",
    primaryForeground: "#FFFFFF",
    muted: "#64748B",
    border: "#E2E8F0",
  },

  fonts: {
    body: "Arial, sans-serif",
    heading: "Arial, sans-serif",
  },

  fontSizes: {
    body: 16,
  },

  lineHeights: {
    body: 1.5,
  },

  elements: {
    Heading: {
      by: {
        level: {
          1: {
            fontSize: 36,
            fontWeight: 700,
          },
          2: {
            fontSize: 28,
            fontWeight: 700,
          },
        },
      },
    },

    Button: {
      borderRadius: 8,
      hover: {
        backgroundColor: "#5135C7",
      },
    },
  },

  styles: {
    card: {
      backgroundColor: "#FFFFFF",
      padding: 24,
      border: "1px solid #E2E8F0",
      gap: 16,
    },
  },
});

export default launchkitTheme;
