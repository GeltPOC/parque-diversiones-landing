'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AttractionsSection from './AttractionsSection'
import PricingSection from './PricingSection'
import ParkMapSection from './ParkMapSection'
import RestaurantsSection from './RestaurantsSection'
import GallerySection from './GallerySection'
import ScheduleSection from './ScheduleSection'
import LocationSection from './LocationSection'
import CtaSection from './CtaSection'
import Footer from './Footer'
import TicketModal from './TicketModal'

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar onBuyTicket={() => setShowModal(true)} />
      <HeroSection onBuyTicket={() => setShowModal(true)} />
      <AttractionsSection />
      <ParkMapSection />
      <RestaurantsSection />
      <PricingSection onBuyTicket={() => setShowModal(true)} />
      <GallerySection />
      <ScheduleSection />
      <LocationSection />
      <CtaSection onBuyTicket={() => setShowModal(true)} />
      <Footer />
      {showModal && <TicketModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
