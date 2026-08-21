const PILLARS = [
  { icon: "●", label: "All systems monitored 24/7" },
  { icon: "⬡", label: "Encrypted everywhere — TLS in transit, encryption at rest." },
  { icon: "◈", label: "Role-based access — personal data reachable only on a need-to-know basis." },
  { icon: "◻", label: "Reputable infrastructure — hosted with cloud providers that run their own hardened stack." },
  { icon: "○", label: "No data sale, no ad tracking — we don't sell personal data or use it for third-party ads." },
];

const SECTIONS = [
  {
    n: "01",
    title: "Infrastructure & hosting",
    content: "Zekvian runs on established cloud infrastructure providers rather than self-managed hardware. Compute, storage and networking are logically isolated between environments, and production access is limited to systems and personnel that need it to operate the platform.\n\nOur infrastructure providers maintain their own physical security, network security and redundancy controls, which we build on top of rather than duplicate.",
  },
  {
    n: "02",
    title: "Encryption",
    items: [
      "Data in transit between your device, our dashboard, our APIs and our service providers is encrypted using HTTPS/TLS.",
      "Data at rest — account details, order data, message metadata — is stored using encrypted storage.",
      "We do not store full card numbers. Payment reconciliation relies on references from our payment partners rather than raw card data.",
    ],
  },
  {
    n: "03",
    title: "Access control",
    subsections: [
      { heading: "Role-based permissions", body: "Internal access to Personal Data is restricted to authorised personnel on a need-to-know basis, scoped to what their role requires." },
      { heading: "Secure authentication", body: "Account access for both customers and internal systems relies on secure authentication, with periodic review of who holds access." },
      { heading: "Least-privilege by default", body: "New access is granted for a specific purpose and reviewed rather than left open-ended; unused access is revoked." },
    ],
  },
  {
    n: "04",
    title: "Application security",
    items: [
      "Changes to the platform go through code review before release.",
      "We track and update dependencies to address known vulnerabilities in the libraries we rely on.",
      "Our security practices are reviewed periodically as the Services evolve, rather than treated as a one-time setup.",
    ],
  },
  {
    n: "05",
    title: "WhatsApp & Meta data flow",
    content: "Messaging features run on the WhatsApp Business API. Message content and related metadata are transmitted through and processed by Meta Platforms, Inc. in accordance with Meta's and WhatsApp's own security and privacy practices — this sits alongside, not in place of, the controls described on this page for data that lives in Zekvian's own systems.",
  },
  {
    n: "06",
    title: "Monitoring & incident response",
    content: "We monitor the platform for unusual activity, errors and abuse on an ongoing basis. If we identify a personal data breach, we act in accordance with applicable law, including any notification obligations that apply, and work to contain and resolve the issue as quickly as possible.",
  },
  {
    n: "07",
    title: "Business continuity",
    content: "Data is backed up on a regular schedule and stored separately from production systems. We rely on our infrastructure providers' redundancy across availability zones to reduce the impact of any single point of failure.",
  },
  {
    n: "08",
    title: "Compliance",
    content: "Our data handling practices are built around the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000. Full detail on what we collect, why, and for how long is set out in our Privacy Policy.\n\nLooking for a specific compliance document, security questionnaire, or a signed DPA for your organisation? Our team can provide these on request — see the contact details below.",
  },
  {
    n: "09",
    title: "Responsible disclosure",
    intro: "If you believe you've found a security vulnerability in Zekvian's platform, please report it to us before disclosing it publicly. We ask that you:",
    items: [
      "Give us a reasonable amount of time to investigate and address the issue before any public disclosure;",
      "Avoid accessing, modifying or deleting data that isn't your own while testing; and",
      "Share enough detail (steps to reproduce, affected endpoint, impact) for us to verify and act on the report.",
    ],
    outro: "We investigate every genuine report we receive and will acknowledge it in accordance with the timelines described in our Privacy Policy's grievance process.",
  },
];

export default function SecurityPage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ borderBottom: "1px solid var(--line)", padding: "64px 0 48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", letterSpacing: "0.1em", marginBottom: "12px" }}>SECURITY</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "20px" }}>
            Security at Zekvian
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.75, maxWidth: "560px" }}>
            We trace requests across other people's systems for a living, so protecting the data that moves through ours isn't a checkbox — it's built into how the platform runs, end to end.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <span style={{ color: "var(--pulse)", fontSize: "0.7rem", marginTop: "4px", flexShrink: 0 }}>{p.icon}</span>
                <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.7, lineHeight: 1.6 }}>{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 80px" }}>
        {SECTIONS.map((s) => (
          <div key={s.n} style={{ padding: "44px 0", borderBottom: "1px solid var(--line)" }}>
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", opacity: 0.5, flexShrink: 0, paddingTop: "5px", minWidth: "28px" }}>{s.n}</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--mist)", fontWeight: 600, marginBottom: "16px" }}>{s.title}</h2>

                {"content" in s && s.content && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {s.content.split("\n\n").map((para, i) => (
                      <p key={i} style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.75 }}>{para}</p>
                    ))}
                  </div>
                )}

                {"intro" in s && s.intro && (
                  <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.75, marginBottom: "14px" }}>{s.intro}</p>
                )}

                {"items" in s && s.items && (
                  <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {s.items.map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: "12px", fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.75 }}>
                        <span style={{ color: "var(--pulse)", flexShrink: 0 }}>—</span>{item}
                      </li>
                    ))}
                  </ul>
                )}

                {"outro" in s && s.outro && (
                  <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.75, marginTop: "14px" }}>{s.outro}</p>
                )}

                {"subsections" in s && s.subsections && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {s.subsections.map((sub, i) => (
                      <div key={i}>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", letterSpacing: "0.04em", marginBottom: "6px" }}>{sub.heading}</p>
                        <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.75 }}>{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Section 10 — Contact */}
        <div style={{ padding: "44px 0" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", opacity: 0.5, flexShrink: 0, paddingTop: "5px", minWidth: "28px" }}>10</span>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--mist)", fontWeight: 600, marginBottom: "20px" }}>Contact our security team</h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.75, marginBottom: "20px" }}>
                For vulnerability reports, security questionnaires, or any other security-related question:
              </p>
              <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--line)" }}>
                {[
                  ["Email", "official.zekvian@gmail.com"],
                  ["Grievance Officer", "Abhishek RM, Co-Founder"],
                  ["Phone", "+91 7558983127"],
                ].map(([label, value], i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", padding: "14px 18px", borderBottom: i < 2 ? "1px solid var(--line)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", minWidth: "140px", flexShrink: 0 }}>{label}</span>
                    <span style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.7 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
