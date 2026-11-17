
import React from "react";

import {
  Document,
  Document as Doc,
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
  { name: "Website Design", quantity: "1", price: "$450.00" },
  { name: "Email Templates", quantity: "3", price: "$150.00" },
  { name: "Brand Assets", quantity: "1", price: "$100.00" },
];

export default function Invoice() {
  return (
    <Document
      size="A4"
      theme={launchkitTheme}
      orientation="portrait"
      title="LaunchKit Invoice"
      margin={40}
      style={{
        backgroundColor: "#FFFFFF",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
        fontSize: 12,
        gap: 20,
      }}
    >
      <Doc.Page>
        {/* Header */}
        <Row
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Column style={{ gap: 5 }}>
            <Heading level={1} style={{ fontSize: 30 }}>
              LaunchKit.
            </Heading>
            <Text style={{ color: "#64748B", fontSize: 11 }}>
              BUSINESS TEMPLATE STUDIO
            </Text>
          </Column>

          <Column style={{ alignItems: "end", gap: 5 }}>
            <Heading
              level={1}
              style={{ color: "#6546E8", fontSize: 28 }}
            >
              INVOICE
            </Heading>
            <Text style={{ color: "#64748B" }}>
              #LK-2026-001
            </Text>
          </Column>
        </Row>

        <Divider
          style={{ borderTop: "2px solid #6546E8" }}
        />

        {/* Customer details */}
        <Row style={{ gap: 30 }}>
          <Column style={{ flex: 1, gap: 8 }}>
            <Text style={{ color: "#8B5CF6", fontWeight: 700 }}>
              FROM
            </Text>
            <Heading level={3}>LaunchKit Studio</Heading>
            <Text>123 Creative Street</Text>
            <Text>New York, NY 10001</Text>
            <Text>hello@launchkit.example</Text>
          </Column>

          <Column style={{ flex: 1, gap: 8 }}>
            <Text style={{ color: "#8B5CF6", fontWeight: 700 }}>
              BILL TO
            </Text>
            <Heading level={3}>Alex Morgan</Heading>
            <Text>Acme Technologies</Text>
            <Text>San Francisco, CA</Text>
            <Text>alex@example.com</Text>
          </Column>
        </Row>

        {/* Invoice information */}
        <Section
          style={{
            backgroundColor: "#F5F3FF",
            padding: 16,
          }}
        >
          <Row style={{ justifyContent: "space-between" }}>
            <Column style={{ gap: 5 }}>
              <Text style={{ color: "#64748B" }}>Invoice date</Text>
              <Text style={{ fontWeight: 700 }}>November 17, 2026</Text>
            </Column>

            <Column style={{ gap: 5 }}>
              <Text style={{ color: "#64748B" }}>Due date</Text>
              <Text style={{ fontWeight: 700 }}>December 1, 2026</Text>
            </Column>

            <Column style={{ gap: 5 }}>
              <Text style={{ color: "#64748B" }}>Status</Text>
              <Text style={{ color: "#6546E8", fontWeight: 700 }}>
                UNPAID
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Items */}
        <Column style={{ gap: 12 }}>
          <Heading level={2} style={{ fontSize: 20 }}>
            Invoice details
          </Heading>

          <Table
            style={{
              width: "100%",
              cellPadding: 12,
              rowBorder: {
                width: 1,
                style: "solid",
                color: "#E2E8F0",
              },
            }}
          >
            <TableRow header>
              <TableCell>DESCRIPTION</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>AMOUNT</TableCell>
            </TableRow>

            {items.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        {/* Totals */}
        <Column style={{ alignItems: "end", gap: 10 }}>
          <Row style={{ justifyContent: "space-between", width: 220 }}>
            <Text style={{ color: "#64748B" }}>Subtotal</Text>
            <Text>$700.00</Text>
          </Row>

          <Row style={{ justifyContent: "space-between", width: 220 }}>
            <Text style={{ color: "#64748B" }}>Tax (10%)</Text>
            <Text>$70.00</Text>
          </Row>

          <Divider style={{ borderTop: "1px solid #E2E8F0", width: 220 }} />

          <Row style={{ justifyContent: "space-between", width: 220 }}>
            <Heading level={3} style={{ fontSize: 17 }}>
              Total
            </Heading>
            <Heading
              level={3}
              style={{ color: "#6546E8", fontSize: 20 }}
            >
              $770.00
            </Heading>
          </Row>
        </Column>

        {/* Footer */}
        <Section
          style={{
            backgroundColor: "#111827",
            padding: 20,
            gap: 8,
          }}
        >
          <Heading level={3} style={{ color: "#FFFFFF" }}>
            Thank you for your business!
          </Heading>
          <Text style={{ color: "#CBD5E1", fontSize: 11 }}>
            Questions? Contact hello@launchkit.example
          </Text>
          <Text style={{ color: "#9CA3AF", fontSize: 10 }}>
            Generated with LaunchKit and Hyper Elements.
          </Text>
        </Section>
      </Doc.Page>
    </Document>
  );
}
