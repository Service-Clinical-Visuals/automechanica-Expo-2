"use client";

import Link from "next/link";
import { CalendarDays, User, Package, ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const posts = [
  {
    image: "/moto/bartec/trends/1.png",
    badgeIcon: CalendarDays,
    badgeLabel: "Event",
    date: "August 3, 2026",
    title: "Three Months Until The SEMA Show 2026 In Las Vegas",
    description:
      "21 years of innovation. One destination for the future of TPMS. Bartec TPMS is officially heading back to the SEMA Show 2026, and we're bringing our biggest presence yet",
    cta: "Read More",
  },
  {
    image: "/moto/bartec/trends/2.png",
    badgeIcon: User,
    badgeLabel: "Team",
    date: "July 23, 2026",
    title: "We Are Excited To Welcome Lindsay Stead To Team Bartec",
    description:
      "Lindsay joins Bartec TPMS as our new Technical Sales Representative for the Greater Atlanta region. With more than 20 years of automotive aftermarket",
    cta: "Know Now",
  },
  {
    image: "/moto/bartec/trends/3.png",
    badgeIcon: Package,
    badgeLabel: "Product",
    date: "July 21, 2026",
    title: "Preventing TPMS Sensor Damage",
    description:
      "For any wheel related service (mount, balance, new tires, new wheels, getting the TPMS serviced) there are situations that can/will cause damage to the TPMS sensor.",
    cta: "Discover More",
  },
];

export default function Trends() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white" id="news">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <p className="text-primary font-bold mb-2">Insight Center</p>
          <h2 className="heading mb-4">Discover Trends Shaping Tomorrow&apos;s Mobility</h2>
          <p className="content">
            Stay informed with the latest company news, product launches, industry trends, and
            technical insights that keep professionals ahead in the evolving world of TPMS
            technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10" data-aos="fade-up">
          {posts.map((post) => {
            const BadgeIcon = post.badgeIcon;
            return (
              <article
                key={post.title}
                className="bg-white rounded-lg border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col"
              >
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 border border-primary text-primary text-xs font-semibold rounded px-2 py-1">
                      <BadgeIcon size={13} strokeWidth={2.5} />
                      {post.badgeLabel}
                    </span>
                    <span className="text-sm text-[#666666]">{post.date}</span>
                  </div>

                  <Link
                    href="#"
                    className="text-[#1B2E5C]! font-bold hover:text-primary! transition-colors mb-3"
                  >
                    {post.title}
                  </Link>

                  <p className="content mb-5">{post.description}</p>

                  <Link
                    href="#"
                    className="group mt-auto inline-flex items-center gap-2 w-fit text-[#1A1A1A]! font-semibold underline hover:text-primary! transition-colors"
                  >
                    <span>{post.cta}</span>
                    <ArrowRight
                      size={15}
                      strokeWidth={2.5}
                      className="text-primary transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button
            text="See What's New Inside Our World"
            href="#"
            variant="outline"
            showIcon
            className="px-6 py-2.5 text-[15px] font-bold rounded-md"
          />
        </div>
      </Container>
    </section>
  );
}
