import { Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import Settings from './pages/Settings'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import FAQ from './pages/FAQ'
import BookingAppointment from './pages/BookingAppointment'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/forgot-password' element={<ForgotPassword />}></Route>
      <Route path='/faq' element={<FAQ />} />
      <Route path='booking-appointment' element={<BookingAppointment />} />
    </Routes>
  )
}

export default App
