import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';

interface Spread {
  id: number;
  leftPage: string;
  rightPage: string;
  title: string;
}

export function SampleReadingSection() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const spreads: Spread[] = [
    {
      id: 1,
      leftPage: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      rightPage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Cover & Introduction',
    },
    {
      id: 2,
      leftPage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      rightPage: 'https://images.unsplash.com/photo-1618005198920-f0cb6201c115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Feature Article',
    },
    {
      id: 3,
      leftPage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      rightPage: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Web3 Insights',
    },
  ];

  const handleNext = () => {
    if (currentSpread < spreads.length - 1 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1);
        setIsFlipping(false);
      }, 1500);
    }
  };

  const handlePrev = () => {
    if (currentSpread > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1);
        setIsFlipping(false);
      }, 1500);
    }
  };

  const handleJumpToSpread = (index: number) => {
    if (!isFlipping && index !== currentSpread) {
      setFlipDirection(index > currentSpread ? 'next' : 'prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(index);
        setIsFlipping(false);
      }, 1500);
    }
  };

  const getTargetSpread = () => {
    if (flipDirection === 'next') {
      return spreads[currentSpread + 1] || spreads[currentSpread];
    } else {
      return spreads[currentSpread - 1] || spreads[currentSpread];
    }
  };

  const targetSpread = getTargetSpread();

  return (
    <section className="px-8 md:px-16 py-12 md:py-16 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-2">Sample Reading</h2>
        <p className="text-muted-foreground">
          Get a taste of ALANAmagazine's latest edition
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Magazine Container */}
        <div 
          className="relative mx-auto bg-black/5 rounded-none rounded-br-[25px] border border-accent/20 shadow-2xl"
          style={{ 
            aspectRatio: '1.545',
            perspective: '2500px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Base Current Spread */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-white border-r border-accent/10 relative overflow-hidden">
                <img
                  src={spreads[currentSpread].leftPage}
                  alt="Left page"
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
              </div>
              <div className="w-1/2 bg-white relative overflow-hidden">
                <img
                  src={spreads[currentSpread].rightPage}
                  alt="Right page"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Target spread underneath */}
            {isFlipping && (
              <div className="absolute inset-0 flex" style={{ zIndex: 5 }}>
                <div className="w-1/2 bg-white border-r border-accent/10 relative overflow-hidden">
                  <img
                    src={targetSpread.leftPage}
                    alt="Target left"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
                </div>
                <div className="w-1/2 bg-white relative overflow-hidden">
                  <img
                    src={targetSpread.rightPage}
                    alt="Target right"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
                </div>
              </div>
            )}

            {/* Page Curl Effect - from bottom corner */}
            <AnimatePresence>
              {isFlipping && (
                <div
                  className="absolute top-0 h-full w-1/2 pointer-events-none"
                  style={{
                    left: flipDirection === 'next' ? '50%' : '0',
                    zIndex: 20,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Main Curling Page */}
                  <motion.div
                    className="absolute inset-0 bg-white overflow-hidden"
                    style={{
                      transformOrigin: flipDirection === 'next' ? '0% 100%' : '100% 100%',
                      transformStyle: 'preserve-3d',
                    }}
                    initial={{
                      rotateY: 0,
                    }}
                    animate={{
                      rotateY: flipDirection === 'next' ? -180 : 180,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: [0.645, 0.045, 0.355, 1],
                    }}
                  >
                    {/* Front of curling page */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <img
                        src={flipDirection === 'next' 
                          ? spreads[currentSpread].rightPage 
                          : (spreads[currentSpread + 1]?.leftPage || spreads[0].leftPage)
                        }
                        alt="Curling front"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Progressive curl shadow */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0.7, 0.5, 0] }}
                        transition={{
                          duration: 1.5,
                          ease: [0.645, 0.045, 0.355, 1],
                        }}
                        style={{
                          background: flipDirection === 'next'
                            ? 'radial-gradient(ellipse at 0% 100%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)'
                            : 'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)'
                        }}
                      />
                    </div>

                    {/* Back of curling page */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <img
                        src={flipDirection === 'next'
                          ? targetSpread.leftPage
                          : spreads[currentSpread].rightPage
                        }
                        alt="Curling back"
                        className="w-full h-full object-cover scale-x-[-1]"
                      />
                    </div>

                    {/* Page edge shadow */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 1, 0] }}
                      transition={{
                        duration: 1.5,
                        ease: [0.645, 0.045, 0.355, 1],
                      }}
                      style={{
                        filter: 'drop-shadow(-8px 8px 12px rgba(0,0,0,0.3))',
                      }}
                    />
                  </motion.div>

                  {/* Bottom corner curl visual */}
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      bottom: 0,
                      right: flipDirection === 'next' ? 'auto' : 0,
                      left: flipDirection === 'next' ? 0 : 'auto',
                      width: '150px',
                      height: '150px',
                      zIndex: 25,
                      transformStyle: 'preserve-3d',
                      transformOrigin: flipDirection === 'next' ? '0% 100%' : '100% 100%',
                    }}
                    initial={{
                      rotateZ: 0,
                      scale: 1,
                      opacity: 0,
                    }}
                    animate={{
                      rotateZ: flipDirection === 'next' ? [0, -15, -25, -15, 0] : [0, 15, 25, 15, 0],
                      scale: [1, 1.1, 1.2, 1.1, 1],
                      opacity: [0, 0.6, 0.8, 0.6, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: [0.645, 0.045, 0.355, 1],
                    }}
                  >
                    <div 
                      className="w-full h-full"
                      style={{
                        background: `linear-gradient(${flipDirection === 'next' ? '135deg' : '225deg'}, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.9) 50%, rgba(220,220,220,0.85) 100%)`,
                        borderRadius: flipDirection === 'next' ? '0 0 100% 0' : '0 0 0 100%',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
                      }}
                    />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={handlePrev}
            disabled={currentSpread === 0 || isFlipping}
            variant="outline"
            className="border-accent hover:bg-accent/10 disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground font-mono">
              Spread {currentSpread + 1} of {spreads.length}
            </span>
            <div className="flex gap-1.5 ml-4">
              {spreads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleJumpToSpread(index)}
                  disabled={isFlipping}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSpread
                      ? 'bg-accent w-8'
                      : 'bg-accent/30 hover:bg-accent/50'
                  } ${isFlipping ? 'pointer-events-none' : ''}`}
                  aria-label={`Go to spread ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <Button
            onClick={handleNext}
            disabled={currentSpread === spreads.length - 1 || isFlipping}
            variant="outline"
            className="border-accent hover:bg-accent/10 disabled:opacity-30"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-lg font-medium text-foreground">
            {spreads[currentSpread].title}
          </p>
        </div>
      </div>
    </section>
  );
}