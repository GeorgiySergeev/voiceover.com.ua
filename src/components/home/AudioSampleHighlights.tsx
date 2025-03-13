import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AudioPlayer from "../shared/AudioPlayer";

interface AudioSample {
  id: string;
  title: string;
  category: "commercial" | "narration" | "animation" | "corporate";
  duration: string;
  audioUrl: string;
}

interface AudioSampleHighlightsProps {
  samples?: AudioSample[];
  title?: string;
  description?: string;
}

const AudioSampleHighlights: React.FC<AudioSampleHighlightsProps> = ({
  samples = [
    {
      id: "1",
      title: "Luxury Car Commercial",
      category: "commercial",
      duration: "0:30",
      audioUrl: "/samples/commercial-1.mp3",
    },
    {
      id: "2",
      title: "Documentary Narration",
      category: "narration",
      duration: "1:15",
      audioUrl: "/samples/narration-1.mp3",
    },
    {
      id: "3",
      title: "Animated Character Voice",
      category: "animation",
      duration: "0:45",
      audioUrl: "/samples/animation-1.mp3",
    },
    {
      id: "4",
      title: "Corporate Training",
      category: "corporate",
      duration: "1:00",
      audioUrl: "/samples/corporate-1.mp3",
    },
    {
      id: "5",
      title: "Food Product Commercial",
      category: "commercial",
      duration: "0:20",
      audioUrl: "/samples/commercial-2.mp3",
    },
    {
      id: "6",
      title: "Audiobook Excerpt",
      category: "narration",
      duration: "2:00",
      audioUrl: "/samples/narration-2.mp3",
    },
  ],
  title = "Featured Voice Samples",
  description = "Listen to some of my recent work across different voice styles and industries.",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSamples =
    activeCategory === "all"
      ? samples
      : samples.filter((sample) => sample.category === activeCategory);

  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>
                All Samples
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                onClick={() => setActiveCategory("commercial")}
              >
                Commercial
              </TabsTrigger>
              <TabsTrigger
                value="narration"
                onClick={() => setActiveCategory("narration")}
              >
                Narration
              </TabsTrigger>
              <TabsTrigger
                value="animation"
                onClick={() => setActiveCategory("animation")}
              >
                Animation
              </TabsTrigger>
              <TabsTrigger
                value="corporate"
                onClick={() => setActiveCategory("corporate")}
              >
                Corporate
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSamples.map((sample) => (
                <SampleCard key={sample.id} sample={sample} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSamples.map((sample) => (
                <SampleCard key={sample.id} sample={sample} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="narration" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSamples.map((sample) => (
                <SampleCard key={sample.id} sample={sample} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="animation" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSamples.map((sample) => (
                <SampleCard key={sample.id} sample={sample} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSamples.map((sample) => (
                <SampleCard key={sample.id} sample={sample} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

interface SampleCardProps {
  sample: AudioSample;
}

const SampleCard: React.FC<SampleCardProps> = ({ sample }) => {
  return (
    <Card className="overflow-hidden bg-white">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-3">
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

          <div className="mt-4">
            <AudioPlayer audioUrl={sample.audioUrl} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioSampleHighlights;
