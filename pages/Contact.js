import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import image from "../public/Images/sky.png";
import ContactHero from "./components/ContactHero";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import Layout from "./components/Layout";

// for the contact form with emailjs
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { useRouter } from 'next/router'
import Search from "./components/Search";

const Contact = () => {
  const router = useRouter()
  const [thanks, setThanks] = useState(false);
  const [searchPage, setSearchPage] = useState(false);
  const [search, setSearch] = useState("");

  // function to handle the contact form
  function sendEmail(e) {
    e.preventDefault();
    setThanks(true);
    // alert("Your message was sent. Thank you for contacting me!")

    emailjs.sendForm(
      "service_gqk30qf",
      "template_bcsbq9z",
      e.target,
      "Si2bEphUyCmDq3jwu"
    );
  }

  return (
    <Layout>
    <div className="font-blinker h-full w-full">
      <Header 
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              search={search}
              setSearch={setSearch}
      />


{searchPage ? (
        <Search search={search} setSearchPage={setSearchPage}/>
      ) : (
        <>
      <div id="contact" className="w-full lg:h-full bg pt-[100px]">
        <div className="w-full m-auto ">
          <div className="grid lg:grid-cols-5">
            {/* left */}
            <div className="w-full h-full col-span-3 text-white lg:col-span-2">
              <div className="w-full h-full">
                <div className="w-full lg:h-screen   bg-cover bg-[url('https://lh3.googleusercontent.com/proxy/nMIspgHzTUU0GzmiadmPphBelzF2xy9-tIiejZg3VvJTITxUb-1vILxf-IsCfyl94VSn6YvHa8_PiIyR9d3rwD8ZhNdQ1C1rnblP6zy3OaI=w3840-h2160-p-k-no-nd-mv')]">
                  <div className="w-full lg:h-full bg-blackk/60 ">
                    <div>
                      <h1 className="p-5 text-5xl font-bold uppercase">
                        Contact Us
                      </h1>
                      <hr className="mx-5" />
                      <p className="p-5 text-2xl">
                        Feel free to reach out to us or simply share anything,
                        our team will respond to you as soon as possible
                      </p>
                    </div>
                    <p className="flex p-5 pt-5 text-2xl font-bold hover:text-yellow ">
                      <BsFillTelephoneFill className="mt-1 mr-1" />
                      
                      <a href="tel:+962779074724"> +962 (779)
                      074-724</a>
                    </p>
                    <p className="flex px-5 pb-5 text-2xl font-bold underline hover:text-yellow cursor-pointer">
                      <IoMdMail size={25} className="mt-1 mr-1 " />
                      <a href="mailto: info@7hillsjo.com">info@7hillsjo.com</a>
                    </p>
                    <div>
                      <p className="text-3xl font-bold text-center lg:pt-40 uppercas pt-10">
                        Follow Us!
                      </p>
                      <div className="flex items-center justify-center gap-5 py-5 pb-10 lg:pb-0">
                        <div className="">
                          <a href="https://twitter.com/7hillsjo?s=21&t=3FnHNlPzbyKUsuARYeKSng"  target="_blank" rel="noreferrer">
                            <AiFillTwitterCircle size={35} className="hover:text-yellow"/>
                          </a>
                        </div>
                        {/* <div className="">
                        <a href="mailto:diala.sh.98@gmail.com">
                          <AiFillYoutube size={30} />
                        </a>
                      </div> */}
                        <div className="">
                          <a href="https://www.instagram.com/7hillsjo/" target="_blank" rel="noreferrer">
                            <AiFillInstagram size={35} className="hover:text-yellow"/>
                          </a>
                        </div>
                        <div className="">
                          <a href="https://www.facebook.com/7hillsjo?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                            <AiFillFacebook size={35} className="hover:text-yellow"/>
                          </a>
                        </div>
                        <div className="">
                          <a href="https://www.linkedin.com/company/7hillsjo/about/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin size={35} className="hover:text-yellow"/>
                          </a>
                        </div>
                        <div className="" >
                          <a href=""  target="_blank" rel="noreferrer">
                            <IoLogoTiktok size={35} className="hover:text-yellow"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="w-full h-screen col-span-3 lg:p-20 ">
              <div className="p-4">
                {thanks ? (
                  <div className=" text-center w-full h-full mt-60">
                    Your message was sent.
                    <h1 className="text-5xl font-bold tracking-widest ">Thank you for contacting us!</h1>
                    <button className="mt-10 border-b " onClick={()=>router.push('/')}>Go Back</button>
                  </div>
                ) : (
                  <form onSubmit={sendEmail}>
                    <div className="flex flex-col py-2">
                      <label className="py-2 text-lg font-bold uppercase">
                        Full Name
                      </label>
                      <input
                        className="flex p-1 text-gray-800 text-red focus:outline-none border-[#eee] border"
                        type="text"
                        name="name"
                        required="true"
                      />
                    </div>

                    <div className="flex flex-col py-2">
                      <label className="py-2 text-lg font-bold uppercase">
                        Phone
                      </label>
                      <input
                        className="flex p-1 text-gray-800 text-red focus:outline-none border-[#eee] border"
                        type="tel"
                        name="phone"
                        required=""
                      />
                    </div>

                    <div className="flex flex-col py-2">
                      <label className="py-2 text-lg font-bold uppercase">
                        Email
                      </label>
                      <input
                        className="flex p-1 text-gray-800 text-red focus:outline-none border-[#eee] border"
                        type="email"
                        name="email"
                        required="true"
                      />
                    </div>

                    <div className="flex flex-col py-2">
                      <label className="py-2 text-lg font-bold uppercase">
                        Subject
                      </label>
                      <input
                        className="flex p-1 text-gray-800 text-red focus:outline-none border-[#eee] border"
                        type="text"
                        name="subject"
                        required="true"
                      />
                    </div>

                    <div className="flex flex-col py-2">
                      <label className="py-2 text-lg font-bold uppercase">
                        message
                      </label>
                      <textarea
                        className="p-3  text-gray-800 text-red focus:outline-none border-[#eee] border"
                        rows="5"
                        name="message"
                        required=""
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="p-3 px-5 mt-4 mb-10 font-bold text-white duration-150 ease-in-out hover:bg-red/80 bg-red"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            {/* <Link href="/">
            <div className="p-3 mt-10 duration-200 ease-in cursor-pointer hover:scale-110">
              <HiOutlineChevronDoubleUp
                className="m-auto text-gray-100"
                size={30}
              />
            </div>
          </Link> */}
          </div>
          
        </div>
       
      </div>

      <Footer />
      </>)}
    </div>
    </Layout>
  );
};

export default Contact;
