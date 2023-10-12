import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with a skilled software developer to turn your concepts into powerful digital solutions.",
};

export default function ContactPage() {
  return (
    <section className="container flex flex-col gap-12">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-center text-6xl md:text-8xl font-bold max-w-4xl">
          <span className="text-muted-foreground">Say Hi!</span> and tell me
          about your idea
        </h1>
        <p className="text-xl font-light">
          Have a nice works? Reach out and let&apos;s chat.
        </p>
      </div>
      <div className="max-w-4xl mx-auto w-full">
        <form>
          <div className="flex flex-col gap-8">
            <div className="grid sm:grid-cols-2 gap-8 ">
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
