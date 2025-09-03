import React, { useState, useEffect } from "react";

// Static app data - can be moved to a backend API later
const ESTIMATE_APPS = [
  {
    name: "Nexpress",
    description: "Digital press pricing calculator for Nexpress equipment with real-time cost estimates.",
    href: "https://pricing-nexp.vercel.app/",
    image: "https://placehold.co/600x400/40358B/F9B729?text=Nexpress+Pricing",
    status: "active"
  },
  {
    name: "Roll Label Pricing",
    description: "Specialized pricing tool for roll label products with material and finishing options.",
    href: "https://roll-label.netlify.app/",
    image: "https://placehold.co/600x400/40358B/F9B729?text=Roll+Label+Pricing",
    status: "active"
  },
  {
    name: "Outsource",
    description: "External vendor pricing and job routing system for specialized print services.",
    href: "#",
    image: "https://placehold.co/600x400/d7d6dc/40358B?text=Coming+Soon",
    status: "in-process"
  },
  {
    name: "Estimate Form",
    description: "Comprehensive job specification form with automated pricing integration.",
    href: "#",
    image: "https://placehold.co/600x400/d7d6dc/40358B?text=Coming+Soon",
    status: "in-process"
  }
];

const GENERAL_APPS = [
  {
    name: "Booklet Proofing",
    description: "Interactive proofing system for booklet layouts with client approval workflow.",
    href: "https://tps-printing-booklet-proof-production.up.railway.app/",
    image: "https://placehold.co/600x400/40358B/F9B729?text=Booklet+Proofing",
    status: "active"
  },
  {
    name: "Email Signature",
    description: "Corporate email signature generator with brand-consistent templates.",
    href: "https://email-sig-tps.netlify.app/",
    image: "https://placehold.co/600x400/40358B/F9B729?text=Email+Signature",
    status: "active"
  },
  {
    name: "Summa Imposition",
    description: "Automated imposition layouts for Summa cutting equipment and workflows.",
    href: "https://summa-impo.netlify.app/",
    image: "https://placehold.co/600x400/40358B/F9B729?text=Summa+Imposition",
    status: "active"
  },
  {
    name: "Colex Imposition",
    description: "Specialized imposition tool for Colex cutting systems with material optimization.",
    href: "https://colex-impo.netlify.app/",
    image: "https://placehold.co/600x400/40358B/F9B729?text=Colex+Imposition",
    status: "active"
  },
  {
    name: "Folding and Flat Template Generator",
    description: "Template creation tool for folding and flat print products with custom dimensions.",
    href: "https://tps-printing-template-generator.netlify.app/",
    image: "https://placehold.co/600x400/40358B/F9B729?text=Template+Generator",
    status: "active"
  },
  {
    name: "A1 PDF Extract",
    description: "PDF data extraction and processing tool for automated document analysis and content parsing.",
    href: "https://tps-import-pdf-extract.vercel.app/dev-login",
    image: "https://placehold.co/600x400/40358B/F9B729?text=A1+PDF+Extract",
    status: "active"
  },
  {
    name: "PDF Compare",
    description: "Document comparison tool for analyzing differences between PDF files and versions.",
    href: "#",
    image: "https://placehold.co/600x400/d7d6dc/40358B?text=Coming+Soon",
    status: "in-process"
  },
  {
    name: "Google Analytics",
    description: "Custom analytics dashboard for tracking print job performance and metrics.",
    href: "#",
    image: "https://placehold.co/600x400/d7d6dc/40358B?text=Coming+Soon",
    status: "in-process"
  }
];

const brandCSSVars = {
  "--brand-gold": "#F9B729",
  "--brand-indigo": "#40358B",
  "--brand-pale-blue": "#C9D8FA",
  "--brand-dark-blue": "#DDE6FA",
  "--brand-pale-gold": "#FFF4DB",
  "--brand-orange": "#F9920B",
  "--brand-screened-indigo": "#d7d6dc",
  "--brand-700": "#40358B",
  "--brand-600": "#40358B",
  "--brand-500": "#F9B729",
  "--brand-400": "#C9D8FA",
  "--brand-300": "#F9920B",
  "--brand-200": "#FFF4DB",
  "--brand-100": "#DDE6FA",
};

// Helper component for smooth scrolling to sections
const ScrollLink = ({ children, to, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = to.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for sticky header
        behavior: "smooth",
      });
    }
  };
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Logo Placeholder component with improved styling
function TPSLogoPlaceholder() {
  const sizes = [128, 256, 512];
  const color = brandCSSVars["--brand-gold"];
  const bgColor = brandCSSVars["--brand-indigo"];

  function generateSvgUrl(size) {
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <rect width="100%" height="100%" fill="${color}" />
        <text x="50%" y="50%" font-family="Raleway, sans-serif" font-size="${
          size / 3
        }" font-weight="800" fill="${bgColor}" text-anchor="middle" dominant-baseline="middle">TPS</text>
      </svg>`;
    const encoded = typeof window !== "undefined" && window.btoa ? window.btoa(svg) : btoa(svg);
    return "data:image/svg+xml;base64," + encoded;
  }

  return (
    <div className="space-y-4 rounded-xl border border-[--brand-dark-blue] bg-[--brand-dark-blue] p-6">
      <h3
        className="text-lg font-bold text-neutral-800"
        style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
      >
        TPS Logo Downloads
      </h3>
      <div className="flex flex-wrap items-center gap-6">
        {sizes.map((s) => {
          const svgUrl = generateSvgUrl(s);
          return (
            <div key={s} className="flex flex-col items-center space-y-2">
              <img
                src={svgUrl}
                alt={`TPS Logo Placeholder ${s}x${s}`}
                width={s / 2}
                height={s / 2}
                className="rounded shadow-sm"
              />
              <a
                href={svgUrl}
                download={`TPS-logo-${s}.svg`}
                className="text-sm font-semibold text-[--brand-indigo] underline hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] rounded-md transition-colors"
              >
                Download SVG {s}px
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Main App Component
export default function TPSAppsHub() {
  const [estimateApps] = useState(ESTIMATE_APPS);
  const [generalApps] = useState(GENERAL_APPS);
  const [loading] = useState(false); // No loading needed for static data
  const [error] = useState(null); // No errors expected for static data

  return (
    <div
      className="min-h-screen bg-[--brand-pale-gold] text-neutral-900 selection:bg-[--brand-100] selection:text-neutral-900"
      style={brandCSSVars}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-[--brand-dark-blue]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-xl group"
          >
            <div
              className="h-10 w-10 rounded-xl bg-gradient-to-br from-[--brand-gold] to-[--brand-indigo] shadow-lg transition-all duration-300 group-hover:from-[--brand-indigo] group-hover:to-[--brand-gold] group-hover:scale-105"
              aria-hidden
            />
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
            >
              TPS Apps Hub
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            <ScrollLink
              className="text-sm font-semibold text-neutral-700 hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
              to="#estimate-tools"
            >
              Pricing Tools
            </ScrollLink>
            <ScrollLink
              className="text-sm font-semibold text-neutral-700 hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
              to="#apps"
            >
              Production Tools
            </ScrollLink>
            <ScrollLink
              className="text-sm font-semibold text-neutral-700 hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
              to="#estimating"
            >
              Roadmap
            </ScrollLink>
            <ScrollLink
              className="text-sm font-semibold text-neutral-700 hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
              to="#about"
            >
              About
            </ScrollLink>
          </nav>
          <div className="flex gap-2">
            <ScrollLink
              to="#estimating"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-[--brand-indigo] text-white hover:bg-[--brand-gold] hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] transition-colors"
            >
              Request Access
            </ScrollLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden
          className="absolute -top-40 -left-40 h-80 w-80 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-[--brand-pale-blue] to-[--brand-indigo]"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-40 h-80 w-80 rounded-full opacity-10 blur-3xl bg-gradient-to-tr from-[--brand-gold] to-[--brand-indigo]"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[--brand-indigo] drop-shadow-sm"
                style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              >
                A comfortable home for <br /> TPS web apps
              </h1>
              <p
                className="mt-6 text-lg text-neutral-700"
                style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
              >
                One clean starting point for production tools, prototypes, and
                future systems—built to reflect our brand, stay accessible, and
                scale with our workflow.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ScrollLink
                  to="#estimate-tools"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold shadow-md bg-[--brand-indigo] text-white hover:bg-[--brand-gold] hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] transition-colors"
                >
                  View Pricing Tools
                </ScrollLink>
                <ScrollLink
                  to="#apps"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold border border-[--brand-dark-blue] text-neutral-700 hover:border-[--brand-indigo] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] transition-colors"
                >
                  Production Tools
                </ScrollLink>
              </div>

              <ul className="mt-10 grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-neutral-700">
                {[
                  "Brand-consistent colors & typography",
                  "Keyboard & screen-reader friendly",
                  "Fast to scan, easy to update",
                  "Designed for B2B workflows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 mt-0.5 text-[--brand-orange]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="relative">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl ring-2 ring-[--brand-dark-blue] shadow-lg">
                <img
                  src="https://placehold.co/1200x750/C9D8FA/40358B?text=Apps+Hub+Showcase"
                  alt="Screenshots collage of TPS internal apps"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="sr-only">
                Screenshots of TPS internal apps
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Current Estimate Tools */}
      <section
        id="estimate-tools"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[--brand-indigo]"
            style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
          >
            Current Estimate Tools
          </h2>
          <p
            className="text-sm text-neutral-600"
            style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
          >
            Available now - click to access pricing tools.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {estimateApps.map((app) => {
            const isInProcess = app.status === 'in-process';
            return (
              <div
                key={app.name}
                className={`group block rounded-2xl border border-[--brand-dark-blue] bg-white shadow-sm transition-all duration-300 ${
                  isInProcess 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] transform hover:-translate-y-1'
                }`}
              >
                {isInProcess ? (
                  <div className="w-full">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold]">
                      <img
                        src={app.image}
                        alt={`${app.name} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-lg font-bold tracking-tight text-[--brand-screened-indigo]"
                        style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
                      >
                        {app.name}
                      </h3>
                      <p
                        className="mt-2 text-sm text-neutral-600"
                        style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
                      >
                        {app.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[--brand-screened-indigo]">
                        <span>In Development</span>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="m12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6v-4z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block w-full"
                    aria-label={`Open ${app.name}`}
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold]">
                      <img
                        src={app.image}
                        alt={`${app.name} screenshot`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-lg font-bold tracking-tight text-[--brand-indigo]"
                        style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
                      >
                        {app.name}
                      </h3>
                      <p
                        className="mt-2 text-sm text-neutral-700"
                        style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
                      >
                        {app.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[--brand-orange] transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                        <span>Open tool</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* General Apps Grid */}
      <section
        id="apps"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[--brand-indigo]"
            style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
          >
            Production Tools
          </h2>
          <p
            className="text-sm text-neutral-600"
            style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
          >
            Click an app to open it in a new tab.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <p className="text-neutral-500 col-span-full text-center">
              Loading apps...
            </p>
          )}
          {error && (
            <p className="text-red-500 col-span-full text-center">
              Error: {error}
            </p>
          )}
          {!loading && !error && generalApps.map((app) => {
            const isInProcess = app.status === 'in-process';
            return (
              <div
                key={app.name}
                className={`group block rounded-2xl border border-[--brand-dark-blue] bg-white shadow-sm transition-all duration-300 ${
                  isInProcess 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] transform hover:-translate-y-1'
                }`}
              >
                {isInProcess ? (
                  <div className="w-full">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold]">
                      <img
                        src={app.image}
                        alt={`${app.name} preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-lg font-bold tracking-tight text-[--brand-screened-indigo]"
                        style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
                      >
                        {app.name}
                      </h3>
                      <p
                        className="mt-2 text-sm text-neutral-600"
                        style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
                      >
                        {app.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[--brand-screened-indigo]">
                        <span>In Development</span>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="m12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6v-4z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block w-full"
                    aria-label={`Open ${app.name}`}
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold]">
                      <img
                        src={app.image}
                        alt={`${app.name} screenshot`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-lg font-bold tracking-tight text-[--brand-indigo]"
                        style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
                      >
                        {app.name}
                      </h3>
                      <p
                        className="mt-2 text-sm text-neutral-700"
                        style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
                      >
                        {app.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[--brand-orange] transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                        <span>Open app</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Estimating System */}
      <section
        id="estimating"
        className="bg-white border-y border-[--brand-dark-blue]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[--brand-indigo]"
                style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              >
                Estimating System (roadmap)
              </h2>
              <p
                className="mt-4 text-neutral-700"
                style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
              >
                We’re building a modern estimating system to model complex print
                workflows—quotes, component breakdowns, and approvals—integrated
                directly with our internal apps hub.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-neutral-800">
                {[
                  "Flexible spec capture (sizes, stocks, inks, finishes)",
                  "Scenario comparison and quick ballparks",
                  "CSV/API export to ERP/ship systems",
                  "Role-based access and approvals",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 flex-shrink-0 text-[--brand-gold]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <ScrollLink
                  to="#estimate-tools"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold shadow-md bg-[--brand-indigo] text-white hover:bg-[--brand-gold] hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] transition-colors"
                >
                  View Current Tools
                </ScrollLink>
                <a
                  href="mailto:support@tpsprinting.com?subject=TPS%20Estimating%20System%20Feedback"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold border border-[--brand-dark-blue] text-neutral-700 hover:border-[--brand-indigo] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] transition-colors"
                >
                  Send Feedback
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-[--brand-dark-blue] bg-[--brand-pale-gold] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div
                  className="h-10 w-48 rounded-lg bg-gradient-to-r from-[--brand-gold] to-[--brand-indigo]"
                  aria-hidden
                />
                <div
                  className="h-10 w-10 rounded-full bg-[--brand-pale-blue] animate-pulse"
                  aria-hidden
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white p-6 shadow-sm border border-[--brand-dark-blue] space-y-4">
                  <div
                    className="h-5 w-28 rounded bg-[--brand-pale-blue]"
                    aria-hidden
                  />
                  <div className="space-y-3">
                    <div
                      className="h-9 rounded-lg bg-[--brand-screened-indigo]"
                      aria-hidden
                    />
                    <div
                      className="h-9 rounded-lg bg-[--brand-screened-indigo]"
                      aria-hidden
                    />
                    <div
                      className="h-9 rounded-lg bg-[--brand-screened-indigo]"
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm border border-[--brand-dark-blue] space-y-4">
                  <div
                    className="h-5 w-40 rounded bg-[--brand-pale-blue]"
                    aria-hidden
                  />
                  <div className="space-y-3">
                    <div
                      className="h-9 rounded-lg bg-[--brand-screened-indigo]"
                      aria-hidden
                    />
                    <div
                      className="h-9 rounded-lg bg-[--brand-screened-indigo]"
                      aria-hidden
                    />
                    <div
                      className="h-9 rounded-lg bg-[--brand-screened-indigo]"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-[--brand-dark-blue]">
                <div className="flex items-center justify-between">
                  <div
                    className="h-5 w-28 rounded bg-[--brand-pale-blue]"
                    aria-hidden
                  />
                  <div
                    className="h-10 w-32 rounded-lg bg-[--brand-indigo]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Brand */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[--brand-indigo]"
              style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
            >
              Built for TPS Printing
            </h2>
            <p
              className="mt-4 text-neutral-700"
              style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
            >
              This hub follows our brand guidance (colors, typography, and
              contrast), favors clarity over clutter, and keeps navigation
              obvious so our team can get to work quickly.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-neutral-800">
              <li>
                <span className="font-semibold text-[--brand-indigo]">
                  • Raleway (headings), Open Sans (body)
                </span>
              </li>
              <li>
                <span className="font-semibold text-[--brand-indigo]">
                  • Accessible contrast and focus rings
                </span>
              </li>
              <li>
                <span className="font-semibold text-[--brand-indigo]">
                  • Mobile-first, keyboard friendly
                </span>
              </li>
              <li>
                <span className="font-semibold text-[--brand-indigo]">
                  • Lightweight animations (reduced-motion aware)
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <TPSLogoPlaceholder />
            </div>
          </div>
          <div className="rounded-2xl border border-[--brand-dark-blue] bg-white p-8 shadow-sm space-y-6">
            <h3
              className="text-lg font-bold text-neutral-800"
              style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
            >
              Brand Colors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Indigo / Purple",
                  var: "--brand-indigo",
                  hex: "#40358B",
                  use: "Primary headers, buttons, nav.",
                },
                {
                  name: "Orange",
                  var: "--brand-orange",
                  hex: "#F9920B",
                  use: "CTA text, badges, emphasis.",
                },
                {
                  name: "Gold",
                  var: "--brand-gold",
                  hex: "#F9B729",
                  use: "Highlights, gradients, key accents.",
                },
                {
                  name: "Pale Gold",
                  var: "--brand-pale-gold",
                  hex: "#FFF4DB",
                  use: "Section backgrounds, cards.",
                },
                {
                  name: "Pale Blue",
                  var: "--brand-pale-blue",
                  hex: "#C9D8FA",
                  use: "Soft accents, pills, tags.",
                },
                {
                  name: "Dark Blue",
                  var: "--brand-dark-blue",
                  hex: "#DDE6FA",
                  use: "Dividers, borders, subtle fills.",
                },
                {
                  name: "Screened Indigo",
                  var: "--brand-screened-indigo",
                  hex: "#d7d6dc",
                  use: "Muted backgrounds and tints.",
                },
              ].map(({ name, var: v, hex, use }) => (
                <div
                  key={v}
                  className="rounded-xl border border-[--brand-dark-blue] overflow-hidden"
                >
                  <div
                    className="h-16"
                    style={{ background: `var(${v})` }}
                    aria-hidden
                  />
                  <div className="px-4 py-3 text-sm">
                    <div className="font-semibold text-neutral-800">
                      {name}
                    </div>
                    <code className="text-xs text-neutral-600 font-mono">
                      {hex}
                    </code>
                    <p className="mt-1 text-xs text-neutral-600">{use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[--brand-dark-blue]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-neutral-700"
            style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
          >
            © {new Date().getFullYear()} TPS Printing. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:support@tpsprinting.com"
              className="hover:text-[--brand-indigo] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
            >
              support@tpsprinting.com
            </a>
            <a
              href="#"
              className="hover:text-[--brand-indigo] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-[--brand-indigo] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
