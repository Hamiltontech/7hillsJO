import React from "react";
import Image from "next/image";
import sky from "../../public/Images/placeholder.png";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticleReactions = ({ data, postID, setReactions, reactions, error, setError, type, setType }) => {
const [numberOfReactions, setNumberOfReactions] = useState([])



useEffect(()=>{
reactions?.map((item)=>{
  if(item?.id === postID){
    setNumberOfReactions(item?.attributes?.reactions?.data)
  }
})
}, [])


const handleSubmit =  () => {
      // make the post request to the strapi api to create the reaction
      axios.post('https://strapi-104357-0.cloudclusters.net/api/reactions', {
        "data": {
          "Reaction": "happy", 
          "article": 2,
        }
      }).then((response)=>{
        setReactions(response.data.data)  
        // setReactions(response.data.reactions); 
      }).catch((error)=>{
        console.log(error)
      })
}

if (error) {
  return <p>An error occured: {error.message}</p>
}

if (!reactions) {
  return <p>Loading...</p> 
  
} 
 

  return (
    <div className="grid place-items-center text-light/80 mt-10">
      <h1 className="font-bold">What do you think?</h1>
      <h1 className="font-extralight">No. Responses</h1>
      <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 mt-4">

{reactions?.reactions?.data?.map((item)=>{
  return(
    <>
    <h1>{item?.attributes?.Reaction}</h1> 
    </>
  )
}
)} 

        {/* like */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button onClick={()=> {handleSubmit(); setType("like")}}>
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/upvote-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">{numberOfReactions?.filter(r => r?.attributes?.Reaction === 'like').length} </h1>
        </div>

        {/* love */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button onClick={()=> {handleSubmit(); setType("love")}}>
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/love-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">
          {numberOfReactions?.filter(r => r?.attributes?.Reaction === 'love').length} 

          </h1>
        </div>

        {/* laugh */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button onClick={()=> {handleSubmit(); setType("laugh")}}>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1933/1933576.png"}
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">
            
          {numberOfReactions?.filter(r => r?.attributes?.Reaction === 'happy').length} 
            
            </h1>
        </div>

        {/* shocked */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button>
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/surprised-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">{numberOfReactions?.filter(r => r?.attributes?.Reaction === 'shock').length} </h1>
        </div>

        {/* angry */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button>
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/angry-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">{numberOfReactions?.filter(r => r?.attributes?.Reaction === 'angry').length} </h1>
        </div>

        {/* clapping */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1629/1629881.png"}
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">{numberOfReactions?.filter(r => r?.attributes?.Reaction === 'clap').length} </h1>
        </div>

        {/* sad */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button>
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/sad-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">{numberOfReactions?.filter(r => r?.attributes?.Reaction === 'sad').length} </h1>
        </div>
      </div>
    </div>
  );
};

export default ArticleReactions;
