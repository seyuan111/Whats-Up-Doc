import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const doctors = [
  {
    name: 'Dr. Amina Yusuf',
    specialty: 'General Physician',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    description: 'Available for general checkups, consultations, and follow-up care.'
  },
  {
    name: 'Dr. Daniel Brooks',
    specialty: 'Cardiologist',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    description: 'Specializes in heart health, screenings, and preventive care.'
  },
  {
    name: 'Dr. Sara Khan',
    specialty: 'Dermatologist',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',
    description: 'Helps patients with skin concerns, acne, and treatment plans.'
  }
]

const SwiperSliders = () => {
  return (
    <section className="bg-slate-100 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Book a doctor
          </p>
          <h2 className="text-3xl font-bold text-slate-900">Meet trusted specialists ready to help</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Patients can browse doctors, read about their specialties, and book appointments with ease.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-md">
                <img src={doctor.image} alt={doctor.name} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{doctor.name}</h3>
                  <p className="mt-1 text-cyan-600">{doctor.specialty}</p>
                  <p className="mt-3 text-sm text-slate-600">{doctor.description}</p>
                  <button className="mt-5 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700">
                    Book Appointment
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default SwiperSliders