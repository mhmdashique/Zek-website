type Section = { n: string; title: string; body: React.ReactNode };

const SECTIONS: Section[] = [
  {
    n: "01",
    title: "Overview",
    body: (
      <p>
        This Privacy Policy explains how information is collected, used, and
        protected when you use the WhatsApp-based ordering service powered by
        Zekvian Technologies. The merchant operating the service is the data
        controller for your order-related personal information.
      </p>
    ),
  },
  {
    n: "02",
    title: "Information We Collect",
    body: (
      <ul className="space-y-2">
        {[
          "Personal identifiers: your name and phone number provided when you initiate a WhatsApp chat.",
          "Delivery details: your delivery address and contact number for order fulfilment.",
          "Order information: products ordered, quantities, preferences, substitutions, and order history.",
          "Communication data: messages exchanged with the WhatsApp bot for order placement and support.",
          "Preference data: delivery or pickup preferences, promotional opt-in/opt-out status.",
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
    title: "How We Use Your Information",
    body: (
      <ul className="space-y-2">
        {[
          "Process, confirm, and fulfil your grocery orders.",
          "Communicate order status, delivery updates, and transactional notifications via WhatsApp.",
          "Send promotional messages where you have opted in; honour opt-out requests promptly.",
          "Handle returns, refunds, substitutions, and customer support inquiries.",
          "Prevent fraud, abuse, and misuse of the ordering service.",
          "Improve service quality and ordering experience.",
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
    title: "Legal Basis for Processing",
    body: (
      <ul className="space-y-2">
        {[
          "Contractual necessity: to process and deliver your orders.",
          "Consent: for promotional WhatsApp messages and optional communications.",
          "Legitimate interests: fraud prevention, service improvement, and operational analytics.",
          "Legal obligation: compliance with applicable Indian laws and regulations.",
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
    title: "How We Share Information",
    body: (
      <ul className="space-y-2">
        {[
          "With the merchant fulfilling your order (store staff, delivery partners).",
          "With Zekvian Technologies as the platform provider for order management and messaging infrastructure.",
          "With Meta Platforms, Inc. via the WhatsApp Business API for message delivery.",
          "With delivery partners assigned to fulfil your order.",
          "When required by law, court order, or government authority.",
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
    n: "06",
    title: "Data Retention",
    body: (
      <p>
        We retain your personal information for as long as necessary to fulfil
        orders, resolve disputes, comply with legal obligations, and maintain
        order records. Order history may be retained for accounting and customer
        service purposes in accordance with applicable law.
      </p>
    ),
  },
  {
    n: "07",
    title: "Data Security",
    body: (
      <p>
        We implement appropriate technical and organisational measures to protect
        your personal information, including secure transmission through the
        WhatsApp Business API and access controls on order management systems.
        No method of transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    n: "08",
    title: "Your Rights",
    body: (
      <ul className="space-y-2">
        {[
          "Access: request a copy of the personal information we hold about you.",
          "Correction: request correction of inaccurate or incomplete information.",
          "Deletion: request deletion of your personal data, subject to legal retention requirements.",
          'Opt-out: unsubscribe from promotional messages by replying "STOP" in WhatsApp.',
          "Grievance: lodge a complaint with the merchant or Zekvian support team.",
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
    n: "09",
    title: "Third-Party Services",
    body: (
      <p>
        Your use of WhatsApp is subject to Meta Platforms' own terms of service
        and privacy policy. We encourage you to review WhatsApp's privacy
        practices. Zekvian acts as a technology processor; the merchant remains
        responsible for product sales and customer-facing fulfilment.
      </p>
    ),
  },
  {
    n: "10",
    title: "Contact Us",
    body: (
      <p>
        For privacy-related questions or to exercise your rights, contact the
        merchant support team or email{" "}
        <a
          href="mailto:official.zekvian@gmail.com"
          style={{ color: "var(--pulse)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          official.zekvian@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid var(--line)", padding: "64px 0 48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", letterSpacing: "0.1em", marginBottom: "12px" }}>LEGAL</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "12px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--pulse)", marginBottom: "14px" }}>
            Your Privacy is Our Priority
          </p>
          <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.7, maxWidth: "620px" }}>
            How we collect, use, and protect your personal information when you
            order groceries via WhatsApp.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "18px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--mist)", opacity: 0.45 }}>
              Last updated: August 2026
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", border: "1px solid rgba(65,105,225,0.25)", borderRadius: "4px", padding: "2px 8px" }}>
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
