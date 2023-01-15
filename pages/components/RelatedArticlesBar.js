import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const RelatedArticlesBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/articles")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ar = data?.slice(Math.max(data?.length - 6, 1))

  return (
    <div className="w-full h-auto lg:px-20 px-10 font-blinker  ">
      {/* <div className="w-full h-full pb-5 pr-5 bg-yellow "> */}
      <div className=" bg-white border-2 lg:border-4 lg:h-[400px] h-[1000px]">
        <h1 className="ml-10 -mt-5 lg:text-2xl font-bold text-lg bg-white lg:w-[150px] text-center w-40">
          Latest Articles
        </h1>

        {/* cards */}
        <div className="grid gap-1 p-1 lg:grid-cols-4 ">
          <Link href={"/post/" + ar[0]?.attributes?.Slug}>
            <div className="w-full h-40 mb-20 lg:h-[250px] hover:text-blackk/70 ">
              <div
                className="w-full h-full bg-cover cursor-pointer"
                style={{
                  backgroundImage: `url("${ar[0]?.attributes?.Cover}")`,
                }}
              ></div>
              <h1 className="lg:text-md font-bold duration-200 ease-in-out  ">
                {ar[0]?.attributes?.Title}
                <br></br>
                <span className="text-xs font-medium max-w-[300px] hidden lg:flex">
                  {ar[0]?.attributes?.Abstract}
                </span>
              </h1>
            </div>
          </Link>

          <Link href={"/post/" + ar[1]?.attributes?.Slug}>
            <div className="w-full h-40 mb-20 lg:h-[250px] hover:text-blackk/70">
              <div
                className="w-full h-full bg-cover cursor-pointer "
                style={{
                  backgroundImage: `url("${ar[1]?.attributes?.Cover}")`,
                }}
              ></div>
              <h1 className="lg:text-md font-bold duration-200 ease-in-out   ">
                {ar[1]?.attributes?.Title}
                <br></br>
                <span className="text-xs font-medium max-w-[300px] hidden lg:flex">
                  {ar[1]?.attributes?.Abstract}
                </span>
              </h1>
            </div>
          </Link>

          <Link href={"/post/" + ar[2]?.attributes?.Slug}>
            <div className="w-full h-40 mb-20 lg:h-[250px] hover:text-blackk/70">
              <div
                className="w-full h-full bg-cover cursor-pointer "
                style={{
                  backgroundImage: `url("${ar[2]?.attributes?.Cover}")`,
                }}
              ></div>
              <h1 className="lg:text-md font-bold duration-200 ease-in-out   ">
                {ar[2]?.attributes?.Title}
                <br></br>
                <span className="text-xs font-medium max-w-[300px] hidden lg:flex">
                  {ar[2]?.attributes?.Abstract}
                </span>
              </h1>
            </div>
          </Link>

          <Link href={"/post/" + ar[3]?.attributes?.Slug}>
            <div className="w-full h-40 mb-20 lg:h-[250px] hover:text-blackk/70">
              <div
                className="w-full h-full bg-cover cursor-pointer "
                style={{
                  backgroundImage: `url("${ar[3]?.attributes?.Cover}")`,
                }}
              ></div>
              <h1 className="lg:text-md font-bold duration-200 ease-in-out   ">
                {ar[3]?.attributes?.Title}
                <br></br>
                <span className="text-xs font-medium max-w-[300px] hidden lg:flex">
                  {ar[3]?.attributes?.Abstract}
                </span>
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RelatedArticlesBar;
