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

const corporateTiers: ServiceTier[] = [
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
];

interface AudioSample {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
  description: string;
}

const corporateSamples: AudioSample[] = [
  {
    id: "c1",
    title: "Corporate Training",
    duration: "1:00",
    audioUrl: "/samples/corporate-1.mp3",
    description: "Clear and professional voice for corporate e-learning module",
  },
  {
    id: "c2",
    title: "Medical Explainer",
    duration: "1:30",
    audioUrl: "/samples/corporate-2.mp3",
    description: "Reassuring and clear voice for medical procedure explanation",
  },
  {
    id: "c3",
    title: "IVR Phone System",
    duration: "0:45",
    audioUrl: "/samples/corporate-3.mp3",
    description: "Professional voice prompts for automated phone system",
  },
];

const CorporateServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Corporate & E-Learning Voice Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional voice over services for corporate videos, e-learning
            modules, IVR systems, and training materials. Clear, engaging, and
            authoritative voice that represents your brand with professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Why Choose My Corporate Voice Services?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Professional Delivery
                  </h3>
                  <p className="text-slate-600">
                    Clear, articulate voice that conveys professionalism and
                    authority, perfect for representing your brand.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Engagement for E-Learning
                  </h3>
                  <p className="text-slate-600">
                    I keep learners engaged with a conversational yet
                    authoritative tone that maintains interest throughout
                    training materials.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Technical Accuracy</h3>
                  <p className="text-slate-600">
                    Proper pronunciation of industry-specific terminology and
                    jargon, ensuring your content is delivered with accuracy.
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
                    Consistent voice across all your corporate materials,
                    creating a cohesive brand identity in all audio
                    communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Corporate Voice Samples</h2>
            <div className="space-y-4">
              {corporateSamples.map((sample) => (
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
                  <a href="/portfolio?category=corporate">
                    View More Corporate Samples
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Corporate Voice Over Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Ready to Enhance Your Corporate Communications?
          </h2>
          <p className="text-center mb-6">
            Let's work together to create professional voice over content that
            represents your brand with clarity and authority.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <a href="/order?service=corporate">
                Book Corporate VO <ArrowRight className="ml-2 h-4 w-4" />
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
          <a href={`/order?service=corporate&package=${tier.id}`}>
            Select Package
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CorporateServicePage;
