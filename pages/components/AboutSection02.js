import React from "react";
import sky from "../../public/Images/sky.png";
import Image from "next/image";

const AboutSection02 = () => {
  return (
    <div className="w-full p-10 font-blinker bg-blackk/10">
      <div className="grid justify-around w-full lg:flex ">
        <div>
          <Image src={sky} width="500" height="400" alt="/" />
        </div>
        <div>
          <h1 className="text-5xl font-bold uppercase ">Who we are</h1>
          <p className="max-w-[600px] my-5 ">
            7hillsjo was founded in September 2021 by two young entrepreneurial
            women from Jordan! We have been exploring Jordan since 2012 and have
            a wanderlust for discovering hidden gems, trending spots, and
            enriching ourselves in the immense cultural background Jordan has to
            offer. We are now a small team of 4 and we want to share this with
            the rest of Amman!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection02;
