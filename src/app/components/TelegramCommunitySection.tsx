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
        <Button
          asChild
          className="bg-foreground hover:bg-foreground/90 text-background font-sans px-8 py-6"
        >
          <a
            href="https://t.me/+1To9sD5l3T8zMjIy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Community On Telegram
          </a>
        </Button>
      </div>
    </section>
  );
}