import React from "react";
import Link from "next/link";

const MainHero = ({ data }) => {
  let arr = data?.filter((ele) => ele?.attributes?.Featured === true)  || [
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
  ]
  const ar = arr?.slice(Math.max(arr?.length - 3, 1)) || [
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
    {attributes: "", Title:"", Abstract:"", Slug:""},
  ]


  // console.log(ar)
  return (
    <div className="w-full pt-[100px] font-blinker">

      <div className=" lg:h-[650px] w-full flex justify-between h-[600px]">
        <div
          className="bg-cover lg:w-[65%] w-[50%]"
          style={{ backgroundImage: `url("${arr[0]?.attributes?.Cover}")`}}
        >
          <div className="h-full text-white duration-200 ease-in-out bg-blackk/60 hover:bg-blackk/80 text-left px-5 lg:pt-40 pt-40">
          <div className="grid place-items-center lg:block">
            <h1 className=" text-2xl font-extrabold text-center  lg:text-5xl lg:text-left ">
              {arr[0]?.attributes?.Title}
            </h1>
            <p className="max-w-[600px] hidden lg:block lg:text-xl">
              {arr[0]?.attributes?.Abstract}
            </p>
            <Link href={"/post/" + arr[0]?.attributes?.Slug}>
              <h1 className="p-4 mt-2 border hover:bg-white/10 hover:text-yellow w-[130px] flex justify-center">
                VIEW ARTICLE
              </h1>
            </Link>
            </div>
            </div>
        </div>

        <div className="bg-dark lg:w-[35%] text-white w-[50%]">
          <div
            className="h-[50%] bg-cover"
            style={{ backgroundImage: `url("${arr[1]?.attributes?.Cover}")` }}
          >
            <div className="w-full h-full text-white duration-200 ease-in-out  bg-blackk/70 hover:bg-blackk/80">
            <div className="grid place-items-center lg:block">
              <h1 className="pt-20 text-center lg:text-left mx-5 text-lg font-extrabold lg:pt-20 lg:text-2xl p-1">
                {arr[1]?.attributes?.Title}
              </h1>
              <p className="hidden max-w-[500px] ml-5 lg:flex text-sm">
                {arr[1]?.attributes?.Abstract}
              </p>
              <Link href={"/post/" + arr[1]?.attributes?.Slug}>
              <h1 className="mx-5 lg:p-4 p-2 mt-2 border hover:bg-white/10 hover:text-yellow lg:w-[130px] flex justify-center">
                VIEW ARTICLE
              </h1>
            </Link>
            </div>
            </div>

          </div>

           <div
            className="h-[50%] bg-cover"
            style={{ backgroundImage: `url("${arr[2]?.attributes?.Cover}")` }}
          >

            <div className="w-full h-full text-white duration-200 ease-in-out  bg-blackk/70 hover:bg-blackk/80">
            <div className="grid place-items-center lg:block">
              <h1 className="pt-10 text-center lg:text-left mx-5 text-lg font-extrabold lg:pt-20 lg:text-2xl p-1 ">
                {arr[2]?.attributes?.Title}
              </h1>
              <p className="hidden max-w-[500px] ml-5 lg:flex text-sm">
                {arr[2]?.attributes?.Abstract}
              </p>
              
              <Link href={"/post/" + arr[2]?.attributes?.Slug}>
              <h1 className="mx-5 lg:p-4 p-2 mt-2 border hover:bg-white/10 hover:text-yellow lg:w-[130px] flex justify-center">
                VIEW ARTICLE
              </h1>
              
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
