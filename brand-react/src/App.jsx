import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const JourneyPage = React.lazy(() => import('./pages/JourneyPage'))
const EventsPage = React.lazy(() => import('./pages/EventsPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const BookAppointmentPage = React.lazy(() => import('./pages/BookAppointmentPage'))
const HealthCoachingPage = React.lazy(() => import('./pages/HealthCoachingPage'))
const BusinessCoachingPage = React.lazy(() => import('./pages/BusinessCoachingPage'))
const EventsWorkshopsPage = React.lazy(() => import('./pages/EventsWorkshopsPage'))

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ivory text-charcoal font-sans overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-ivory text-forest font-serif text-2xl">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/health-coaching" element={<HealthCoachingPage />} />
            <Route path="/business-coaching" element={<BusinessCoachingPage />} />
            <Route path="/events-workshops" element={<EventsWorkshopsPage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}
