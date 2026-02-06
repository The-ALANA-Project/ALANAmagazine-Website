import { useState } from 'react';

interface CreatorImageSlideshowProps {
  profileImage: string;
  artworks: Array<{ src: string; alt: string }>;
  creatorName: string;
}

export function CreatorImageSlideshow({
  profileImage,
  artworks,
  creatorName,
}: CreatorImageSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Combine profile image with artworks
  const allImages = [
    { src: profileImage, alt: `${creatorName} profile` },
    ...artworks,
  ];

  return (
    <div className="relative overflow-hidden rounded-br-[25px] aspect-square bg-foreground">
      {/* Image Display */}
      <div className="w-full h-full">
        <img
          src={allImages[currentSlide].src}
          alt={allImages[currentSlide].alt}
          className={`w-full h-full ${
            currentSlide === 0 
              ? 'object-cover object-center grayscale' 
              : 'object-contain'
          }`}
        />
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-accent w-6'
                : 'bg-accent'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}