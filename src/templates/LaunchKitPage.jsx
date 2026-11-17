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

const outputs = [
  { number: "01", label: "Website", description: "Conversion-ready pages that make your launch feel inevitable.", color: "#0066CC" },
  { number: "02", label: "Email", description: "Thoughtful lifecycle moments that sound like your brand.", color: "#0066CC" },
  { number: "03", label: "PDF", description: "Clear, professional documents your customers trust.", color: "#0066CC" },
  { number: "04", label: "Social", description: "Scroll-stopping visuals built to travel further.", color: "#0066CC" },
];

export default function LaunchKitPage() {
  return (
    <Page
      width={1200}
      theme={launchkitTheme}
      title="LaunchKit — One design. Four possibilities."
      description="An open-source multi-format template studio built with React and Hyper Elements."
      style={{ backgroundColor: "#FFFFFF", color: "#1D1D1F", fontFamily: "SF Pro Text, system-ui, sans-serif", fontSize: 17, gap: 0 }}
    >
      <Section style={{ backgroundColor: "#111827", padding: [22, 52] }}>
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Heading level={2} style={{ color: "#FFFFFF", fontSize: 21 }}>LaunchKit.</Heading>
          <Text style={{ color: "#CCCCCC", fontSize: 12 }}>Templates&nbsp;&nbsp;&nbsp;Architecture&nbsp;&nbsp;&nbsp;Open source</Text>
          <Button href="#templates" style={{ backgroundColor: "#1D1D1F", color: "#FFFFFF", padding: [8, 15], borderRadius: 8, fontSize: 14 }}>Explore templates</Button>
        </Row>
      </Section>

      <Section style={{ backgroundColor: "#272729", padding: [80, 52, 94], gap: 22, alignItems: "center" }}>
        <Text style={{ color: "#2997FF", fontWeight: 600, fontSize: 12, letterSpacing: 1.8 }}>ONE DESIGN SYSTEM · FOUR CREATIVE OUTPUTS</Text>
        <Column style={{ gap: 2, alignItems: "center" }}><Heading level={1} style={{ color: "#FFFFFF", fontSize: 56, lineHeight: 1.07, textAlign: "center" }}>One design.</Heading><Heading level={1} style={{ color: "#FFFFFF", fontSize: 56, lineHeight: 1.07, textAlign: "center" }}>Four possibilities.</Heading></Column>
        <Text style={{ maxWidth: 620, color: "#CCCCCC", fontSize: 17, lineHeight: 1.47, textAlign: "center" }}>LaunchKit turns one shared React design system into beautiful websites, emails, PDFs and social graphics — ready to ship.</Text>
        <Button href="#templates" style={{ backgroundColor: "#0066CC", color: "#FFFFFF", padding: [11, 22], borderRadius: 9999, fontSize: 17 }}>Explore the collection →</Button>
      </Section>

      <Section style={{ padding: [78, 52], gap: 30 }}>
        <Column style={{ gap: 10 }}>
          <Text style={{ color: "#0066CC", fontSize: 12, fontWeight: 600, letterSpacing: 1.6 }}>THE FORMAT ADVANTAGE</Text>
          <Heading level={2} style={{ fontSize: 36 }}>Design once. Show up everywhere.</Heading>
          <Text style={{ color: "#64748B" }}>A shared visual language for every way your product meets the world.</Text>
        </Column>
        <Grid columns={2} style={{ gap: 18 }}>
          {outputs.map((output) => (
            <Column key={output.number} style={{ backgroundColor: "#FFFFFF", padding: 24, border: "1px solid #E0E0E0", borderRadius: 18, gap: 10 }}>
              <Row style={{ justifyContent: "space-between" }}><Text style={{ color: output.color, fontWeight: 700 }}>{output.number}</Text><Text style={{ color: "#94A3B8", fontSize: 12 }}>OUTPUT</Text></Row>
              <Heading level={3} style={{ fontSize: 22 }}>{output.label}</Heading>
              <Text style={{ color: "#64748B", lineHeight: 1.6 }}>{output.description}</Text>
            </Column>
          ))}
        </Grid>
      </Section>

      <Section id="templates" style={{ backgroundColor: "#FFFFFF", padding: [76, 52], gap: 28 }}>
        <Row style={{ justifyContent: "space-between", alignItems: "end" }}>
          <Column style={{ gap: 9 }}><Text style={{ color: "#0066CC", fontSize: 12, fontWeight: 600, letterSpacing: 1.6 }}>THE COLLECTION</Text><Heading level={2} style={{ fontSize: 34 }}>Templates with momentum.</Heading></Column>
          <Text style={{ color: "#7A7A7A", fontSize: 14 }}>Real examples. Ready to remix.</Text>
        </Row>
        <Grid columns={4} style={{ gap: 14 }}>
          {outputs.map((output) => <Column key={output.number} style={{ backgroundColor: "#F5F5F7", padding: 24, border: "1px solid #E0E0E0", borderRadius: 18, gap: 15 }}><Text style={{ color: output.color, fontSize: 21, fontWeight: 600 }}>{output.number}</Text><Heading level={3}>{output.label}</Heading><Text style={{ color: "#7A7A7A", fontSize: 14 }}>Built with Hyper Elements primitives.</Text></Column>)}
        </Grid>
      </Section>

      <Section style={{ backgroundColor: "#2A2A2C", padding: [66, 52], gap: 18, alignItems: "center" }}>
        <Text style={{ color: "#2997FF", fontWeight: 600, fontSize: 12, letterSpacing: 1.6 }}>OPEN SOURCE BY DEFAULT</Text>
        <Heading level={2} style={{ color: "#FFFFFF", fontSize: 34, textAlign: "center" }}>Make it yours. Ship it everywhere.</Heading>
        <Text style={{ color: "#CCCCCC", textAlign: "center" }}>Fork the system, add your voice and keep every output on-brand.</Text>
        <Button href="https://github.com/santanu-atta03/launchkit-hyper-elements" style={{ backgroundColor: "#0066CC", color: "#FFFFFF", padding: [11, 22], borderRadius: 9999, fontSize: 17 }}>View the source →</Button>
      </Section>

      <Section style={{ backgroundColor: "#111827", padding: [28, 52], gap: 12 }}>
        <Row style={{ justifyContent: "space-between" }}><Text style={{ color: "#FFFFFF", fontWeight: 600 }}>LaunchKit.</Text><Text style={{ color: "#CCCCCC", fontSize: 12 }}>React · Hyper Elements · Vite</Text></Row>
        <Divider style={{ borderTop: "1px solid #444444" }} />
        <Text style={{ color: "#CCCCCC", fontSize: 11 }}>Built for the Hyper Elements Template Challenge · MIT License</Text>
      </Section>
    </Page>
  );
}
