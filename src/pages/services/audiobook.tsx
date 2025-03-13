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
  priceNote?: string;
}

const audiobookTiers: ServiceTier[] = [
  {
    id: "audiobook-basic",
    name: "Short-Form",
    price: "$250",
    priceNote: "per finished hour",
    description: "Perfect for short stories and novellas",
    features: [
      "Professional narration",
      "Basic character differentiation",
      "Standard audio quality",
      "Basic audio cleanup",
      "MP3 and WAV formats",
    ],
    turnaround: "7-10 business days",
    revisions: 1,
  },
  {
    id: "audiobook-standard",
    name: "Standard",
    price: "$350",
    priceNote: "per finished hour",
    description: "Ideal for novels and non-fiction books",
    features: [
      "Professional narration",
      "Distinct character voices",
      "High-quality audio",
      "Full audio processing",
      "ACX compliant files",
      "Multiple delivery formats",
    ],
    popular: true,
    turnaround: "5-7 business days",
    revisions: 2,
  },
  {
    id: "audiobook-premium",
    name: "Premium",
    price: "$500",
    priceNote: "per finished hour",
    description: "Comprehensive package for complex narratives",
    features: [
      "Professional narration",
      "Advanced character performance",
      "Premium audio quality",
      "Full audio processing",
      "ACX compliant files",
      "All delivery formats",
      "Priority support",
    ],
    turnaround: "3-5 business days",
    revisions: 3,
  },
];

interface AudioSample {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
  description: string;
  genre?: string;
}

const audiobookSamples: AudioSample[] = [
  {
    id: "ab1",
    title: "Fiction Audiobook Excerpt",
    duration: "2:00",
    audioUrl: "/samples/audiobook-1.mp3",
    description:
      "Engaging narration with character voices for contemporary fiction",
    genre: "Contemporary Fiction",
  },
  {
    id: "ab2",
    title: "Mystery Novel Excerpt",
    duration: "1:45",
    audioUrl: "/samples/audiobook-2.mp3",
    description:
      "Suspenseful narration with atmospheric tone for mystery thriller",
    genre: "Mystery/Thriller",
  },
  {
    id: "ab3",
    title: "Non-Fiction Excerpt",
    duration: "1:30",
    audioUrl: "/samples/audiobook-3.mp3",
    description: "Clear, authoritative narration for business non-fiction book",
    genre: "Business Non-Fiction",
  },
];

const AudiobookServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Audiobook Narration Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional audiobook narration that brings your written words to
            life. From fiction with distinct character voices to clear, engaging
            non-fiction narration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Why Choose My Audiobook Services?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Engaging Storytelling
                  </h3>
                  <p className="text-slate-600">
                    I bring your story to life with nuanced narration that
                    captures the tone and emotion of your writing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Distinct Character Voices
                  </h3>
                  <p className="text-slate-600">
                    For fiction, I create recognizable voices for different
                    characters, enhancing the listening experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">ACX Compliant</h3>
                  <p className="text-slate-600">
                    All audiobook files meet Audible's ACX technical
                    requirements, ensuring your book passes quality control.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Consistent Performance
                  </h3>
                  <p className="text-slate-600">
                    I maintain consistent energy, pacing, and character voices
                    throughout your entire audiobook.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Audiobook Narration Samples
            </h2>
            <div className="space-y-4">
              {audiobookSamples.map((sample) => (
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
                          {sample.genre && (
                            <p className="text-xs mt-1 text-indigo-600 font-medium">
                              Genre: {sample.genre}
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
                  <a href="/portfolio?category=narration">
                    View More Audiobook Samples
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Audiobook Narration Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiobookTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
          <p className="text-center text-sm text-slate-600 mt-6">
            Note: Pricing is per finished hour of audio. A typical audiobook
            runs approximately 9,000 words per finished hour. Contact me for a
            custom quote based on your manuscript's word count.
          </p>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ready to Turn Your Book into an Audiobook?
          </h2>
          <p className="text-center mb-6">
            Let's collaborate to create an engaging audiobook that captivates
            listeners and brings your words to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <a href="/order?service=audiobook">
                Book Audiobook Narration <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="/contact">Request Sample Reading</a>
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
          {tier.priceNote && (
            <span className="text-sm text-slate-500 ml-1">
              {tier.priceNote}
            </span>
          )}
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
          <a href={`/order?service=audiobook&package=${tier.id}`}>
            Select Package
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AudiobookServicePage;
