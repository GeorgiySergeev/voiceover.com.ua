import React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  clientName: string;
  clientTitle: string;
  companyLogo?: string;
  avatarUrl?: string;
  rating?: number;
}

const defaultTestimonials: TestimonialProps[] = [
  {
    quote:
      "Her voice brought our commercial to life! The perfect blend of professionalism and warmth that resonated with our audience.",
    clientName: "Sarah Johnson",
    clientTitle: "Marketing Director, TechBrand",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=TB",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    quote:
      "We've worked with many voice artists, but her narration for our documentary series was exceptional. Clear, emotive, and perfectly paced.",
    clientName: "Michael Chen",
    clientTitle: "Executive Producer, MediaWorks",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=MW",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    quote:
      "The audiobook narration exceeded our expectations. Her ability to bring different characters to life made our story truly engaging.",
    clientName: "Emily Rodriguez",
    clientTitle: "Publishing Director, NovelHouse",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=NH",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
  },
  {
    quote:
      "Quick turnaround, professional quality, and a voice that perfectly matched our brand identity. We'll definitely be working together again!",
    clientName: "David Wilson",
    clientTitle: "Creative Director, AdVantage",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=AV",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <Card className="h-full bg-white border border-gray-200">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex justify-between items-start">
          <Quote className="text-primary h-8 w-8 opacity-50" />
          <div className="flex">
            {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        <p className="text-gray-700 mb-6 flex-grow italic">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center mt-auto">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage
              src={testimonial.avatarUrl}
              alt={testimonial.clientName}
            />
            <AvatarFallback>
              {testimonial.clientName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h4 className="font-semibold text-gray-900">
              {testimonial.clientName}
            </h4>
            <p className="text-sm text-gray-600">{testimonial.clientTitle}</p>
          </div>
          {testimonial.companyLogo && (
            <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
              <img
                src={testimonial.companyLogo}
                alt={
                  testimonial.clientTitle.split(",")[1]?.trim() ||
                  "Company logo"
                }
                className="max-h-6 max-w-6"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialCarouselProps {
  testimonials?: TestimonialProps[];
  title?: string;
  subtitle?: string;
}

const TestimonialCarousel = ({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
  subtitle = "Trusted by professionals across industries",
}: TestimonialCarouselProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full px-4 sm:px-6 md:px-8"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
