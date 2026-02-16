"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";

const BOOK_CALL_URL = "https://calendly.com";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Prospect Growth Lab
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <Link href="/" className="hover:text-foreground transition">Home</Link>
          <Link href="/use-cases" className="hover:text-foreground transition">Use Cases</Link>
          <Link href="/pricing" className="hover:text-foreground transition">Pricing</Link>
          <Link href="/blog" className="hover:text-foreground transition">Blog</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-light text-white text-sm font-medium px-5 py-2 rounded-lg transition"
          >
            Book a Call
          </a>
          <button
            className="md:hidden text-muted hover:text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm text-muted">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-foreground transition">Home</Link>
          <Link href="/use-cases" onClick={() => setOpen(false)} className="hover:text-foreground transition">Use Cases</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="hover:text-foreground transition">Pricing</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-foreground transition">Blog</Link>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-3">Prospect Growth Lab</h4>
            <p className="text-muted text-sm leading-relaxed">
              Done-for-you LinkedIn outbound automation for mid-market companies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Pages</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-foreground transition">Home</Link>
              <Link href="/use-cases" className="hover:text-foreground transition">Use Cases</Link>
              <Link href="/pricing" className="hover:text-foreground transition">Pricing</Link>
              <Link href="/blog" className="hover:text-foreground transition">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/blog/linkedin-outbound-2025" className="hover:text-foreground transition">LinkedIn Outbound in 2025</Link>
              <Link href="/blog/linkedin-connection-request-templates" className="hover:text-foreground transition">Connection Request Templates</Link>
              <Link href="/blog/cold-email-vs-linkedin" className="hover:text-foreground transition">Cold Email vs LinkedIn</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Get Started</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Book a Free Strategy Call</a>
              <Link href="/pricing" className="hover:text-foreground transition">View Pricing</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <span>© {new Date().getFullYear()} Prospect Growth Lab. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Fill Your Pipeline?
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Book a free 30-minute strategy call. We&apos;ll map out how LinkedIn
          outbound can work for your business — no pressure, no pitch.
        </p>
        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
        >
          Book Your Free Call →
        </a>
        <p className="text-muted text-sm mt-6">
          No commitment required. Let&apos;s just talk.
        </p>
      </div>
    </section>
  );
}
