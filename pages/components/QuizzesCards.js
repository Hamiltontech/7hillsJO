import React from 'react'
import Link from 'next/link'

const QuizzesCards = ({quizzes}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-1 font-blinker lg:gap-3 ">
      
    {quizzes?.map((item, key)=>(
      <>

      <Link href={item?.attributes?.URL} target="_blank">
      <div key={key} className="duration-200 ease-in-out lg:p-5 lg:flex bg-light/10 p-3 hover:bg-light/20 ">
        <div >
      <div className="bg-cover lg:w-[200px] h-[150px]" style={{"backgroundImage": `url("${item?.attributes?.Image}")` }}></div>
      </div>
      <div className="lg:ml-5 lg:mt-0 mt-2">
        <h1 className="font-bold lg:text-xl ">
          {item?.attributes?.Name}
          <br></br>
          <span className="text-sm font-medium lg:max-w-[300px] text-justify ">
            {item?.attributes?.Decsription}
          </span>
        </h1>
      </div>
    </div>
    </Link>
      </>
    ))}
    

  </div>
  )
}

export default QuizzesCards
