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

const webDevTiers: ServiceTier[] = [
  {
    id: "web-basic",
    name: "Basic",
    price: "$150",
    description: "Perfect for website audio elements and simple web audio",
    features: [
      "Up to 5 short audio clips",
      "Professional recording",
      "Basic audio cleanup",
      "Web-optimized file formats",
      "Standard usage rights",
    ],
    turnaround: "3 business days",
    revisions: 1,
  },
  {
    id: "web-standard",
    name: "Standard",
    price: "$300",
    description: "Ideal for interactive websites and web applications",
    features: [
      "Up to 15 audio elements",
      "Professional recording",
      "Full audio processing",
      "Web-optimized file formats",
      "Extended usage rights",
      "File naming convention for developers",
    ],
    popular: true,
    turnaround: "2-3 business days",
    revisions: 2,
  },
  {
    id: "web-premium",
    name: "Premium",
    price: "$500",
    description: "Comprehensive package for complex web audio needs",
    features: [
      "Up to 30 audio elements",
      "Professional recording",
      "Premium audio processing",
      "All web-optimized formats",
      "Full usage rights",
      "Developer documentation",
      "Priority support",
    ],
    turnaroun