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

const videoTiers: ServiceTier[] = [
  {
    id: "video-basic",
    name: "Basic",
    price: "$175",
    description: "Perfect for short videos and social media content",
    features: [
      "Up to 2 minutes of finished audio",
      "Professional recording",
      "Basic audio cleanup",
      "Standard usage rights",
      "MP3 delivery format",
    ],
    turnaround: "3 business days",
    revisions: 1,
  },
  {
    id: "video-standard",
    name: "Standard",
    price: "$350",
    description: "Ideal for promotional videos and online courses",
    features: [
      "Up to 5 minutes of finished audio",
      "Professional recording",
      "Full audio processing",
      "Extended usage rights",
      "Multiple delivery formats",
      "Sync markers for video editing",
    ],
    popular: true,
    turnaround: "2-3 business days",
    revisions: 2,
  },
  {
    id: "video-premium",
    name: "Premium",
    price: "$700",
    description: "Comprehensive package for long-form video content",
    features: [
      "Up to 15 minutes of finished audio",
      "Professional recording",
      "Premium audio processing",
      "Full usage rights",
      "All delivery formats",
      "Sync markers for video editing",
      "Priority support",
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
  videoType?: string;
}

const videoSamples: AudioSample[] = [
  {
    id: "v1",
    title: "Product Explainer Video",
    duration: "1:15",
    audioUrl: "/samples/video-1.mp3",
    description: "Clear and engaging narration for tech product explainer",
    videoType: "Product Explainer",
  },
  {
    id: "v2",
    title: "YouTube Educational Content",
    duration: "2:00",
    audioUrl: "/samples/video-2.mp3",
    description: "Conversational narration for educational YouTube channel",
    videoType: "Educational Content",
  },
  {
    id: "v3",
    title: "Travel Documentary",
    duration: "1:45",
    audioUrl: "/samples/video-3.mp3",
    description: "Evocative narration for travel destination video",
    videoType: "Documentary",
  },
];

const VideoServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Video Voice Over Services</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional voice over services for all types of video content.
            From explainer videos and documentaries to YouTube content, social
            media videos, and online courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Why Choose My Video Voice Services?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Video-Optimized Delivery
                  </h3>
                  <p className="text-slate-600">
                    I provide narration that perfectly complements your visual
                    content, with pacing that matches your video editing needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sync-Ready Files</h3>
                  <p className="text-slate-600">
                    Audio files are delivered with sync markers and timing notes
                    to make video editing and synchronization easier.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Versatile Style</h3>
                  <p className="text-slate-600">
                    From professional corporate videos to casual YouTube
                    content, I adapt my delivery style to match your video's
                    tone.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Engagement Focus</h3>
                  <p className="text-slate-600">
                    I deliver narration that keeps viewers engaged and watching
                    until the end of your video content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Video Voice Over Samples
            </h2>
            <div className="space-y-4">
              {videoSamples.map((sample) => (
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
                          {sample.videoType && (
                            <p className="text-xs mt-1 text-indigo-600 font-medium">
                              Type: {sample.videoType}
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
                  <a href="/portfolio?category=video">
                    View More Video Samples
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Video Voice Over Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ready to Enhance Your Video Content?
          </h2>
          <p className="text-center mb-6">
            Let's work together to create professional voice over that elevates
            your video and keeps viewers engaged.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <a href="/order?service=video">
                Book Video VO <ArrowRight className="ml-2 h-4 w-4" />
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
          <a href={`/order?service=video&package=${tier.id}`}>Select Package</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VideoServicePage;
