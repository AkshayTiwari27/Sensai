import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      <HeroSection />

      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">
            Supercharge Your Professional Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            Navigate your career path with unmatched clarity and confidence,
            powered by our intelligent suite of tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="pt-8 text-center flex flex-col items-center">
                  <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-5xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground">Diverse Industries</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-5xl font-bold text-primary">1000+</h3>
              <p className="text-muted-foreground">Smart Q&A Scenarios</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-5xl font-bold text-primary">95%</h3>
              <p className="text-muted-foreground">User Placement Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-5xl font-bold text-primary">24/7</h3>
              <p className="text-muted-foreground">Instant AI Mentor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Journey to Success</h2>
            <p className="text-muted-foreground text-lg">
              Your roadmap to landing your dream job is just a few clicks away.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className={`flex items-center w-full mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-1/2"></div>
                <div className="hidden md:block relative px-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:px-8">
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-xl">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background flex flex-col justify-between">
                <CardContent className="pt-6">
                    <blockquote className="border-l-4 border-primary pl-4">
                      <p className="text-muted-foreground italic">
                        {testimonial.quote}
                      </p>
                    </blockquote>
                </CardContent>
                <div className="p-6 pt-0">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.company}
                    </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 md:py-32 bg-background border-t border-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-title">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our platform.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b-2 border-primary/10"
                >
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="container mx-auto">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Don't Just Find a Job. Build Your Future.
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl mt-4">
              Join a community of professionals who are taking control of their
              careers with the power of intelligent guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-12 mt-8 text-lg animate-bounce"
              >
                Unlock Your Potential Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}