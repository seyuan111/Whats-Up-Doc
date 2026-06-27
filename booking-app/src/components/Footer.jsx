import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 px-6 py-12 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-md">
          <h3 className="text-xl font-semibold text-white">Booking App</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Book trusted doctors in minutes and manage appointments with a simple, modern experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="transition hover:text-cyan-400">About</Link>
              <Link to="/faq" className="transition hover:text-cyan-400">FAQ</Link>
              <Link to="/contact" className="transition hover:text-cyan-400">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">Account</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/login" className="transition hover:text-cyan-400">Login</Link>
              <Link to="/signup" className="transition hover:text-cyan-400">Sign Up</Link>
              <Link to="/settings" className="transition hover:text-cyan-400">Settings</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <span>hello@bookingapp.com</span>
              <span>+1 (800) 555-0199</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Booking App. All rights reserved.</p>
        <p>Built for simple, stress-free doctor appointments.</p>
      </div>
    </footer>
  )
}

export default Footer