import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

const TopArticlesAds = () => {
  const [ad, setAd] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/ads")
      .then((response) => {
        setAd(response.data.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="justify-center h-full lg:mt-24 text-center lg:p-10 grid place-items-center mb-10">
      <p className="text-xs font-extralight tracking-widest my-1 text-white/50">
        ADVERTISEMENT
      </p>
      <div className="lg:w-[728px] lg:h-[90px] w-[310px] h-[100px] bg-white/10 ">
        {ad?.map((item) => {
          if (item?.attributes?.Position === "Top-Home") {
            return (
              <>
                <div className="lg:w-[728px] lg:h-[90px] w-[310px] h-[100px] grid place-content-center">
                  {parse(item?.attributes?.Code)}
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TopArticlesAds;
