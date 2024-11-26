import { FloatingImage } from './FloatingImage';

interface PhotoGroupProps {
  mainImage: string;
  floatingImages: Array<{
    src: string;
    position: string;
    delay: string;
  }>;
  className?: string;
}

export function PhotoGroup({
  mainImage,
  floatingImages,
  className = '',
}: PhotoGroupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="rounded-xl overflow-hidden shadow-2xl">
        <img
          src={mainImage}
          alt="Main wedding photo"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Floating Images */}
      {floatingImages.map((image, index) => (
        <FloatingImage
          key={index}
          src={image.src}
          alt={`Floating wedding photo ${index + 1}`}
          className={`w-32 h-32 ${image.position}`}
          animationDelay={image.delay}
        />
      ))}
    </div>
  );
}
