import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Pricing | Prospect Growth Lab — LinkedIn Outbound Plans",
  description:
    "Simple, transparent pricing for done-for-you LinkedIn outbound. Plans from $597/mo. 14-day money-back guarantee. No long-term contracts.",
  path: "/pricing",
  keywords: [
    "LinkedIn automation pricing",
    "outbound sales pricing",
    "LinkedIn prospecting cost",
    "AimFox pricing",
    "B2B lead generation pricing",
  ],
});

const tiers = [
  {
    name: "Starter",
    price: "$597",
    description: "Perfect for testing LinkedIn outbound with a single profile.",
    popular: false,
    features: [
      "1 LinkedIn profile managed",
      "500 connection requests/mo",
      "Personalized messaging sequences",
      "Weekly reporting dashboard",
      "Dedicated campaign manager",
    ],
  },
  {
    name: "Growth",
    price: "$997",
    description: "Scale your outbound with multichannel and A/B testing.",
    popular: true,
    features: [
      "2 LinkedIn profiles managed",
      "1,000 connection requests/mo",
      "A/B message testing",
      "CRM integration",
      "Bi-weekly strategy calls",
      "Multichannel (LinkedIn + email)",
    ],
  },
  {
    name: "Scale",
    price: "$1,997",
    description: "Full-scale outbound engine with AI voice notes and content.",
    popular: false,
    features: [
      "5 LinkedIn profiles managed",
      "Unlimited connection requests",
      "AI voice notes",
      "Priority support",
      "Weekly strategy calls",
      "Full multichannel outreach",
      "Content creation for LinkedIn",
    ],
  },
];

const faqs = [
  {
    q: "How quickly will I see results?",
    a: "Most clients see their first qualified meetings within 2-3 weeks of campaign launch. Full pipeline impact is typically visible within 60-90 days as campaigns optimize.",
  },
  {
    q: "Do I need LinkedIn Sales Navigator?",
    a: "Yes, Sales Navigator is required for prospect targeting. We'll guide you through setup if you don't already have it. The cost is $99/mo directly from LinkedIn.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. All plans are month-to-month. We recommend a minimum 90-day commitment to see full results, but you can cancel anytime with 30 days notice.",
  },
  {
    q: "Will my LinkedIn account get restricted?",
    a: "We follow LinkedIn's best practices and stay well within platform limits. Our automation is cloud-based and mimics natural human behavior. In 3+ years of operation, we've had a near-zero restriction rate.",
  },
  {
    q: "What does the 14-day money-back guarantee cover?",
    a: "If you're not satisfied with our service within the first 14 days, we'll refund your first month's payment in full — no questions asked.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely. You can change plans at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "Do you manage the LinkedIn profiles or do we?",
    a: "We manage everything — from connection requests and messaging to follow-ups and engagement. Your sales team only gets involved when a prospect is ready to talk.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with SaaS companies, recruitment agencies, marketing agencies, professional services firms, and real estate companies. Check our use cases page for details.",
  },
];

export default function PricingPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-xs text-muted uppercase tracking-widest">
            Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 text-sm text-muted">
            <span className="text-green-400">✓</span> 14-day money-back guarantee
          </div>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-surface border rounded-xl p-8 flex flex-col ${
                tier.popular ? "border-accent ring-1 ring-accent" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-muted text-sm mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted text-sm">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-semibold px-6 py-3 rounded-lg transition ${
                  tier.popular
                    ? "bg-accent hover:bg-accent-light text-white"
                    : "border border-border hover:border-accent text-foreground"
                }`}
              >
                Book a Free Strategy Call
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Book a free call and we&apos;ll walk you through everything — no commitment, no pressure.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
          >
            Book a Free Strategy Call →
          </a>
        </div>
      </div>
    </main>
  );
}
