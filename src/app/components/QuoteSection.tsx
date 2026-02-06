export function QuoteSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-accent">
      <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
        <blockquote>
          <p className="text-foreground text-[30px] md:text-[36px] lg:text-[40px] font-normal leading-[1.5] mb-8">
            "Art is the highest form of hope."
          </p>
          
          <footer className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 md:w-16 bg-foreground/30"></div>
            <cite className="not-italic">
              <a
                href="https://en.wikipedia.org/wiki/Gerhard_Richter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 text-[16px] md:text-[18px] hover:text-foreground transition-colors"
              >
                Gerhard Richter
              </a>
            </cite>
            <div className="h-[1px] w-12 md:w-16 bg-foreground/30"></div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
