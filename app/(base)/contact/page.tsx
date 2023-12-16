import { Metadata } from "next";

import { creatorConfig } from "@/config/creator";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Partner with a skilled ${creatorConfig.role.toLowerCase()} to turn your concepts into powerful digital solutions.`,
};

export default function ContactPage() {
  return (
    <section className="container flex flex-col gap-12">
      <div className="flex flex-col items-center gap-8">
        <h1 className="max-w-4xl text-center text-6xl font-bold md:text-8xl">
          <span className="text-muted-foreground">Say Hi!</span> and tell me
          about your idea
        </h1>
        <p className="text-xl font-light">
          Have a nice works? Reach out and let&apos;s chat.
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl">
        <ContactForm />
      </div>
    </section>
  );
}
