import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { AuthorByline } from '@/app/components/AuthorByline';

interface FeaturedArticleHeroProps {
  title: string;
  description: string;
  category: string;
  readTime: number;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  image: string;
}

export function FeaturedArticleHero({
  title,
  description,
  category,
  readTime,
  author,
  date,
  image,
}: FeaturedArticleHeroProps) {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden rounded-none rounded-br-[25px] border border-border group cursor-pointer">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-16 max-w-4xl">
        <Badge className="w-fit mb-4 bg-accent text-accent-foreground border-none rounded-none font-mono">
          {category}
        </Badge>

        <h1 className="text-4xl md:text-6xl font-mono mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
          <AuthorByline author={author} date={date} size="md" />
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{readTime} min read</span>
          </div>
        </div>

        <Button className="w-fit bg-accent hover:bg-accent/90 text-accent-foreground font-mono group/btn">
          Read Article
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}