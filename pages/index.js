
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    const targetDate = new Date('2025-06-01T00:00:00').getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      setTimeLeft(Math.max(distance, 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatCountdown = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24))
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  return (
    <div className="font-sans">
      <Head>
        <title>Hanuman Yoga School</title>
        <meta name="description" content="Yoga teacher trainings and retreats around the world" />
      </Head>
      <main>
        <section className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-24 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Hanuman Yoga School</h1>
          <p className="text-xl max-w-2xl mx-auto">Deepen your practice through transformative trainings and exotic retreats.</p>
        </section>

        <section className="text-center py-10 bg-yellow-100">
          <p className="text-xl font-semibold">Early Bird Retreat Pricing Ends In:</p>
          <p className="text-3xl font-bold mt-2 text-red-600">{formatCountdown(timeLeft)}</p>
        </section>

        <section className="bg-white text-center py-16 px-4">
          <h2 className="text-4xl font-bold mb-6">Meet the Founder</h2>
          <img src="/images/founder.jpg" alt="Founder" className="mx-auto rounded-2xl shadow-lg mb-6" width={300} />
          <p className="max-w-2xl mx-auto text-lg mb-4">
            After a life-changing car accident, yoga became a path of healing. With over 10 years of experience teaching at top studios across Toronto and training in Budokon Yoga in the US, I guide students of all ages with love and strength.
          </p>
        </section>

        <section className="bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 text-white py-20 px-6 text-center">
          <blockquote className="max-w-4xl mx-auto text-3xl italic font-light">
            “Through the stillness of breath, we remember our strength. Through the fire of practice, we awaken our soul.”
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-widest">– Hanuman Yoga School</p>
        </section>
      </main>
    </div>
  )
}
