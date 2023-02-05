import React from 'react'
import parse from "html-react-parser";

const ArticleAd = ({data}) => {

  return (
    <div className='w-full h-full '>
        <div className=' w-[320px] h-[50px] lg:w-[160px] lg:h-[600px] bg-cover bg-blackk/20'>
       
                <div className="w-[320px] h-[50px] lg:w-[160px] lg:h-[600px] grid place-content-center bg-blackk/20">
                  {parse(data?.attributes?.Ad_code || "") }
                </div>
            </div>
    </div>
  )
}

export default ArticleAd