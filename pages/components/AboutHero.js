import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'

const AboutHero = () => {


  return (
    <div className="w-full pt-[100px] font-blinker ">
      <div className=" h-[500px] w-full flex justify-between">
        <div className='lg:bg-fixed bg-cover bg-[url("https://lh3.googleusercontent.com/proxy/nMIspgHzTUU0GzmiadmPphBelzF2xy9-tIiejZg3VvJTITxUb-1vILxf-IsCfyl94VSn6YvHa8_PiIyR9d3rwD8ZhNdQ1C1rnblP6zy3OaI=w3840-h2160-p-k-no-nd-mv")] lg:w-full w-full'>
          <div className="h-full text-white bg-blackk/60 ">
            <h1 className="pt-40 text-5xl font-extrabold text-center lg:pt-20 lg:ml-10 md:text-6xl lg:text-9xl lg:text-left">
              About Us
            </h1>
            <p className=" lg:ml-10 text-center lg:text-left lg:max-w-[500px] mx-5">
              7hillsjo is a progressive digital magazine, the first of its kind
              in Jordan. We are here to support the local community including
              restaurants, shops, the arts, the music scene, cultural sites and
              tourism.
            </p>
            {/* <button className="p-4 mt-2 ml-10 border hover:bg-white/10 hover:text-yellow ">VIEW ARTICLE</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
