import React from "react";
import Image from "next/image";
import sky from "../../public/Images/placeholder.png";
import { useState, useEffect } from "react";
import axios from "axios";


const ArticleReactions = ({ data, postID }) => {
  // const [reactions, setReactions] = useState([])
  // const [type, setType] = useState("")




    // const CreateReaction = () => {
    //   axios.put("https://arcane-reaches-19838.herokuapp.com/api/reactions/1", {
    //     data: {
    //       PostID: postID,
    //       Number: 6,
    //     },
    //   }).then((response)=>{
    //     console.log(response)
    //   }).catch((error)=>{
    //     console.log(error)
    //   })
    // };



  // useEffect(()=>{
  //   axios.get("http://localhost:1337/api/reacts").then((response)=>{
  //     setReactions(response.data.data)
  //   })
  // }, [])


  // let likes = reactions.filter((item)=> item.attributes.Type === "like")








  // const [reactions, setReactions] = useState([])
  // const [reactionID, setReactionID] = useState(0)

  // useEffect(()=>{
  // axios.get("http://localhost:1337/api/reactions").then((response)=>{
  // setReactions(response.data.data)
  // }).catch((error)=>{
  //   console.log(error)
  // })
  // }, [])

  // console.log(reactionID)

  // var code;
  //  code = reactions[reactionID]?.attributes

  // let myID = reactionID + 1

  // const handleClick = () =>{
  //   axios.put(`http://localhost:1337/api/reactions/${myID}`, {
  //     "data":{
  //       "Number" :code.Number + 5 ,
  //       "PostID": postID.toString() || "",
  //     }
  //   }).then(()=>{
  //     axios.get("http://localhost:1337/api/reactions").then((response)=>{
  //       console.log(response)
  //     })
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }







  // const [total, setTotal] = useState(0);
  // let articleID = data?.id;

  // const loveClick = () => {
  //   axios
  //     .put(
  //       `https://arcane-reaches-19838.herokuapp.com/api/articles/${data?.id}`,
  //       {
  //         data: {
  //           love: data?.attributes?.love + 1,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });

  //   window.location.reload();
  // };

  // const unicornClick = () => {
  //   axios.put(
  //     `https://arcane-reaches-19838.herokuapp.com/api/articles/${data?.id}`,
  //     {
  //       data: {
  //         unicorn: data?.attributes?.unicorn + 1,
  //       },
  //     }
  //   );
  //   window.location.reload();
  // };

  // const clapClick = () => {
  //   axios.put(
  //     `https://arcane-reaches-19838.herokuapp.com/api/articles/${data?.id}`,
  //     {
  //       data: {
  //         clap: data?.attributes?.clap + 1,
  //       },
  //     }
  //   );

  // };
  // const laughClick = () => {
  //   axios.put(
  //     `https://arcane-reaches-19838.herokuapp.com/api/articles/${data?.id}`,
  //     {
  //       data: {
  //         laugh: data?.attributes?.laugh + 1,
  //       },
  //     }
  //   );
  //   window.location.reload();
  // };
  // const cheerClick = () => {
  //   axios.put(
  //     `https://arcane-reaches-19838.herokuapp.com/api/articles/${data?.id}`,
  //     {
  //       data: {
  //         cheer: data?.attributes?.cheer + 1,
  //       },
  //     }
  //   );
  //   window.location.reload();
  // };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://arcane-reaches-19838.herokuapp.com/api/articles/${
  //         articleID || "2"
  //       }`
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

const [likeNo, setLikeNo ] = useState(0)
const [like, setLike] = useState(0)


useEffect(()=>{
axios.get("https://arcane-reaches-19838.herokuapp.com/api/reactions/1").then((response)=>{
  setLike(response.data.data.attributes.Number)
  console.log(response.data.data.attributes.Number)
})
}, [likeNo])

  return (
    <div className="grid place-items-center text-light/80 mt-10">
      <h1 className="font-bold">What do you think?</h1>

      <h1 className="font-extralight">No. Responses</h1>
      <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 mt-4">
<button onClick={()=>{

    axios.put("https://arcane-reaches-19838.herokuapp.com/api/reactions/1", {
      data: {
        PostID: postID,
        Number: like + 1 ,
      },
    }).then((res)=>{
      console.log(res.data.data)
      setLikeNo(res.data.data.attributes.Number)
    })
}}>click me</button>

<h1>{like}</h1>

{/* 
        <Provider
	apiKey="acc0dbccce8e557db5ebbe6d605aaa"
	theme={{
		colors: {
			background: "#b8fff3",
			text: "violet",
			primary: "rgba(255, 224, 138, 0.4)"
		}
	}}
>
	<LikeButton
		namespace="my-blog-post"
		id="how-to-beat-me-at-chess"
	/>
</Provider>


        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
          <ClapButton
            namespace="testing-react"
            id="everybody-clap-now"
          />
        </Provider> */}


        {/* like */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button >
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/upvote-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">no.</h1>
        </div>

        {/* laugh */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button >
            <img
              src={
                "https://c.disquscdn.com/next/current/publisher-admin/assets/img/emoji/love-512x512.png"
              }
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold"></h1>
        </div>

        {/* love */}
        <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
          <button

          >
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1933/1933576.png"}
              width={45}
              height={40}
              className="hover:scale-110 ease-in-out duration-150 cursor-pointer"
            />
          </button>
          <h1 className="px-3 font-semibold">no.</h1>
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
