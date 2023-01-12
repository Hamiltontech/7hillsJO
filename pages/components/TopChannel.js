import React from "react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const dummyData = [
  {
    title: "Topa stories Top stories Top stories Top stories Top stories",
    abstract:
      "This is a top article This is a top article This is a top article This is a top article This is a top article This is a top a ",
    category: "Art",
    total_notifications: "14K",
  },
  {
    title: "Top stories",
    abstract:
      "This is a top article This is a top article This is a top article This is a top article This is a top article This is a top a ",
    category: "Entertainment",
    total_notifications: "16K",
  },
  {
    title: "Topa stories Top stories Top stories Top stories Top stories",
    abstract: "This is a top article",
    category: "Food & Drinks",
    total_notifications: "21K",
  },
  {
    title: "Top stories",
    abstract: "e This is a top article This is a top article This is a top a",
    category: "Events",
    total_notifications: "30K",
  },
  {
    title: "Topa stories Top stories Top stories Top stories Top stories",
    abstract: "This is a top article",
    category: "Art",
    total_notifications: "27K",
  },
  {
    title: "Topa stories Top stories Top stories Top stories Top stories",
    abstract: "This is a top article",
    category: "Art",
    total_notifications: "27K",
  },
];

const TopChannel = () => {
  return (
    <div className="font-blinker">
      {/* Top and Trending toggle */}
      {/* <div className="flex mt-10 cursor-pointer">
        <button onClick={() => setTrending(false)}>
          <h1
            className={`lg:text-5xl font-extrabold uppercase text-white text-2xl`}
          >
            Channel Picks
          </h1>
        </button>
      </div>
      <hr />

    

      <div className="grid w-full h-full gap-10 mt-5 cursor-pointer lg:grid-cols-3 lg:gap-1 bg-blackk">
        {dummyData.map((item) => {
          return (
            <>
              <div className="relative flex h-[250px] p-10 ">
                <div className='w-full h-full bg-cover bg-[url("https://images.unsplash.com/photo-1599240211563-17590b1af857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]'>
                  <div className='w-full h-full duration-200 ease-in-out group bg-blackk/40 hover:bg-blackk/70'>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block ease-in-out duration-200">
                      <button className="flex duration-300 ease-in-out hover:text-white">
                        <FaPlay size={35} />
                      </button>
                    </div>
                  </div>
                  <div className="pb-20">
                    <h2 className="px-1 text-2xl font-bold text-white ">
                      {item.title}
                    </h2>
                
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
};

export default TopChannel;
