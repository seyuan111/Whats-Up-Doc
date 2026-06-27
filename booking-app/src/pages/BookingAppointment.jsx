import { useState } from 'react'
import NavBar from '../components/NavBar'

const hospitals = [
  'Central Hospital',
  'Northside Medical Center',
  'Green Valley Hospital',
  'City Care Clinic'
]

const BookingAppointment = () => {
  const [hospital, setHospital] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const filteredHospitals = hospitals.filter((item) =>
    item.toLowerCase().includes(hospital.toLowerCase())
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Book Appointment</p>
          <h1 className="text-4xl font-bold text-slate-900">Schedule your visit with ease</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Choose a hospital, pick a date and time, and send your request to the doctor. You will get a confirmation once everything is set.
          </p>
        </div>

        {!submitted ? (
          <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-xl lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Hospital</label>
                <input
                  type="text"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  placeholder="Type a hospital name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                />
                {hospital && (
                  <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    {filteredHospitals.length > 0 ? (
                      filteredHospitals.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setHospital(item)}
                          className="mb-2 block w-full rounded-xl bg-white px-3 py-2 text-left text-sm text-slate-700 shadow-sm hover:bg-cyan-50"
                        >
                          {item}
                        </button>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500">No matching hospital found.</p>
                    )}
                  </div>
                )}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Symptoms / Reason</label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Tell us what you need help with"
                  rows="4"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700"
              >
                Book Appointment
              </button>
            </form>

            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <h2 className="text-2xl font-semibold">How it works</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li>• Patients choose a hospital and doctor.</li>
                <li>• They select a convenient date and time.</li>
                <li>• The doctor receives the notification instantly.</li>
                <li>• Once confirmed, the patient sees “You are all set.”</li>
              </ul>

              <div className="mt-8 rounded-2xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Selected details</p>
                <p className="mt-2 font-semibold">{hospital || 'Hospital will appear here'}</p>
                <p className="text-sm text-slate-300">{date || 'Date'} • {time || 'Time'}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-3xl text-cyan-600">
              ✓
            </div>
            <h2 className="text-3xl font-bold text-slate-900">You are all set!</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Your appointment request for {hospital || 'the selected hospital'} has been sent to the doctor. You will receive updates shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setHospital('')
                setDate('')
                setTime('')
                setSymptoms('')
              }}
              className="mt-6 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
            >
              Book another appointment
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingAppointment