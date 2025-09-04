import React from "react";
import { Link } from "react-router-dom";

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

// TPS Logo Downloads component
function TPSLogoDownloads() {
  const logos = [
    {
      name: "Square Logo - Black",
      filename: "TPS-Printing-Logo-black-transparent-1000x817.png",
      size: "1000×817",
      description: "Transparent background"
    },
    {
      name: "Horizontal Logo - Black",
      filename: "TPS-Printing-Logo-horizontal-black-500x194.png",
      size: "500×194",
      description: "White background"
    },
    {
      name: "Horizontal Logo - Black",
      filename: "TPS-Printing-Logo-horizontal-blk-1000x388.png",
      size: "1000×388",
      description: "White background"
    },
    {
      name: "Horizontal Logo - Black",
      filename: "TPS-Printing-Logo-horizontal-blk-2000x776.png",
      size: "2000×776",
      description: "White background (HD)"
    },
    {
      name: "Horizontal Logo - White",
      filename: "TPS-Printing-Logo-horizontal-wh-500x194.png",
      size: "500×194",
      description: "For dark backgrounds"
    },
    {
      name: "Horizontal Logo - White",
      filename: "TPS-Printing-Logo-horizontal-wh-1000x388.png",
      size: "1000×388",
      description: "For dark backgrounds"
    }
  ];

  return (
    <div className="space-y-4 rounded-xl border border-[--brand-pale-blue] bg-white p-6">
      <h3
        className="text-lg font-bold text-[--brand-indigo]"
        style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
      >
        TPS Logo Downloads
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {logos.map((logo, index) => {
          return (
            <div key={index} className="flex flex-col items-center space-y-3 p-4 bg-[--brand-dark-blue] rounded-lg shadow-md">
              <div className="w-full h-20 flex items-center justify-center rounded-md bg-[--brand-dark-blue]">
                <img
                  src={`/${logo.filename}`}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain rounded"
                  loading="lazy"
                />
              </div>
              <div className="text-center space-y-1">
                <div className="text-sm font-semibold text-[--brand-indigo]">{logo.name}</div>
                <div className="text-xs text-neutral-700">{logo.size}</div>
                <div className="text-xs text-neutral-600">{logo.description}</div>
              </div>
              <a
                href={`/${logo.filename}`}
                download={logo.filename}
                className="text-sm font-semibold text-[--brand-indigo] underline hover:text-[--brand-orange] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] rounded-md px-2 py-1 transition-colors"
              >
                Download PNG
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Branding() {
  return (
    <div
      className="min-h-screen bg-[--brand-pale-gold] text-neutral-900 selection:bg-[--brand-100] selection:text-neutral-900"
      style={brandCSSVars}
    >
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-[--brand-dark-blue]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            to="/"
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
                Branding
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-[--brand-indigo] text-white hover:bg-[--brand-gold] hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] transition-colors"
          >
            ← Back to Apps Hub
          </Link>
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
              TPS Branding
            </h1>
            <p
              className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
            >
              Brand guidelines, color palette, typography standards, and logo assets for TPS Printing. 
              Consistent visual identity across all digital and print materials.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[--brand-indigo]"
              style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
            >
              Brand Standards
            </h2>
            <p
              className="mt-4 text-neutral-700"
              style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
            >
              Our brand identity reflects professionalism, reliability, and innovation in print services. 
              These standards ensure consistent presentation across all TPS applications and materials.
            </p>
            <div className="mt-10">
              <TPSLogoDownloads />
            </div>
          </div>
          <div className="space-y-6">
            {/* Typography Section */}
            <div className="rounded-2xl border border-[--brand-dark-blue] bg-white p-6 shadow-sm">
              <h3
                className="text-lg font-bold text-neutral-800 mb-4"
                style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              >
                Typography
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[--brand-pale-gold] rounded-lg">
                  <div>
                    <div className="font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>Raleway</div>
                    <div className="text-sm text-neutral-600">Headings & Titles</div>
                  </div>
                  <div className="text-2xl font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>Aa</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-[--brand-pale-gold] rounded-lg">
                  <div>
                    <div className="font-bold text-[--brand-indigo]" style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}>Open Sans</div>
                    <div className="text-sm text-neutral-600">Body Text & UI</div>
                  </div>
                  <div className="text-2xl font-semibold text-[--brand-indigo]" style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}>Aa</div>
                </div>
              </div>
            </div>
            
            {/* Brand Colors Section */}
            <div className="rounded-2xl border border-[--brand-dark-blue] bg-white p-4 shadow-sm">
              <h3
                className="text-lg font-bold text-neutral-800 mb-4"
                style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              >
                Brand Colors
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                  className="rounded-lg border border-[--brand-dark-blue] overflow-hidden"
                >
                  <div
                    className="h-12"
                    style={{ background: `var(${v})` }}
                    aria-hidden
                  />
                  <div className="px-3 py-2 text-xs">
                    <div className="font-semibold text-neutral-800">
                      {name}
                    </div>
                    <code className="text-xs text-neutral-600 font-mono">
                      {hex}
                    </code>
                    <p className="text-xs text-neutral-500">{use}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="rounded-2xl border border-[--brand-dark-blue] bg-white p-6 shadow-sm">
              <h3
                className="text-lg font-bold text-neutral-800 mb-4"
                style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}
              >
                Usage Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[--brand-orange] rounded-full mt-2"></span>
                  <span>Use Raleway for all headings, titles, and navigation elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[--brand-orange] rounded-full mt-2"></span>
                  <span>Open Sans for body text, descriptions, and UI elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[--brand-orange] rounded-full mt-2"></span>
                  <span>Maintain consistent spacing and hierarchy across applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[--brand-orange] rounded-full mt-2"></span>
                  <span>Use gradient overlays with brand colors for equipment imagery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[--brand-orange] rounded-full mt-2"></span>
                  <span>Ensure accessibility with proper contrast ratios</span>
                </li>
              </ul>
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
