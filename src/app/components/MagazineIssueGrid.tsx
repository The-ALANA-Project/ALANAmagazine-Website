import { Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface MagazineIssue {
  id: string;
  title: string;
  issueNumber: string;
  series?: string;
  date: string;
  coverImage: string;
  description: string;
}

interface MagazineIssueGridProps {
  issues: MagazineIssue[];
  onNavigateToSubscribe?: () => void;
}

export function MagazineIssueGrid({ issues, onNavigateToSubscribe }: MagazineIssueGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {issues.map((issue) => (
        <MagazineIssueCard key={issue.id} issue={issue} onNavigateToSubscribe={onNavigateToSubscribe} />
      ))}
    </div>
  );
}

function MagazineIssueCard({ issue, onNavigateToSubscribe }: { issue: MagazineIssue; onNavigateToSubscribe?: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    if (issue.title === 'AIR Edition' && onNavigateToSubscribe) {
      onNavigateToSubscribe();
    }
  };

  return (
    <article className="article-card overflow-hidden group cursor-pointer">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={issue.coverImage}
          alt={issue.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="font-mono">{issue.date}</span>
        </div>

        <h3 className="text-xl group-hover:text-accent transition-colors duration-300">
          {issue.title}
        </h3>

        {issue.series && (
          <h4 className="text-[18px] font-sans font-medium text-foreground/70">
            {issue.series}
          </h4>
        )}

        <div>
          <p className={`text-sm text-muted-foreground ${isExpanded ? '' : 'line-clamp-2'}`}>
            {issue.description}
          </p>
          {issue.description.length > 100 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-xs text-muted-foreground hover:text-accent mt-2 transition-colors"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        <Button
          onClick={handleButtonClick}
          className="w-full bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 rounded-none rounded-br-[25px] transition-colors"
        >
          {issue.title === 'AIR Edition' ? 'Coming Soon' : 'Download Sample Reads'}
        </Button>
      </div>
    </article>
  );
}