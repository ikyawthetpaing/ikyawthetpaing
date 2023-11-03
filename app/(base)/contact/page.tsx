import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with a skilled software developer to turn your concepts into powerful digital solutions.",
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
        <form>
          <div className="flex flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2 ">
              <div className="flex flex-col gap-2">
                <Label>Name *</Label>
                <Input type="text" placeholder="Hello ..." />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email *</Label>
                <Input type="email" placeholder="Where can I reply?" />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <Label>Message *</Label>
                <Textarea
                  placeholder="What is in your mind?"
                  className="h-64"
                />
              </div>
            </div>
            <Button className="w-full sm:w-fit">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
