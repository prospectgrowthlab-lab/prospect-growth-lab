import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Use Cases | Prospect Growth Lab — LinkedIn Outbound by Industry",
  description:
    "See how SaaS companies, recruitment agencies, marketing agencies, professional services firms, and real estate businesses use LinkedIn outbound to grow their pipeline.",
  path: "/use-cases",
  keywords: [
    "LinkedIn automation for SaaS",
    "LinkedIn for recruitment",
    "agency lead generation",
    "B2B prospecting by industry",
    "LinkedIn outbound use cases",
  ],
});

const useCases = [
  {
    icon: "💻",
    title: "SaaS Companies",
    subtitle: "Scale outbound for SDR teams",
    problem:
      "Your SDR team is spending 60% of their time on manual prospecting and outreach instead of having conversations. Pipeline is inconsistent month to month, and hiring more SDRs is expensive.",
    solution:
      "We automate the top-of-funnel so your SDRs focus on qualified conversations. Our system handles targeting, connection requests, messaging sequences, and follow-ups — delivering warm, interested prospects directly to your team.",
    results: [
      "20-30 additional qualified meetings per month",
      "SDR productivity increases by 40-60%",
      "Pipeline predictability improves within 60 days",
      "Cost per meeting 50-70% lower than hiring additional SDRs",
    ],
    blogLink: "/blog/scale-sales-pipeline-linkedin-automation",
    blogText: "Read: How to Scale Your Sales Pipeline with LinkedIn Automation",
  },
  {
    icon: "🔍",
    title: "Recruitment Agencies",
    subtitle: "Fill candidate and client pipelines",
    problem:
      "You need a constant flow of both candidates and new clients. Your recruiters are stretched thin between sourcing, outreach, and relationship management. LinkedIn is essential to your business, but manual outreach doesn't scale.",
    solution:
      "We run parallel campaigns — one for candidate sourcing and one for business development. Personalized outreach sequences engage passive candidates and hiring managers simultaneously, keeping both sides of your pipeline full.",
    results: [
      "3-5x more candidate responses than manual outreach",
      "15-25 new client conversations per month",
      "Faster time-to-fill for open positions",
      "Recruiters freed up to focus on relationship building",
    ],
    blogLink: "/blog/linkedin-connection-request-templates",
    blogText: "Read: 5 LinkedIn Connection Request Templates That Get Replies",
  },
  {
    icon: "📢",
    title: "Marketing Agencies",
    subtitle: "Offer LinkedIn as an add-on service",
    problem:
      "Your clients are asking for LinkedIn lead generation but you don't have the expertise or bandwidth to deliver it in-house. You're leaving revenue on the table and risk losing clients to agencies that offer it.",
    solution:
      "White-label our LinkedIn outbound service under your agency's brand. We handle the execution — targeting, messaging, automation, and reporting — while you maintain the client relationship and add a high-margin service line.",
    results: [
      "New revenue stream with 40-60% margins",
      "No additional hiring or training required",
      "White-label reporting branded to your agency",
      "Increase client retention with a full-service offering",
    ],
    blogLink: "/blog/cold-email-vs-linkedin",
    blogText: "Read: Cold Email vs LinkedIn — Which Converts Better?",
  },
  {
    icon: "⚖️",
    title: "Professional Services",
    subtitle: "Consulting, accounting, and legal firms",
    problem:
      "Your firm relies on referrals and word-of-mouth, which is unpredictable. Partners know they should be active on LinkedIn but don't have time. High-value clients are on the platform, but you're not reaching them systematically.",
    solution:
      "We position your partners as thought leaders on LinkedIn while running targeted outbound to ideal clients. Our campaigns combine profile optimization, content engagement, and personalized outreach to generate high-value conversations.",
    results: [
      "10-20 qualified prospect conversations per month",
      "Partners positioned as industry thought leaders",
      "Predictable lead flow beyond referrals",
      "Average deal sizes 2-3x higher than inbound leads",
    ],
    blogLink: "/blog/why-sales-team-needs-linkedin-outbound",
    blogText: "Read: Why You Need Outbound (Not Just Inbound)",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    subtitle: "Connect with investors and developers",
    problem:
      "You need to connect with property investors, developers, and commercial decision-makers. Traditional networking is slow, and cold calling has low hit rates. LinkedIn has the contacts you need, but you're not leveraging it.",
    solution:
      "We target property investors, developers, fund managers, and corporate real estate decision-makers on LinkedIn. Our campaigns use trigger events like new developments, funding announcements, and portfolio changes to time outreach perfectly.",
    results: [
      "Direct access to high-net-worth investors",
      "15-25 qualified conversations per month",
      "Shortened deal sourcing timelines",
      "Network grows into a permanent business development asset",
    ],
    blogLink: "/blog/linkedin-outbound-2025",
    blogText: "Read: LinkedIn Outbound in 2025 — What's Working",
  },
];

export default function UseCasesPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-xs text-muted uppercase tracking-widest">
            Use Cases
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LinkedIn Outbound for <span className="text-accent">Your Industry</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            See how businesses like yours use LinkedIn outbound to fill their pipeline with qualified leads.
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((uc) => (
            <div key={uc.title} className="bg-surface border border-border rounded-xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{uc.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold">{uc.title}</h2>
                  <p className="text-accent text-sm">{uc.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2 text-red-400">The Problem</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{uc.problem}</p>
                  <h3 className="font-semibold mb-2 text-green-400">Our Solution</h3>
                  <p className="text-muted text-sm leading-relaxed">{uc.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Expected Results</h3>
                  <ul className="space-y-3 mb-6">
                    {uc.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-accent mt-0.5">✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  <Link href={uc.blogLink} className="text-accent text-sm hover:underline">
                    {uc.blogText} →
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-muted text-sm">
                  Ready to see how LinkedIn outbound works for {uc.title.toLowerCase()}?
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/pricing"
                    className="border border-border hover:border-accent text-foreground text-sm font-medium px-5 py-2 rounded-lg transition"
                  >
                    View Pricing
                  </Link>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent-light text-white text-sm font-medium px-5 py-2 rounded-lg transition"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            We work with any B2B company that sells to decision-makers on LinkedIn. Book a call and we&apos;ll build a custom strategy for your market.
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
