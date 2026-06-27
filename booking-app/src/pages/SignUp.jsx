import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
          <h1 className="mb-2 text-3xl font-bold text-slate-900">Create your account</h1>
          <p className="mb-6 text-sm text-slate-600">Sign up to start booking faster.</p>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
              <input type="text" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Create a password" />
            </div>
            <button className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-700">
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="text-cyan-600 hover:underline">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp