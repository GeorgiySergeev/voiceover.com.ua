import React from "react";
import Layout from "@/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.enum(
    ["commercial", "narration", "animation", "corporate", "other"],
    {
      required_error: "Please select a project type",
    },
  ),
  servicePackage: z.enum(["basic", "standard", "premium", "custom"], {
    required_error: "Please select a service package",
  }),
  scriptStatus: z.enum(["ready", "draft", "need_help"], {
    required_error: "Please select a script status",
  }),
  scriptText: z.string().optional(),
  scriptFile: z.any().optional(),
  projectDescription: z.string().min(10, {
    message: "Project description must be at least 10 characters",
  }),
  deadline: z.string().optional(),
  budget: z.string().optional(),
  deliveryFormat: z.array(z.string()).nonempty({
    message: "Please select at least one delivery format",
  }),
  additionalNotes: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const OrderPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "commercial",
      servicePackage: "standard",
      scriptStatus: "ready",
      deliveryFormat: ["mp3"],
      termsAccepted: false,
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // In a real application, you would send this data to your backend
    alert("Order submitted successfully! We'll contact you shortly.");
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book a Voice Over Project</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Fill out the form below with your project details, and I'll get back
            to you within 24 hours with confirmation and any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">
                        Contact Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your.email@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Your phone number"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your company name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <h2 className="text-xl font-semibold">Project Details</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Type *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select project type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="commercial">
                                    Commercial
                                  </SelectItem>
                                  <SelectItem value="narration">
                                    Narration
                                  </SelectItem>
                                  <SelectItem value="animation">
                                    Animation/Character
                                  </SelectItem>
                                  <SelectItem value="corporate">
                                    Corporate/E-Learning
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="servicePackage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Package *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select package" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="basic">Basic</SelectItem>
                                  <SelectItem value="standard">
                                    Standard
                                  </SelectItem>
                                  <SelectItem value="premium">
                                    Premium
                                  </SelectItem>
                                  <SelectItem value="custom">Custom</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Description *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your project, including length, tone, and any specific requirements"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="deadline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Deadline (optional)</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormDescription>
                                When do you need this completed by?
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your budget for this project"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <h2 className="text-xl font-semibold">
                        Script Information
                      </h2>
                      <FormField
                        control={form.control}
                        name="scriptStatus"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Script Status *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="ready" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Script is ready
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="draft" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Script is in draft form
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="need_help" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    I need help with my script
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="scriptText"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Script Text (optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Paste your script here"
                                className="min-h-[200px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="scriptFile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload Script (optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept=".doc,.docx,.pdf,.txt"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  field.onChange(file);
                                }}
                              />
                            </FormControl>
                            <FormDescription>
                              Accepted formats: .doc, .docx, .pdf, .txt
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <h2 className="text-xl font-semibold">
                        Delivery Preferences
                      </h2>
                      <FormField
                        control={form.control}
                        name="deliveryFormat"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel className="text-base">
                                Delivery Format *
                              </FormLabel>
                              <FormDescription>
                                Select all formats you require
                              </FormDescription>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                              {[
                                { id: "mp3", label: "MP3" },
                                { id: "wav", label: "WAV" },
                                { id: "aiff", label: "AIFF" },
                                { id: "flac", label: "FLAC" },
                              ].map((format) => (
                                <FormField
                                  key={format.id}
                                  control={form.control}
                                  name="deliveryFormat"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={format.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              format.id,
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    format.id,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== format.id,
                                                    ),
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {format.label}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes (optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any other information you'd like to provide"
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I accept the terms and conditions *
                            </FormLabel>
                            <FormDescription>
                              By submitting this form, you agree to our{" "}
                              <a
                                href="/terms-of-service"
                                className="text-indigo-600 hover:underline"
                              >
                                terms of service
                              </a>{" "}
                              and{" "}
                              <a
                                href="/privacy-policy"
                                className="text-indigo-600 hover:underline"
                              >
                                privacy policy
                              </a>
                              .
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full">
                      Submit Order Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Submit Your Request</p>
                      <p className="text-sm text-slate-600">
                        Fill out the form with your project details
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Receive Confirmation</p>
                      <p className="text-sm text-slate-600">
                        I'll review your request and confirm details within 24
                        hours
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Recording Process</p>
                      <p className="text-sm text-slate-600">
                        Your project is recorded in a professional studio
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Review & Revisions</p>
                      <p className="text-sm text-slate-600">
                        Review the first draft and request revisions if needed
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold">
                      5
                    </div>
                    <div>
                      <p className="font-medium">Final Delivery</p>
                      <p className="text-sm text-slate-600">
                        Receive your finalized audio files in your preferred
                        formats
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  If you have questions about the ordering process or need
                  assistance with your project, please don't hesitate to reach
                  out.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-indigo-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-slate-600">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-indigo-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-slate-600">
                        contact@voiceoverartist.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderPage;
