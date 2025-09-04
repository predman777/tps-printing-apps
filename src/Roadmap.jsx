import React, { useState } from "react";
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

// Roadmap Accordion component for future phases
function RoadmapAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const futurePhases = [
    {
      phase: "Phase 6: Enhancements",
      items: [
        "Build customer-facing interface",
        "Accept / deny estimates",
        "Capture digital approval signature / timestamp",
        "Quick survey if denied",
        "Explore vendor integrations (Spicers API, outsource vendors)",
        "Add versioning and audit trails (track who made estimate changes)"
      ]
    },
    {
      phase: "Phase 7: Rollout & Continuous Improvement",
      items: [
        "Pilot with a few internal users (sales/account managers)",
        "Refine based on feedback",
        "Prepare training materials & documentation",
        "Deploy full rollout to team",
        "Ongoing support & feature requests"
      ]
    }
  ];

  return (
    <div className="border border-[--brand-dark-blue] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-[--brand-pale-blue] text-left flex items-center justify-between hover:bg-[--brand-dark-blue] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo]"
      >
        <span className="font-semibold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
          Future Enhancement Phases: 6-7 (Click to expand)
        </span>
        <svg
          className={`w-5 h-5 text-[--brand-indigo] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="bg-white">
          {futurePhases.map((phase, index) => (
            <div key={index} className="border-t border-[--brand-dark-blue] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[--brand-screened-indigo] rounded-full flex items-center justify-center">
                  <span className="text-[--brand-indigo] font-bold text-sm">{index + 6}</span>
                </div>
                <h4 className="text-base font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                  {phase.phase}
                </h4>
              </div>
              <ul className="space-y-2 text-sm ml-11">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-screened-indigo] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Roadmap() {
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
                Roadmap
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
              Estimating System Roadmap
            </h1>
            <p
              className="mt-6 text-lg text-neutral-700 max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans, ui-sans-serif, system-ui" }}
            >
              Building a comprehensive estimating system to streamline print workflows, quotes, and approvals.
              Track our progress and upcoming features across all development phases.
            </p>
            
            {/* Compact Progress Bar */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto border border-[--brand-dark-blue]">
              <div className="space-y-3">
                {/* Phase 1 Progress */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-[--brand-indigo]">Phase 1: Discovery & Planning</span>
                    <span className="text-sm font-semibold text-[--brand-orange]">4/5 (80%)</span>
                  </div>
                  <div className="w-full bg-[--brand-screened-indigo] rounded-full h-1.5">
                    <div className="bg-[--brand-orange] h-1.5 rounded-full transition-all duration-500" style={{width: '80%'}}></div>
                  </div>
                </div>
                
                {/* Overall Progress */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-[--brand-indigo]">Overall Project Progress</span>
                    <span className="text-sm font-semibold text-[--brand-indigo]">Phase 1/7 (14%)</span>
                  </div>
                  <div className="w-full bg-[--brand-screened-indigo] rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-[--brand-gold] to-[--brand-indigo] h-1.5 rounded-full transition-all duration-500" style={{width: '14%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 mt-2">Currently finishing Phase 1 - one task remaining</p>
            </div>
          </div>
        </div>

      </section>

      {/* Main Content */}
      <section className="bg-white border-y border-[--brand-dark-blue]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">

            {/* Phase Cards */}
            <div className="space-y-6">
              {/* Phase 1 - Current Active Phase */}
              <div className="bg-white border-2 border-[--brand-orange] rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[--brand-orange] rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                    Phase 1: Discovery & Planning 🔄 Current Phase
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-gold] rounded-full"></span>
                    Interview team to determine what is important ✅
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-gold] rounded-full"></span>
                    Review current state of TPS Print MIS with Paul ✅
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-gold] rounded-full"></span>
                    Recreate Nexpress Calculator to understand how it was built ✅
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-gold] rounded-full"></span>
                    Review Roll Label Pricing Calculator ✅
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-orange] rounded-full"></span>
                    Build Outsource Calculator
                  </li>
                </ul>
              </div>

              {/* Phase 2 - Not Started */}
              <div className="bg-[--brand-pale-gold] border border-[--brand-dark-blue] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[--brand-screened-indigo] rounded-full flex items-center justify-center">
                    <span className="text-[--brand-indigo] font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                    Phase 2: System Setup ⏳ Not Started
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Set up Database with GoogleSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Set up Storage with Google Cloud
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Set up Google Authentication (for internal users and/or customer portal)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Set up SMTP for email notifications
                  </li>
                </ul>
              </div>

              {/* Phase 2.5 - Early Testing */}
              <div className="bg-[--brand-pale-gold] border border-[--brand-dark-blue] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[--brand-screened-indigo] rounded-full flex items-center justify-center">
                    <span className="text-[--brand-indigo] font-bold text-sm">2.5</span>
                  </div>
                  <h3 className="text-lg font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                    Phase 2.5: Early Testing & Connections ⏳ Not Started
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Test Roll Label Pricing Calculator (connects to the new database)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Connect Booklet Proofing System to Google Cloud (for file storage & retrieval testing)
                  </li>
                </ul>
              </div>

              {/* Phase 3 - Baseline Form Build */}
              <div className="bg-[--brand-pale-gold] border border-[--brand-dark-blue] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[--brand-screened-indigo] rounded-full flex items-center justify-center">
                    <span className="text-[--brand-indigo] font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                    Phase 3: Baseline Form Build ⏳ Not Started
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Build Estimate Form (baseline)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Replicate the current website form exactly as is
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Same fields, flow, and output
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Add ability to duplicate/clone past estimates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Add Contacts UI (within the app for customer selection/search)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Import customer names, emails, phone numbers (load into Contacts UI)
                  </li>
                </ul>
              </div>

              {/* Phase 4 - Data Migration */}
              <div className="bg-[--brand-pale-gold] border border-[--brand-dark-blue] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[--brand-screened-indigo] rounded-full flex items-center justify-center">
                    <span className="text-[--brand-indigo] font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                    Phase 4: Data Migration & Integration ⏳ Not Started
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Import and integrate production formulas & resources
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Press formulas (Ricoh, Nexpress, iJet, Trojan, Outsourced Press, Vendors)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Bindery formulas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Paper database (stocks, vendors, pricing updates via API if available)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Connect formulas and paper data into estimate form logic
                  </li>
                </ul>
              </div>

              {/* Phase 5 - Testing & Validation */}
              <div className="bg-[--brand-pale-gold] border border-[--brand-dark-blue] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[--brand-screened-indigo] rounded-full flex items-center justify-center">
                    <span className="text-[--brand-indigo] font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-bold text-[--brand-indigo]" style={{ fontFamily: "Raleway, ui-sans-serif, system-ui" }}>
                    Phase 5: Testing & Validation ⏳ Not Started
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Test formulas and calculations for accuracy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Run sample estimates across all presses / bindery options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[--brand-pale-blue] rounded-full"></span>
                    Cross-check vs existing calculators (Nexpress, Roll Labels, MIS)
                  </li>
                </ul>
              </div>

              {/* Future Phases Accordion - Only 6 & 7 */}
              <RoadmapAccordion />
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold shadow-md bg-[--brand-indigo] text-white hover:bg-[--brand-gold] hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--brand-indigo] transition-colors"
              >
                View Current Tools
              </Link>
              <a
                href="mailto:pam@tpsprinting.com?subject=TPS%20Estimating%20System%20Feedback"
                className="inline-flex items-center rounded-xl px-6 py-3 text-base font-semibold border border-[--brand-dark-blue] text-neutral-700 hover:border-[--brand-indigo] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--brand-indigo] transition-colors"
              >
                Send Feedback
              </a>
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
