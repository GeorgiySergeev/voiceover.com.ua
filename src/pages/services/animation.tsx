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

const animationTiers: ServiceTier[] = [
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
];

interface AudioSample {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
  description: string;
  character?: string;
}

const animationSamples: AudioSample[] = [
  {
    id: "a1",
    title: "Animated Character Voice",
    duration: "0:45",
    audioUrl: "/samples/animation-1.mp3",
    description: "Playful character voice for children's animated series",
    character: "Lily - Curious 8-year-old explorer",
  },
  {
    id: "a2",
    title: "Video Game Character",
    duration: "0:35",
    audioUrl: "/samples/animation-2.mp3",
    description: "Fierce warrior character voice for fantasy RPG game",
    character: "Valeria - Battle-hardened warrior",
  },
  {
    id: "a3",
    title: "Animated Villain",
    duration: "0:40",
    audioUrl: "/samples/animation-3.mp3",
    description: "Menacing villain voice for animated feature film",
    character: "Morgana - Power-hungry sorceress",
  },
];

const AnimationServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Animation & Character Voice Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Bring your animated characters to life with professional voice
            acting services. From children's cartoons to video games and
            everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Why Choose My Animation Voice Services?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Character Versatility
                  </h3>
                  <p className="text-slate-600">
                    From heroic protagonists to quirky sidekicks and menacing
                    villains, I can create distinct voices for a wide range of
                    characters.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Emotional Range</h3>
                  <p className="text-slate-600">
                    I bring authentic emotion to every character, creating
                    memorable performances that resonate with audiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Character Consistency
                  </h3>
                  <p className="text-slate-600">
                    For series and games, I maintain consistent character voices
                    throughout your project, ensuring a cohesive experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Animation-Ready Files
                  </h3>
                  <p className="text-slate-600">
                    All audio is delivered in formats optimized for animation
                    workflows, with clean files ready for lip-syncing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Animation Voice Samples</h2>
            <div className="space-y-4">
              {animationSamples.map((sample) => (
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
                          {sample.character && (
                            <p className="text-xs mt-1 text-indigo-600 font-medium">
                              Character: {sample.character}
                            </p>
                          )}
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
                  <a href="/portfolio?category=animation">
                    View More Animation Samples
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Animation Voice Over Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {animationTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ready to Give Voice to Your Characters?
          </h2>
          <p className="text-center mb-6">
            Let's collaborate to create memorable character voices that bring
            your animation or game to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <a href="/order?service=animation">
                Book Animation VO <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="/contact">Request Character Demo</a>
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
          <a href={`/order?service=animation&package=${tier.id}`}>
            Select Package
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnimationServicePage;
