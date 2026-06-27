import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: '/about', label: 'About' },
    { to: '/settings', label: 'Settings' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Login' }
  ]

  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="text-xl font-semibold tracking-wide text-cyan-300">
          Booking App
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white transition hover:border-cyan-400 hover:text-cyan-300 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="transition hover:text-cyan-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900/95 px-4 py-4 shadow-inner md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-slate-800 bg-slate-800/80 px-4 py-3 transition hover:border-cyan-400 hover:bg-slate-700 hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar