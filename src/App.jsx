import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickBookingModal from './components/QuickBookingModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BarbersPage from './pages/BarbersPage';
import ReviewsPage from './pages/ReviewsPage';
import HoursLocationPage from './pages/HoursLocationPage';
import BookingPage from './pages/BookingPage';
import { Phone, Calendar } from 'lucide-react';
import { shopInfo } from './data/barbershopData';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedBarber, setPreselectedBarber] = useState('');

  const handleOpenBooking = (barberName = '') => {
    if (typeof barberName === 'string') {
      setPreselectedBarber(barberName);
    } else {
      setPreselectedBarber('');
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0e1013] text-gray-100 selection:bg-amber-500 selection:text-black">
      <ScrollToTop />
      
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/barbers" element={<BarbersPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/hours-location" element={<HoursLocationPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<HoursLocationPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Global Quick Booking Modal */}
      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultBarber={preselectedBarber}
      />

      {/* Sticky Mobile Floating Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0e1013]/95 backdrop-blur-md border-t border-white/10 p-2.5 px-4 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${shopInfo.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>Call Shop</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Chair</span>
        </button>
      </div>
    </div>
  );
}
