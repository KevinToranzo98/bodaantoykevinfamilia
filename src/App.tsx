import { useState } from 'react';
import { Heart, Calendar, Clock, MapPin, Menu, X } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import RingIcon from './assets/icons/Ring';
import DrinkIcon from './assets/icons/Drink';
import FoodIcon from './assets/icons/Food';
import { CountdownTimer } from './components/CountdownTimer';
import { PricingSection } from './components/PricingSection';
import CheckList from './assets/CheckList';
import { ImageCarousel } from './components/ImageCarousel';
import { QRCodeSection } from './components/QRSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-primary text-2xl font-dancing">A & K</span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary">
                Inicio
              </a>
              <a href="#details" className="text-gray-700 hover:text-primary">
                Detalles
              </a>
              <a href="#timeline" className="text-gray-700 hover:text-primary">
                Cronograma
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-primary">
                Galeria
              </a>
              <a href="#countdown" className="text-gray-700 hover:text-primary">
                Cuenta regresiva
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary">
                Precio
              </a>
              <a href="#rsvp" className="text-gray-700 hover:text-primary">
                Asistencia
              </a>
              <a href="#share" className="text-gray-700 hover:text-primary">
                Albúm
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Inicio
              </a>
              <a
                href="#details"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Detalles
              </a>
              <a
                href="#timeline"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Cronograma
              </a>
              <a
                href="#countdown"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Cuenta Regresiva
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Precio
              </a>
              <a
                href="#rsvp"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Asistencia
              </a>
              <a
                href="#share"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Albúm
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Details Section */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-primary text-4xl font-dancing text-center mb-16">
            Detalles de la boda
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#faf7f5] rounded-lg">
              <Calendar className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fecha</h3>
              <p>12 de Abril del 2025</p>
              <p>Sábado</p>
            </div>
            <div className="text-center p-6 bg-[#faf7f5] rounded-lg">
              <Clock className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horario</h3>
              <p>Ceremonia: 20:30 PM</p>
              <p>Recepción: 21:00 PM</p>
            </div>
            <div className="text-center p-6 bg-[#faf7f5] rounded-lg">
              <MapPin className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <a
                href="https://www.google.com/maps/place/La+Quinta+Casona/@-31.4586897,-64.1579892,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a32df996b257:0x49eea3e9a3acaacf!8m2!3d-31.4586944!4d-64.1531183!16s%2Fg%2F11bzyxp6sm?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="">Salón "La Quinta Casona"</p>
                <p className="">Celso Barrios 3490, X5014.</p>
                <p>Córdoba Capital</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-[#faf7f5]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-primary text-4xl font-dancing text-center mb-16">
            Cronograma
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#faf7f5] rounded-lg">
              <RingIcon
                size="60"
                className="text-primary w-12 h-12 mx-auto mb-4"
              />
              <p className="text-[#656c64]">20:30</p>
              <p className="text-primary text-2xl opacity-60">Ceremonia</p>
            </div>

            <div className="text-center p-6 bg-[#faf7f5] rounded-lg">
              <DrinkIcon
                size="60"
                className="text-primary w-12 h-12 mx-auto mb-4"
              />
              <p className="text-[#656c64]">21:00</p>
              <p className="text-primary text-2xl opacity-60">Recepción</p>
            </div>
            <div className="text-center p-6 bg-[#faf7f5] rounded-lg">
              <FoodIcon
                size="60"
                className="text-primary w-12 h-12 mx-auto mb-4"
              />
              <p className="text-[#656c64]">21:45</p>
              <p className="text-primary text-2xl opacity-60">Cena</p>
            </div>
          </div>
        </div>
      </section>

      <ImageCarousel />

      {/* Countdown Section */}
      <CountdownTimer />

      {/* PricingSection */}
      <PricingSection />

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-[#faf7f5]">
        <div className="max-w-md mx-auto flex gap-4 flex-col items-center justify-center">
          <CheckList size="55" />
          <a
            target="_blank"
            href="https://p02jvynd.forms.app/formularioinvitados"
            className="text-center text-primary font-medium text-xl underline md:text-2xl hover:opacity-50"
          >
            <p>Confirmá tu asistencia</p>
            <p>haciendo click acá</p>
          </a>
        </div>
      </section>

      {/* Share Your Memories */}
      <QRCodeSection />

      {/* Footer */}
      <footer className="bg-[#faf7f5] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Heart className="w-8 h-8 mx-auto mb-4 text-rose-600" />
          <p className="font-dancing text-2xl mb-2">Anto & Kevin</p>
          <p className="text-gray-600">12 de Abril del 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
