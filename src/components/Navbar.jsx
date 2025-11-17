import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600">Flames CRM.AI</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#builder" className="hover:text-indigo-700">Builder</a>
          <a href="/test" className="hover:text-indigo-700">Status</a>
          <a href="#features" className="hover:text-indigo-700">Features</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
