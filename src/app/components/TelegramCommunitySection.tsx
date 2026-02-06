import { Button } from '@/app/components/ui/button';
import telegramBg from 'figma:asset/cb270e760776c68dad83b41cfdd1ef232188bb11.png';

export function TelegramCommunitySection() {
  return (
    <section className="w-full bg-accent">
      <div className="flex flex-col items-center justify-center text-center px-8 py-12">
        <h2 className="text-foreground mb-3">Need Help?</h2>
        <p className="text-foreground/80 mb-6 max-w-2xl">
          Our friendly community is here to support you every step of the way.
        </p>
        <a
          href="https://t.me/+1To9sD5l3T8zMjIy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-foreground text-background font-sans text-[16px] px-8 h-10 rounded-none rounded-br-[25px] transition-all hover:!bg-[#DCC2FE] hover:!text-foreground hover:outline hover:outline-1 hover:outline-foreground"
        >
          Join Our Community On Telegram
        </a>
      </div>
    </section>
  );
}