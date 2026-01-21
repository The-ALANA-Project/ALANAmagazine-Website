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
          "Basic income would give people the most important freedom: the freedom of deciding for themselves what they want to do with their lives."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-foreground"></div>
          <a 
            href="https://rutgerbregman.com/books/utopia-for-realists"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-foreground/50 font-mono hover:text-foreground transition-colors"
          >
            Rutger Bregman
          </a>
          <div className="h-[1px] w-16 bg-foreground"></div>
        </div>
      </div>
    </section>
  );
}