import React from "react";
import {
  Document,
  Section,
  Column,
  Row,
  Heading,
  Text,
  Divider,
  Table,
  TableRow,
  TableCell,
} from "@hyper-elements/react";
import launchkitTheme from "../theme/launchkitTheme.js";

const items = [
  { name: "Website design system", quantity: "1", price: "$450.00" },
  { name: "Email template suite", quantity: "3", price: "$150.00" },
  { name: "Launch campaign assets", quantity: "1", price: "$100.00" },
];

export default function Invoice() {
  return (
    <Document size="A4" theme={launchkitTheme} orientation="portrait" title="LaunchKit Invoice" margin={42} style={{ backgroundColor: "#FFFFFF", color: "#1D1D1F", fontFamily: "SF Pro Text, system-ui, sans-serif", fontSize: 12, gap: 22 }}>
      <Document.Page>
        <Row style={{ justifyContent: "space-between", alignItems: "start" }}>
          <Column style={{ gap: 5 }}><Heading level={1} style={{ fontSize: 30 }}>LaunchKit.</Heading><Text style={{ color: "#64748B", fontSize: 10, letterSpacing: 1.1 }}>MULTI-FORMAT TEMPLATE STUDIO</Text></Column>
          <Column style={{ alignItems: "end", gap: 5 }}><Heading level={1} style={{ color: "#0066CC", fontSize: 28 }}>INVOICE</Heading><Text style={{ color: "#7A7A7A" }}>#LK-2026-001</Text></Column>
        </Row>
        <Divider style={{ borderTop: "2px solid #0066CC" }} />
        <Row style={{ gap: 34 }}>
          <Column style={{ flex: 1, gap: 7 }}><Text style={{ color: "#0066CC", fontSize: 10, fontWeight: 600, letterSpacing: 1.1 }}>FROM</Text><Heading level={3}>LaunchKit Studio</Heading><Text>123 Creative Street</Text><Text>New York, NY 10001</Text><Text style={{ color: "#7A7A7A" }}>hello@launchkit.example</Text></Column>
          <Column style={{ flex: 1, gap: 7 }}><Text style={{ color: "#0066CC", fontSize: 10, fontWeight: 600, letterSpacing: 1.1 }}>BILL TO</Text><Heading level={3}>Alex Morgan</Heading><Text>Acme Technologies</Text><Text>San Francisco, CA</Text><Text style={{ color: "#7A7A7A" }}>alex@example.com</Text></Column>
        </Row>
        <Section style={{ backgroundColor: "#F5F5F7", padding: 16 }}>
          <Row style={{ justifyContent: "space-between" }}><Column style={{ gap: 5 }}><Text style={{ color: "#7A7A7A" }}>Invoice date</Text><Text style={{ fontWeight: 600 }}>November 17, 2026</Text></Column><Column style={{ gap: 5 }}><Text style={{ color: "#7A7A7A" }}>Due date</Text><Text style={{ fontWeight: 600 }}>December 1, 2026</Text></Column><Column style={{ gap: 5 }}><Text style={{ color: "#7A7A7A" }}>Status</Text><Text style={{ color: "#0066CC", fontWeight: 600 }}>UNPAID</Text></Column></Row>
        </Section>
        <Column style={{ gap: 12 }}>
          <Heading level={2} style={{ fontSize: 20 }}>Invoice details</Heading>
          <Table style={{ width: "100%", cellPadding: 11, rowBorder: { width: 1, style: "solid", color: "#E2E8F0" } }}>
            <TableRow header><TableCell>DESCRIPTION</TableCell><TableCell>QTY</TableCell><TableCell>AMOUNT</TableCell></TableRow>
            {items.map((item) => <TableRow key={item.name}><TableCell>{item.name}</TableCell><TableCell>{item.quantity}</TableCell><TableCell>{item.price}</TableCell></TableRow>)}
          </Table>
        </Column>
        <Column style={{ alignItems: "end", gap: 9 }}>
          <Row style={{ justifyContent: "space-between", width: 230 }}><Text style={{ color: "#7A7A7A" }}>Subtotal</Text><Text>$700.00</Text></Row>
          <Row style={{ justifyContent: "space-between", width: 230 }}><Text style={{ color: "#7A7A7A" }}>Tax (10%)</Text><Text>$70.00</Text></Row>
          <Divider style={{ borderTop: "1px solid #E0E0E0", width: 230 }} />
          <Row style={{ justifyContent: "space-between", width: 230 }}><Heading level={3} style={{ fontSize: 17 }}>Total</Heading><Heading level={3} style={{ color: "#0066CC", fontSize: 20 }}>$770.00</Heading></Row>
        </Column>
        <Section style={{ backgroundColor: "#272729", padding: 20, gap: 8 }}><Heading level={3} style={{ color: "#FFFFFF" }}>Thank you for your business!</Heading><Text style={{ color: "#CCCCCC", fontSize: 11 }}>Questions? Contact hello@launchkit.example</Text><Text style={{ color: "#CCCCCC", fontSize: 10 }}>Generated with LaunchKit and Hyper Elements.</Text></Section>
      </Document.Page>
    </Document>
  );
}