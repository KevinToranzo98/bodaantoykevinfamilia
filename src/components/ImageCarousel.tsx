import useEmblaCarousel from 'embla-carousel-react';
import { CameraIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';
import Galería_1 from '/src/assets/Galeria_1.jpg';
import Galeria_2 from '/src/assets/Galeria_2.jpg';
import Galeria_3 from '/src/assets/Galeria_3.jpg';
import Galeria_4 from '/src/assets/Galeria_4.jpg';
import Galeria_5 from '/src/assets/Galeria_5.jpg';
import Galeria_6 from '/src/assets/Galeria_6.jpg';
import Galeria_7 from '/src/assets/Galeria_7.jpg';

const images = [
  {
    url: Galería_1,
    alt: 'Galeria_1',
  },
  {
    url: Galeria_2,
    alt: 'Galeria_2',
  },
  {
    url: Galeria_3,
    alt: 'Galeria_3',
  },
  {
    url: Galeria_4,
    alt: 'Galeria_4',
  },
  {
    url: Galeria_5,
    alt: 'Galeria_5',
  },
  {
    url: Galeria_6,
    alt: 'Galeria_6',
  },
  {
    url: Galeria_7,
    alt: 'Galeria_7',
  },
];

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-primary text-4xl font-dancing text-center mb-4">
            Nuestros Momentos
          </h2>
          <p className="text-center font-medium">
            Un minuto, un segundo, un instante que queda en la eternidad
          </p>
          <CameraIcon className="w-8 h-8" />
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative px-4"
                >
                  <div className="relative pt-[56.25%]">
                    {' '}
                    {/* 16:9 aspect ratio */}
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-rose-600" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-rose-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
