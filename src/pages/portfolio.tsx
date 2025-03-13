import React from "react";
import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AudioPlayer from "@/components/shared/AudioPlayer";
import { Card, CardContent } from "@/components/ui/card";

interface AudioSample {
  id: string;
  title: string;
  category: "commercial" | "narration" | "animation" | "corporate";
  duration: string;
  audioUrl: string;
  description?: string;
}

const samples: AudioSample[] = [
  {
    id: "1",
    title: "Luxury Car Commercial",
    category: "commercial",
    duration: "0:30",
    audioUrl: "/samples/commercial-1.mp3",
    description:
      "Elegant and sophisticated voice for high-end automotive brand",
  },
  {
    id: "2",
    title: "Documentary Narration",
    category: "narration",
    duration: "1:15",
    audioUrl: "/samples/narration-1.mp3",
    description: "Informative and engaging narration for wildlife documentary",
  },
  {
    id: "3",
    title: "Animated Character Voice",
    category: "animation",
    duration: "0:45",
    audioUrl: "/samples/animation-1.mp3",
    description: "Playful character voice for children's animated series",
  },
  {
    id: "4",
    title: "Corporate Training",
    category: "corporate",
    duration: "1:00",
    audioUrl: "/samples/corporate-1.mp3",
    description: "Clear and professional voice for corporate e-learning module",
  },
  {
    id: "5",
    title: "Food Product Commercial",
    category: "commercial",
    duration: "0:20",
    audioUrl: "/samples/commercial-2.mp3",
    description: "Warm and inviting voice for gourmet food advertisement",
  },
  {
    id: "6",
    title: "Audiobook Excerpt",
    category: "narration",
    duration: "2:00",
    audioUrl: "/samples/narration-2.mp3",
    description:
      "Expressive narration with character voices for fiction audiobook",
  },
  {
    id: "7",
    title: "Video Game Character",
    category: "animation",
    duration: "0:35",
    audioUrl: "/samples/animation-2.mp3",
    description: "Fierce warrior character voice for fantasy RPG game",
  },
  {
    id: "8",
    title: "Medical Explainer",
    category: "corporate",
    duration: "1:30",
    audioUrl: "/samples/corporate-2.mp3",
    description: "Reassuring and clear voice for medical procedure explanation",
  },
  {
    id: "9",
    title: "Retail Sale Announcement",
    category: "commercial",
    duration: "0:15",
    audioUrl: "/samples/commercial-3.mp3",
    description: "Energetic and exciting voice for seasonal sale promotion",
  },
];

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Voice Portfolio</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Browse through my voice samples across different categories. Each
            sample demonstrates my versatility and range as a professional voice
            artist.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 w-full max-w-2xl">
              <TabsTrigger value="all">All Samples</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="narration">Narration</TabsTrigger>
              <TabsTrigger value="animation">Animation</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samples.map((sample) => (
                <SampleCard key={sample.id} sample={sample} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samples
                .filter((sample) => sample.category === "commercial")
                .map((sample) => (
                  <SampleCard key={sample.id} sample={sample} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="narration" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samples
                .filter((sample) => sample.category === "narration")
                .map((sample) => (
                  <SampleCard key={sample.id} sample={sample} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="animation" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samples
                .filter((sample) => sample.category === "animation")
                .map((sample) => (
                  <SampleCard key={sample.id} sample={sample} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samples
                .filter((sample) => sample.category === "corporate")
                .map((sample) => (
                  <SampleCard key={sample.id} sample={sample} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

interface SampleCardProps {
  sample: AudioSample;
}

const SampleCard: React.FC<SampleCardProps> = ({ sample }) => {
  return (
    <Card className="overflow-hidden bg-white h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex flex-col space-y-3 flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">{sample.title}</h3>
              <p className="text-sm text-slate-500 capitalize">
                {sample.category}
              </p>
            </div>
            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
              {sample.duration}
            </span>
          </div>

          {sample.description && (
            <p className="text-sm text-slate-600 mt-2">{sample.description}</p>
          )}

          <div className="mt-auto pt-4">
            <AudioPlayer audioUrl={sample.audioUrl} title={sample.title} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioPage;
