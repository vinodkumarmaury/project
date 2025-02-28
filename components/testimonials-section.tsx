import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "This platform has completely transformed how we operate. The analytics features alone have increased our conversion rates by 30%.",
    author: "Sarah Johnson",
    role: "CEO at TechStart",
    avatar: "SJ"
  },
  {
    quote: "The ease of use and powerful features make this the perfect solution for our team. We've been able to launch products twice as fast.",
    author: "Michael Chen",
    role: "Product Manager at InnovateCo",
    avatar: "MC"
  },
  {
    quote: "Customer support is outstanding. Any time we've had an issue, the team has responded quickly and effectively.",
    author: "Emily Rodriguez",
    role: "CTO at GrowthLabs",
    avatar: "ER"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <blockquote className="text-lg mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src="" alt={testimonial.author} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}