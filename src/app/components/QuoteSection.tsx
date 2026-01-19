export function QuoteSection() {
  return (
    <section className="w-full bg-accent py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center px-8">
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-foreground opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
          </svg>
        </div>
        <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8">
          "Web3 is not just about technology—it's about empowering creators to own their work, 
          build meaningful communities, and shape the future of digital culture."
        </blockquote>
        <p className="text-lg text-foreground/80 font-mono">
          — ALANAmagazine
        </p>
      </div>
    </section>
  );
}