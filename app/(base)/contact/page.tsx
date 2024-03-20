import { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";
import { ContactForm } from "@/components/contact-form";

export function generateMetadata(): Metadata {
  const title = "Contact";
  const description =
    "Partner with me to turn your concepts into powerful digital solutions.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: absoluteUrl("/contact"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-12 px-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-center text-5xl font-medium md:text-7xl">
          <span className="text-muted-foreground">Say Hi!</span> And Tell Me
          About Your Idea.
        </h1>
        <p className="text-xl font-light">
          Have a nice works? Reach out and let&apos;s chat.
        </p>
      </div>
      <div className="mx-auto w-full">
        <ContactForm />
      </div>
    </section>
  );
}
