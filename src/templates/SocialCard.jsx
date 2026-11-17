import React from "react";
import { Canvas, Column, Heading, Text, Row } from "@hyper-elements/react";
import launchkitTheme from "../theme/launchkitTheme.js";

export default function SocialCard() {
  return (
    <Canvas
      theme={launchkitTheme}
      width={1200}
      height={630}
      title="LaunchKit — Create once. Publish everywhere."
      style={{
        backgroundColor: "#272729",
        color: "#FFFFFF",
        fontFamily: "SF Pro Text, system-ui, sans-serif",
        padding: 68,
        gap: 30,
        justifyContent: "center",
      }}
    >
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
        <Heading level={2} style={{ color: "#FFFFFF", fontSize: 32 }}>
          LaunchKit.
        </Heading>
        <Text
          style={{
            color: "#2997FF",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 1.1,
          }}
        >
          POWERED BY HYPER ELEMENTS
        </Text>
      </Row>
      <Column style={{ gap: 21 }}>
        <Text
          style={{
            color: "#2997FF",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 2.4,
          }}
        >
          THE FUTURE OF TEMPLATES
        </Text>
        <Column style={{ gap: 2 }}>
          <Heading
            level={1}
            style={{ color: "#FFFFFF", fontSize: 74, lineHeight: 1.05 }}
          >
            Create once.
          </Heading>
          <Heading
            level={1}
            style={{ color: "#FFFFFF", fontSize: 74, lineHeight: 1.05 }}
          >
            Publish everywhere.
          </Heading>
        </Column>
        <Text style={{ color: "#CCCCCC", fontSize: 23, lineHeight: 1.4 }}>
          One component system. Four powerful outputs.
        </Text>
      </Column>
      <Row style={{ gap: 13 }}>
        {["EMAIL", "WEB", "PDF", "IMAGE"].map((item) => (
          <Column
            key={item}
            style={{
              backgroundColor: "#2A2A2C",
              padding: 16,
              border: "1px solid #555555",
              borderRadius: 8,
              flex: 1,
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: 600, fontSize: 16 }}>
              {item}
            </Text>
            <Text style={{ color: "#2997FF", fontSize: 9 }}>OUTPUT</Text>
          </Column>
        ))}
      </Row>
      <Text style={{ color: "#CCCCCC", fontSize: 14 }}>
        Designed with React and Hyper Elements
      </Text>
    </Canvas>
  );
}
