import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main className="bg-slate-50 px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 rounded-3xl bg-white p-10 shadow-lg lg:flex-row lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Appointment booking made simple
          </p>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Book smarter, faster, and with less hassle.
          </h1>
          <p className="mb-8 text-lg text-slate-600">
            Manage your schedule, connect with clients, and keep everything organized in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/booking-appointment"
              className="rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-700"
            >
              Get Started
            </Link>
            <Link
              to="/faq"
              className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="mb-3 text-2xl font-semibold">Built for modern patient care</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>• Book appointments with doctors in minutes</li>
            <li>• Use and update insurance details effortlessly</li>
            <li>• Discover nearby hospitals and book with confidence</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Main