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
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Prepare Your Voice for a Recording Session",
    excerpt:
      "Learn the essential techniques and habits to keep your voice in top condition before stepping into the recording booth.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    category: "Voice Tips",
    tags: ["voice care", "recording", "preparation"],
    imageUrl:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "The Evolution of Commercial Voice Over in the Digital Age",
    excerpt:
      "Explore how digital platforms have transformed the commercial voice over industry and what it means for voice actors.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    category: "Industry",
    tags: ["digital marketing", "commercial", "industry trends"],
    imageUrl:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Finding Your Signature Voice: Authenticity in Voice Acting",
    excerpt:
      "Discover how embracing your unique vocal qualities can set you apart in the competitive world of voice over work.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "April 10, 2023",
    author: "Sarah Johnson",
    category: "Career",
    tags: ["authenticity", "voice acting", "personal brand"],
    imageUrl:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Voice Acting for Animation: Tips from Industry Professionals",
    excerpt:
      "Learn valuable insights from experienced animation voice actors on how to bring characters to life with your voice.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "March 22, 2023",
    author: "Sarah Johnson",
    category: "Animation",
    tags: ["animation", "character voices", "voice acting"],
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    readTime: "8 min read",
  },
  {
    id: "5",
    title: "The Impact of AI on the Voice Over Industry",
    excerpt:
      "An exploration of how artificial intelligence is changing the landscape of voice over work and what it means for human voice actors.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "February 15, 2023",
    author: "Sarah Johnson",
    category: "Technology",
    tags: ["AI", "technology", "future of voice over"],
    imageUrl:
      "https://images.unsplash.com/photo-1677442135136-760c813dce26?w=800&q=80",
    readTime: "10 min read",
  },
  {
    id: "6",
    title: "Home Studio Setup: Essential Equipment for Voice Over Artists",
    excerpt:
      "A comprehensive guide to setting up a professional home recording studio without breaking the bank.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    date: "January 30, 2023",
    author: "Sarah Johnson",
    category: "Equipment",
    tags: ["home studio", "equipment", "recording"],
    imageUrl:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    readTime: "9 min read",
  },
];

const categories = [
  "All",
  "Voice Tips",
  "Industry",
  "Career",
  "Animation",
  "Technology",
  "Equipment",
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Voice Over Blog</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Industry insights, voice acting tips, and updates from the world of
            voice over artistry
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? "bg-indigo-100 text-indigo-700 font-medium"
                            : "hover:bg-slate-100"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set(blogPosts.flatMap((post) => post.tags)),
                  ).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">
                  No articles found
                </h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
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
        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="link"
          className="p-0 h-auto font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all"
          asChild
        >
          <a href={`/blog/${post.id}`}>
            Read More <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPage;
