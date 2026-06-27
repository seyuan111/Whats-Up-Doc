import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const highlights = [
  'Fast appointment booking for patients and families',
  'A simple dashboard for doctors to view incoming requests',
  'Clear, calming design that makes scheduling feel easy'
]

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-white">
      <NavBar />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-cyan-100/70">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-slate-900 px-8 py-12 text-white sm:px-10 lg:px-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About us</p>
              <h1 className="text-3xl font-bold sm:text-4xl">Making healthcare booking feel simple and human.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Our booking app helps patients connect with doctors quickly, choose a convenient time,
                and feel confident that their appointment request is in good hands.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Back home
              </Link>
            </div>

            <div className="px-8 py-10 sm:px-10 lg:px-12">
              <h2 className="text-2xl font-semibold text-slate-900">Why patients love it</h2>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-slate-700">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-600">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Our mission</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  We are building a smoother experience for healthcare access so patients can book faster and doctors can stay organized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About