import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { baseConfig } from "@/config/base";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-24">
        {/* <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold capitalize">Contact</h2>
            <p className="text-muted-foreground">
              Get in touch with me via social media.
            </p>
          </div>
          <ul className="flex gap-4 bg-accent w-fit rounded-full p-4">
            {baseConfig.socialLinks.map((socialLink, index) => {
              const Icon = Icons[socialLink.icon];
              return (
                <li key={index}>
                  <Link href={socialLink.href}>
                    <div className="bg-background rounded-full p-4">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div> */}
        <div className="flex flex-col gap-12 mx-auto text-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold capitalize">Contact</h2>
            <p className="text-muted-foreground max-w-lg">
              {/* Feel free to contact me by submitting the form below and I will
              get back to you as soon as possible. */}
              Get in touch or shoot me an email directly on{" "}
              <Link
                href={`mailto:${siteConfig.creator.email}`}
                className="font-medium text-foreground"
              >
                {siteConfig.creator.email}
              </Link>
            </p>
          </div>
          <div className="max-w-xl">
            <form className="flex flex-col gap-8">
              <Input name="name" placeholder="Name" />
              <Input name="email" placeholder="Email" />
              <Textarea name="message" placeholder="Message" className="h-64" />
              <Button>Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
