import React from "react";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import axios from "axios";
import {useEffect, useState} from 'react'
import Link from 'next/link'


const TopQuizzes = () => {

  const [quizzes, setQuizzes] = useState([])
  useEffect(()=>{
    axios.get("https://strapi-104357-0.cloudclusters.net/api/quizzes").then(res=>setQuizzes(res.data.data)).catch(err=>console.log(err))
  }, [])


  return (
    <div className="grid w-full h-full grid-cols-2 gap-1 p-2 overflow-y-scroll scrollbar-hide text-blackk font-blinker">
      {quizzes?.map((item) => {
        return (
          <>
          <Link href={item?.attributes?.URL} target="_blank">
            <div className="h-[220px] text-white cursor-pointer ">
              <div className='w-full h-full bg-cover'  style={{"backgroundImage": `url("${item?.attributes?.Image}")`,}}>
              <div className='relative w-full h-full text-white duration-200 ease-in-out bg-blackk/40 hover:bg-blackk/70'>
                <div className="absolute top-[20%] lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] ">
                  {/* links to the quiz page */}
                  <h1 className="text-sm font-bold text-center lg:text-xl px-2">
                  {item?.attributes?.Name}
                  </h1>
                </div>
              </div>
              </div>
            </div>
            </Link>
            
          </>
        );
      })}
    </div>

  );
};

export default TopQuizzes;
