import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';

interface AuthorBylineProps {
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  size?: 'sm' | 'md';
}

export function AuthorByline({ author, date, size = 'sm' }: AuthorBylineProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex items-center gap-3">
      <Avatar className={size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'}>
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback className="bg-accent text-accent-foreground font-mono text-xs">
          {getInitials(author.name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className={`font-medium ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
          {author.name}
        </span>
        <a 
          href="#" 
          className="text-xs text-foreground hover:text-accent transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}