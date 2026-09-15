"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/layout/SectionDivider";
import HeroSection from "@/components/home/HeroSection";
import StoriesSlider from "@/components/home/StoriesSlider";
import AboutSection from "@/components/home/AboutSection";
import TeachersSection from "@/components/home/TeachersSection";
import MapSection from "@/components/home/MapSection";
import BookingModal, { ModalType } from "@/components/modals/BookingModal";
import GalleryModal from "@/components/modals/GalleryModal";

export default function HomePage() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Listen to hash changes (e.g. #popup:tano-legs or #popup:mygallery)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#popup:tano-legs") {
        setModalType("tano-legs");
      } else if (hash === "#popup:mygallery") {
        setIsGalleryOpen(true);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleCloseModal = () => {
    setModalType(null);
    if (window.location.hash.startsWith("#popup")) {
      window.history.replaceState(null, "", " ");
    }
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
    if (window.location.hash === "#popup:mygallery") {
      window.history.replaceState(null, "", " ");
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      <Header />

      {/* Hero Banner with Studio Emblem and Motto */}
      <HeroSection />

      {/* Hero Stories / Card Slider (10 Slides with timer and controls) */}
      <StoriesSlider
        onOpenModal={(type) => setModalType(type as ModalType)}
      />

      {/* Decorative Wave Divider */}
      <SectionDivider fillColor="#ffffff" bgColor="#d9e9f7" />

      {/* About the Studio */}
      <AboutSection />

      {/* Decorative Wave Divider */}
      <SectionDivider fillColor="#f9fafb" bgColor="#ffffff" />

      {/* Teachers / Instructors */}
      <TeachersSection
        onOpenIrinaModal={() => setModalType("tano-legs")}
        onOpenGalleryModal={() => setIsGalleryOpen(true)}
      />

      {/* Decorative Wave Divider */}
      <SectionDivider fillColor="#ffffff" bgColor="#f9fafb" />

      {/* Map & Contacts */}
      <MapSection />

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={handleCloseModal}
      />

      {/* Studio Floorplan/Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
      />
    </main>
  );
}
