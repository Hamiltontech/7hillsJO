import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChannelSection01 from "./components/ChannelSection01";
import ChannelAd from "./components/ChannelAd";

const Channel = () => {
  return (
    <div className="font-blinker">
      <Header />
      {/* <div className="w-full  pt-[100px]">
        <div className="w-full ">
          <h1 className="p-10 pb-1 text-3xl font-bold uppercase lg:text-5xl">
            Channel
          </h1>
          <hr className="mx-10" />
          <hr className="mx-10 text-yellow" />
          <div className="p-10">
            <ChannelSection01 />
            <hr className="text-[#eee] py-5" />
            <ChannelSection01 />
            <hr className="text-[#eee] py-5" />
            <ChannelSection01 />
          </div>
          <ChannelAd />
        </div>
        <div className="relative flex items-center justify-center w-full h-full"></div>
      </div> */}


<div className="w-full h-screen font-bold pt-[100px] text-3xl text-center">
COMING SOON
</div>


      <Footer />
    </div>
  );
};

export default Channel;
