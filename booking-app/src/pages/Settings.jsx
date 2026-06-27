import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Settings = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 px-6 py-16 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-lg text-slate-600">
          Update your preferences, notification settings, and booking options here.
        </p>
        <Link to="/" className="mt-6 inline-block text-cyan-600 hover:underline">
          Back home
        </Link>
      </div>
    </div>
  )
}

export default Settings