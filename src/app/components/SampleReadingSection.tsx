import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slideImage1 from 'figma:asset/6b769cc6b6b988ade4ff91fa1504e602ab631649.png';
import slideImage2 from 'figma:asset/2036f32e7856b6075261d4bde21f01c023805e32.png';
import slideImage3 from 'figma:asset/68687b62870e79cae8ced07ea1d18482bc703120.png';

export function SampleReadingSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    slideImage1,
    slideImage2,
    slideImage3,
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="mb-8">
        <h2 className="mb-2">About ALANAmagazine</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Main Text */}
        <div className="space-y-6">
          <p className="text-foreground/90 leading-relaxed text-[18px]">
            ALANAmagazine is a high‑gloss, phygital magazine where technology, culture, and lifestyle naturally overlap. It is made for curious readers, creatives, and tech professionals who want to understand how these different interconnected topics connect with the emergence of Web3.
          </p>
          <p className="text-foreground/90 leading-relaxed text-[18px]">
            With clean layouts and just the right amount of playful detail we, at <a href="https://the-alana-project.xyz/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">The ALANA Project</a> community, take great care to curate this collectible magazine once per year.
          </p>
          <p className="text-foreground/90 leading-relaxed text-[18px]">
            Each edition is released as a thoughtfully crafted digital and print experience you can read, collect (NFT), and come back to as the world evolves.
          </p>
        </div>

        {/* Right Column - Visual Element */}
        <div className="relative">
          <div className="aspect-video rounded-none rounded-br-[25px] border border-accent/20 overflow-hidden bg-secondary/20">
            {/* Slideshow Images */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slideshow image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage
                    ? 'bg-accent w-8'
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}