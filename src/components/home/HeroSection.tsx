import React from "react";
import { Button } from "../../components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  description?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  imageUrl?: string;
}

const HeroSection = ({
  name = "Jane Doe",
  tagline = "Professional Voice Artist",
  description = "Bringing your scripts to life with versatile, captivating voiceovers for commercials, narration, animation, and more. With over 10 years of experience, I deliver high-quality audio that connects with your audience.",
  ctaPrimary = {
    text: "Book a Session",
    href: "/order",
  },
  ctaSecondary = {
    text: "Explore My Portfolio",
    href: "/portfolio",
  },
  imageUrl = "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&q=80",
}: HeroSectionProps) => {
  return (
    <section className="w-full bg-gradient-to-r from-slate-50 to-slate-100 py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            {name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-indigo-600">
            {tagline}
          </p>
          <p className="text-slate-700 text-lg max-w-xl">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              {ctaPrimary.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <Play className="mr-2 h-5 w-5" />
              {ctaSecondary.text}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-xl opacity-70 animate-pulse"></div>
          <img
            src={imageUrl}
            alt="Professional headshot"
            className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4] border-4 border-white"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg">
            <div className="bg-indigo-600 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
