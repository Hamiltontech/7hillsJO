import React from "react";
import Image from "next/image";
import sky from "../../public/Images/placeholder.png";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticleReactions = ({ data, postID }) => {
  // const [likeNo, setLikeNo] = useState(0);
  // const [like, setLike] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get("https://arcane-reaches-19838.herokuapp.com/api/reactions/1")
  //     .then((response) => {
  //       if (postID === response.data.data.attributes.PostID) {
  //         setLike(response.data.data.attributes.Number);
  //       }
  //     });
  // }, [likeNo]);

  // console.log(like);


console.log(postID)


  const [selectedReaction, setSelectedReaction] = useState(null);
  const [reactions, setReactions] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {

    axios.get(`https://strapi-104357-0.cloudclusters.net/api/articles/${postID}?populate=*`)
    .then(res => {
        setReactions(res?.data?.data?.attributes?.reactions?.data);
        console.log(res)
    })
    .catch(err => {
        setError(err);
    });
}, []);



const handleSubmit =  () => {

      // make the post request to the strapi api to create the reaction
      axios.post('https://strapi-104357-0.cloudclusters.net/api/reactions', {
        "data": {
          "Reaction": "happy",
          "article": 1,
        }
      }).then((response)=>{
        setReactions(response.data.reactions);
        console.log(reactions)
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




// let happy = []

// reactions?.map((item)=>{
//   if(item?.attributes?.Reaction === "happy"){
//     happy.push(item.attributes.Reaction)
//     return(
//       happy
//     )
//   }
// })

  return (
    <div className="grid place-items-center text-light/80 mt-10">
      <h1 className="font-bold">What do you think?</h1>
      <h1 className="font-extralight">No. Responses</h1>
      <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 mt-4">



        {/* like */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button>
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/upvote-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">No.</h1>
        </div>

        {/* love */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button>
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
          No.

          </h1>
        </div>

        {/* laugh */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button onClick={handleSubmit}>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1933/1933576.png"}
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">{reactions?.filter(r => r?.attributes?.Reaction === 'happy').length}</h1>
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
          <h1 className="px-3 font-semibold">No.</h1>
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
          <h1 className="px-3 font-semibold">No.</h1>
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
          <h1 className="px-3 font-semibold">No.</h1>
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
          <h1 className="px-3 font-semibold">No.</h1>
        </div>
      </div>
    </div>
  );
};

export default ArticleReactions;
