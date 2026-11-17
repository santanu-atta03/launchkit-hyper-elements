import React from "react";
import {
  Email,
  Section,
  Row,
  Heading,
  Text,
  Button,
  Divider,
  List,
  ListItem,
  LineBreak,
} from "@hyper-elements/react";
import launchkitTheme from "../theme/launchkitTheme.js";

export default function WelcomeEmail() {
  return (
    <Email width={600} theme={launchkitTheme} title="Welcome to LaunchKit" previewText="One design system. Four possibilities." style={{ backgroundColor: "#F5F5F7", color: "#1D1D1F", fontFamily: "SF Pro Text, system-ui, sans-serif", fontSize: 17, gap: 0 }}>
      <Section style={{ backgroundColor: "#111827", padding: [30, 38], gap: 10 }}>
        <Row style={{ alignItems: "center", gap: 20 }}><Heading level={2} style={{ color: "#FFFFFF", fontSize: 25 }}>LaunchKit.</Heading><Text style={{ color: "#2997FF", fontSize: 10, fontWeight: 600, letterSpacing: 1.2 }}>WELCOME ABOARD</Text></Row>
      </Section>
      <Section style={{ backgroundColor: "#FFFFFF", padding: [42, 38], gap: 20 }}>
        <Text style={{ color: "#0066CC", fontSize: 11, fontWeight: 600, letterSpacing: 1.5 }}>YOUR CREATIVE WORKSPACE</Text>
        <Heading level={1} style={{ fontSize: 34, lineHeight: 1.15 }}>Make every format<LineBreak />feel on-brand.</Heading>
        <Text style={{ color: "#1D1D1F", lineHeight: 1.47 }}>Welcome to LaunchKit — an open-source template studio that helps you create beautiful product touchpoints from one shared React design system.</Text>
        <Button href="https://github.com/santanu-atta03/launchkit-hyper-elements" style={{ backgroundColor: "#0066CC", color: "#FFFFFF", padding: [11, 22], borderRadius: 9999, fontSize: 17 }}>Explore LaunchKit →</Button>
        <Divider style={{ borderTop: "1px solid #E2E8F0" }} />
        <Heading level={2} style={{ fontSize: 20 }}>Your new toolkit includes:</Heading>
        <List type="bullet"><ListItem>Conversion-ready websites</ListItem><ListItem>Responsive welcome emails</ListItem><ListItem>Print-ready PDF documents</ListItem><ListItem>High-impact social graphics</ListItem></List>
        <Text style={{ color: "#1D1D1F", fontSize: 17, lineHeight: 1.47 }}>Everything shares the same palette, spacing and visual rhythm — so your brand stays unmistakably yours.</Text>
        <Text style={{ fontWeight: 700 }}>The LaunchKit Team</Text>
      </Section>
      <Section style={{ backgroundColor: "#111827", padding: [25, 38], gap: 10, alignItems: "center" }}>
        <Text style={{ color: "#FFFFFF", fontWeight: 700 }}>LaunchKit.</Text>
        <Text style={{ color: "#CCCCCC", fontSize: 11, textAlign: "center" }}>You received this email because you joined LaunchKit.<LineBreak />© 2026 LaunchKit · Built with Hyper Elements</Text>
      </Section>
    </Email>
  );
}
