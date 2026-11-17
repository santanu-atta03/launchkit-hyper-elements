
import React from "react";

import {
  Canvas,
  Column,
  Heading,
  Text,
  Row,
} from "@hyper-elements/react";
import launchkitTheme from "../theme/launchkitTheme.js";

export default function SocialCard() {
  return (
    <Canvas
    theme={launchkitTheme}
      width={1200}
      height={630}
      title="LaunchKit - Create Once, Publish Everywhere"
      style={{
        backgroundColor: "#111827",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        padding: 65,
        gap: 30,
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading
          level={2}
          style={{
            fontSize: 32,
            color: "#FFFFFF",
          }}
        >
          LaunchKit.
        </Heading>

        <Text
          style={{
            fontSize: 16,
            color: "#A78BFA",
            fontWeight: 700,
          }}
        >
          POWERED BY HYPER ELEMENTS
        </Text>
      </Row>

      <Column style={{ gap: 24 }}>
        <Text
          style={{
            color: "#A78BFA",
            fontSize: 19,
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          THE FUTURE OF TEMPLATES
        </Text>

        <Column style={{ gap: 4 }}>
  <Heading
    level={1}
    style={{
      fontSize: 76,
      lineHeight: 1.1,
      color: "#FFFFFF",
    }}
  >
    Create once.
  </Heading>

  <Heading
    level={1}
    style={{
      fontSize: 76,
      lineHeight: 1.1,
      color: "#A78BFA",
    }}
  >
    Publish everywhere.
  </Heading>
</Column>

        <Text
          style={{
            fontSize: 25,
            color: "#CBD5E1",
            lineHeight: 1.5,
          }}
        >
          One component system. Four powerful outputs.
        </Text>
      </Column>

      <Row style={{ gap: 14 }}>
        {["EMAIL", "WEB", "PDF", "IMAGE"].map((item) => (
          <Column
            key={item}
            style={{
              backgroundColor: "#272343",
              padding: 18,
              border: "1px solid #514477",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              {item}
            </Text>
          </Column>
        ))}
      </Row>

      <Text
        style={{
          color: "#94A3B8",
          fontSize: 16,
        }}
      >
        Designed with React and Hyper Elements
      </Text>
    </Canvas>
  );
}
