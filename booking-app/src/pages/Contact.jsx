import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-white">
      <NavBar />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-cyan-100/70 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact support</p>
            <h1 className="text-3xl font-bold sm:text-4xl">Need help with your booking?</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Our support team is here to help with appointment issues, booking questions, or changes to your schedule.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl bg-slate-800/70 p-4">
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:support@bookingapp.com" className="mt-1 inline-block text-cyan-300 hover:underline">
                  support@bookingapp.com
                </a>
              </div>
              <div className="rounded-2xl bg-slate-800/70 p-4">
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+18005550199" className="mt-1 inline-block text-cyan-300 hover:underline">
                  +1 (800) 555-0199
                </a>
              </div>
              <div className="rounded-2xl bg-slate-800/70 p-4">
                <p className="font-semibold text-white">Hours</p>
                <p className="mt-1">Monday – Friday • 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-4">
            <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-slate-600">
              Tell us what’s going on and we will get back to you as soon as possible.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">What do you need help with?</label>
                <textarea rows="5" placeholder="Describe your booking issue or question..." className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" />
              </div>
              <button className="w-full rounded-2xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700">
                Send message
              </button>
            </form>

            <Link to="/" className="mt-6 inline-block text-sm text-cyan-600 hover:underline">
              ← Back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact