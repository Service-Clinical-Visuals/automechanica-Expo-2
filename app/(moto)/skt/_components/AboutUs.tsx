"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-10 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 ">

        {/* Top Text Section */}
        <div className="flex flex-col items-center text-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            About SKT
          </Typography>
          <div className="w-full xl:max-w-[70%] mx-auto">
            <Typography variant="p" color="dark" className="leading-relaxed">
              Every great success starts with a big dream first! This is also at the heart of our success. SKT was founded in Bursa in 1955 by three idealistic technical teachers at a time when all kinds of parts were needed in parallel with the development of the automotive sector in Turkey; it is currently the leading brand of its field operating within Diniz Holding. As the leading brand of the automotive sector in Turkey, it is experiencing the justified pride of turning its dreams into reality with its long-established history of more than half a century.
            </Typography>
          </div>
        </div>

        {/* Image */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <img
            src="/moto/skt/section2.png"
            alt="SKT Building"
            className="w-full rounded-tl-[3rem] rounded-br-[3rem] object-cover  aspect-[1680/562]"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-2" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full md:w-[70%]">
            <Typography variant="p" color="dark" className="leading-relaxed">
              Since the first day of its establishment, it has managed to become one of the strongest players of the summit in its sector with its innovative and perfectionist vision of the future. SKT, the owner of the firsts in Turkish industry, has made the first oil seal and electric motor production in Turkey and realized the first use of synthetic rubber.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button text="Learn More" href="#about" showIcon={true} iconVariant="dark" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
