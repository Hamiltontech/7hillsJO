import React from "react";
import sky from "../../public/Images/sky.png";
import Image from "next/image";

const Vision = () => {
  return (
    <div className="w-full p-10 text-black font-blinker ">
      <div className="grid justify-around w-full lg:flex">
        <div>
          <h1 className="text-5xl font-bold uppercase">Our Vision</h1>
          <p className="max-w-[600px] my-5">
          Our approach is not like any other digital magazine in the country. We
          employ a strategy of bite sized fun content to connect with our target
          audience, positively support and influence the community.
          </p>
        </div>

        <div>
          <Image src={sky} width="500" height="400" alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default Vision;
