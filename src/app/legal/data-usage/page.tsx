type Section = { n: string; title: string; body: React.ReactNode };

const SECTIONS: Section[] = [
  {
    n: "01",
    title: "Data Usage Policy",
    body: (
      <p>
        This Data Usage Policy describes how customer data is collected,
        processed, stored, and used within the Zekvian-powered WhatsApp ordering
        platform. It supplements our Privacy Policy and applies to all customers
        placing orders via WhatsApp.
      </p>
    ),
  },
  {
    n: "02",
    title: "Types of Data Processed",
    body: (
      <ul className="space-y-2">
        {[
          "Identity data: name, phone number (WhatsApp ID).",
          "Location data: delivery address, pincode, serviceable area validation.",
          "Transaction data: order items, quantities, prices, payment method (COD/COP), order status.",
          "Interaction data: chat messages, bot selections, substitution preferences.",
          "Technical data: message timestamps, session metadata, delivery attempt logs.",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "var(--pulse)", flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "03",
    title: "Purposes of Data Processing",
    body: (
      <ul className="space-y-2">
        {[
          "Order placement and confirmation through the WhatsApp bot.",
          "Inventory checking, substitution handling, and price calculation.",
          "Delivery scheduling, routing, and status notifications.",
          "Cash on Delivery / Cash on Pickup payment reconciliation.",
          "Customer support, grievance handling, and refund processing.",
          "Fraud detection and prevention of abusive order behaviour.",
          "Service analytics to improve bot accuracy and ordering flow.",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "var(--pulse)", flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "04",
    title: "WhatsApp & Messaging Data",
    body: (
      <ul className="space-y-2">
        {[
          "All order-related messages are transmitted via the WhatsApp Business API (Meta Platforms, Inc.).",
          "By initiating a chat, you consent to transactional messages for active and recent orders.",
          'Promotional messages require explicit opt-in and can be stopped by replying "STOP".',
          "Message content and metadata may be stored in Zekvian's order management platform for fulfilment and audit purposes.",
          "WhatsApp platform outages may temporarily affect message delivery; Zekvian is not liable for Meta platform downtime.",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "var(--pulse)", flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "05",
    title: "Data Storage & Location",
    body: (
      <p>
        Customer and order data is stored on secure servers used by Zekvian
        Technologies and the merchant's order management system. Data is
        processed in accordance with applicable Indian data protection
        requirements. Access is restricted to authorised personnel involved in
        order fulfilment and platform operations.
      </p>
    ),
  },
  {
    n: "06",
    title: "Data Sharing & Processors",
    body: (
      <ul className="space-y-2">
        {[
          "Merchant: receives order and customer data necessary for fulfilment.",
          "Zekvian Technologies: processes data as the platform technology provider.",
          "Meta (WhatsApp): processes messaging data as the communication channel provider.",
          "Delivery partners: receive name, address, phone number, and order details for delivery.",
          "No sale of personal data: we do not sell your personal information to third parties.",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "var(--pulse)", flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "07",
    title: "Retention & Deletion",
    body: (
      <ul className="space-y-2">
        {[
          "Active order data is retained for the duration of order processing and fulfilment.",
          "Order history is retained for accounting, dispute resolution, and customer service.",
          "Chat logs may be retained for a limited period for quality assurance and support.",
          "You may request deletion of your data subject to legal and operational retention requirements.",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "var(--pulse)", flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "08",
    title: "Automated Processing",
    body: (
      <p>
        The WhatsApp bot uses automated processing to interpret your messages,
        suggest products, calculate prices, and route orders. You may always
        contact merchant support to review or contest automated decisions
        affecting your order.
      </p>
    ),
  },
  {
    n: "09",
    title: "Your Data Controls",
    body: (
      <ul className="space-y-2">
        {[
          "Update delivery address and contact details by messaging the bot or contacting support.",
          'Opt out of promotional messages via "STOP" or in-chat preferences.',
          "Request access to or deletion of your data by contacting merchant support.",
          "Block or restrict service access if you no longer wish to use the ordering platform.",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "var(--pulse)", flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "10",
    title: "Policy Updates",
    body: (
      <p>
        We may update this Data Usage Policy periodically. Material changes will
        be communicated through the WhatsApp bot or merchant channels. Continued
        use of the Service after updates constitutes acceptance of the revised
        policy.
      </p>
    ),
  },
];

export default function DataUsagePage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid var(--line)", padding: "64px 0 48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", letterSpacing: "0.1em", marginBottom: "12px" }}>LEGAL</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "12px" }}>
            Customer Data Usage Policy
          </h1>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--pulse)", marginBottom: "14px" }}>
            How Your Data is Used
          </p>
          <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.7, maxWidth: "620px" }}>
            How your data is collected, processed, stored, and shared when you
            use the WhatsApp-based ordering service.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "18px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--mist)", opacity: 0.45 }}>
              Last updated: August 2026
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", border: "1px solid rgba(79,216,196,0.25)", borderRadius: "4px", padding: "2px 8px" }}>
              Official Policy
            </span>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 80px" }}>
        {SECTIONS.map((s) => (
          <div key={s.n} style={{ padding: "48px 0", borderBottom: "1px solid var(--line)" }}>
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", opacity: 0.6, flexShrink: 0, paddingTop: "6px", minWidth: "28px" }}>{s.n}</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--mist)", fontWeight: 600, marginBottom: "20px" }}>{s.title}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--mist)", opacity: 0.8 }}>
                  {s.body}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
