import React from "react";

const CategoryCover = ({data}) => {
 
  return (
    <div className="w-full font-blinker">
      <div className=" h-[500px] w-full flex justify-between">
        <div className='lg:bg-fixed bg-cover bg-[url("https://images.unsplash.com/photo-1617419250411-98aa962b070f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=1240")] lg:w-full w-full'>
          <div className="h-full text-white bg-blackk/60">
            <h1 className="pt-40 text-5xl font-extrabold text-center lg:pt-36 lg:ml-10 md:text-6xl lg:text-7xl lg:text-left">
            </h1>
            {/* <h1 className="text-2xl font-extrabold text-center lg:ml-10 md:text-6xl lg:text-3xl lg:text-left">Title of latest article</h1> */}
            <p className="lg:ml-10 lg:text-left lg:max-w-[500px] text-center">
         
            </p>
            {/* <button className="p-4 mt-2 ml-10 border hover:bg-white/10 hover:text-yellow ">VIEW ARTICLE</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCover;
