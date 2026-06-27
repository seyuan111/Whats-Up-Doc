import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const faqs = [
  {
    question: 'How does the booking app work?',
    answer:
      'Users can browse available doctors, select a suitable time slot, and book an appointment in just a few clicks. The booking request is sent to the doctor’s dashboard so the doctor can review it immediately.'
  },
  {
    question: 'How can a patient book an appointment?',
    answer:
      'A patient signs in, chooses a doctor, picks a date and time, and confirms the booking. The request is then visible to the doctor for approval or confirmation.'
  },
  {
    question: 'How does the doctor receive the booking?',
    answer:
      'Once a user books an appointment, the doctor can see it in their schedule or dashboard. The doctor can then confirm the appointment and prepare for the visit.'
  },
  {
    question: 'Can users choose any doctor?',
    answer:
      'Yes. Patients can view the list of available doctors, review their specialties, and book an appointment with the one that best matches their needs.'
  }
]

const FAQ = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">FAQ</p>
          <h1 className="text-4xl font-bold text-slate-900">How the booking appointment app works</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our app makes it easy for patients to book appointments with doctors and for doctors to manage those bookings in one simple system.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item.question}</h2>
              <p className="mt-2 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-cyan-600 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQ