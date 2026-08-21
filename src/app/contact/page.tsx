import { ContactForm } from "@/components/forms/ContactForm";
import Link from "next/link";
import Image from "next/image";

const INFO = [
  {
    heading: "Sales Inquiries",
    body: "Pricing, custom quotes, or exploring a pilot.",
    contact: "official.zekvian@gmail.com",
    href: "mailto:official.zekvian@gmail.com",
  },
  {
    heading: "Technical Support",
    body: "Integration questions or API issues.",
    contact: "official.zekvian@gmail.com",
    href: "mailto:official.zekvian@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full" style={{ background: "var(--void)", minHeight: "100vh" }}>

      {/* Header */}
      <section className="py-20" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 mb-8" style={{ textDecoration: "none" }}>
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 font-mono text-xs"
            style={{ color: "var(--mist)", opacity: 0.6, textDecoration: "none", letterSpacing: "0.08em" }}
          >
            <span aria-hidden="true">&larr;</span> BACK TO HOME
          </Link>
          <p className="font-mono text-xs mb-4" style={{ color: "var(--pulse)", letterSpacing: "0.1em" }}>CONTACT</p>
          <h1 className="font-display text-5xl mb-4" style={{ color: "var(--mist)" }}>Get in touch</h1>
          <p style={{ color: "var(--mist)", opacity: 0.6, fontSize: "var(--text-17)" }}>
            We usually respond within 1 business day.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <div className="container mx-auto px-4 sm:px-8 py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-10">
            {INFO.map(item => (
              <div key={item.heading} className="pb-8" style={{ borderBottom: "1px solid var(--line)" }}>
                <h2 className="font-display text-lg mb-2" style={{ color: "var(--mist)" }}>{item.heading}</h2>
                <p className="text-sm mb-3" style={{ color: "var(--mist)", opacity: 0.55, lineHeight: 1.6 }}>{item.body}</p>
                <a href={item.href} className="font-mono text-sm" style={{ color: "var(--pulse)" }}>{item.contact}</a>
              </div>
            ))}

            <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--line)" }}>
              <h3 className="font-display text-base mb-2" style={{ color: "var(--mist)" }}>Book a call directly</h3>
              <p className="text-sm" style={{ color: "var(--mist)", opacity: 0.5, lineHeight: 1.6 }}>
                Use the form to request a time slot. Average demo setup time is under 24 hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--line)" }}>
              <h2 className="font-display text-xl mb-6" style={{ color: "var(--mist)" }}>Send us a message</h2>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

      {/* Location map */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container mx-auto px-4 sm:px-8 py-16 max-w-6xl">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs mb-2" style={{ color: "var(--pulse)", letterSpacing: "0.1em" }}>LOCATION</p>
              <h2 className="font-display text-2xl" style={{ color: "var(--mist)" }}>Find us</h2>
            </div>
            <p className="font-mono text-sm" style={{ color: "var(--mist)", opacity: 0.45 }}>
              Thiruvananthapuram, Kerala, India
            </p>
          </div>

          {/* Map embed — OpenStreetMap, no API key required */}
          <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid var(--line)", height: "420px" }}>
            <iframe
              title="Zekvian office location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6) brightness(0.85)" }}
              loading="lazy"
              allowFullScreen
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.8800%2C8.4700%2C76.9800%2C8.5400&layer=mapnik&marker=8.5241%2C76.9366"
            />
          </div>

          <p className="mt-4 font-mono text-xs" style={{ color: "var(--mist)", opacity: 0.3 }}>
            Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}>OpenStreetMap</a> contributors
          </p>
        </div>
      </div>

    </div>
  );
}
