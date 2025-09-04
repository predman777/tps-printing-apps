import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Static app data - can be moved to a backend API later
const ESTIMATE_APPS = [
  {
    name: "Nexpress",
    description: "Digital press pricing calculator for Nexpress equipment with real-time cost estimates.",
    href: "https://pricing-nexp.vercel.app/",
    image: "/nexpress-pricing.jpg",
    status: "active"
  },
  {
    name: "Roll Label Pricing",
    description: "Specialized pricing tool for roll label products with material and finishing options.",
    href: "https://roll-label.netlify.app/",
    image: "/trojan-roll-label-press.jpg",
    status: "active"
  },
  {
    name: "Outsource",
    description: "External vendor pricing and job routing system for specialized print services.",
    href: "#",
    image: "/outsource-estimator.jpg",
    status: "in-process"
  },
  {
    name: "Estimate Form",
    description: "Comprehensive job specification form with automated pricing integration.",
    href: "#",
    image: "/estimate.jpg",
    status: "in-process"
  },
  {
    name: "Parent Sheet Imposition Calculator",
    description: "Best-card cutting calculator for parent sheets with optimized layout planning and waste reduction.",
    href: "https://tps-printing.my.canva.site/daglaknkdpk",
    image: "/imposition-tool.jpg",
    status: "active"
  }
];

const GENERAL_APPS = [
  {
    name: "Parent Sheet Imposition Calculator",
    description: "Best-card cutting calculator for parent sheets with optimized layout planning and waste reduction.",
    href: "https://tps-printing.my.canva.site/daglaknkdpk",
    image: "/imposition-tool.jpg",
    status: "active"
  },
  {
    name: "Colex Imposition",
    description: "Specialized imposition tool for Colex cutting systems with material optimization.",
    href: "https://colex-impo.netlify.app/",
    image: "/colex-mimaki.jpg",
    status: "active"
  },
  {
    name: "Summa Imposition",
    description: "Automated imposition layouts for Summa cutting equipment and workflows.",
    href: "https://summa-impo.netlify.app/",
    image: "/summa.jpg",
    status: "active"
  },
  {
    name: "Booklet Proofing",
    description: "Interactive proofing system for booklet layouts with client approval workflow.",
    href: "https://tps-printing-booklet-proof-production.up.railway.app/",
    image: "/booklets.jpg",
    status: "active"
  },
  {
    name: "Folding and Flat Template Generator",
    description: "Template creation tool for folding and flat print products with custom dimensions.",
    href: "https://tps-printing-template-generator.netlify.app/",
    image: "/fold-template-generator.jpg",
    status: "active"
  },
  {
    name: "A1 PDF Extract",
    description: "PDF data extraction and processing tool for automated document analysis and content parsing.",
    href: "https://tps-import-pdf-extract.vercel.app/dev-login",
    image: "/a1-po-extractor.jpg",
    status: "active"
  },
  {
    name: "Email Signature",
    description: "Corporate email signature generator with brand-consistent templates.",
    href: "https://email-sig-tps.netlify.app/",
    image: "/email-sig-generator.jpg",
    status: "active"
  },
  {
    name: "PDF Compare",
    description: "Document comparison tool for analyzing differences between PDF files and versions.",
    href: "#",
    image: "/pdf-compare.jpg",
    status: "in-process"
  },
  {
    name: "Google Analytics",
    description: "Custom analytics dashboard for tracking print job performance and metrics.",
    href: "#",
    image: "/google-analytics.jpg",
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
            className="flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-xl group"
          >
            <img
              src="/TPS-Printing-Logo-horizontal-black-500x194.png"
              alt="TPS Printing Logo"
              className="h-8 transition-all duration-300 group-hover:scale-105"
              loading="eager"
            />
            <div className="flex items-center">
              <span className="text-[--brand-indigo] text-2xl font-light mr-1">|</span>
              <span
                className="text-xl font-bold text-[--brand-indigo] tracking-wide"
                style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              >
                Apps Hub
              </span>
            </div>
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
            <Link
              to="/roadmap"
              className="text-sm font-semibold text-neutral-700 hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              to="/branding"
              className="text-sm font-semibold text-neutral-700 hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] rounded-md px-1 py-1 transition-colors"
            >
              Branding
            </Link>
          </nav>
          <div className="flex gap-2">
            <Link
              to="/roadmap"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-[--brand-indigo] text-white hover:bg-[--brand-gold] hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] transition-colors"
            >
              Request Access
            </Link>
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
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[--brand-indigo] drop-shadow-sm"
              style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
            >
              Web Apps
            </h1>
            <p
              className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
            >
              Welcome! Here you’ll find tools to make your print projects easier. There are quick pricing calculators to imposition helpers, proofing systems, and more. Everything is designed to keep your jobs moving smoothly.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold] relative">
                      <img
                        src={app.image}
                        alt={`${app.name} preview`}
                        className={`h-full w-full ${
                          app.name === "Booklet Proofing" ? "object-contain" : "object-cover"
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 pointer-events-none z-20" style={{
                        background: 'linear-gradient(to bottom right, rgba(64, 53, 139, 2.0), transparent, rgba(249, 183, 41, 0.5))'
                      }}></div>
                      <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="bg-[--brand-indigo] text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                          Coming Soon
                        </div>
                      </div>
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
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold] relative">
                      <img
                        src={app.image}
                        alt={`${app.name} screenshot`}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                          app.name === "Booklet Proofing" ? "object-contain" : "object-cover"
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 pointer-events-none z-10" style={{
                        background: 'linear-gradient(to bottom right, rgba(64, 53, 139, 0.8), transparent, rgba(249, 183, 41, 0.5))'
                      }}></div>
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
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold] relative">
                      <img
                        src={app.image}
                        alt={`${app.name} preview`}
                        className={`h-full w-full ${
                          app.name === "Booklet Proofing" ? "object-contain" : "object-cover"
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 pointer-events-none z-20" style={{
                        background: 'linear-gradient(to bottom right, rgba(64, 53, 139, 0.8), transparent, rgba(249, 183, 41, 0.5))'
                      }}></div>
                      <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="bg-[--brand-indigo] text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                          Coming Soon
                        </div>
                      </div>
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
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-[--brand-pale-gold] relative">
                      <img
                        src={app.image}
                        alt={`${app.name} screenshot`}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                          app.name === "Booklet Proofing" ? "object-contain" : "object-cover"
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 pointer-events-none z-10" style={{
                        background: 'linear-gradient(to bottom right, rgba(64, 53, 139, 0.8), transparent, rgba(249, 183, 41, 0.5))'
                      }}></div>
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
