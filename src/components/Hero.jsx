import Spline from '@splinetool/react-spline'

function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('builder')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border text-sm text-indigo-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          AI voice agent aura • CRM automation
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600">
          Build your CRM AI Agent Platform
        </h1>
        <p className="mt-4 md:mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
          Spin up voice/chat agents that capture leads, qualify prospects and update your CRM automatically.
          Real-time conversations, contact enrichment, and deal workflows—out of the box.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={handleScroll} className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow">
            Launch Builder
          </button>
          <a href="/test" className="px-5 py-3 rounded-lg bg-white/80 hover:bg-white text-gray-800 font-semibold shadow border">
            Check Backend
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
