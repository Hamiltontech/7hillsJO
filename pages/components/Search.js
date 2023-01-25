import React from "react";


const Search = ({search}) => {

console.log(search)
  return (
    <div className="font-blinker relative w-full h-screen bg-white ">
     

        <div className=" lg:flex justify-between pt-10">

            {/* Articles search */}
            <div className="w-[33.3%] lg:mx-10 lg:border-r ">
                <h1 className="text-3xl font-bold">Articles</h1>
            </div>

            {/* Quizzes search */}
            <div className="w-[33.3%] lg:mx-10 lg:border-r">
                <h1 className="text-3xl font-bold">Quizzes</h1>
            </div>

            {/* Hot Deals Search */}
            <div className="w-[33.3%] ">
                <h1 className="text-3xl font-bold lg:mx-10">Hot Deals</h1>
            </div>

        </div>
   
   
    </div>
  );
};

export default Search;
