import React from "react";
import sky from "../../public/Images/sky.png";
import Image from "next/image";

const AboutSection01 = () => {
  return (
    <div className="w-full p-10 text-black font-blinker ">
      <div className="grid justify-around w-full lg:flex">
        <div>
          <h1 className="text-5xl font-bold uppercase">What we do</h1>
          <p className="max-w-[600px] my-5">
            With a fast growing organic follower base, we are able to work
            together with local businesses (from startups to well established
            institutions), rising talent and more by offering a unique advantage
            in the form of an awareness boost by placing them on the map through
            coverage on our website or social media platforms!
          </p>
        </div>

        <div>
          <Image src={sky} width="500" height="400" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection01;
