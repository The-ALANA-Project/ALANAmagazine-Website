export function HelpSection({ onFeaturedCreatorsClick }: { onFeaturedCreatorsClick: () => void }) {
  return (
    <section className="w-full bg-accent">
      <div className="flex flex-col items-center justify-center text-center px-8 py-12">
        <h2 className="text-foreground mb-3">Explore Our Creators</h2>
        <p className="text-foreground/80 mb-6 max-w-2xl">
          Check out the Featured Creators of our current or upcoming edition and shop with them directly.
        </p>
        <button
          onClick={onFeaturedCreatorsClick}
          className="inline-flex items-center justify-center bg-foreground text-background font-sans text-[16px] px-8 h-10 rounded-none rounded-br-[25px] transition-all hover:!bg-[#DCC2FE] hover:!text-foreground hover:outline hover:outline-1 hover:outline-foreground"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}