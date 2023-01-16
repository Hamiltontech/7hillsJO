import React from "react";
import Link from "next/link";
import { useState } from "react";

const TopChannel = ({ data }) => {
  const [ postNum, setPostNum] = useState(4);

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 4) // 3 is the number of posts you want to load per click
  }

  return (
    <div className="font-blinker">
      <div className=" mt-10 ">
        <h1
          className={`lg:text-5xl font-extrabold uppercase text-white text-2xl`}
        >
          Latest Articles
        </h1>
      </div>
<hr />

      {/* latest articles cards */}

      <div className="grid cursor-pointer lg:grid-cols-4 gap-1 bg-blackk mt-5 ">
        {data?.slice(0, postNum)?.map((item, key) => {
          return (
            <>
             <Link href={"/post/" + item?.attributes?.Slug}>
              <div className="h-full lg:pb-40 lg:mb-[200px] hover:text-white/50" key={key}>
                <div
                  className="w-full lg:h-full bg-cover h-[200px]"
                  style={{
                    backgroundImage: `url("${item?.attributes?.Cover}")`,
                  }}
                ></div>
               
                  <h2 className="px-1 lg:text-md font-bold  ease-in-out duration-200">
                    {item?.attributes?.Title}
                  </h2>
               
                <p className="px-1 text-xs lg:text-sm">
                  {item?.attributes?.Abstract}
                </p>
                <h1 className="p-1 text-xs uppercase bg-blackk text-yellow">
                {item?.attributes?.createdAt.slice(8,10)}
                       {item?.attributes?.createdAt.slice(4,8)}
                       {item?.attributes?.createdAt.slice(0,4)}
                </h1>
              </div>
              </Link>
            </>
          );
        })}

      </div>
      <div className="w-full h-full flex justify-center mt-10 lg:-mt-5">
      <button onClick={handleClick} className="hover:underline hover:text-yellow x ease-in-out duration-150">Load More</button></div>
    </div>
  );
};

export default TopChannel;
