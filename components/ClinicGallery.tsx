'use client';

import { useState } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';
import BookingModal from '@/components/BookingModal';

export default function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const images = [
    { src: '/images/clinic/IMG_3499.JPG', alt: 'Eskeen Clinic Exterior', caption: 'Our welcoming clinic entrance' },
    { src: '/images/clinic/IMG_3182.jpg', alt: 'Modern Treatment Room', caption: 'State-of-the-art treatment facilities' },
    { src: '/images/clinic/IMG_3694.jpg', alt: 'Clinic Interior', caption: 'Comfortable and modern environment' },
    { src: '/images/clinic/IMG_3722.jpg', alt: 'Reception Area', caption: 'Welcoming reception space' },
    { src: '/images/clinic/inside1.webp', alt: 'Treatment Room', caption: 'Private treatment rooms' },
    { src: '/images/clinic/inside2.webp', alt: 'Consultation Room', caption: 'Professional consultation spaces' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Our Space</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Visit Our
            <span className="gradient-text"> Beautiful Clinic</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A modern, pristine environment designed for your comfort and privacy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-semibold text-lg">{image.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {images.slice(3, 5).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-semibold text-lg">{image.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Experience the Eskeen Difference</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Modern, sterile treatment rooms
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Comfortable waiting areas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Private consultation spaces
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Easy parking and transport links
                </li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-lg mb-4">Ready to visit us?</p>
              <button
                onClick={() => {
                  FacebookEvents.ClickBookNow('Clinic Visit', 'Clinic Gallery');
                  setShowBookingModal(true);
                }}
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Clinic view"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        treatment="Clinic Visit"
      />
    </section>
  );
}