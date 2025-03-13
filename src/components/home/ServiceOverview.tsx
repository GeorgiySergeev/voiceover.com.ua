import React from "react";
import {
  ArrowRight,
  Mic,
  Music,
  Video,
  FileAudio,
  Headphones,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  services?: Service[];
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceOverview: React.FC<ServiceProps> = ({
  services = [
    {
      id: "1",
      title: "Commercial Voiceovers",
      description:
        "Professional voice for TV, radio, and digital ads that captivate your audience.",
      icon: <Mic className="h-10 w-10 text-primary" />,
    },
    {
      id: "2",
      title: "Narration",
      description:
        "Clear, engaging narration for documentaries, audiobooks, and educational content.",
      icon: <FileAudio className="h-10 w-10 text-primary" />,
    },
    {
      id: "3",
      title: "Animation & Gaming",
      description:
        "Character voices that bring animation and video games to life with personality.",
      icon: <Video className="h-10 w-10 text-primary" />,
    },
    {
      id: "4",
      title: "IVR & Telephony",
      description:
        "Professional voice prompts for phone systems, IVR, and on-hold messaging.",
      icon: <Headphones className="h-10 w-10 text-primary" />,
    },
    {
      id: "5",
      title: "E-Learning",
      description:
        "Clear, instructional voiceovers for online courses and training materials.",
      icon: <Music className="h-10 w-10 text-primary" />,
    },
    {
      id: "6",
      title: "Quick Turnaround",
      description:
        "Fast delivery options available for time-sensitive projects.",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
  ],
  title = "Professional Voice Services",
  description = "Versatile voice talent for all your audio needs. From commercials to narration, my voice brings your message to life.",
  ctaText = "View All Services",
  ctaLink = "/services",
}) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <Card
              key={service.id}
              className="h-full transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <a href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
