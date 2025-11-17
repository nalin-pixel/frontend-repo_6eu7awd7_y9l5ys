import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AgentBuilder from './components/AgentBuilder'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <AgentBuilder />
      <Features />
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500">
          Built with Flames • CRM AI Agent Platform
        </div>
      </footer>
    </div>
  )
}

export default App
