
import React from "react";

import {
  Email,
  Section,
  Column,
  Row,
  Heading,
  Text,
  Button,
  Divider,
  List,
  ListItem,
} from "@hyper-elements/react";
import launchkitTheme from "../theme/launchkitTheme.js";

export default function WelcomeEmail() {
  return (
    <Email
      width={600}
      theme={launchkitTheme}
      title="Welcome to LaunchKit"
      previewText="Your creative journey starts here."
      style={{
        backgroundColor: "#F1F5F9",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
        fontSize: 15,
        gap: 0,
      }}
    >
      {/* Header */}
      <Section
        style={{
          backgroundColor: "#111827",
          padding: [30, 36],
          alignItems: "center",
        }}
      >
        <Heading
          level={2}
          style={{
            color: "#FFFFFF",
            fontSize: 26,
          }}
        >
          LaunchKit.
        </Heading>

        <Text
          style={{
            color: "#C4B5FD",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          YOUR CREATIVE WORKSPACE
        </Text>
      </Section>

      {/* Main content */}
      <Section
        style={{
          backgroundColor: "#FFFFFF",
          padding: [40, 36],
          gap: 22,
        }}
      >
        <Text style={{ color: "#8B5CF6", fontWeight: 700 }}>
          WELCOME ABOARD!
        </Text>

        <Heading
          level={1}
          style={{
            fontSize: 34,
            lineHeight: 1.2,
          }}
        >
          Welcome to LaunchKit!
        </Heading>

        <Text style={{ color: "#64748B", lineHeight: 1.7 }}>
          We're excited to have you here. LaunchKit helps you
          create beautiful websites, emails, documents and
          graphics using one consistent design system.
        </Text>

        <Divider
          style={{
            borderTop: "1px solid #E2E8F0",
          }}
        />

        <Heading level={2} style={{ fontSize: 21 }}>
          Here's what you can create:
        </Heading>

        <List type="bullet">
          <ListItem>Beautiful responsive websites</ListItem>
          <ListItem>Professional email campaigns</ListItem>
          <ListItem>Business documents and invoices</ListItem>
          <ListItem>Social media graphics</ListItem>
        </List>

        <Button
          href="https://github.com/"
          style={{
            backgroundColor: "#6546E8",
            color: "#FFFFFF",
            padding: [16, 24],
            borderRadius: 8,
            fontWeight: 700,
          }}
        >
          Explore LaunchKit
        </Button>

        <Text style={{ color: "#64748B", fontSize: 13 }}>
          We're looking forward to seeing what you create.
        </Text>

        <Text style={{ fontWeight: 700 }}>
          The LaunchKit Team
        </Text>
      </Section>

      {/* Footer */}
      <Section
        style={{
          backgroundColor: "#111827",
          padding: [26, 36],
          gap: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: 700 }}>
          LaunchKit.
        </Text>

        <Text
          style={{
            color: "#9CA3AF",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          You received this email because you joined LaunchKit.
        </Text>

        <Text
          style={{
            color: "#9CA3AF",
            fontSize: 11,
            textAlign: "center",
          }}
        >
          © 2026 LaunchKit. All rights reserved.
        </Text>
      </Section>
    </Email>
  );
}
