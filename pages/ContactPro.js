import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import {
    AiFillInstagram,
    AiFillYoutube,
    AiFillTwitterCircle,
} from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const ContactPro = () => {
    return (
        <div className='h-full font-blinker'>
            <Header />
            <div className='w-full h-screen ' >
                <div className=' flex justify-center bg-cover bg-[url("https://images.unsplash.com/photo-1583339824000-5afecfd41835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")] w-full h-full'>
                    <div className='w-[70%] h-[80%] bg-blackk/30 backdrop-blur-md mt-[110px] flex align-middle text-center'>
                        {/* left section */}
                        <div className='lg:w-[60%] p-10 w-[100%] '>
                            <h1 className='text-4xl font-extrabold text-left  uppercase'>Contact Us</h1>
                            <hr className='text-blackk/10' />
                            <p className='text-left'>Get in touch & let us know how we can help !</p>

                            {/* form */}
                            <div className=' my-6'>
                                <div className='grid text-left w-full my-6'>
                                    <label>Name</label>
                                    <input className='outline-none bg-white/0 border-b border-blackk/40 ' />
                                </div>
                                <div className='flex justify-between gap-5'>
                                    <div className='grid text-left lg:w-[50%] w-[100%]'>
                                        <label>Email</label>
                                        <input className='outline-none bg-white/0 border-b border-blackk/40 ' />
                                    </div>
                                    <div className=' text-left lg:w-[50%] w-[100%] hidden lg:grid'>
                                        <label>Phone Number</label>
                                        <input className='outline-none bg-white/0 border-b border-blackk/40 ' />
                                    </div>
                                </div>
                                <div className='grid text-left w-full my-6'>
                                    <label>Subject</label>
                                    <input className='outline-none bg-white/0 border-b border-blackk/40 ' />
                                </div>
                                <div className='grid text-left w-full my-6'>
                                    <label>Message</label>
                                    <textarea className='outline-none bg-white/0 border-b border-blackk/40 ' />
                                </div>
                                <div className='grid text-left w-full my-3'>
                                    <button className='outline-none hover:bg-white/0 bg-white/70 ease-in-out duration-200 hover:border p-3 border-blackk/40 '>SEND</button>
                                </div>
                            </div>
                        </div>

                        {/* right side */}
                        <div className='hidden lg:block w-[40%] h-full bg-cover bg-[url("https://images.unsplash.com/photo-1583339824000-5afecfd41835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")]'>
                            <div className='w-full h-full grid place-items-center'>
                                <div className='grid'>
                                    <h1 className='font-extrabold text-lg'>FOLLOW US</h1>
                                    <div className='flex justify-evenly'>
                                        <AiFillInstagram size={30} className="hover:text-yellow cursor-pointer ease-in-out duration-200" />
                                        <AiFillYoutube size={30} className="hover:text-yellow cursor-pointer ease-in-out duration-200" />
                                        <AiFillTwitterCircle size={30} className="hover:text-yellow cursor-pointer ease-in-out duration-200" />
                                        <AiFillLinkedin size={30} className="hover:text-yellow cursor-pointer ease-in-out duration-200" />
                                        <IoLogoTiktok size={30} className="hover:text-yellow cursor-pointer ease-in-out duration-200" />
                                    </div>
                                    <hr className='my-3 ' />
                                    <h1 className='font-extrabold text-lg'>REACH US </h1>

                                    {/* FOR EMAIL */}
                                    <div className='flex'>
                                        <p className="flex px-5  text-xl font-bold  hover:text-yellow cursor-pointer ease-in-out duration-200">
                                            <IoMdMail size={20} className="mt-1 mr-1 " />
                                            <a href="mailto:info@7hillsjo.com"></a>info@7hillsjo.com
                                        </p>
                                    </div>
                                    {/* FOR PHONE */}
                                    <div className='flex'>
                                        <p className="flex px-5  text-xl font-bold hover:text-yellow ease-in-out duration-200">
                                            <BsFillTelephoneFill className="mt-1 mr-1" />
                                            <a href="tel:+962779074724"> +962 (779)
                                                074-724</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPro