import React from 'react'
import parse from "html-react-parser";

const ArticleAd = ({ad}) => {
  return (
    <div className='w-full h-full '>
        <div className=' w-[320px] h-[50px] lg:w-[160px] lg:h-[600px] bg-cover bg-blackk/20'>
        {ad?.map((item) => {
          if (item?.attributes?.Position === "Article") {
            return (
              <>
                <div className="w-[320px] h-[50px] lg:w-[160px] lg:h-[600px] grid place-content-center bg-blackk/20">
                  {parse(item?.attributes?.Code)}
                </div>
              </>
            );
          }
        })}
            
            </div>
    </div>
  )
}

export default ArticleAd