const BOOK_CALL_URL = "https://calendly.com";

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-xs text-muted uppercase tracking-widest">
          LinkedIn Outbound — Done For You
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Fill Your Pipeline With
          <span className="text-accent"> Qualified Leads</span> on Autopilot
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          We build and run LinkedIn outbound systems that book meetings with
          your ideal prospects — so your sales team can focus on closing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#how-it-works"
            className="border border-border hover:border-muted text-foreground font-medium px-8 py-3.5 rounded-lg text-lg transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    { icon: "⏳", title: "Your reps spend hours on manual outreach", desc: "Cold messaging, connection requests, follow-ups — it eats into selling time." },
    { icon: "📉", title: "Your pipeline is inconsistent", desc: "Some months are great, others are crickets. You need predictable deal flow." },
    { icon: "🎯", title: "You know LinkedIn works — but can't scale it", desc: "Doing it properly takes expertise, tooling, and dedicated time your team doesn't have." },
  ];
  return (
    <section id="problem" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sound Familiar?</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">Most growing sales teams hit the same wall when trying to scale outbound on LinkedIn.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div key={p.title} className="bg-surface border border-border rounded-xl p-8">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-surface-light border border-border rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">We Fix This.</h3>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Prospect Growth Lab takes LinkedIn outbound completely off your plate. We build the system, write the messaging, target the right people, and deliver warm conversations straight to your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Prospect Targeting", desc: "We build laser-focused prospect lists based on your ICP — industry, company size, role, geography. No spray and pray.", icon: "🎯" },
    { title: "Messaging & Sequences", desc: "Custom outreach sequences written to start real conversations, not get ignored. Tested and optimized over time.", icon: "💬" },
    { title: "LinkedIn Automation", desc: "Automated connection requests, follow-ups, and engagement — all running safely in the background, every day.", icon: "⚡" },
    { title: "Campaign Management", desc: "We monitor, tweak, and optimize your campaigns weekly. You get reports, we handle the work.", icon: "📊" },
    { title: "Lead Handoff", desc: "When a prospect replies with interest, we hand them directly to your sales team — warm and ready to talk.", icon: "🤝" },
    { title: "Strategy & Consulting", desc: "Ongoing strategic input on positioning, messaging, and targeting to keep your pipeline growing.", icon: "🧠" },
  ];
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">A full-service LinkedIn outbound engine, managed end-to-end.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-background border border-border rounded-xl p-6 hover:border-accent/50 transition">
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Strategy Call", desc: "We learn your business, ICP, and goals. We map out the ideal outbound strategy for your market." },
    { num: "02", title: "Build & Launch", desc: "We set up your targeting, write your sequences, and launch your campaigns — typically within a week." },
    { num: "03", title: "Optimize & Scale", desc: "We monitor performance, A/B test messaging, refine targeting, and scale what works." },
    { num: "04", title: "You Close Deals", desc: "Warm leads land in your inbox. Your sales team takes it from there." },
  ];
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted text-lg">From zero to booked meetings in four simple steps.</p>
        </div>
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6 items-start bg-surface border border-border rounded-xl p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-accent shrink-0">{step.num}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built by Someone Who Gets Growth</h2>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m Louis Wand — I&apos;ve spent 6 years in digital marketing helping businesses generate leads and grow revenue. I&apos;ve seen what works and what doesn&apos;t.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              I started Prospect Growth Lab because I saw a massive gap: companies know LinkedIn is where their buyers live, but they don&apos;t have the time, tools, or expertise to do outbound properly.
            </p>
            <p className="text-muted leading-relaxed">
              So I built a service that does it all — targeting, messaging, automation, and optimization — so sales teams can focus on what they do best: closing deals.
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">LW</div>
            <h3 className="text-xl font-bold">Louis Wand</h3>
            <p className="text-muted text-sm mt-1">Founder, Prospect Growth Lab</p>
            <p className="text-accent text-sm mt-1">6+ Years in Digital Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="book-a-call" className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Fill Your Pipeline?</h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Book a free 30-minute strategy call. We&apos;ll map out how LinkedIn outbound can work for your business — no pressure, no pitch.
        </p>
        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
        >
          Book Your Free Call →
        </a>
        <p className="text-muted text-sm mt-6">No commitment required. Let&apos;s just talk.</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <About />
      <CTA />
    </main>
  );
}
