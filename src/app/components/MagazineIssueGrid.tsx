import { Calendar, Download } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface MagazineIssue {
  id: string;
  title: string;
  issueNumber: string;
  date: string;
  coverImage: string;
  description: string;
}

interface MagazineIssueGridProps {
  issues: MagazineIssue[];
}

export function MagazineIssueGrid({ issues }: MagazineIssueGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {issues.map((issue) => (
        <article
          key={issue.id}
          className="article-card overflow-hidden group cursor-pointer"
        >
          {/* Cover Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-br-[25px]">
            <img
              src={issue.coverImage}
              alt={issue.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Issue Number Badge */}
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-none font-mono text-sm">
              #{issue.issueNumber}
            </div>
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

            <p className="text-sm text-muted-foreground line-clamp-2">
              {issue.description}
            </p>

            <Button
              variant="outline"
              className="w-full border-border hover:border-accent hover:text-accent font-mono group/btn"
            >
              <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-1 transition-transform" />
              Download Issue
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}