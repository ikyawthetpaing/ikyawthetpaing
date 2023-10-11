import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="container flex flex-col gap-8">
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-8xl sm:text-9xl font-semibold">About</h2>
          <h3 className="text-3xl sm:text-4xl uppercase">
            I`&apos;m Kyaw Thet Paing. A developer, maker and problem solver.
          </h3>
          <p>
            The cusp of art and technology has always fascinated me and
            I`&apos;ve never been afraid to just jump in and give it a go,
            whether it`&apos;s Paint, Photoshop, Sketch or CSS. I’ve been
            designing with computers since the day I first opened Microsoft
            Paint.
          </p>
          <p>
            Fast forward to 2023 and I’ve tried it all, from Digital Campaign
            Design and Flash Actionscript to Web Design, Animation, HTML/CSS,
            No-Code Web Development, Product Design and Product Management.
            Everything I have done, small or big, has been a vital stepping
            stone for where I am today.
          </p>
          <p>
            What excites me most about being a Product Designer is being able to
            design and create things that have purpose and solve real problems.
            It goes beyond designing buttons and websites and involves having a
            passion for designing experiences and solutions that help people,
            whether it`&apos;s helping them make better videos, market
            themselves online, or buy something online. Leaning into customer
            insight and understanding their needs, finding the right problems to
            solve, delivering solutions as quickly as possible, learning from
            those and then iterating and improving that value over time is the
            key to great product design.
          </p>
        </div>
        <div className="flex-1">
          <div className="w-full h-fit overflow-hidden rounded-full">
            <Image
              src="/images/landing.png"
              alt="Kyaw Thet Paing: Software Developer Sketch Art Image"
              width={9999}
              height={9999}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* <h2 className="text-center text-6xl md:text-7xl lg:text-9xl font-semibold uppercase">
        I`&apos;m {siteConfig.creator.name}.
      </h2>
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="max-w-lg overflow-hidden rounded-full">
          <Image
            src="/images/landing.png"
            alt="Kyaw Thet Paing: Software Developer Sketch Art Image"
            width={9999}
            height={9999}
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-12">
          <h1 className="text-3xl sm:text-5xl font-semibold max-w-xl">
            I`&apos;m a Software Designer working remotely from Bangkok, Thailand.
          </h1>
          <p className="text-xl font-light">
            Over the past 12+ years, I`&apos;ve worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I`&apos;m proud to have worn many hats.
          </p>
        </div>
      </div> */}
    </section>
  );
}
