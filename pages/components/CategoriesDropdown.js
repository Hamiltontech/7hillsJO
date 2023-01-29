import React from "react";
import Link from "next/link";

const Categories = [
  {
    name: "Art",
    background: "https://cdn-icons-png.flaticon.com/512/603/603839.png",
    path: "/Art"
  },
  {
    name: "Food & Drinks",
    background: "https://cdn-icons-png.flaticon.com/512/2515/2515183.png",
    path: "/Food"
  },
  {
    name: "Entertainment",
    background: "https://cdn-icons-png.flaticon.com/512/647/647740.png",
    path: "/Entertainment"
  },
  {
    name: "Lifestyle",
    background: "https://cdn-icons-png.flaticon.com/512/4310/4310163.png",
    path: "/Lifestyle"
  },

  {
    name: "News",
    background: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
    path: "/News"
  },
  {
    name: "Events",
    background: "https://cdn-icons-png.flaticon.com/512/2273/2273225.png",
    path: "/Events"
  },
  {
    name: "TV & Music",
    background: "https://cdn-icons-png.flaticon.com/512/777/777242.png",
    path: "/Music"
  },
  {
    name: "Travel",
    background: "https://cdn-icons-png.flaticon.com/512/826/826070.png",
    path: "/Travel"
  },

  {
    name: "Shopping & Fashion",
    background: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png",
    path: "/Shopping"
  },
  {
    name: "Wellness",
    background: "https://cdn-icons-png.flaticon.com/512/2382/2382461.png",
    path: "/Wellness"
  },
  {
    name: "Technology",
    background: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
    path: "/Technology"
  },
  {
    name: "Things To Do",
    background: "https://cdn-icons-png.flaticon.com/512/3248/3248542.png",
    path: "/Todo"
  },
];

// add -> onclick on each card setCategories to false and redirect to the category page
const CategoriesDropdown = ({setCategories}) => {
  return (
    <div className="h-[450px] w-[45%] bg-white/60 z-[100] -mt-8 ml-32 hidden lg:flex">
      <div className="grid w-full h-full grid-cols-3 gap-2 p-2 text-center">
        {Categories.map((item, key) => {
          return (
            <>
            <Link href={item.path}>
              <div key={key} className='flex justify-around w-full h-full font-bold uppercase bg-cover border cursor-pointer hover:bg-white'
               style={{backgroundImage: `url(${item.background})`}}
              >
               
                <div className="w-full h-full py-6 text-xl text-white bg-blackk/80 ">{item.name}</div>
              </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesDropdown;
