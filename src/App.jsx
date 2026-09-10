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
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight Forwarding",
    text: "FCL, LCL and containerised ocean freight solutions for import and export cargo, with carrier coordination across major global trade lanes.",
    tag: "SEA",
  },
  {
    icon: Plane,
    title: "Air Freight Services",
    text: "Time-critical air cargo solutions for urgent, high-value and perishable shipments, backed by dependable airline coordination worldwide.",
    tag: "AIR",
  },
  {
    icon: Truck,
    title: "Land Transportation",
    text: "Domestic road freight connecting ports, ICDs, factories and warehouses across India with reliable first- and last-mile delivery.",
    tag: "ROAD",
  },
  {
    icon: Boxes,
    title: "Project & Heavy-Lift Logistics",
    text: "Engineering-led handling of oversized, heavy-lift and break-bulk project cargo, from route survey through final site delivery.",
    tag: "PROJECT",
  },
  {
    icon: Warehouse,
    title: "Warehousing & 3PL",
    text: "Secure storage, inventory management, pick-pack and distribution services that scale with your supply chain requirements.",
    tag: "3PL",
  },
  {
    icon: FileCheck2,
    title: "Customs Clearance",
    text: "End-to-end import and export documentation, HS classification and customs clearance coordination for faster, compliant cargo movement.",
    tag: "CUSTOMS",
  },
];

const stats = [
  ["End-to-End", "Logistics support"],
  ["24/7", "Customer assistance"],
  ["Global", "Trade connectivity"],
  ["One", "Trusted partner"],
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
    a: "Naventra Shipping India Pvt Ltd offers ocean freight (FCL/LCL), air freight, domestic land transportation, project and heavy-lift logistics, warehousing and 3PL services, and customs clearance for import and export shipments.",
  },
  {
    q: "Which locations does NSPL serve?",
    a: "We are based in Navi Mumbai, India, and coordinate freight movement across key global trade markets including the Middle East, Asia, Africa, Europe and the Americas.",
  },
  {
    q: "Does NSPL handle both import and export cargo?",
    a: "Yes. We manage both import and export logistics, including documentation, customs clearance and coordination with carriers and partners at origin and destination.",
  },
  {
    q: "How can I get a freight quote from NSPL?",
    a: "You can request a quote by filling in your cargo, origin and destination details through our contact section, or by emailing us directly at info@nspl.in.",
  },
];

const initialQuoteForm = {
  name: "",
  email: "",
  phone: "",
  service: "Ocean Freight",
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

    const subject = `Quote Request — ${fields.service} (${fields.origin} to ${fields.destination})`;
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

    window.location.href = `mailto:info@nspl.in?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-[#E1D6C5] bg-white p-8 sm:p-10">
        <CheckCircle2 size={30} className="text-nspl-goldDark" />
        <h3 className="font-serif text-2xl text-nspl-brown">
          Your enquiry is ready to send
        </h3>
        <p className="text-sm leading-6 text-nspl-copper">
          We've opened your email app with your quote request pre-filled to
          info@nspl.in. If it didn't open, email us directly with your cargo,
          origin and destination details.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(initialQuoteForm);
            setSubmitted(false);
          }}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#CDBFA9] bg-white px-5 py-2.5 text-sm font-semibold text-nspl-brown transition hover:border-nspl-gold"
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
    <div className="rounded-2xl border border-[#E1D6C5] bg-white p-6 shadow-[0_18px_45px_rgba(92,58,11,.08)] sm:p-8">
      <h3 className="font-serif text-2xl text-nspl-brown">Request a Quote</h3>
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
            placeholder="+91 XX XXX XXXXX"
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
            <option>Ocean Freight</option>
            <option>Air Freight</option>
            <option>Land Transportation</option>
            <option>Project Logistics</option>
            <option>Warehousing & 3PL</option>
            <option>Customs Clearance</option>
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
      "NSPL | Naventra Shipping India Pvt Ltd — Freight Forwarding & Logistics Company in Navi Mumbai, India";

    const description =
      "Naventra Shipping India Pvt Ltd (NSPL) is a Navi Mumbai based freight forwarding and logistics company offering ocean freight, air freight, land transportation, project logistics, warehousing, 3PL and customs clearance services across India and global trade markets.";

    const keywords =
      "freight forwarding company India, logistics company Navi Mumbai, ocean freight forwarders, air freight services India, customs clearance agent Mumbai, project cargo logistics, 3PL warehousing India, international shipping company, NSPL Naventra Shipping";

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
      email: "info@nspl.in",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "6TH FLOOR, 604, Akshat Elite, Bhendkhal Road, Aashirwad Stationery & General Store, Dronagiri",
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
    ["Why NSPL", "why-nspl"],
    ["Contact", "contact"],
  ];

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FDFBF6] text-nspl-charcoal">
      {/* Slim business announcement */}
      <div className="border-b border-[#E7DDCC] bg-white px-4 py-2 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-nspl-brown sm:px-5 sm:text-[10px] sm:tracking-[0.25em] md:text-xs">
        Global Shipping • Freight Forwarding • Logistics
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#E7DDCC] bg-white/95 backdrop-blur">
        <div className="container-nspl flex h-[76px] items-center justify-between sm:h-[88px] lg:h-[104px]">
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
              className="h-[52px] w-auto max-w-[150px] object-contain mix-blend-multiply sm:h-[68px] sm:max-w-[210px] lg:h-[92px] lg:max-w-[260px]"
            />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex lg:gap-8"
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
          <div className="border-t border-[#E7DDCC] bg-white px-5 py-5 lg:hidden">
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
        {/* HERO — white/cream instead of a heavy color background */}
        <section
          id="home"
          className="relative overflow-hidden border-b border-[#E7DDCC] bg-white"
        >
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] opacity-70 sm:block">
            <div className="absolute right-[-8rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full border border-nspl-gold/20" />
            <div className="absolute right-[-3rem] top-[-3rem] h-[25rem] w-[25rem] rounded-full border border-nspl-gold/15" />
            <div className="absolute right-[5rem] top-[4rem] h-3 w-3 rounded-full bg-nspl-gold" />
            <div className="absolute right-[16rem] top-[13rem] h-2 w-2 rounded-full bg-nspl-brown" />
          </div>

          <div className="container-nspl relative grid min-h-0 items-center gap-10 py-14 sm:gap-14 sm:py-20 lg:min-h-[650px] lg:grid-cols-[1.02fr_.98fr] lg:py-24">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E3D6C2] bg-[#FDFBF6] px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-nspl-brown sm:mb-6 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                <CircleDot size={13} className="text-nspl-gold" />
                Naventra Shipping India Pvt Ltd
              </div>

              <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-nspl-deep sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.02em] lg:text-6xl xl:text-[4.6rem]">
                Freight forwarding
                <span className="block text-nspl-goldDark">
                  and logistics, done right.
                </span>
              </h1>

              <div className="my-6 h-px w-24 bg-gradient-to-r from-nspl-gold to-transparent sm:my-7 sm:w-32" />

              <p className="max-w-2xl text-base leading-7 text-nspl-copper sm:text-lg sm:leading-8">
                Naventra Shipping India Pvt Ltd (NSPL) is a Navi Mumbai based
                freight forwarding and logistics company, delivering practical,
                end-to-end shipping solutions across ocean, air and land — with
                clarity, reliability and care.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-nspl-gold px-6 py-3.5 font-bold text-nspl-deep transition hover:bg-nspl-goldDark hover:text-white sm:px-7 sm:py-4"
                >
                  Request a Quote <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CDBFA9] bg-white px-6 py-3.5 font-semibold text-nspl-brown transition hover:border-nspl-gold hover:bg-[#FDFBF6] sm:px-7 sm:py-4"
                >
                  Explore Services <ChevronDown size={18} />
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:mt-12 sm:gap-x-7 sm:grid-cols-4">
                {stats.map(([number, label]) => (
                  <div
                    key={label}
                    className="border-l border-nspl-gold/30 pl-3"
                  >
                    <div className="font-serif text-lg text-nspl-brown sm:text-xl">
                      {number}
                    </div>
                    <div className="mt-1 text-[11px] leading-5 text-nspl-copper">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BUSINESS ROUTE VISUAL */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-[1.5rem] border border-[#E1D4C0] bg-[#FDFBF6] p-3 shadow-[0_25px_70px_rgba(92,58,11,.10)] sm:rounded-[2rem] sm:p-4 sm:p-5">
                <div className="relative min-h-[320px] overflow-hidden rounded-[1.25rem] border border-[#E8DECF] bg-white sm:min-h-[430px] sm:rounded-[1.5rem]">
                  {/* route lines */}
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 600 430"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <path
                      d="M70 325 C145 270, 180 160, 285 185 S390 275, 515 105"
                      stroke="#D4A017"
                      strokeWidth="2"
                      strokeDasharray="7 8"
                      opacity=".75"
                    />
                    <path
                      d="M70 325 C165 360, 225 315, 310 300 S430 235, 515 105"
                      stroke="#8B5E34"
                      strokeWidth="1.5"
                      strokeDasharray="5 8"
                      opacity=".38"
                    />
                    <circle cx="70" cy="325" r="7" fill="#5C3A0B" />
                    <circle cx="285" cy="185" r="7" fill="#D4A017" />
                    <circle cx="515" cy="105" r="7" fill="#5C3A0B" />
                  </svg>

                  <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-nspl-goldDark sm:text-[10px] sm:tracking-[0.25em]">
                      Cargo journey
                    </p>
                    <h2 className="mt-2 font-serif text-lg text-nspl-brown sm:text-2xl">
                      Origin → Destination
                    </h2>
                  </div>

                  <div className="absolute bottom-5 left-5 rounded-xl border border-[#E6DCCB] bg-white p-3 shadow-sm sm:bottom-8 sm:left-7 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7EFD8] text-nspl-goldDark sm:h-10 sm:w-10">
                        <Container size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-nspl-brown sm:text-xs">
                          Shipment ready
                        </p>
                        <p className="text-[10px] text-nspl-copper sm:text-[11px]">
                          Coordinated end-to-end
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-5 top-16 rounded-xl border border-[#E6DCCB] bg-white p-3 shadow-sm sm:right-7 sm:top-24 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <Globe2
                        size={20}
                        className="text-nspl-goldDark sm:hidden"
                      />
                      <Globe2
                        size={24}
                        className="hidden text-nspl-goldDark sm:block"
                      />
                      <div>
                        <p className="text-[11px] font-bold text-nspl-brown sm:text-xs">
                          Global reach
                        </p>
                        <p className="text-[10px] text-nspl-copper sm:text-[11px]">
                          Connected trade lanes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-5 grid grid-cols-3 gap-1.5 sm:bottom-8 sm:right-7 sm:gap-2">
                    {[
                      [Ship, "SEA"],
                      [Plane, "AIR"],
                      [Truck, "ROAD"],
                    ].map(([Icon, label]) => (
                      <div
                        key={label}
                        className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border border-[#E6DCCB] bg-[#FDFBF6] sm:h-16 sm:w-16"
                      >
                        <Icon
                          size={16}
                          className="text-nspl-goldDark sm:hidden"
                        />
                        <Icon
                          size={19}
                          className="hidden text-nspl-goldDark sm:block"
                        />
                        <span className="mt-1 text-[8px] font-bold tracking-widest text-nspl-brown sm:text-[9px]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute left-5 top-[52%] -translate-y-1/2 rounded-full border border-nspl-gold/30 bg-white p-3 shadow-sm sm:left-8 sm:top-[56%] sm:p-4">
                    <Anchor
                      size={20}
                      className="text-nspl-goldDark sm:hidden"
                    />
                    <Anchor
                      size={25}
                      className="hidden text-nspl-goldDark sm:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-[#E7DDCC] bg-[#FDFBF6]">
          <div className="container-nspl grid grid-cols-2 gap-y-5 divide-x divide-[#E2D7C7] py-6 sm:grid-cols-4 sm:gap-y-0 sm:py-7">
            {[
              ["Ocean", "International freight"],
              ["Air", "Time-sensitive cargo"],
              ["Land", "Ground connectivity"],
              ["Project", "Specialised cargo"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="px-3 first:pl-0 sm:px-4 sm:first:pl-0 sm:last:pr-0 lg:px-7"
              >
                <p className="font-serif text-base text-nspl-brown sm:text-lg">
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
          <div className="container-nspl grid gap-10 py-16 sm:gap-14 sm:py-24 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                About NSPL
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-nspl-brown sm:text-4xl sm:text-5xl">
                A dependable freight forwarding partner for every movement.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-nspl-copper sm:text-lg sm:leading-8">
                Naventra Shipping India Pvt Ltd is a full-service logistics
                company headquartered in Navi Mumbai, Maharashtra. We bring
                together freight forwarding, domestic transportation,
                warehousing, customs clearance and project logistics under one
                roof, so businesses across India can move cargo with fewer
                handoffs and more visibility.
              </p>
              <p className="mt-4 text-base leading-7 text-nspl-copper sm:text-lg sm:leading-8">
                Whether you're shipping a single container by ocean freight,
                arranging urgent air cargo, or coordinating a multi-leg project
                logistics movement, our team manages the details so you can stay
                focused on your business.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Understand", "Cargo, route and timeline."],
                  ["02", "Coordinate", "The right mode and partners."],
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
          <div className="container-nspl py-16 sm:py-24">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                  Our services
                </p>
                <h2 className="mt-4 font-serif text-3xl text-nspl-brown sm:text-4xl sm:text-5xl">
                  Freight forwarding and logistics services, without the
                  complexity.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-nspl-copper">
                A focused range of shipping and logistics services — ocean
                freight, air freight, land transport, project cargo, warehousing
                and customs clearance — brought together under one roof for
                businesses across India.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text, tag }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-[#E1D6C5] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-nspl-gold/50 hover:shadow-[0_18px_45px_rgba(92,58,11,.10)] sm:p-7"
                >
                  <div className="absolute right-6 top-6 text-[9px] font-bold tracking-[0.22em] text-[#B7AA99]">
                    {tag}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-nspl-gold/20 bg-[#F9F1DF] text-nspl-goldDark transition group-hover:bg-nspl-gold group-hover:text-nspl-deep">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl text-nspl-brown sm:mt-7 sm:text-2xl">
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

        {/* PROCESS / BUSINESS ELEMENTS */}
        <section className="bg-white">
          <div className="container-nspl py-16 sm:py-24">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                How we work
              </p>
              <h2 className="mt-4 font-serif text-3xl text-nspl-brown sm:text-4xl sm:text-5xl">
                A clear path from booking to delivery.
              </h2>
            </div>

            <div className="relative mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 md:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#DCCEB9] md:block" />
              {[
                [Route, "Plan", "Understand the cargo, route and requirement."],
                [
                  Container,
                  "Coordinate",
                  "Select the right mode, partners and documentation.",
                ],
                [
                  PackageCheck,
                  "Move",
                  "Track the shipment through its key milestones.",
                ],
                [
                  CheckCircle2,
                  "Deliver",
                  "Complete the journey with dependable support.",
                ],
              ].map(([Icon, title, text], index) => (
                <div key={title} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-nspl-gold/30 bg-white text-nspl-goldDark shadow-sm">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>
                  <span className="mt-4 block text-[10px] font-bold tracking-[0.2em] text-nspl-goldDark">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-nspl-brown">
                    {title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-nspl-copper">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL REACH */}
        <section className="border-y border-[#E7DDCC] bg-[#FDFBF6]">
          <div className="container-nspl grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                Global connectivity
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-nspl-brown sm:text-4xl sm:text-5xl">
                Supporting international trade across key global markets.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-nspl-copper">
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

            <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-nspl-gold/30 bg-white shadow-sm sm:h-44 sm:w-44">
              <div className="absolute inset-4 rounded-full border border-nspl-gold/15" />
              <div className="absolute inset-9 rounded-full border border-nspl-brown/10" />
              <Globe2
                size={52}
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
          <div className="container-nspl grid gap-10 py-16 sm:gap-14 sm:py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-gold">
                Why NSPL
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl sm:text-5xl">
                Professional service. Personal attention.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-nspl-sand sm:leading-8">
                As a dedicated freight forwarding and logistics company, we
                focus on the details behind every shipment — documentation,
                routing, timelines and communication — so our customers can
                focus on their business.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-nspl-gold/50 px-6 py-3 text-sm font-semibold text-nspl-paleGold transition hover:bg-nspl-gold hover:text-nspl-deep"
              >
                Speak with our team <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  ShieldCheck,
                  "Dependable",
                  "Clear processes and careful coordination for every movement.",
                ],
                [
                  Clock3,
                  "Time focused",
                  "Solutions designed around your cargo and delivery timeline.",
                ],
                [
                  Headphones,
                  "Responsive",
                  "Practical support when you need an answer or update.",
                ],
                [
                  Boxes,
                  "Flexible",
                  "From regular freight to specialised project cargo requirements.",
                ],
              ].map(([Icon, title, text]) => (
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
          </div>
        </section>

        {/* FAQ — SEO-friendly structured content */}
        <section id="faq" className="bg-white">
          <div className="container-nspl py-16 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                Frequently asked questions
              </p>
              <h2 className="mt-4 font-serif text-3xl text-nspl-brown sm:text-4xl sm:text-5xl">
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
                      <span className="font-serif text-base text-nspl-brown sm:text-lg">
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
          <div className="container-nspl py-14 sm:py-20">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#DCCEB9] bg-[#FDFBF6] px-6 py-10 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14">
              <div className="pointer-events-none absolute right-[-5rem] top-[-6rem] hidden h-52 w-52 rounded-full border border-nspl-gold/20 sm:block" />
              <div className="pointer-events-none absolute right-10 top-10 hidden h-3 w-3 rounded-full bg-nspl-gold sm:block" />

              <div className="relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-14">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-nspl-goldDark">
                    Start a conversation
                  </p>
                  <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-nspl-deep sm:text-4xl sm:text-5xl">
                    Let's move your next shipment.
                  </h2>
                  <p className="mt-4 max-w-md text-nspl-copper">
                    Share your cargo, origin and destination with our team and
                    discover the right freight forwarding and logistics solution
                    for your business.
                  </p>

                  <div className="mt-8 space-y-4 text-sm text-nspl-copper">
                    <p className="flex gap-3">
                      <Phone
                        size={17}
                        className="mt-0.5 shrink-0 text-nspl-goldDark"
                      />
                      +91 XX XXX XXXXX
                    </p>
                    <p className="flex gap-3">
                      <Mail
                        size={17}
                        className="mt-0.5 shrink-0 text-nspl-goldDark"
                      />
                      info@nspl.in
                    </p>
                    <p className="flex gap-3">
                      <MapPin
                        size={17}
                        className="mt-0.5 shrink-0 text-nspl-goldDark"
                      />
                      Navi Mumbai, Maharashtra, India
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
              className="h-16 w-auto max-w-[220px] rounded bg-white object-contain sm:h-20 sm:max-w-[260px]"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-nspl-copper">
              Naventra Shipping India Pvt Ltd — a Navi Mumbai based freight
              forwarding and logistics company, bridging possibilities across
              borders through dependable ocean, air and land shipping solutions.
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
                6TH FLOOR, 604, Akshat Elite, Bhendkhal Road, Aashirwad
                Stationery & General Store, Dronagiri, Navi Mumbai, Raigad
                400702
              </p>
              <p className="flex gap-3">
                <Phone size={17} className="shrink-0 text-nspl-goldDark" />
                +91 XX XXX XXXXX
              </p>
              <p className="flex gap-3">
                <Mail size={17} className="shrink-0 text-nspl-goldDark" />
                info@nspl.in
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
