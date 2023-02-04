import React from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";
import imag from '../../public/Images/hamilton.svg'
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#B0251C] h-50 text-white">
      <div className="w-full p-10  bg-red">
        <div className=" w-full gap-5 grid grid-cols-2 lg:px-20">
          {/* about us */}
          <div>
            <Link href="/">
            <h1 className="p-2 text-3xl font-bold uppercase">7HILLSJO</h1></Link>

            <div className="flex mt-10 gap-5 ">
              <Link target="_blank" href="https://www.instagram.com/7hillsjo/">
                <AiFillInstagram size={30} className="mx-2 hover:text-yellow" />
              </Link>
              <Link href="https://twitter.com/7hillsjo?s=21&t=3FnHNlPzbyKUsuARYeKSng/" target="_blank">
                <AiFillTwitterCircle
                  size={30}
                  className="mx-2 hover:text-yellow"
                />
              </Link>
              <Link href="/" target="_blank">
                <IoLogoTiktok size={30} className="mx-2 hover:text-yellow" />
              </Link>
              <Link href="https://www.facebook.com/7hillsjo?mibextid=LQQJ4d/" target="_blank">
                <AiFillFacebook size={30} className="mx-2 hover:text-yellow" />
              </Link>
              <Link href="https://www.linkedin.com/company/7hillsjo/about/" target="_blank">
                <AiFillLinkedin size={30} className="mx-2 hover:text-yellow" />
              </Link>
            </div>
          </div>

          {/* featured */}
          {/* <div>
            <h1 className="p-2 text-xl font-bold uppercase">Featured</h1>
            <div className="px-2">
              <Link href="/Discounts">
                <h1 className="text-white hover:text-yellow">Hot Deals</h1>
              </Link>

              <Link href="/Channel">
                <h1 className="text-white hover:text-yellow">Channel</h1>
              </Link>

              <Link href="/Quizzes">
                <h1 className="text-white hover:text-yellow">Quizzes</h1>
              </Link>
            </div>
          </div> */}

          {/* categories */}
          <div className="hidden lg:block ml-5">
            <h1 className="p-2 text-lg font-bold uppercase ">Categories</h1>
            <div className="hidden lg:grid grid-cols-3 gap-5 px-2 w-[700px]">
              <ul >
                <li  className="hover:text-yellow">
                  <Link href="/Art">Art</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Food">Food & Drinks</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Entertainment">Entertainment</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Lifestyle">Lifestyle</Link>
                </li>
              </ul>

              <ul>
                <li className="hover:text-yellow">
                  <Link href="/News">News</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Events">Events</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Music">TV & Music</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Travel">Travel</Link>
                </li>
              </ul>

              <ul>
                <li className="hover:text-yellow">
                  <Link href="/Shopping">Shopping & Fashion</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Wellness">Wellness</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Technology">Technology</Link>
                </li>
                <li className="hover:text-yellow">
                  <Link href="/Todo">Things To Do</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr  className="text-white/20 mt-10 mb-5"/>


        <div className="lg:flex justify-between lg:px-20">
        <div className=" flex  justify-center lg:justify-start">
              <Link href="/About">
                <h1 className="text-white hover:text-yellow ">About <span className="mx-2">|</span>  </h1>
              </Link>
              <Link href="/Contact">
                <h1 className="text-white hover:text-yellow"> Contact <span className="mx-2">|</span> </h1>
              </Link>
              <Link href="/PrivacyPolicy">
                <h1 className="text-white hover:text-yellow mr-2">Privacy Policy</h1>
              </Link>
            </div>
        {/* <div className='w-full h-full bg-blackk'>all rights reserved</div> */}
      

      <div className=" flex lg:justify-end justify-center mt-5 lg:mt-0 ">
 <p className="mr-2 mt-1">Powered by </p>
 <Link href="https://www.hst.jo/" target="_blank">
<Image src="https://www.hst.jo/web/image/357-7dd3ad27/logo-light.svg" width="140" height="100" className="-"/>
</Link>
</div>
</div>
      </div>

      <div className="grid grid-cols-3 ">
        <div></div>
      <h1 className="text-center lg:pt-2 text-sm py-1">© All Rights Reserved </h1>
      
      </div>
    </div>
  );
};

export default Footer;

