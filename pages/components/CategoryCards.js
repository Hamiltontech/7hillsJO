import React from "react";
import sky from "../../public/Images/sky.png";
import Image from "next/image";

const CategoryCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-1 font-blinker lg:gap-0 grid-cols-2">
      <div className="duration-200 ease-in-out lg:p-2 hover:text-blackk/60">
        <Image alt="/" src={sky} width={500} />
        <h1 className="font-bold cursor-pointer lg:text-xl ">
          Title goes here
          <br></br>
          <span className="text-sm font-medium max-w-[300px] text-justify ">
            lorem impsum absar shu check it out lorem impsum absar shu check it
            out
          </span>
        </h1>
      </div>

      <div className="duration-200 ease-in-out lg:p-2 hover:text-blackk/60">
        <Image alt="/" src={sky} width={500} />
        <h1 className="font-bold cursor-pointer lg:text-xl ">
          Title goes here
          <br></br>
          <span className="text-sm font-medium max-w-[300px] text-justify ">
            lorem impsum absar shu check it out lorem impsum absar shu check it
            out
          </span>
        </h1>
      </div>

      <div className="duration-200 ease-in-out lg:p-2 hover:text-blackk/60">
        <Image alt="/" src={sky} width={500} />
        <h1 className="font-bold cursor-pointer lg:text-xl ">
          Title goes here
          <br></br>
          <span className="text-sm font-medium max-w-[300px] text-justify ">
            lorem impsum absar shu check it out lorem impsum absar shu check it
            out
          </span>
        </h1>
      </div>
      
      <div className="duration-200 ease-in-out lg:p-2 hover:text-blackk/60">
        <Image alt="/" src={sky} width={500} />
        <h1 className="font-bold cursor-pointer lg:text-xl ">
          Title goes here
          <br></br>
          <span className="text-sm font-medium max-w-[300px] text-justify ">
            lorem impsum absar shu check it out lorem impsum absar shu check it
            out
          </span>
        </h1>
      </div>

      <div className="duration-200 ease-in-out lg:p-2 hover:text-blackk/60">
        <Image alt="/" src={sky} width={500} />
        <h1 className="font-bold cursor-pointer lg:text-xl ">
          Title goes here
          <br></br>
          <span className="text-sm font-medium max-w-[300px] text-justify ">
            lorem impsum absar shu check it out lorem impsum absar shu check it
            out
          </span>
        </h1>
      </div>

      <div className="duration-200 ease-in-out lg:p-2 hover:text-blackk/60">
        <Image alt="/" src={sky} width={500} />
        <h1 className="font-bold cursor-pointer lg:text-xl ">
          Title goes here
          <br></br>
          <span className="text-sm font-medium max-w-[300px] text-justify ">
            lorem impsum absar shu check it out lorem impsum absar shu check it
            out
          </span>
        </h1>
      </div>
    </div>
  );
};

export default CategoryCards;
