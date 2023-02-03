import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Images/logo.svg";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { ImMenu } from "react-icons/im";
import { AiFillAppstore } from "react-icons/ai";
import { RiInformationFill, RiQuestionFill } from "react-icons/ri";
import { IoPaperPlane } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { useState } from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import Menu from "./Menu";
import { ImSearch } from "react-icons/im";
import { useRouter } from "next/router";
import Search from "./Search";
import {HiNewspaper} from 'react-icons/hi'

const Header = ({ searchPage, setSearchPage, search, setSearch}) => {
  // for showing the menu on mobile view
  const [menu, setMenu] = useState(false);
  // for rendering the categories component
  const [categories, setCategories] = useState(false);
  // for the search bar

  return (
    <div className="fixed w-full h-[110px] z-[100] bg-red shadow-xl font-blinker">
      <div className="flex items-center justify-between w-full h-full">
        {/* logo */}

        <div className="flex ">
          <Link href="/">
            <Image src={logo} layout="fill" alt="/" className="" />
          </Link>

          <ul className=" flex mt-10">
            {/* Categories */}
            <div
              className={
                categories
                  ? `hidden text-xl font-extrabold text-yellow duration-150 ease-in-out lg:flex`
                  : `hidden text-xl font-extrabold text-white duration-150 ease-in-out lg:flex  hover:text-yellow`
              }
            >
              <AiFillAppstore className="mx-1 mt-1" />
              <button
                className="mb-10"
                onClick={() => setCategories(!categories)}
              >
                <li className="mr-3 uppercase list-none">Categories </li>
              </button>
              {/* <span className="mr-2"></span> */}
            </div>

            {/* channel */}
            {/* <div className=" hidden text-xl font-extrabold text-white duration-150 ease-in-out lg:flex  hover:text-yellow">
            <IoVideocam className="mx-1 mt-1" />
            <Link href="/Channel">
              <li className="mr-5 uppercase list-none">Channel</li>
            </Link>
          </div> */}

            {/* search bar */}
            <div className=" lg:text-xl font-extrabold text-white duration-150 ease-in-out flex hover:text-yellow ">
              {searchPage && (
                <input
                  className="mb-10 outline-0 font-light bg-white/0 border-b"
                  onChange={(e) => setSearch(e.target.value)}
                />
              )}
              <button
                className="mb-10 mx-1 text-sm font-light p-1 hover:scale-110 ease-in-out duration-150"
                onClick={() => setSearchPage(true)}
              >
                <ImSearch className="mx-1" size={20} />
              </button>
            </div>
          </ul>
        </div>

        <div className="px-10 2xl:px-16">
          <ui className="hidden text-xl font-extrabold text-white list-none lg:flex font-blinker">
            {/* home */}
            <div className="flex duration-150 ease-in-out hover:text-yellow">
              <AiFillHome className="mt-1 mr-1 " />
              <Link href="/" onClick={() => setSearchPage(false)}>
                <li className="mr-3 uppercase">Home </li>
              </Link>
              <span className="mr-2">|</span>
            </div>

            {/* quizzes */}
            <div className="flex duration-150 ease-in-out hover:text-yellow">
              <RiQuestionFill className="mt-1 mr-1" />
              <Link href="/Quizzes">
                <li className="mr-3 uppercase ">Quizzes </li>
              </Link>
              <span className="mr-2">|</span>
            </div>

            {/* hot deals */}
            <div className="flex duration-150 ease-in-out hover:text-yellow">
              <AiFillFire className="mt-1 mr-1" />
              <Link href="/Discounts">
                <li className="mr-3 uppercase ">Hot Deals </li>
              </Link>
              <span className="mr-2">|</span>
            </div>

            {/* about */}
            <div className="flex duration-150 ease-in-out hover:text-yellow">
              <RiInformationFill className="mt-1 mr-1" />
              <Link href="/About">
                <li className="mr-3 uppercase ">About Us </li>
              </Link>
              <span className="mr-2">|</span>
            </div>

            {/* contact */}
            <div className="flex duration-150 ease-in-out hover:text-yellow">
              <IoPaperPlane className="mt-1 mr-1" />
              <Link href="/Contact">
                <li className="uppercase ">Contact Us</li>
              </Link>
            </div>
          </ui>

          <div className="text-white lg:hidden">
            <button onClick={() => setMenu(!menu)}>
              <ImMenu size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* categories drop down */}
      {categories && <CategoriesDropdown setCategories={setCategories} />}

      {/* menu section */}
      {menu && <Menu setMenu={setMenu} setSearchPage={setSearchPage} />}
    </div>
  );
};

export default Header;
