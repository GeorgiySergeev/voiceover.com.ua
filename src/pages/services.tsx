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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  tiers: ServiceTier[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "commercial",
    name: "Commercial Voiceovers",
    description: "Professional voice for TV, radio, and digital advertisements",
    tiers: [
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
    ],
  },
  {
    id: "narration",
    name: "Narration Services",
    description:
      "Clear, engaging narration for documentaries, audiobooks, and educational content",
    tiers: [
      {
        id: "narration-basic",
        name: "Basic",
        price: "$200",
        description: "Great for short explainer videos and presentations",
        features: [
          "Up to 5 minutes of finished audio",
          "Professional recording",
          "Basic audio cleanup",
          "Standard usage rights",
        ],
        turnaround: "3-4 business days",
        revisions: 1,
      },
      {
        id: "narration-standard",
        name: "Standard",
        price: "$400",
        description: "Perfect for documentaries and corporate videos",
        features: [
          "Up to 15 minutes of finished audio",
          "Professional recording",
          "Full audio processing",
          "Extended usage rights",
          "Multiple delivery formats",
        ],
        popular: true,
        turnaround: "2-3 business days",
        revisions: 2,
      },
      {
        id: "narration-premium",
        name: "Premium",
        price: "$800",
        description: "Comprehensive package for audiobooks and series",
        features: [
          "Up to 30 minutes of finished audio",
          "Professional recording",
          "Premium audio processing",
          "Full usage rights",
          "Multiple delivery formats",
          "Priority support",
        ],
        turnaround: "2 business days",
        revisions: 3,
      },
    ],
  },
  {
    id: "animation",
    name: "Animation & Gaming",
    description:
      "Character voices that bring animation and video games to life",
    tiers: [
      {
        id: "animation-basic",
        name: "Basic",
        price: "$200",
        description: "Single character voice for short animations",
        features: [
          "1 character voice",
          "Up to 3 minutes of finished audio",
          "Professional recording",
          "Basic audio cleanup",
        ],
        turnaround: "3 business days",
        revisions: 1,
      },
      {
        id: "animation-standard",
        name: "Standard",
        price: "$400",
        description: "Multiple character voices for animations and games",
        features: [
          "Up to 3 character voices",
          "Up to 10 minutes of finished audio",
          "Professional recording",
          "Full audio processing",
          "Multiple delivery formats",
        ],
        popular: true,
        turnaround: "2-3 business days",
        revisions: 2,
      },
      {
        id: "animation-premium",
        name: "Premium",
        price: "$800",
        description: "Complete voice acting package for games and series",
        features: [
          "Up to 5 character voices",
          "Up to 20 minutes of finished audio",
          "Professional recording",
          "Premium audio processing",
          "Full usage rights",
          "Multiple delivery formats",
        ],
        turnaround: "2 business days",
        revisions: 3,
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate & E-Learning",
    description:
      "Professional voice for corporate videos, IVR, and training materials",
    tiers: [
      {
        id: "corporate-basic",
        name: "Basic",
        price: "$150",
        description: "Ideal for short corporate announcements and IVR",
        features: [
          "Up to 3 minutes of finished audio",
          "Professional recording",
          "Basic audio cleanup",
          "Internal usage rights",
        ],
        turnaround: "3 business days",
        revisions: 1,
      },
      {
        id: "corporate-standard",
        name: "Standard",
        price: "$300",
        description: "Perfect for training videos and presentations",
        features: [
          "Up to 10 minutes of finished audio",
          "Professional recording",
          "Full audio processing",
          "Extended usage rights",
          "Multiple delivery formats",
        ],
        popular: true,
        turnaround: "2-3 business days",
        revisions: 2,
      },
      {
        id: "corporate-premium",
        name: "Premium",
        price: "$600",
        description: "Comprehensive package for e-learning courses",
        features: [
          "Up to 20 minutes of finished audio",
          "Professional recording",
          "Premium audio processing",
          "Full usage rights",
          "Multiple delivery formats",
          "Priority support",
        ],
        turnaround: "2 business days",
        revisions: 3,
      },
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Voice Over Services</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional voice over services tailored to your project needs.
            Select from a range of options across different categories.
          </p>
        </div>

        <Tabs defaultValue="commercial" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {serviceCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                <p className="text-slate-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.tiers.map((tier) => (
                  <PricingCard key={tier.id} tier={tier} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-slate-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Need a Custom Quote?
          </h2>
          <p className="text-center mb-6">
            Have a project that doesn't fit into these packages? Contact me for
            a personalized quote tailored to your specific requirements.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg">
              <a href="/contact">
                Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
          <a href="/order">Select Package</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServicesPage;
