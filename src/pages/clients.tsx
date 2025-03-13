import React from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  companyName: string;
  companyLogo?: string;
  avatarUrl?: string;
  projectType: "commercial" | "narration" | "animation" | "corporate" | "all";
  featured?: boolean;
}

interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Sarah's voice brought our commercial to life! The perfect blend of professionalism and warmth that resonated with our audience. We saw a 30% increase in engagement after launching the campaign.",
    clientName: "Michael Chen",
    clientTitle: "Marketing Director",
    companyName: "TechBrand Solutions",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=TBS",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    projectType: "commercial",
    featured: true,
  },
  {
    id: "2",
    quote:
      "We've worked with many voice artists, but Sarah's narration for our documentary series was exceptional. Clear, emotive, and perfectly paced. Her voice added the exact emotional depth we were looking for.",
    clientName: "Emily Rodriguez",
    clientTitle: "Executive Producer",
    companyName: "MediaWorks Productions",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=MWP",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    projectType: "narration",
    featured: true,
  },
  {
    id: "3",
    quote:
      "The audiobook narration exceeded our expectations. Sarah's ability to bring different characters to life made our story truly engaging. Our listeners have specifically mentioned how much they enjoy her narration.",
    clientName: "David Wilson",
    clientTitle: "Publishing Director",
    companyName: "NovelHouse Publishing",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=NHP",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    projectType: "narration",
  },
  {
    id: "4",
    quote:
      "Quick turnaround, professional quality, and a voice that perfectly matched our brand identity. We'll definitely be working together again for our upcoming product launches!",
    clientName: "Jessica Taylor",
    clientTitle: "Creative Director",
    companyName: "AdVantage Media",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=AMG",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    projectType: "commercial",
  },
  {
    id: "5",
    quote:
      "Sarah's character voices for our animated series were incredible. She brought a unique personality to each character, making them memorable and distinct. The children absolutely love the show!",
    clientName: "Robert Kim",
    clientTitle: "Animation Director",
    companyName: "Bright Animations",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=BA",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    projectType: "animation",
    featured: true,
  },
  {
    id: "6",
    quote:
      "Our e-learning modules needed a clear, engaging voice that could explain complex concepts simply. Sarah delivered exactly that, and our training completion rates have improved significantly.",
    clientName: "Amanda Johnson",
    clientTitle: "Training Manager",
    companyName: "Global Corp Learning",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=GCL",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
    projectType: "corporate",
  },
  {
    id: "7",
    quote:
      "Working with Sarah was a breeze. She understood our brand voice immediately and delivered a commercial voiceover that perfectly aligned with our company values and target audience.",
    clientName: "Thomas Brown",
    clientTitle: "Brand Manager",
    companyName: "EcoProducts",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=EP",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
    projectType: "commercial",
  },
  {
    id: "8",
    quote:
      "Sarah's voice for our IVR system has transformed our customer experience. Callers have actually commented on how pleasant and clear the voice prompts are!",
    clientName: "Lisa Martinez",
    clientTitle: "Customer Experience Director",
    companyName: "ServiceFirst Solutions",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=SFS",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    projectType: "corporate",
  },
];

const clientLogos: ClientLogo[] = [
  {
    id: "1",
    name: "TechBrand Solutions",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TBS",
    industry: "Technology",
  },
  {
    id: "2",
    name: "MediaWorks Productions",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=MWP",
    industry: "Media",
  },
  {
    id: "3",
    name: "NovelHouse Publishing",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=NHP",
    industry: "Publishing",
  },
  {
    id: "4",
    name: "AdVantage Media",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=AMG",
    industry: "Advertising",
  },
  {
    id: "5",
    name: "Bright Animations",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BA",
    industry: "Entertainment",
  },
  {
    id: "6",
    name: "Global Corp Learning",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=GCL",
    industry: "Education",
  },
  {
    id: "7",
    name: "EcoProducts",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=EP",
    industry: "Retail",
  },
  {
    id: "8",
    name: "ServiceFirst Solutions",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=SFS",
    industry: "Customer Service",
  },
  {
    id: "9",
    name: "HealthPlus Medical",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=HPM",
    industry: "Healthcare",
  },
  {
    id: "10",
    name: "TravelWise Agency",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=TWA",
    industry: "Travel",
  },
  {
    id: "11",
    name: "FoodDelight Brands",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FDB",
    industry: "Food & Beverage",
  },
  {
    id: "12",
    name: "FinancePro Advisors",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FPA",
    industry: "Finance",
  },
];

const ClientsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Clients & Testimonials</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I've had the pleasure of working with amazing clients across various
            industries. Here's what they have to say about my voice over
            services.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Featured Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials
              .filter((testimonial) => testimonial.featured)
              .map((testimonial) => (
                <FeaturedTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
          </div>
        </div>

        {/* All Testimonials by Category */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Client Feedback
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="narration">Narration</TabsTrigger>
                <TabsTrigger value="animation">Animation</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials
                  .filter(
                    (testimonial) => testimonial.projectType === "commercial",
                  )
                  .map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="narration" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials
                  .filter(
                    (testimonial) => testimonial.projectType === "narration",
                  )
                  .map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="animation" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials
                  .filter(
                    (testimonial) => testimonial.projectType === "animation",
                  )
                  .map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials
                  .filter(
                    (testimonial) => testimonial.projectType === "corporate",
                  )
                  .map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Trusted By</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mb-3 bg-slate-100 rounded-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-12 h-12"
                  />
                </div>
                <p className="text-sm font-medium text-center">{client.name}</p>
                <p className="text-xs text-slate-500 text-center">
                  {client.industry}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Join Our Client List?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Let's work together to bring your project to life with the perfect
            voice. Contact me today to discuss your needs or book a session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/order">
                Book a Session <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <Quote className="text-indigo-500 h-8 w-8 opacity-50" />
        </div>
        <p className="text-slate-700 mb-6 flex-grow italic">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center mt-auto">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage
              src={testimonial.avatarUrl}
              alt={testimonial.clientName}
            />
            <AvatarFallback>
              {testimonial.clientName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h4 className="font-semibold text-slate-900">
              {testimonial.clientName}
            </h4>
            <p className="text-sm text-slate-600">
              {testimonial.clientTitle}, {testimonial.companyName}
            </p>
          </div>
          {testimonial.companyLogo && (
            <div className="h-8 w-8 flex items-center justify-center bg-slate-100 rounded-full overflow-hidden">
              <img
                src={testimonial.companyLogo}
                alt={`${testimonial.companyName} logo`}
                className="max-h-6 max-w-6"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedTestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <Card className="h-full border-2 border-indigo-100 bg-gradient-to-b from-white to-indigo-50">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex justify-center">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Quote className="text-indigo-600 h-6 w-6" />
          </div>
        </div>
        <p className="text-slate-700 mb-6 flex-grow italic text-center">
          "{testimonial.quote}"
        </p>
        <div className="flex flex-col items-center mt-auto">
          <Avatar className="h-16 w-16 mb-3">
            <AvatarImage
              src={testimonial.avatarUrl}
              alt={testimonial.clientName}
            />
            <AvatarFallback>
              {testimonial.clientName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h4 className="font-semibold text-slate-900 text-center">
            {testimonial.clientName}
          </h4>
          <p className="text-sm text-slate-600 text-center">
            {testimonial.clientTitle}, {testimonial.companyName}
          </p>
          {testimonial.companyLogo && (
            <div className="mt-3 h-8 w-8 flex items-center justify-center bg-slate-100 rounded-full overflow-hidden">
              <img
                src={testimonial.companyLogo}
                alt={`${testimonial.companyName} logo`}
                className="max-h-6 max-w-6"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientsPage;
