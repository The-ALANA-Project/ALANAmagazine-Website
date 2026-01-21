import { Clock } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { AuthorByline } from '@/app/components/AuthorByline';
import { ClickHandIcon } from '@/app/components/ClickHandIcon';

interface ArticleCardProps {
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
  featured?: boolean;
}

export function ArticleCard({
  title,
  description,
  category,
  readTime,
  author,
  date,
  image,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className={`article-card overflow-hidden group cursor-pointer flex flex-col h-full ${featured ? 'col-span-full md:col-span-2' : ''}`}>
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-none rounded-none font-mono">
          {category}
        </Badge>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="font-mono">{readTime} min read</span>
        </div>

        <h4 className="text-2xl group-hover:text-accent transition-colors duration-300">
          {title}
        </h4>

        <p className="text-[16px] text-muted-foreground line-clamp-2 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-foreground mt-auto">
          <AuthorByline author={author} date={date} />
          
          <ClickHandIcon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-300" />
        </div>
      </div>
    </article>
  );
}