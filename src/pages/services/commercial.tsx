import React from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import AudioPlayer from "@/components/shared/AudioPlayer";

interface ServiceTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  turnaround: string;
  revisions: number;
}

const commercialTiers: ServiceTier[] = [
  {
    id: "commercial-basic",
    name: "Basic",
    price: "$150",
    description: "Perfect for short ads and social media content",
    features: [
      "Up to 30 seconds of finished audio",
      "Professional recording",
      "Basic audio cleanup",
      "Commercial usage rights",
    ],
    turnaround: "2-3 business days",
    revisions: 1,
  },
  {
    id: "commercial-standard",
    name: "Standard",
    price: "$300",
    description: "Ideal for broadcast commercials and promotional videos",
    features: [
      "Up to 60 seconds of finished audio",
      "Professional recording",
      "Full audio processing",
      "Commercial usage rights",
      "Multiple delivery formats",
    ],
    popular: true,
    turnaround: "2 business days",
    revisions: 2,
  },
  {
    id: "commercial-premium",
    name: "Premium",
    price: "$500",
    description: "Complete package for high-end commercial campaigns",
    features: [
      "Up to 90 seconds of finished audio",
      "Professional recording",
      "Premium audio processing",
      "Extended commercial usage rights",
      "Multiple delivery formats",
      "Rush delivery available",
    ],
    turnaround: "1 business day",
    revisions: 3,
  },
];

interface AudioSample {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
  description: string;
}

const commercialSamples: AudioSample[] = [
  {
    id: "c1",
    title: "Luxury Car Commercial",
    duration: "0:30",
    audioUrl: "/samples/commercial-1.mp3",
    description:
      "Elegant and sophisticated voice for high-end automotive brand",
  },
  {
    id: "c2",
    title: "Food Product Commercial",
    duration: "0:20",
    audioUrl: "/samples/commercial-2.mp3",
    description: "Warm and inviting voice for gourmet food advertisement",
  },
  {
    id: "c3",
    title: "Retail Sale Announcement",
    duration: "0:15",
    audioUrl: "/samples/commercial-3.mp3",
    description: "Energetic and exciting voice for seasonal sale promotion",
  },
];

const CommercialServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Commercial Voice Over Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional voice over services for commercials, advertisements,
            and promotional content. From TV and radio spots to digital ads and
            social media content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Why Choose My Commercial Voice Over Services?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Versatile Commercial Voice
                  </h3>
                  <p className="text-slate-600">
                    From authoritative and professional to warm and friendly, I
                    can adapt my voice to match your brand's tone and message.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Broadcast-Quality Audio
                  </h3>
                  <p className="text-slate-600">
                    All commercial recordings are delivered with professional
                    studio quality, ready for broadcast on TV, radio, or digital
                    platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quick Turnaround</h3>
                  <p className="text-slate-600">
                    When you need your commercial voice over fast, I offer
                    expedited services to meet tight deadlines without
                    compromising quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Brand Consistency</h3>
                  <p className="text-slate-600">
                    For ongoing campaigns, I ensure consistent delivery across
                    all your commercial materials to strengthen brand
                    recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Commercial Voice Samples
            </h2>
            <div className="space-y-4">
              {commercialSamples.map((sample) => (
                <Card key={sample.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">
                            {sample.title}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {sample.description}
                          </p>
                        </div>
                        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                          {sample.duration}
                        </span>
                      </div>
                      <div className="mt-4">
                        <AudioPlayer
                          audioUrl={sample.audioUrl}
                          title={sample.title}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="text-center mt-6">
                <Button variant="outline" asChild>
                  <a href="/portfolio?category=commercial">
                    View More Commercial Samples
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Commercial Voice Over Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercialTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ready to Elevate Your Commercial?
          </h2>
          <p className="text-center mb-6">
            Let's work together to create a commercial voice over that captures
            attention and drives results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <a href="/order?service=commercial">
                Book Commercial VO <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="/contact">Request Custom Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface PricingCardProps {
  tier: ServiceTier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <Card
      className={`flex flex-col h-full ${tier.popular ? "border-indigo-500 border-2" : ""}`}
    >
      {tier.popular && (
        <div className="bg-indigo-500 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{tier.name}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{tier.price}</span>
        </div>
        <CardDescription className="mt-2">{tier.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-200">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Turnaround Time:</span>
              <span>{tier.turnaround}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="font-medium">Revisions:</span>
              <span>{tier.revisions}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={`/order?service=commercial&package=${tier.id}`}>
            Select Package
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CommercialServicePage;
