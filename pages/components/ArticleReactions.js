// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";

// const ArticleReactions = ({ data, postID, setReactions, reactions: rawReactions, error, setError, type, setType }) => {
//   const [numberOfReactions, setNumberOfReactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = "your token here";
//   const reactions = Array.isArray(rawReactions) ? rawReactions : [];

//   const getReactionCount = useCallback(() => {
//     if(reactions && Array.isArray(reactions)){
//         const currentReactions = reactions?.find(r => r?.id === postID);
//         if(currentReactions){
//             setNumberOfReactions(currentReactions.attributes.reactions.data);
//             setLoading(false);
//         }else{
//             setLoading(false);
//         }
//     }else{
//         setLoading(false);
//     }
//   }, [reactions, postID])
  
//   useEffect(() => {
//     getReactionCount();
//   }, [getReactionCount])

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//         const response = await axios.post("https://strapi-104357-0.cloudclusters.net/api/reactions", {
//             "data": {
//                 "Reaction": type || "",  
//                 "article": postID || "",
//             },
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         if(response.status === 200){
//             // setReactions(response.data);
//             setType("");
//             setLoading(false);
//             setNumberOfReactions(currentReactions => currentReactions.map(r => {
//               if(r.type === type) {
//                 return {...r, count: r.count + 1}
//               }
//               return r;
//             }));
//         }else if(response.status === 400){
//             console.log("An error occured: ", response.data)
//             setLoading(false);
//         }
//     } catch (error) {
//         console.log(error)
//         setLoading(false);
//     }
// };


//   const likeCount = numberOfReactions.filter(r => r.attributes.Reaction === 'like').length
//   const loveCount = numberOfReactions.filter(r => r.attributes.Reaction === 'love').length
//   const laughCount = numberOfReactions.filter(r => r.attributes.Reaction === 'laugh').length
//   const dislikeCount = numberOfReactions.filter(r => r.attributes.Reaction === 'dislike').length
//   const clapCount = numberOfReactions.filter(r => r.attributes.Reaction === 'clap').length
//   const sadCount = numberOfReactions.filter(r => r?.attributes?.Reaction === 'sad').length
//   const shockCount = numberOfReactions.filter(r => r?.attributes?.Reaction === 'shock').length
//   const angryCount = numberOfReactions.filter(r => r?.attributes?.Reaction === 'angry').length



//     if (error) {
//         return <p>An error occured: {error.message}</p>
//     }

//     if (loading) {
//         return <p>Loading...</p> 
//     } 

//     return (
//         <div className="grid place-items-center text-light/80 mt-10">
//             <h1 className="font-bold">What do you think?</h1>

            
//             <h1 className="font-extralight">{data?.attributes?.reactions?.data?.length} Responses</h1>



// <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 mt-4">
//         {/* like */}
//         <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
//         <button type="button" onClick={() => {setType("like"); handleSubmit()}}>
//             <img
//               src={
//                 "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/upvote-512x512.png"
//               }
//               width={45}
//               height={40}
//               className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
//             />
//           </button>
//           <h1 className="px-3 font-semibold">{likeCount}</h1>
//         </div>

//         {/* love */}
//         <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
//         <button type="button" onClick={() => {setType("love"); handleSubmit()}}>
//             <img
//               src={
//                 "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/love-512x512.png"
//               }
//               width={45}
//               height={40}
//               className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
//             />
//           </button>
//           <h1 className="px-3 font-semibold">{loveCount}</h1>
//         </div>

//         {/* laugh */}
//         <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
//         <button type="button" onClick={() => {setType("laugh"); handleSubmit()}}>
//             <img
//               src={"https://cdn-icons-png.flaticon.com/512/1933/1933576.png"}
//               width={45}
//               height={40}
//               className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
//             />
//           </button>
//           <h1 className="px-3 font-semibold">{laughCount}</h1>
//         </div>

//         {/* shocked */}
//         <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
//         <button type="button" onClick={() => {setType("shock"); handleSubmit()}}>
//             <img
//               src={
//                 "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/surprised-512x512.png"
//               }
//               width={45}
//               height={40}
//               className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
//             />
//           </button>
//           <h1 className="px-3 font-semibold">{shockCount}</h1>
//         </div>

//         {/* angry */}
//         <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
//         <button type="button" onClick={() => {setType("angry"); handleSubmit()}}>
//             <img
//               src={
//                 "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/angry-512x512.png"
//               }
//               width={45}
//               height={40}
//               className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
//             />
//           </button>
//           <h1 className="px-3 font-semibold">{angryCount}</h1>
//         </div>

//         {/* clapping */}
//         <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
//         <button type="button" onClick={() => {setType("clap"); handleSubmit()}}>
//             <img
//               src={"https://cdn-icons-png.flaticon.com/512/1629/1629881.png"}
//               width={45}
//               height={40}
//               className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
//             />
//           </button>
//           <h1 className="px-3 font-semibold">{clapCount}</h1>
//         </div>

//         {/* sad */}
//         <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
//         <button type="button" onClick={() => {setType("sad"); handleSubmit()}}>
//             <img
//               src={
//                 "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/sad-512x512.png"
//               }
//               width={45}
//               height={40}
//               className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
//             />
//           </button>
//           <h1 className="px-3 font-semibold">{sadCount}</h1>
//         </div>
//       </div>

//       </div>
//   );
// };

// export default ArticleReactions;


import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const ArticleReactions = ({ data, postID, error, setError, type, setType }) => {

  // let tot = data?.attributes?.reactions?.data?.length
  const [total, setTotal ] = useState(0) 
  const [click, setClick] = useState(false)
  const [ Reactions, setReactions ] = useState([])
  

  // console.log(data)
  //     useEffect(()=>{
  //           setTotal(data?.attributes?.reactions?.data?.length)
  //     }, [])
  
  console.log(total)
  
  const handleReact = ()=>{
      axios.post("https://strapi-104357-0.cloudclusters.net/api/reactions", {
          "data": {
              "Reaction": 'like' ,  
              "article": postID ,
          },
      }).then((response)=>{
        console.log(response)
      })
  }
  
    return (
      <div>
  
          {click? <h1 className='text-blackk/20'>Click me</h1> : <button onClick={()=>{setTotal(total + 1); setClick(true); handleReact()}}>Click me</button> }
          
          {/* here will be the value coming from backend */}
          {/* <h1>{total}</h1> */}
          <h1>{data?.attributes?.reactions?.data?.length + total}</h1>
      </div>
    )
  }


export default ArticleReactions