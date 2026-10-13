const SECTIONS = [
  {
    n: "03",
    title: "1. Eligibility",
    items: [
      "You must be at least 18 years of age, or place orders under the supervision of a person who is, to use the Service.",
      "You are responsible for providing accurate name, delivery address, and contact number when ordering.",
    ],
  },
  {
    n: "04",
    title: "2. Placing an Order",
    items: [
      "Orders are placed by chatting with our WhatsApp bot and selecting products, quantities, and a delivery or pickup option.",
      "An order is a request to purchase and is not binding until confirmed by us. We may decline or modify an order due to stock unavailability, pricing errors, delivery-area restrictions, or suspected fraudulent/abusive use.",
      "Product images, descriptions and prices shown via the bot are indicative and may change without prior notice; the price confirmed at the time of order confirmation shall apply.",
      "You may request cancellation or modification of an order before it has been packed or dispatched by contacting us; orders already packed/out for delivery may not be cancelled.",
    ],
  },
  {
    n: "05",
    title: "3. Substitutions",
    items: [
      "If an ordered item is unavailable, we may, at your prior preference indicated to the bot, either substitute it with a similar item, omit it from the order, or contact you before fulfilling.",
    ],
  },
  {
    n: "06",
    title: "4. Pricing & Payment",
    items: [
      "All prices are in Indian Rupees (INR) and are inclusive/exclusive of applicable taxes as displayed at order confirmation.",
      "Payment is collected in cash at the time of delivery or pickup (Cash on Delivery / Cash on Pickup). We do not accept online payments through the Service at this time.",
      "Delivery charges, if any, and any applicable minimum order value will be communicated to you before order confirmation.",
      "Please keep exact change ready where possible; we are not obligated to fulfil an order if payment is not tendered at the time of delivery/pickup.",
    ],
  },
  {
    n: "07",
    title: "5. Delivery",
    items: [
      "Delivery is available within our serviceable pincodes/areas only, as communicated via the bot.",
      "Estimated delivery times are indicative and not guaranteed; delays may occur due to traffic, weather, order volume, or other factors beyond our reasonable control.",
      "You must ensure someone is available to receive the order and make payment at the delivery address within the communicated time window. If delivery fails due to your unavailability or an incorrect address, we may treat the order as cancelled, and repeat delivery attempts may attract additional charges.",
      "Risk in the goods passes to you upon delivery and handover.",
    ],
  },
  {
    n: "08",
    title: "6. Pickup Orders",
    items: [
      "Pickup orders must be collected from our store within the time window communicated at order confirmation (typically within 24 to 48 hours).",
      "Orders not collected within the communicated window may be cancelled and restocked without further notice.",
      "Please be ready to confirm your order details (name/order reference) at the time of pickup.",
    ],
  },
  {
    n: "09",
    title: "7. Returns, Refunds & Cancellations",
    items: [
      "Perishable items (fresh produce, dairy, bakery, etc.) are non-returnable once accepted, except where the item is damaged, expired, or materially different from what was ordered.",
      "If you receive a wrong, missing, damaged or expired item, please inform us within 24 hours of delivery/pickup with details, and we will address it by replacement, store credit, or a cash refund at our discretion.",
      "As payments are collected in cash at delivery/pickup, any applicable refund will ordinarily be provided in cash at the time of resolution, or adjusted against a future order, unless otherwise agreed.",
    ],
  },
  {
    n: "10",
    title: "8. Your Conduct",
    items: [
      "You agree not to misuse the WhatsApp bot, including by placing fraudulent, hoax, or repeated cancelled orders, or by sending abusive or unlawful messages.",
      "We reserve the right to restrict or block access to the Service for any customer who misuses it.",
    ],
  },
  {
    n: "11",
    title: "9. Communication Consent (WhatsApp)",
    items: [
      "By initiating a chat with our WhatsApp bot, you consent to receive order-related, transactional, and (where you opt in) promotional messages from us via WhatsApp.",
      "You may opt out of promotional messages at any time by replying \"STOP\" or through the option provided in the chat; you will continue to receive essential transactional updates for any active order.",
      "Your messages and order data are transmitted through the WhatsApp Business API provided by Meta Platforms, Inc., and are also subject to WhatsApp's own terms and privacy policy.",
    ],
  },
  {
    n: "12",
    title: "10. Privacy",
    items: [
      "Information you share with us (such as your name, phone number, address and order details) is collected and used in accordance with our Privacy Policy, available on request or via the link shared in the bot.",
    ],
  },
  {
    n: "13",
    title: "11. Limitation of Liability",
    items: [
      "To the maximum extent permitted by law, our liability in connection with any order shall not exceed the value of that order. We shall not be liable for indirect or consequential loss, or for delays or failures caused by circumstances beyond our reasonable control, including outages of the WhatsApp/Meta platform.",
    ],
  },
  {
    n: "14",
    title: "12. Grievance Redressal",
    items: [
      "For any complaints regarding an order, delivery, pricing, or the Service, please contact the merchant support team. We will endeavour to acknowledge and resolve grievances within a reasonable time in accordance with applicable law.",
    ],
  },
  {
    n: "15",
    title: "13. Changes to These Terms",
    items: [
      "We may update these Terms from time to time. Continued use of the Service after such changes constitutes your acceptance of the updated Terms.",
    ],
  },
  {
    n: "16",
    title: "14. Governing Law & Jurisdiction",
    items: [
      "These Terms are governed by the laws of India, and the courts at the merchant's jurisdiction shall have exclusive jurisdiction over any disputes arising in connection with the Service.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ borderBottom: "1px solid var(--line)", padding: "64px 0 48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", letterSpacing: "0.1em", marginBottom: "12px" }}>OFFICIAL POLICY</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3rem)", color: "var(--mist)", fontWeight: 600, marginBottom: "12px" }}>
            Customer Terms of Use
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--mist)", opacity: 0.4, marginBottom: "24px" }}>
            Terms and conditions for customers ordering groceries and supermarket products via our WhatsApp bot · Last updated: August 2026
          </p>
        </div>
      </div>

      {/* Intro */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 32px 0" }}>
        <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.8, marginBottom: "8px" }}>
          These Terms &amp; Conditions ("Terms") govern your use of the WhatsApp-based ordering service (the "Service") offered by the merchant, enabling you ("you", "customer") to order groceries and supermarket products for home delivery or in-store pickup by chatting with our WhatsApp bot. By placing an order through the Service, you agree to these Terms.
        </p>

        {/* Powered by Zekvian */}
        <div style={{
          margin: "32px 0",
          padding: "20px 24px",
          borderRadius: "10px",
          background: "rgba(79,216,196,0.04)",
          border: "1px solid rgba(79,216,196,0.15)",
        }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", marginBottom: "8px", letterSpacing: "0.04em" }}>PLATFORM ROLE</p>
          <p style={{ fontSize: "0.875rem", color: "var(--mist)", opacity: 0.65, lineHeight: 1.7 }}>
            The Service is powered by Zekvian Technologies' order-management platform. Zekvian provides only the underlying messaging technology; all products sold, prices charged, and orders fulfilled through the Service are sold by, and are the sole responsibility of, the merchant.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 64px" }}>
        {SECTIONS.map((s) => (
          <div key={s.n} style={{ padding: "40px 0", borderBottom: "1px solid var(--line)" }}>
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--pulse)", opacity: 0.6, flexShrink: 0, paddingTop: "5px", minWidth: "28px" }}>{s.n}</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--mist)", fontWeight: 600, marginBottom: "16px" }}>{s.title}</h2>
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {s.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.7, lineHeight: 1.7 }}>
                      <span style={{ color: "var(--pulse)", flexShrink: 0, marginTop: "2px" }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Questions */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{
          padding: "24px 28px",
          borderRadius: "10px",
          background: "rgba(255,176,32,0.06)",
          border: "1px solid rgba(255,176,32,0.2)",
        }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--ember)", marginBottom: "8px", letterSpacing: "0.04em" }}>QUESTIONS?</p>
          <p style={{ fontSize: "0.9375rem", color: "var(--mist)", opacity: 0.7, lineHeight: 1.7 }}>
            Questions about this policy? Reach our team directly at{" "}
            <a href="mailto:official.zekvian@gmail.com" style={{ color: "var(--ember)", textDecoration: "none" }}>official.zekvian@gmail.com</a>.
          </p>
        </div>
      </div>

    </div>
  );
}
