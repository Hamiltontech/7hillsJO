import React from 'react'
import sky from "../../public/Images/sky2.png";
import Image from "next/image";


const ChannelSection01 = () => {
  return (
    <div className='grid grid-cols-2 gap-1 lg:grid-cols-5'>
         <div>
          
             <Image src={sky} alt="/"/>
              <h1  className="text-xl font-bold duration-200 ease-in-out cursor-pointer hover:text-blackk/60">
                Title goes here
                <br></br>
                <span className="text-sm font-medium max-w-[300px] hidden lg:flex">
                  lorem impsum absar shu check it out lorem impsum absar shu
                  check it out
                </span>
              </h1>
            </div>

            <div>
             <Image src={sky} alt="/"/>
              <h1 className="text-xl font-bold duration-200 ease-in-out cursor-pointer hover:text-blackk/60">
                Title goes here
                <br></br>
                <span className="text-sm font-medium max-w-[300px] hidden lg:flex">
                  lorem impsum absar shu check it out lorem impsum absar shu
                  check it out
                </span>
              </h1>
            </div>

            <div>
             <Image src={sky} alt="/"/>
              <h1 className="text-xl font-bold duration-200 ease-in-out cursor-pointer hover:text-blackk/60">
                Title goes here
                <br></br>
                <span className="text-sm font-medium max-w-[300px] hidden lg:flex">
                  lorem impsum absar shu check it out lorem impsum absar shu
                  check it out
                </span>
              </h1>
            </div>

            <div>
             <Image src={sky} alt="/"/>
              <h1 className="text-xl font-bold duration-200 ease-in-out cursor-pointer hover:text-blackk/60">
                Title goes here
                <br></br>
                <span className="text-sm font-medium max-w-[300px] hidden lg:flex">
                  lorem impsum absar shu check it out lorem impsum absar shu
                  check it out
                </span>
              </h1>
            </div>

            <div>
             <Image src={sky} alt="/"/>
              <h1 className="text-xl font-bold duration-200 ease-in-out cursor-pointer hover:text-blackk/60">
                Title goes here
                <br></br>
                <span className="text-sm font-medium max-w-[300px] hidden lg:flex">
                  lorem impsum absar shu check it out lorem impsum absar shu
                  check it out
                </span>
              </h1>
            </div>

           
    </div>
  )
}

export default ChannelSection01