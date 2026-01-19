import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

interface CategoryFiltersProps {
  categories: string[];
  onCategoryChange?: (category: string | null) => void;
}

export function CategoryFilters({ categories, onCategoryChange }: CategoryFiltersProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant={activeCategory === null ? 'default' : 'outline'}
        onClick={() => handleCategoryClick(null)}
        className={`font-mono transition-all duration-300 ${
          activeCategory === null
            ? 'bg-primary text-primary-foreground'
            : 'border-border hover:border-accent hover:text-accent'
        }`}
      >
        All Articles
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          onClick={() => handleCategoryClick(category)}
          className={`font-mono transition-all duration-300 ${
            activeCategory === category
              ? 'bg-accent text-accent-foreground'
              : 'border-border hover:border-accent hover:text-accent'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}