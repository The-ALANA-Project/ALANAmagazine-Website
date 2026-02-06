import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section>
      <div className="mb-12">
        <h2 className="mb-2">What Our Community Says</h2>
        <p className="text-muted-foreground">
          Hear from readers and creators who are part of the ALANA journey:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-secondary/20 p-8 rounded-none rounded-br-[25px] border border-accent hover:border-accent transition-all duration-300 flex flex-col hover:scale-105"
          >
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-foreground/80 mb-6 leading-relaxed flex-1">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-col justify-center">
                <p className="font-medium text-foreground leading-tight">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground leading-tight">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}