import React from "react";
import Link from "next/link";
import sky from "../../public/Images/sky2.png";
import { GiElectric } from "react-icons/gi";
import { useState, useEffect } from "react";
import axios from "axios";

const TopPostssBar = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/articles")
      .then((response) => {
        setTop(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let data = top.filter((item) => item?.attributes?.TopStory === true);
  const ar = data.slice(Math.max(data.length - 5, 1));

 

  return (
    <div className="w-full">
      <h1 className="text-blackk lg:text-2xl font-bold -mt-5 ml-5 bg-white lg:w-[150px] w-[100px] text-center flex ">
        <span className="hidden lg:flex">
          <GiElectric size={30} />
        </span>
        Top Stories
      </h1>
      <div className="w-full h-full p-2">
        <div className="grid gap-2">
          {ar?.map((item, key) => (
            <>
            <Link href={item?.attributes?.Slug} >
      <div key={key} className="duration-200 ease-in-out  lg:flex  
       hover:bg-light/10 ">
        <div >
      <div className="bg-cover lg:w-[150px] h-[150px]" style={{"backgroundImage": `url("${item?.attributes?.Cover}")`}}></div>
      </div>
      <div className="lg:ml-2 lg:mt-0 mt-2">
        <h1 className="font-bold text-sm">
          {item?.attributes?.Title}
          <br></br>
          <span className="text-sm font-light lg:max-w-[300px] text-justify ">
            {item?.attributes?.Abstract}
          </span>
        </h1>
      </div>
    </div>
    </Link>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPostssBar;
