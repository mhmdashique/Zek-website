const CORE = [
  {
    title: "Unstructured List Parsing",
    desc: "Accepts raw text or snapshots of handwritten grocery lists. Recognizes items instantly and updates inventory quantities on the go.",
  },
  {
    title: "Autonomous Replacements",
    desc: "When an item is sold out, the AI suggests matching substitutes based on brand, pricing, and category, preserving sales that would otherwise be lost.",
  },
  {
    title: "Link & Invoice Checkout",
    desc: "Calculates dynamic total pricing, takes final modifications in-chat, and produces direct digital invoices and secure checkout links.",
  },
];

const AI_ENGINE = [
  {
    title: "Behavioral AI Matching",
    desc: "The algorithm analyzes customer order histories to instantly suggest the most appropriate, personalized alternatives when items are out of stock.",
  },
  {
    title: "Easy 1-Click Re-ordering",
    desc: "Re-order entire household monthly lists in seconds, directly inside the chat window.",
  },
  {
    title: "Integrated Delivery Tracking",
    desc: "Dynamic updates tell users exactly when employees pack, dispatch, and arrive with their groceries.",
  },
];

const DASHBOARD = [
  { title: "Flexible Revenue Analysis", desc: "Track generated revenue daily, weekly, monthly, and yearly, instantly." },
  { title: "Out-of-Stock Predictive Alerts", desc: "Immediate warnings on draining inventories before checkout drop-offs occur." },
  { title: "Franchise Toggle Engine", desc: "Multi-store owners easily toggle between branches and contrast revenue." },
  { title: "Granular Access Management", desc: "Owners access global financial profiles; store managers are strictly locked to their single location." },
  { title: "High-Velocity Item Insights", desc: "Track top-selling items to adjust shelf pricing dynamically." },
];

const SUITE = [
  {
    n: "01",
    title: "WhatsApp AI Customer Bot",
    desc: "Seamless, 24/7 client conversational order interface.",
    color: "var(--pulse)",
    bg: "rgba(79,216,196,0.06)",
    border: "rgba(79,216,196,0.2)",
  },
  {
    n: "02",
    title: "Storekeeper Packing App",
    desc: "High-efficiency visual packing lists for rapid order collection.",
    color: "var(--ember)",
    bg: "rgba(255,176,32,0.06)",
    border: "rgba(255,176,32,0.2)",
  },
  {
    n: "03",
    title: "Live Delivery Driver App",
    desc: "Dedicated logistical fulfillment, route tracking, and payment receipts.",
    color: "var(--pulse)",
    bg: "rgba(79,216,196,0.06)",
    border: "rgba(79,216,196,0.2)",
  },
  {
    n: "04",
    title: "Global Web Admin Console",
    desc: "Complete central database control panel for managing price catalogs and stocks.",
    color: "var(--ember)",
    bg: "rgba(255,176,32,0.06)",
    border: "rgba(255,176,32,0.2)",
  },
];

const KEY_FEATURES = [
  { title: "Order via WhatsApp", desc: "Customers send a raw grocery list as text, image, or voice note." },
  { title: "Smart item matching", desc: "AI parses the list and matches it to actual store inventory." },
  { title: "Auto-substitutions", desc: "If something's out of stock, the AI suggests live alternatives instead of losing the sale." },
  { title: "Real-time pricing", desc: "Dynamic pricing based on current inventory." },
  { title: "1-click checkout", desc: "In-chat payment with an auto-generated invoice." },
  { title: "Doorstep delivery", desc: "Order fulfilled and delivered after checkout." },
];

const PILLARS = [
  { title: "WhatsApp AI Bot", desc: "24/7 conversational ordering." },
  { title: "Autonomous Substitutions", desc: "Keeps sales even when stock is low." },
  { title: "Link & Invoice Checkout", desc: "Dynamic pricing + instant invoicing." },
  { title: "Franchise Dashboard", desc: "Analytics, stock alerts, multi-store management for the business owner." },
];

function Tag({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em",
      color: "var(--pulse)", background: "rgba(79,216,196,0.08)",
      border: "1px solid rgba(79,216,196,0.2)", borderRadius: "4px",
      padding: "3px 8px",
    }}>{label}</span>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", letterSpacing: "0.1em", marginBottom: "12px" }}>
      {label}
    </p>
  );
}

export default function ProductPage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "80px 0 64px" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <SectionLabel label="PRODUCT" />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,5vw,3.5rem)", color: "var(--mist)", fontWeight: 600, lineHeight: 1.1, marginBottom: "24px", maxWidth: "700px" }}>
            Meet ZEKVIAN AI-Chatbot <br />
            <span style={{ color: "var(--pulse)" }}>24/7 Smart Conversations</span>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.75, maxWidth: "620px", marginBottom: "32px" }}>
            ZEKVIAN connects an intelligent AI conversational agent directly to the physical store's live inventory database. Shoppers upload raw grocery lists on WhatsApp, and the bot dynamically handles item matching, substitute generation, and digital payments autonomously, reclaiming employee productivity instantly.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["WhatsApp AI", "Live Inventory", "Auto-Substitution", "Digital Checkout", "Franchise Analytics"].map(t => <Tag key={t} label={t} />)}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "72px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <SectionLabel label="KEY FEATURES" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "48px" }}>
            Everything happens inside WhatsApp
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "var(--line)" }}>
            {KEY_FEATURES.map((f, i) => (
              <div key={i} style={{ background: "var(--void)", padding: "32px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--pulse)", opacity: 0.5, marginBottom: "16px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "var(--mist)", marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "72px 0", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <SectionLabel label="FOUR PILLARS" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "48px" }}>
            The foundation of every order
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {PILLARS.map((p, i) => (
              <div key={i} style={{ padding: "28px", borderRadius: "14px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--line)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--pulse)", opacity: 0.7, display: "block", marginBottom: "16px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--mist)", marginBottom: "10px" }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Smart Conversations spotlight */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "72px 0", background: "rgba(79,216,196,0.03)" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div>
            <SectionLabel label="CONVERSATIONAL COMMERCE" />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "var(--mist)", fontWeight: 600, lineHeight: 1.15, marginBottom: "20px" }}>
              24/7 Smart Conversations
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.8 }}>
              ZEKVIAN connects an intelligent AI conversational agent directly to the physical store's live inventory database. Shoppers upload raw grocery lists on WhatsApp, and the bot dynamically handles item matching, substitute generation, and digital payments autonomously, reclaiming employee productivity instantly.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
              <Tag label="WhatsApp AI" />
              <Tag label="Live Inventory" />
              <Tag label="Auto-Substitution" />
              <Tag label="Digital Payments" />
            </div>
          </div>
          <div style={{
            borderRadius: "20px",
            border: "1px solid rgba(79,216,196,0.2)",
            background: "linear-gradient(160deg, rgba(79,216,196,0.10), rgba(255,255,255,0.02))",
            padding: "32px",
            minHeight: "260px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "14px",
          }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--pulse)", marginTop: "6px", flexShrink: 0 }} />
              <p style={{ fontSize: "0.9rem", color: "var(--mist)", opacity: 0.8, lineHeight: 1.6 }}>Upload a raw grocery list on WhatsApp 🛒</p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--pulse)", marginTop: "6px", flexShrink: 0 }} />
              <p style={{ fontSize: "0.9rem", color: "var(--mist)", opacity: 0.8, lineHeight: 1.6 }}>AI matches items & proposes smart substitutes</p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--pulse)", marginTop: "6px", flexShrink: 0 }} />
              <p style={{ fontSize: "0.9rem", color: "var(--mist)", opacity: 0.8, lineHeight: 1.6 }}>Digital payment & invoice sent autonomously</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "72px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <SectionLabel label="CORE CAPABILITIES" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "48px" }}>
            What the bot does out of the box
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "var(--line)" }}>
            {CORE.map((c, i) => (
              <div key={i} style={{ background: "var(--void)", padding: "32px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--pulse)", opacity: 0.5, marginBottom: "16px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "var(--mist)", marginBottom: "10px" }}>{c.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI WhatsApp Engine */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "72px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              <SectionLabel label="AI ENGINE" />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "16px" }}>
                Interactive AI WhatsApp Engine
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.55, lineHeight: 1.75 }}>
                Beyond basic chatbots, behavioral intelligence that learns from every order and adapts in real time.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {AI_ENGINE.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--pulse)", flexShrink: 0, marginTop: "3px" }}>•</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, color: "var(--mist)", marginBottom: "4px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "72px 0", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <SectionLabel label="DASHBOARD" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "8px" }}>
            Supermarket SaaS Dashboard
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.55, marginBottom: "48px" }}>
            Franchise Analytics & Consolidated Apps
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {DASHBOARD.map((d, i) => (
              <div key={i} style={{
                padding: "24px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--line)",
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--ember)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, color: "var(--mist)", marginBottom: "8px" }}>{d.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.55, lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Suite Apps */}
      <section style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <SectionLabel label="SUITE" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "8px" }}>
            The 4 Essential Suite Apps
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.55, marginBottom: "48px" }}>
            Every role in your operation, covered end to end.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {SUITE.map((s) => (
              <div key={s.n} style={{
                padding: "28px",
                borderRadius: "14px",
                background: s.bg,
                border: `1px solid ${s.border}`,
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: s.color, opacity: 0.7, display: "block", marginBottom: "16px" }}>{s.n}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--mist)", marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.6, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
