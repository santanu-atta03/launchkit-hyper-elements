import React from "react";
import {
  Page,
  Section,
  Column,
  Row,
  Grid,
  Heading,
  Text,
  Button,
  Divider,
} from "@hyper-elements/react";
import launchkitTheme from "../theme/launchkitTheme.js";
const features = [
  {
    number: "01",
    title: "Email Templates",
    description: "Beautiful responsive emails for your customers.",
  },
  {
    number: "02",
    title: "Web Pages",
    description: "Modern landing pages for growing businesses.",
  },
  {
    number: "03",
    title: "PDF Documents",
    description: "Professional invoices and business documents.",
  },
  {
    number: "04",
    title: "Social Graphics",
    description: "Eye-catching graphics for your social channels.",
  },
];

export default function LaunchKitPage() {
  return (
    <Page
      width={1200}
      theme={launchkitTheme}
      title="LaunchKit - Build Beautiful Templates"
      description="A collection of beautiful business templates."
      style={{
        backgroundColor: "#F8FAFC",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
        fontSize: 16,
        gap: 0,
      }}
    >
      {/* Navbar */}
      <Section
        style={{
          backgroundColor: "#FFFFFF",
          padding: [24, 48],
        }}
      >
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Heading level={2} style={{ fontSize: 25 }}>
            LaunchKit.
          </Heading>

          <Text style={{ color: "#64748B", fontSize: 14 }}>
            Templates | Features | Pricing
          </Text>

          <Button
            href="#templates"
            style={{
              backgroundColor: "#6546E8",
              color: "#FFFFFF",
              padding: [12, 20],
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            Explore templates
          </Button>
        </Row>
      </Section>

      {/* Hero */}
      <Section
        style={{
          backgroundColor: "#111827",
          padding: [90, 48],
          gap: 24,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#A78BFA",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          THE ALL-IN-ONE TEMPLATE STUDIO
        </Text>

        <Heading
          level={1}
          style={{
            color: "#FFFFFF",
            fontSize: 58,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          One design. Four possibilities.
        </Heading>

        <Text
          style={{
            color: "#CBD5E1",
            fontSize: 19,
            textAlign: "center",
          }}
        >
          Create beautiful websites, emails, PDFs and social graphics
          using one powerful component system.
        </Text>

        <Button
          href="#templates"
          style={{
            backgroundColor: "#8B5CF6",
            color: "#FFFFFF",
            padding: [16, 28],
            borderRadius: 10,
            fontWeight: 700,
          }}
        >
          Explore the collection →
        </Button>
      </Section>

      {/* Features */}
      <Section
        style={{
          padding: [64, 48],
          gap: 32,
        }}
      >
        <Column style={{ gap: 12 }}>
          <Heading level={2} style={{ fontSize: 36 }}>
            Everything works together.
          </Heading>

          <Text style={{ color: "#64748B" }}>
            Four formats. One consistent design language.
          </Text>
        </Column>

        <Grid columns={2} style={{ gap: 20 }}>
          {features.map((feature) => (
            <Column
              key={feature.number}
              style={{
                backgroundColor: "#FFFFFF",
                padding: 28,
                border: "1px solid #E2E8F0",
                borderRadius: 14,
                gap: 12,
              }}
            >
              <Text style={{ color: "#8B5CF6", fontWeight: 700 }}>
                {feature.number}
              </Text>

              <Heading level={3} style={{ fontSize: 23 }}>
                {feature.title}
              </Heading>

              <Text style={{ color: "#64748B" }}>
                {feature.description}
              </Text>
            </Column>
          ))}
        </Grid>
      </Section>

      {/* CTA */}
      <Section
        style={{
          backgroundColor: "#EDE9FE",
          padding: [60, 48],
          gap: 18,
          alignItems: "center",
        }}
      >
        <Heading level={2} style={{ fontSize: 34, textAlign: "center" }}>
          Ready to build something amazing?
        </Heading>

        <Text style={{ color: "#475569", textAlign: "center" }}>
          Start with LaunchKit and bring your next idea to life.
        </Text>

        <Button
          href="https://github.com/"
          style={{
            backgroundColor: "#6546E8",
            color: "#FFFFFF",
            padding: [15, 25],
            borderRadius: 8,
          }}
        >
          Get started
        </Button>
      </Section>

      {/* Footer */}
      <Section
        style={{
          backgroundColor: "#111827",
          padding: [28, 48],
          gap: 12,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: 700 }}>
          LaunchKit.
        </Text>

        <Divider
          style={{
            borderTop: "1px solid #374151",
          }}
        />

        <Text style={{ color: "#9CA3AF", fontSize: 13 }}>
          Built with Hyper Elements. © 2026 LaunchKit.
        </Text>
      </Section>
    </Page>
  );
}
