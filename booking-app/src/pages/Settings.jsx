import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const insuranceStatus = 'Active'
const hospitals = [
  'Central Hospital',
  'Northside Medical Center',
  'Green Valley Hospital',
  'City Care Clinic'
]

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-white">
      <NavBar />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Patient account</p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Manage your profile and insurance details</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Keep your insurance card updated, see nearby hospitals, and manage preferences for easier booking.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900">Insurance card</h2>
            <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Status</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{insuranceStatus}</p>
                </div>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">Verified</span>
              </div>
              <p className="mt-4 text-sm text-slate-700">
                Your insurance card is active and can be used for eligible appointments.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Insurance provider</label>
                <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" placeholder="BlueCross Health" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Member ID</label>
                <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" placeholder="AB123456" />
              </div>
              <button className="w-full rounded-2xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700">
                Update insurance card
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-slate-900">Nearby hospitals</h2>
              <ul className="mt-5 space-y-3">
                {hospitals.map((hospital) => (
                  <li key={hospital} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                    {hospital}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-slate-900">Quick actions</h2>
              <div className="mt-5 space-y-3">
                <Link to="/booking-appointment" className="block rounded-2xl bg-slate-900 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-800">
                  Book an appointment
                </Link>
                <Link to="/faq" className="block rounded-2xl border border-slate-300 px-4 py-3 text-center font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
                  View booking guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings