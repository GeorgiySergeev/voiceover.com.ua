import React from "react";
import Layout from "@/components/layout";
import HeroSection from "@/components/home/HeroSection";
import ServiceOverview from "@/components/home/ServiceOverview";
import AudioSampleHighlights from "@/components/home/AudioSampleHighlights";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection
        name="Sarah Johnson"
        tagline="Professional Voice Artist"
        description="Bringing your scripts to life with versatile, captivating voiceovers for commercials, narration, animation, and more. With over 10 years of experience, I deliver high-quality audio that connects with your audience."
        imageUrl="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&q=80"
      />
      <ServiceOverview />
      <AudioSampleHighlights />
      <TestimonialCarousel />
      <LatestBlogPosts />
    </Layout>
  );
};

export default HomePage;
