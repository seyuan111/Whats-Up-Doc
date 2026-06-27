import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
          <h1 className="mb-2 text-3xl font-bold text-slate-900">Forgot password?</h1>
          <p className="mb-6 text-sm text-slate-600">Enter your email and we’ll send you reset instructions.</p>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" placeholder="you@example.com" />
            </div>
            <button className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700">
              Send reset link
            </button>
          </form>

          <Link to="/login" className="mt-6 inline-block text-sm text-slate-500 hover:text-cyan-600">
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword