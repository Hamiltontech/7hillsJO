import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../public/Images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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


const Menu = ({ setMenu, setSearchPage }) => {
  const [categories, setCategories] = useState(false);

  return (
    <div className="relative w-full h-screen bg-red -mt-[100px] overflow-y-scroll font-blinker">
      {/* hedaer */}
      <div className="flex justify-between">
        <Image src={logo} alt="/"/>
        <button onClick={() => setMenu(false)} className="mr-3">
          <AiOutlineClose size={30} />
        </button>
      </div>

      {/* menu links */}
      <div className="m-10 text-3xl font-extrabold text-center text-white uppercase align-middle mt-30">
        <hr className="mb-20"/>

        {/* home */}
        <Link href="/" onClick={()=>{setSearchPage(false); setMenu(false)}}>
          <h1 className="p-3 cursor-pointer hover:text-yellow">Home</h1>
        </Link>

        {/* categories */}
        <button onClick={() => setCategories(!categories)}>
          <h1 className={categories?`p-3 cursor-pointer text-yellow`: `p-3 cursor-pointer text-white hover:text-yellow`}>CATEGORIES</h1>
        </button>

        {/* to render the categories on click  */}
        {categories && (
          <div className="w-full h-[600px] bg-white/70">
            <div className="grid w-full h-full grid-cols-2 gap-1 p-1 text-center">
              {Categories.map((item, key) => {
                return (
                  <>
                  <Link href={item.path}>
                    <div
                    key={key}
                      className="flex justify-around w-full h-full font-bold uppercase bg-cover border cursor-pointer hover:bg-white"
                      style={{ backgroundImage: `url(${item.background})`}}
                    >
                      <div className="w-full h-full py-6 text-lg text-white bg-blackk/80">
                      {item.name}
                      </div>
                    </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        )}

        {/* channel */}
        {/* <Link href="/Channel" onClick={()=>setMenu(false)}>
          <h1 className="p-3 cursor-pointer hover:text-yellow">Channel</h1>
        </Link> */}

        {/* quizzes */}
        <Link href="/Quizzes" onClick={()=>{setSearchPage(false); setMenu(false)}}>
          <h1 className="p-3 cursor-pointer hover:text-yellow">Quizzes</h1>
        </Link>

        {/* discounts */}
        <Link href="/Discounts" onClick={()=>{setSearchPage(false); setMenu(false)}}>
          <h1 className="p-3 cursor-pointer hover:text-yellow">Hot deals</h1>
        </Link>

        {/* about */}
        <Link href="/About" onClick={()=>{setSearchPage(false); setMenu(false)}}>
          <h1 className="p-3 cursor-pointer hover:text-yellow">About Us</h1>
        </Link>
        
        {/* contact */}
        <Link href="/Contact" onClick={()=>{setSearchPage(false); setMenu(false)}}>
          <h1 className="p-3 cursor-pointer hover:text-yellow">Contact Us</h1>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
// on click set menu to false
