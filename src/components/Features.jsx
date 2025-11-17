function Features() {
  const items = [
    {
      title: 'Voice & Chat Agents',
      desc: 'Spin up branded assistants for calls, chat widgets, or email with personas and guardrails.',
    },
    {
      title: 'Lead Capture & Enrichment',
      desc: 'Auto-create contacts, enrich with email/phone, and assign owners for quick follow-up.',
    },
    {
      title: 'Deal Workflows',
      desc: 'Qualify, move stages, and trigger tasks when prospects convert — fully automated.',
    },
    {
      title: 'Knowledge Grounding',
      desc: 'Feed FAQs, docs, and product notes. Agents cite relevant answers to stay on-brand.',
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything to run AI-driven CRM</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border bg-white/80 backdrop-blur shadow-sm">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
