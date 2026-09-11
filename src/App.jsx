import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Menu,
  Plane,
  Ship,
  Truck,
  X,
  Boxes,
  ShieldCheck,
  Clock3,
  Headphones,
  MapPin,
  Mail,
  Phone,
  Anchor,
  Container,
  Warehouse,
  FileCheck2,
  Route,
  PackageCheck,
  CircleDot,
  Plus,
  Minus,
  Target,
  Compass,
  Handshake,
  Layers,
} from "lucide-react";
import Hero from "../public/hero.png";

/* ---------- SERVICES (matches PDF icon strip: NVOCC / Freight Forwarding / Project Cargo /
   Transportation / Warehousing / Customs) ---------- */
const services = [
  {
    icon: Anchor,
    title: "NVOCC & Ocean Freight",
    text: "FCL solutions across 20' GP, 40' GP and 40' High Cube equipment, with special equipment coordination including Open Top, Flat Rack and more, subject to cargo, route and operational availability.",
    tag: "NVOCC",
  },
  {
    icon: Ship,
    title: "International Freight Forwarding",
    text: "Sea-freight movements coordinated with origin and destination partners for a single communication window across booking, documentation, transport and exception management.",
    tag: "FORWARDING",
  },
  {
    icon: Boxes,
    title: "Project Cargo & Breakbulk",
    text: "Planning and coordination for oversized, out-of-gauge and project cargo: route review, equipment selection, lashing/survey interfaces and port handling through specialist partners.",
    tag: "PROJECT",
  },
  {
    icon: Truck,
    title: "Transportation & 3PL",
    text: "First-mile and last-mile container and cargo transport connecting factories, warehouses, ports, CFSs and ICDs across India.",
    tag: "3PL",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    text: "Storage, handling, inventory and distribution solutions delivered through qualified facilities and logistics partners, tailored to customer requirements.",
    tag: "WAREHOUSE",
  },
  {
    icon: FileCheck2,
    title: "Customs Coordination",
    text: "Import and export customs-clearance coordination through authorised customs-broker partners, including document readiness and clearance-status follow-up.",
    tag: "CUSTOMS",
  },
];

/* ---------- CORE NVOCC CAPABILITIES ---------- */
const nvoccCapabilities = [
  "FCL solutions for standard dry equipment including 20' GP, 40' GP and 40' High Cube.",
  "Special equipment coordination, including Open Top, Flat Rack and other suitable equipment, subject to cargo, route and operational availability.",
  "Export and import box-operation coordination, including release planning, terminal/depot interfaces and shipment milestone follow-up.",
  "Carrier slot and sailing coordination to identify practical routing and transit options.",
  "Empty-equipment positioning and container availability coordination through operating partners, where applicable.",
  "House Bill of Lading / shipping-document coordination and manifest support, subject to applicable registrations, contractual arrangements and regulatory requirements.",
  "Port-to-port and multimodal solutions connecting ports, CFSs, ICDs, factories and warehouses.",
];

/* ---------- FORWARDING GRID (Export / Import / Routing / Visibility / Partners / Support) ---------- */
const forwardingGrid = [
  ["Export", "Booking, Equipment, Documentation"],
  ["Import", "Origin, Arrival, Delivery coordination"],
  ["Routing", "Direct / transshipment options"],
  ["Visibility", "Milestone and exception updates"],
  ["Partners", "Overseas agent coordination"],
  ["Support", "Commercial + operational follow-up"],
];

/* ---------- INTEGRATED LOGISTICS PORTFOLIO ---------- */
const portfolio = [
  {
    title: "Project & Breakbulk Cargo",
    text: "Planning and coordination for oversized, out-of-gauge and project cargo, including route review, equipment selection, lashing/survey interfaces and port handling through specialist partners.",
  },
  {
    title: "Heavy-Lift & Special Equipment",
    text: "Coordination of Flat Rack, Open Top and specialised transport/equipment solutions based on cargo dimensions, weight, route feasibility and carrier acceptance.",
  },
  {
    title: "Port / CFS / ICD Coordination",
    text: "Cargo and container movement interfaces across ports, terminals, CFSs and ICDs, including gate, handling and transport coordination.",
  },
  {
    title: "Warehousing & 3PL",
    text: "Storage, handling, inventory and distribution solutions through qualified facilities and logistics partners, based on customer requirements.",
  },
  {
    title: "Customs Clearance Support",
    text: "Import/export customs-clearance coordination through authorised customs-broker partners, including document readiness and clearance-status follow-up.",
  },
  {
    title: "Domestic Transportation",
    text: "First-mile and last-mile container/cargo transport between factories, warehouses, ports, CFSs and ICDs.",
  },
];

/* ---------- CARGO EXPERTISE & CUSTOMER SEGMENTS ---------- */
const cargoSegments = [
  [
    "Automotive & Ancillary",
    "Components, machinery, tooling and industrial supplies.",
  ],
  [
    "Engineering & Industrial",
    "Machinery, fabricated equipment and project-related cargo.",
  ],
  [
    "FMCG & Retail",
    "Regular containerised cargo requiring schedule and inventory discipline.",
  ],
  [
    "Pharma & Healthcare",
    "General cargo logistics subject to applicable handling and compliance requirements.",
  ],
  [
    "Chemicals, Non-Hazardous",
    "Approved non-hazardous cargo subject to documentation and carrier acceptance.",
  ],
  [
    "Trading & General Cargo",
    "Import/export cargo across standard ocean-freight trade lanes.",
  ],
];

/* ---------- HOW WE WORK (6-step process from the profile) ---------- */
const howWeWork = [
  [
    Route,
    "Understand",
    "Commodity, dimensions, weight, Incoterms, origin, destination and required timeline.",
  ],
  [
    Compass,
    "Design",
    "The movement: equipment, routing, sailing, transport and documentation plan.",
  ],
  [
    FileCheck2,
    "Quote",
    "Transparently, with clearly defined scope, freight and applicable local/service charges.",
  ],
  [
    Container,
    "Execute",
    "Closely: booking, equipment, documentation, terminal/depot and partner coordination.",
  ],
  [
    PackageCheck,
    "Keep Informed",
    "Customers updated with milestone tracking, exceptions and practical recovery actions.",
  ],
  [
    CheckCircle2,
    "Close",
    "The shipment: delivery coordination, documentation completion and service review.",
  ],
];

/* ---------- STRATEGIC FOUNDATIONS ---------- */
const foundations = [
  {
    icon: Target,
    title: "Vision",
    text: "To build NSPL into a dependable and respected Indian shipping and integrated logistics brand with strong customer relationships and an expanding international partner network.",
  },
  {
    icon: Compass,
    title: "Mission",
    text: "To simplify cargo movement through responsive service, transparent communication, practical solutions and disciplined execution.",
  },
  {
    icon: Handshake,
    title: "Values",
    text: "Integrity, Customer Focus, Reliability, Agility, Collaboration, Continuous Improvement",
  },
];

/* ---------- WHY NSPL (from profile: Why NSPL page) ---------- */
const whyNspl = [
  [
    ShieldCheck,
    "Customer-First Execution",
    "We start with the customer's shipment requirement and build the logistics plan around it.",
  ],
  [
    Layers,
    "Single-Point Coordination",
    "One responsive interface across ocean freight and associated logistics activities.",
  ],
  [
    Clock3,
    "Commercial Discipline",
    "Competitive options with clarity on scope, routing and operational assumptions.",
  ],
  [
    Globe2,
    "Flexible Network Model",
    "Carrier, overseas-agent and specialist-partner coordination based on each shipment.",
  ],
  [
    Headphones,
    "Operational Visibility",
    "Proactive milestone follow-up and early communication of exceptions.",
  ],
  [
    Boxes,
    "Long-Term Mindset",
    "We aim to earn repeat business through service consistency, not one-time transactions.",
  ],
];

const stats = [
  ["People", "Driven partnerships"],
  ["Partnership", "Built on trust"],
  ["Progress", "Toward every shipment"],
  ["Global Reach", "Local commitment"],
];

const markets = [
  "India",
  "Middle East",
  "Asia",
  "Africa",
  "Europe",
  "Americas",
];

const faqs = [
  {
    q: "What shipping and logistics services does NSPL offer?",
    a: "Naventra Shipping India Pvt Ltd (NSPL) coordinates NVOCC and ocean freight, international freight forwarding, project cargo and breakbulk, transportation and 3PL, warehousing and distribution, and customs clearance coordination for import and export shipments.",
  },
  {
    q: "Which locations does NSPL serve?",
    a: "We are based in Navi Mumbai, India, and coordinate freight movement across key global trade markets including the Middle East, Asia, Africa, Europe and the Americas.",
  },
  {
    q: "Does NSPL handle both import and export cargo?",
    a: "Yes. We coordinate both import and export logistics, including documentation, customs clearance and coordination with carriers and partners at origin and destination.",
  },
  {
    q: "What kind of cargo does NSPL support?",
    a: "We support a broad range of non-restricted commercial cargo, including automotive and ancillary, engineering and industrial, FMCG and retail, pharma and healthcare, non-hazardous chemicals, and trading and general cargo, subject to carrier acceptance and applicable regulations.",
  },
  {
    q: "How can I get a freight quote from NSPL?",
    a: "You can request a quote by sharing your cargo, origin and destination details through our contact section, or by emailing us directly at ops@nsplmum.in or sales@nsplmum.in.",
  },
];

const initialQuoteForm = {
  name: "",
  email: "",
  phone: "",
  service: "NVOCC & Ocean Freight",
  origin: "",
  destination: "",
  message: "",
};

function QuoteForm() {
  const [fields, setFields] = useState(initialQuoteForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!fields.origin.trim()) next.origin = "Please enter an origin.";
    if (!fields.destination.trim())
      next.destination = "Please enter a destination.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const subject = `Quote Request - ${fields.service} (${fields.origin} to ${fields.destination})`;
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone || "Not provided"}`,
      `Service: ${fields.service}`,
      `Origin: ${fields.origin}`,
      `Destination: ${fields.destination}`,
      "",
      "Cargo details:",
      fields.message || "Not provided",
    ].join("\n");

    window.location.href = `mailto:ops@nsplmum.in?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-[#E1D6C5] bg-white p-6 sm:p-8 md:p-10">
        <CheckCircle2 size={30} className="text-nspl-goldDark" />
        <h3 className="font-serif text-xl sm:text-2xl text-nspl-brown">
          Your enquiry is ready to send
        </h3>
        <p className="text-sm leading-6 text-nspl-copper">
          We've opened your email app with your quote request pre-filled to
          ops@nsplmum.in. If it didn't open, email us directly with your cargo,
          origin and destination details.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(initialQuoteForm);
            setSubmitted(false);
          }}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#CDBFA9] bg-white px-5 py-2.5 text-sm font-semibold text-nspl-brown transition hover:border-nspl-gold sm:w-auto sm:justify-start"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-[#DCCEB9] bg-white px-4 py-3 text-sm text-nspl-charcoal placeholder:text-[#B7AA99] outline-none transition focus:border-nspl-gold focus:ring-2 focus:ring-nspl-gold/20";
  const labelClasses = "mb-1.5 block text-xs font-semibold text-nspl-brown";
  const errorClasses = "mt-1 text-xs font-medium text-red-600";

  return (
    <div className="rounded-2xl border border-[#E1D6C5] bg-white p-5 shadow-[0_18px_45px_rgba(92,58,11,.08)] sm:p-6 md:p-8">
      <h3 className="font-serif text-xl sm:text-2xl text-nspl-brown">
        Request a Quote
      </h3>
      <p className="mt-1.5 text-sm text-nspl-copper">
        Fill in a few details and we'll get back to you with a tailored freight
        solution.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className={labelClasses}>
            Full name
          </label>
          <input
            id="quote-name"
            type="text"
            value={fields.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClasses}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="quote-email" className={labelClasses}>
            Email
          </label>
          <input
            id="quote-email"
            type="email"
            value={fields.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputClasses}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="quote-phone" className={labelClasses}>
            Phone (optional)
          </label>
          <input
            id="quote-phone"
            type="tel"
            value={fields.phone}
            onChange={update("phone")}
            placeholder="+91 86523 24515"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="quote-service" className={labelClasses}>
            Service required
          </label>
          <select
            id="quote-service"
            value={fields.service}
            onChange={update("service")}
            className={inputClasses}
          >
            <option>NVOCC & Ocean Freight</option>
            <option>International Freight Forwarding</option>
            <option>Project Cargo & Breakbulk</option>
            <option>Transportation & 3PL</option>
            <option>Warehousing & Distribution</option>
            <option>Customs Coordination</option>
          </select>
        </div>

        <div>
          <label htmlFor="quote-origin" className={labelClasses}>
            Origin
          </label>
          <input
            id="quote-origin"
            type="text"
            value={fields.origin}
            onChange={update("origin")}
            placeholder="City, country"
            className={inputClasses}
          />
          {errors.origin && <p className={errorClasses}>{errors.origin}</p>}
        </div>

        <div>
          <label htmlFor="quote-destination" className={labelClasses}>
            Destination
          </label>
          <input
            id="quote-destination"
            type="text"
            value={fields.destination}
            onChange={update("destination")}
            placeholder="City, country"
            className={inputClasses}
          />
          {errors.destination && (
            <p className={errorClasses}>{errors.destination}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-message" className={labelClasses}>
            Cargo details (optional)
          </label>
          <textarea
            id="quote-message"
            value={fields.message}
            onChange={update("message")}
            placeholder="Cargo type, weight, volume, preferred timeline..."
            rows={4}
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-nspl-gold px-7 py-3.5 font-bold text-nspl-deep transition hover:bg-nspl-goldDark hover:text-white sm:w-auto"
      >
        Request a Quote <ArrowRight size={18} />
      </button>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title =
      "NSPL | Naventra Shipping India Pvt Ltd - NVOCC, Freight Forwarding & Integrated Logistics in Navi Mumbai, India";

    const description =
      "Naventra Shipping India Pvt Ltd (NSPL) is a Navi Mumbai based NVOCC, ocean freight and integrated logistics company offering freight forwarding, project & breakbulk cargo, transportation & 3PL, warehousing & distribution, and customs clearance coordination across India and global trade markets.";

    const keywords =
      "NVOCC India, ocean freight forwarders, freight forwarding company India, logistics company Navi Mumbai, project cargo logistics, breakbulk cargo, 3PL warehousing India, customs clearance coordination, international shipping company, NSPL Naventra Shipping";

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow");
    setMeta("og:title", "NSPL | Naventra Shipping India Pvt Ltd", "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "NSPL | Naventra Shipping India Pvt Ltd");
    setMeta("twitter:description", description);

    const canonicalUrl = window.location.origin + window.location.pathname;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let jsonLd = document.getElementById("nspl-jsonld");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.type = "application/ld+json";
      jsonLd.id = "nspl-jsonld";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LogisticsBusiness",
      name: "Naventra Shipping India Pvt Ltd",
      alternateName: "NSPL",
      description,
      email: "ops@nsplmum.in",
      telephone: "+91 86523 24515",
      url: "https://nsplmum.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "604, 6th Floor, Akshat Elite, Bhendkhal Road, Dronagri",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400702",
        addressCountry: "IN",
      },
      areaServed: markets,
      sameAs: [],
    });
  }, []);

  const nav = [
    ["Home", "home"],
    ["About", "about"],
    ["Services", "services"],
    ["Portfolio", "portfolio"],
    ["Industries", "industries"],
    ["Why NSPL", "why-nspl"],
    ["Contact", "contact"],
  ];

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FDFBF6] text-nspl-charcoal">
      {/* Slim business announcement */}
      <div className="border-b border-[#E7DDCC] bg-white px-3 py-2 text-center text-[8px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-nspl-brown xs:text-[9px] sm:px-5 sm:text-[10px] sm:tracking-[0.25em] md:text-xs">
        NVOCC • Ocean Freight • Freight Forwarding • Integrated Logistics
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#E7DDCC] bg-white/95 backdrop-blur">
        <div className="container-nspl flex h-[68px] items-center justify-between sm:h-[88px] lg:h-[104px]">
          <a
            href="#home"
            aria-label="NSPL - Naventra Shipping India Pvt Ltd home"
            className="flex shrink-0 items-center"
          >
            <img
              src="/nspl-logo.svg"
              alt="Naventra Shipping India Pvt Ltd logo"
              width="260"
              height="112"
              className="h-[44px] w-auto max-w-[130px] object-contain mix-blend-multiply sm:h-[68px] sm:max-w-[210px] lg:h-[92px] lg:max-w-[260px]"
            />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 lg:flex lg:gap-7"
          >
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-[#43372C] transition hover:text-nspl-goldDark"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-nspl-gold px-4 py-2.5 text-xs font-bold text-nspl-deep shadow-[0_8px_25px_rgba(212,160,23,.16)] transition hover:bg-nspl-goldDark hover:text-white sm:text-sm md:px-5 md:py-3 lg:flex"
          >
            Get a Quote <ArrowRight size={16} />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-[#DCCEB9] bg-white p-2 lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[#E7DDCC] bg-white px-5 py-5 lg:hidden max-h-[80vh] overflow-y-auto">
            <nav className="container-nspl flex flex-col gap-5">
              {nav.map(([label, id]) => (
                <a
                  key={id}
                  onClick={() => setOpen(false)}
                  href={`#${id}`}
                  className="text-sm font-semibold text-nspl-brown"
                >
                  {label}
                </a>
              ))}
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-nspl-gold px-5 py-3 text-sm font-bold text-nspl-deep"
              >
                Get a Quote <ArrowRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO - full-screen, image fills the section */}
        <section
          id="home"
          className="relative flex min-h-[100svh] w-full items-center overflow-hidden border-b border-[#DDE8F1]"
        >
          {/* Full-bleed background image */}
          <img
            src={Hero}
            alt="Global shipping and logistics port with container vessel and cargo connectivity"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Readability gradient over the image */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06284A]/90 via-[#06284A]/70 to-[#06284A]/25" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06284A]/70 to-transparent" />

          <div className="container-nspl relative py-20 sm:py-28 lg:py-0">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-nspl-paleGold backdrop-blur-sm sm:mb-6 sm:gap-3 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                <CircleDot size={12} className="shrink-0 text-nspl-gold" />
                Naventra Shipping India Pvt Ltd
              </div>

              <h1 className="max-w-2xl font-serif text-3xl leading-[1.12] tracking-[-0.01em] text-white xs:text-4xl sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.02em] lg:text-6xl xl:text-[4.4rem]">
                Navigating your
                <span className="block text-nspl-gold">business forward.</span>
              </h1>

              <div className="my-5 h-px w-20 bg-gradient-to-r from-nspl-gold to-transparent sm:my-7 sm:w-32" />

              <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-lg sm:leading-8">
                NSPL is a Navi Mumbai based NVOCC, ocean freight and integrated
                logistics company, coordinating freight forwarding, project
                cargo, transportation, warehousing and customs clearance across
                global trade lanes. Moving possibilities to a brighter tomorrow.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-nspl-gold px-6 py-3.5 font-bold text-nspl-deep transition hover:bg-nspl-goldDark hover:text-white sm:px-7 sm:py-4"
                >
                  Request a Quote <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-nspl-gold hover:text-nspl-gold sm:px-7 sm:py-4"
                >
                  Explore Services <ChevronDown size={18} />
                </a>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-5 gap-y-5 sm:mt-12 sm:gap-x-7 sm:gap-y-6 sm:grid-cols-4">
                {stats.map(([number, label]) => (
                  <div
                    key={label}
                    className="border-l border-nspl-gold/40 pl-3"
                  >
                    <div className="font-serif text-base text-white sm:text-xl">
                      {number}
                    </div>
                    <div className="mt-1 text-[10px] leading-5 text-white/70 sm:text-[11px]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <a
            href="#about"
            aria-label="Scroll to learn more"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/70 sm:block"
          >
            <ChevronDown size={26} />
          </a>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-[#E7DDCC] bg-[#FDFBF6]">
          <div className="container-nspl grid grid-cols-2 gap-y-5 divide-x divide-[#E2D7C7] py-6 sm:grid-cols-3 sm:gap-y-0 sm:py-7 lg:grid-cols-6">
            {[
              ["NVOCC", "& Ocean Freight"],
              ["Freight", "Forwarding"],
              ["Project Cargo", "& Breakbulk"],
              ["Transportation", "& 3PL"],
              ["Warehousing", "& Distribution"],
              ["Customs", "Coordination"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="px-3 first:pl-0 sm:px-4 sm:first:pl-0 sm:last:pr-0 lg:px-5"
              >
                <p className="font-serif text-sm text-nspl-brown sm:text-base">
                  {title}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-nspl-copper sm:text-[11px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white">
          <div className="container-nspl grid gap-8 py-14 sm:gap-14 sm:py-24 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                About NSPL
              </p>
              <h2 className="mt-4 font-serif text-2xl leading-tight text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                A dependable NVOCC and logistics partner for every movement.
              </h2>
            </div>

            <div>
              <p className="text-[15px] leading-7 text-nspl-copper sm:text-lg sm:leading-8">
                Naventra Shipping India Pvt Ltd is a Navi Mumbai based NVOCC,
                ocean freight and integrated logistics company. We develop
                ocean-freight solutions around cargo requirements, equipment
                availability, sailing options, transit expectations and
                commercial priorities, coordinating with mainline carriers,
                depots, terminals, transporters and overseas partners for smooth
                shipment execution.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-nspl-copper sm:text-lg sm:leading-8">
                Beyond ocean freight, NSPL is positioned to coordinate a wider
                logistics portfolio: project and breakbulk cargo, heavy-lift and
                special equipment, warehousing and 3PL, customs clearance and
                domestic transportation, provided directly where applicable and
                through authorised or qualified partners where specialist
                licences, infrastructure or equipment are required.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Understand", "Cargo, route and required timeline."],
                  [
                    "02",
                    "Coordinate",
                    "The right mode, equipment and partners.",
                  ],
                  ["03", "Deliver", "Visibility through every milestone."],
                ].map(([num, title, text]) => (
                  <div
                    key={num}
                    className="rounded-2xl border border-[#E6DCCB] bg-[#FDFBF6] p-5"
                  >
                    <span className="text-xs font-bold text-nspl-goldDark">
                      {num}
                    </span>
                    <h3 className="mt-3 font-serif text-xl text-nspl-brown">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-nspl-copper">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="border-y border-[#E7DDCC] bg-[#FDFBF6]"
        >
          <div className="container-nspl py-14 sm:py-24">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                  Our services
                </p>
                <h2 className="mt-4 font-serif text-2xl text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                  NVOCC, freight forwarding and integrated logistics, without
                  the complexity.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-nspl-copper">
                A focused range of shipping and logistics services: NVOCC &
                ocean freight, freight forwarding, project cargo, transportation
                & 3PL, warehousing & distribution and customs coordination,
                brought together under one roof.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text, tag }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-[#E1D6C5] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-nspl-gold/50 hover:shadow-[0_18px_45px_rgba(92,58,11,.10)] sm:p-6 md:p-7"
                >
                  <div className="absolute right-5 top-5 text-[9px] font-bold tracking-[0.22em] text-[#B7AA99] sm:right-6 sm:top-6">
                    {tag}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-nspl-gold/20 bg-[#F9F1DF] text-nspl-goldDark transition group-hover:bg-nspl-gold group-hover:text-nspl-deep">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-serif text-lg text-nspl-brown sm:mt-7 sm:text-xl md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-nspl-copper">
                    {text}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-nspl-goldDark"
                  >
                    Enquire <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NVOCC & OCEAN FREIGHT SOLUTIONS - detailed capabilities from the profile */}
        <section className="bg-white">
          <div className="container-nspl grid gap-10 py-14 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                NVOCC & Ocean Freight Solutions
              </p>
              <h2 className="mt-4 font-serif text-2xl leading-tight text-nspl-brown xs:text-3xl sm:text-4xl">
                Core NVOCC capabilities
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-nspl-copper">
                Our operating model is designed to coordinate with mainline
                carriers, depots, terminals, transporters and overseas partners
                for smooth shipment execution.
              </p>

              <ul className="mt-8 space-y-4">
                {nvoccCapabilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-nspl-goldDark"
                    />
                    <span className="text-sm leading-6 text-nspl-copper sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                International Freight Forwarding
              </p>
              <h2 className="mt-4 font-serif text-2xl leading-tight text-nspl-brown xs:text-3xl sm:text-4xl">
                A single communication window
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-nspl-copper">
                For customers requiring broader forwarding support, NSPL
                coordinates sea-freight movements with origin/destination
                partners and domestic logistics providers, for booking,
                documentation, transport coordination, shipment status and
                exception management.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {forwardingGrid.map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#E6DCCB] bg-[#FDFBF6] p-5"
                  >
                    <h3 className="font-serif text-lg text-nspl-brown">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-nspl-copper sm:text-sm">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATED LOGISTICS PORTFOLIO */}
        <section
          id="portfolio"
          className="border-y border-[#E7DDCC] bg-[#FDFBF6]"
        >
          <div className="container-nspl py-14 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                Integrated logistics portfolio
              </p>
              <h2 className="mt-4 font-serif text-2xl text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                A wider logistics portfolio around the core ocean-freight
                movement.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-nspl-copper">
                Services are provided directly where applicable and through
                authorised or qualified partners where specialist licences,
                infrastructure or equipment are required.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.map(({ title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#E1D6C5] bg-white p-6"
                >
                  <h3 className="font-serif text-lg text-nspl-brown sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-nspl-copper">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARGO EXPERTISE & CUSTOMER SEGMENTS */}
        <section id="industries" className="bg-white">
          <div className="container-nspl py-14 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                Cargo expertise & customer segments
              </p>
              <h2 className="mt-4 font-serif text-2xl text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                Responsive coordination, tailored to your cargo.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-nspl-copper">
                We aim to support a broad range of non-restricted commercial
                cargo, subject to carrier acceptance and applicable regulations.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {cargoSegments.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#E6DCCB] bg-[#FDFBF6] p-6"
                >
                  <h3 className="font-serif text-lg text-nspl-brown sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-nspl-copper">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="border-y border-[#E7DDCC] bg-[#FDFBF6]">
          <div className="container-nspl py-14 sm:py-24">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                How we work
              </p>
              <h2 className="mt-4 font-serif text-2xl text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                A clear path from booking to delivery.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {howWeWork.map(([Icon, title, text], index) => (
                <div key={title} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-nspl-gold/30 bg-white text-nspl-goldDark shadow-sm">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <span className="mt-4 block text-[10px] font-bold tracking-[0.2em] text-nspl-goldDark">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-lg text-nspl-brown">
                    {title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-xs leading-6 text-nspl-copper sm:max-w-[200px] sm:text-sm">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGIC FOUNDATIONS - Vision / Mission / Values */}
        <section className="bg-white">
          <div className="container-nspl py-14 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                Our strategic foundations
              </p>
              <h2 className="mt-4 font-serif text-2xl text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                What guides NSPL forward.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
              {foundations.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#E1D6C5] bg-[#FDFBF6] p-6 sm:p-7"
                >
                  <Icon
                    className="text-nspl-goldDark"
                    size={26}
                    strokeWidth={1.6}
                  />
                  <h3 className="mt-5 font-serif text-xl text-nspl-brown">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-nspl-copper">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL REACH */}
        <section className="border-y border-[#E7DDCC] bg-[#FDFBF6]">
          <div className="container-nspl grid gap-10 py-14 sm:gap-12 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                Global connectivity
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-2xl leading-tight text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                Supporting international trade across key global markets.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-nspl-copper">
                From our base in Navi Mumbai, we coordinate freight,
                transportation, documentation and destination-side support for
                import and export businesses trading with the Middle East, Asia,
                Africa, Europe and the Americas.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                {markets.map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-[#DED1BE] bg-white px-4 py-2.5 text-xs font-medium text-nspl-brown sm:px-5 sm:py-3 sm:text-sm"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-nspl-gold/30 bg-white shadow-sm sm:h-44 sm:w-44">
              <div className="absolute inset-4 rounded-full border border-nspl-gold/15" />
              <div className="absolute inset-9 rounded-full border border-nspl-brown/10" />
              <Globe2
                size={46}
                strokeWidth={1}
                className="text-nspl-goldDark sm:hidden"
              />
              <Globe2
                size={70}
                strokeWidth={1}
                className="hidden text-nspl-goldDark sm:block"
              />
            </div>
          </div>
        </section>

        {/* WHY NSPL */}
        <section id="why-nspl" className="bg-nspl-deep text-white">
          <div className="container-nspl py-14 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-gold">
                Why NSPL
              </p>
              <h2 className="mt-4 font-serif text-2xl leading-tight xs:text-3xl sm:text-4xl md:text-5xl">
                Professional service. Personal attention.
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-nspl-sand sm:leading-8">
                As a dedicated NVOCC, freight forwarding and logistics company,
                we focus on the details behind every shipment: documentation,
                routing, timelines and communication, so our customers can focus
                on their business.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {whyNspl.map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <Icon className="text-nspl-gold" size={25} />
                  <h3 className="mt-5 font-serif text-xl text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-nspl-sand">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-nspl-gold/30 bg-white/5 p-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h3 className="font-serif text-xl text-white sm:text-2xl">
                  Partner with NSPL
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-nspl-sand">
                  We welcome enquiries from exporters, importers, manufacturers,
                  traders, freight partners and overseas agents. Share your
                  upcoming shipment or RFQ and we'll work to develop a
                  practical, competitive solution.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-nspl-gold/50 px-6 py-3 text-sm font-semibold text-nspl-paleGold transition hover:bg-nspl-gold hover:text-nspl-deep sm:w-auto sm:justify-start"
              >
                Speak with our team <ArrowRight size={16} />
              </a>
            </div>

            <p className="mt-10 text-center font-serif text-base italic text-nspl-paleGold sm:text-lg md:text-xl">
              "Your cargo. Our commitment. One logistics partner."
            </p>
          </div>
        </section>

        {/* FAQ - SEO-friendly structured content */}
        <section id="faq" className="bg-white">
          <div className="container-nspl py-14 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                Frequently asked questions
              </p>
              <h2 className="mt-4 font-serif text-2xl text-nspl-brown xs:text-3xl sm:text-4xl md:text-5xl">
                Common questions about our shipping services.
              </h2>
            </div>

            <div className="mt-10 divide-y divide-[#E6DCCB] border-y border-[#E6DCCB] sm:mt-12">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.q}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                    >
                      <span className="font-serif text-sm text-nspl-brown sm:text-lg">
                        {item.q}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-nspl-gold/30 text-nspl-goldDark">
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="max-w-3xl pb-6 text-sm leading-7 text-nspl-copper sm:text-base">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA / QUOTE FORM */}
        <section id="contact" className="border-b border-[#DCCEB9] bg-white">
          <div className="container-nspl py-12 sm:py-20">
            <div className="relative overflow-hidden rounded-2xl border border-[#DCCEB9] bg-[#FDFBF6] px-5 py-8 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14">
              <div className="pointer-events-none absolute right-[-5rem] top-[-6rem] hidden h-52 w-52 rounded-full border border-nspl-gold/20 sm:block" />
              <div className="pointer-events-none absolute right-10 top-10 hidden h-3 w-3 rounded-full bg-nspl-gold sm:block" />

              <div className="relative grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-14">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                    Start a conversation
                  </p>
                  <h2 className="mt-4 max-w-lg font-serif text-2xl leading-tight text-nspl-deep xs:text-3xl sm:text-4xl md:text-5xl">
                    Let's move your next shipment.
                  </h2>
                  <p className="mt-4 max-w-md text-nspl-copper">
                    Share your cargo, origin and destination with our team and
                    discover the right NVOCC, freight forwarding and logistics
                    solution for your business.
                  </p>

                  <div className="mt-8 space-y-4 text-sm text-nspl-copper">
                    <p className="flex gap-3 break-words">
                      <Phone
                        size={17}
                        className="mt-0.5 shrink-0 text-nspl-goldDark"
                      />
                      +91 86523 24515
                    </p>
                    <p className="flex flex-wrap gap-x-1.5 gap-y-0 break-words">
                      <Mail
                        size={17}
                        className="mt-0.5 shrink-0 text-nspl-goldDark"
                      />
                      <span>ops@nsplmum.in | sales@nsplmum.in</span>
                    </p>

                    <p className="flex gap-3">
                      <MapPin
                        size={17}
                        className="mt-0.5 shrink-0 text-nspl-goldDark"
                      />
                      604, 6th Floor, Akshat Elite, Bhendkhal Road, Dronagri,
                      Navi Mumbai, Raigad - 400702
                    </p>
                  </div>
                </div>

                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white text-nspl-brown">
        <div className="container-nspl grid gap-10 py-12 sm:gap-12 sm:py-14 md:grid-cols-[1.3fr_.7fr_.9fr]">
          <div>
            <img
              src="/nspl-logo.jpeg"
              alt="NSPL - Naventra Shipping India Pvt Ltd logo"
              width="240"
              height="100"
              loading="lazy"
              className="h-14 w-auto max-w-[190px] rounded bg-white object-contain sm:h-20 sm:max-w-[260px]"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-nspl-copper">
              Naventra Shipping India Pvt Ltd a Navi Mumbai based NVOCC, ocean
              freight and integrated logistics company. Moving possibilities to
              a brighter tomorrow through dependable ocean, air and land
              coordination.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-nspl-goldDark">
              People • Partnership • Progress • Global Reach
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-nspl-copper">
              {nav.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="transition hover:text-nspl-goldDark"
                >
                  {label}
                </a>
              ))}
              <a href="#faq" className="transition hover:text-nspl-goldDark">
                FAQs
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-nspl-copper">
              <p className="flex gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-nspl-goldDark"
                />
                604, 6th Floor, Akshat Elite, Bhendkhal Road, Dronagri, Navi
                Mumbai, Raigad - 400702
              </p>
              <p className="flex gap-3">
                <Phone size={17} className="shrink-0 text-nspl-goldDark" />
                +91 86523 24515
              </p>
              <p className="flex gap-3 break-all">
                <Mail size={17} className="shrink-0 text-nspl-goldDark" />
                ops@nsplmum.in
              </p>
              <p className="flex gap-3 break-all">
                <Mail size={17} className="shrink-0 text-nspl-goldDark" />
                sales@nsplmum.in
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E7DDCC]">
          <div className="container-nspl flex flex-col gap-3 py-6 text-xs text-nspl-copper sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} Naventra Shipping India Pvt Ltd. All
              rights reserved.
            </span>
            <span className="font-medium">
              Developed & Managed by Silicon Systems & Securities • 80804 95101
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
