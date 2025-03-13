import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

interface LatestBlogPostsProps {
  posts?: BlogPost[];
}

const LatestBlogPosts = ({ posts = defaultPosts }: LatestBlogPostsProps) => {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Latest from the Blog
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Industry insights, voice acting tips, and updates from the world of
            voice over artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="font-medium">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Prepare Your Voice for a Recording Session",
    excerpt:
      "Learn the essential techniques and habits to keep your voice in top condition before stepping into the recording booth.",
    date: "June 15, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    category: "Voice Tips",
  },
  {
    id: "2",
    title: "The Evolution of Commercial Voice Over in the Digital Age",
    excerpt:
      "Explore how digital platforms have transformed the commercial voice over industry and what it means for voice actors.",
    date: "May 28, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    category: "Industry",
  },
  {
    id: "3",
    title: "Finding Your Signature Voice: Authenticity in Voice Acting",
    excerpt:
      "Discover how embracing your unique vocal qualities can set you apart in the competitive world of voice over work.",
    date: "April 10, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
    category: "Career",
  },
];

export default LatestBlogPosts;
