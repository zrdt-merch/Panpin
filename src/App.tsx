/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SuedeCareFeature } from './components/SuedeCareFeature';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PickupDeliverySection } from './components/PickupDeliverySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { TreatmentEstimatorModal } from './components/TreatmentEstimatorModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] flex flex-col font-sans selection:bg-[#0F172A] selection:text-[#FFFFFF]">
      {/* Top Navigation */}
      <Navbar onOpenBookingModal={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Hero with PANPIN Clean White Poster Branding */}
        <Hero onOpenBookingModal={() => handleOpenBooking()} />

        {/* 02. Services (Cleaning, Repair, Repaint, Unyellowing) */}
        <ServicesSection onSelectService={(id) => handleOpenBooking(id)} />

        {/* 03. Suede Special Feature (Jangan Asal Rawat Sepatu Suede) */}
        <SuedeCareFeature onOpenBookingModal={handleOpenBooking} />

        {/* 04. Before & After (Interactive Split + Tools Flatlay) */}
        <BeforeAfterSlider onOpenBookingModal={handleOpenBooking} />


        {/* 06. Pickup & Delivery (Doorstep Courier & Area Checker) */}
        <PickupDeliverySection onOpenBookingModal={() => handleOpenBooking()} />

        {/* 07. Customer Reviews & Viral Stories (Google Maps 4.6★) */}
        <ReviewsSection />

        {/* 08. Location & Storefront Depan UNSOED + Meja Konsultasi */}
        <LocationSection />

        {/* 09. FAQ Section */}
        <FaqSection />

        {/* 10. Final Conversion CTA Banner */}
        <FinalCtaBanner onOpenBookingModal={() => handleOpenBooking()} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Mobile Sticky Bar (<15% viewport height cap) */}
      <MobileStickyBar onOpenBookingModal={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking & Treatment Estimator Modal */}
      <TreatmentEstimatorModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
