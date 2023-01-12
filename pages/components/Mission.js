import React from "react";
import sky from "../../public/Images/sky.png";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="w-full p-10 font-blinker bg-blackk/10">
      <div className="grid justify-around w-full lg:flex ">
        <div>
          <Image src={sky} width="500" height="400" alt="/"/>
        </div>
        <div>
          <h1 className="text-5xl font-bold uppercase ">Our Mission</h1>
          <p className="max-w-[600px] my-5 ">
          Our mission is to be the leading platform for youth and tourism in
          Jordan. To be the go-to guide for discovering trends, events, places
          to go, things to do, adventures to seek, and thrills to be
          experienced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
