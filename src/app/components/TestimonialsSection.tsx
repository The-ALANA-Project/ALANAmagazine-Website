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
    <section className="px-8 md:px-16 py-12 md:py-16 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-2">What Our Community Says</h2>
        <p className="text-muted-foreground">
          Hear from creators and builders who are part of the ALANA journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-secondary/20 p-8 rounded-none rounded-br-[25px] border border-accent/20 hover:border-accent/40 transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-foreground/80 mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
