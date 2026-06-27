import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const reviews = [
  {
    name: 'Sarah M.',
    role: 'Patient',
    rating: '★★★★★',
    quote:
      'Booking my appointment was effortless. I found a doctor quickly and the process felt very professional and stress-free.'
  },
  {
    name: 'Daniel R.',
    role: 'Parent',
    rating: '★★★★★',
    quote:
      'The interface is clean, fast, and simple. I loved how easy it was to view doctors and confirm a suitable time slot.'
  },
  {
    name: 'Aisha T.',
    role: 'Patient',
    rating: '★★★★★',
    quote:
      'I booked a consultation within minutes. The doctor saw my request and everything was organized perfectly.'
  },
  {
    name: 'Mina K.',
    role: 'Patient',
    rating: '★★★★★',
    quote:
      'The booking flow felt modern and trustworthy. I was able to schedule a visit without any confusion.'
  }
]

const Reviews = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Reviews</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">What patients are saying</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Trusted by patients who want a simple way to book appointments and connect with doctors.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-cyan-100/60">
                <div className="mb-4 text-2xl text-cyan-500">{review.rating}</div>
                <p className="text-base leading-7 text-slate-600">“{review.quote}”</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <h3 className="font-semibold text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews