import { React, useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Comment from "../components/Comment";
import axios from "axios";
import ArticleReactions from "./ArticleReactions";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";


const ArticleSection = ({ data, comment, setComment, postID }) => {
// reactions
const [reactions, setReactions] = useState(null);
const [error, setError] = useState(null);
const [type, setType] = useState("")

useEffect(() => {
  axios.get(`https://strapi-104357-0.cloudclusters.net/api/articles/${postID}?populate=*`)
  .then(res => {
      setReactions(res.data.data)
  })
  .catch(err => {
      setError(err);
  });
}, []);


  const [comments, setComments] = useState([])
  const [name, setName] = useState("")
  const[commented, setCommented] = useState(false)

  const handleSubmit = () =>{
    axios.post("https://strapi-104357-0.cloudclusters.net/api/comments", {
      "data":{
        "comment" : comment.toString() || "",
        "post_id": postID.toString() || "",
        "name": name.toString() || "",
      }
    }).then((res)=>{
      console.log(res)
      setCommented(!commented)
      // window.location.reload()
    }).catch((error)=>{
      console.log(error)
    })
  }

useEffect(()=>{
  axios.get("https://strapi-104357-0.cloudclusters.net/api/comments").then((response)=>{
    setComments(response.data.data)
  }).catch((error)=>{
    console.log(error)
  })
}, [commented])



  return (
    <div className="font-blinker">
      {/* category and date */}
      <div className="flex text-xs font-blinker lg:text-sm">
        <p className="flex font-bold uppercase text-red ">
          {data?.attributes?.Category}
          <span className="mt-1 mx-1">
            <GoPrimitiveDot />
          </span>
        </p>
        <p>{data?.attributes?.createdAt.slice(0, 10)}</p>
      </div>

      {/* title */}
      <h1 className="text-2xl font-bold lg:text-5xl ">
        {data?.attributes?.Title}
      </h1>

      {/* Abstract */}
      <p className="lg:max-w-[900px] max-w-[300px] text-justify lg:text-lg text-sm py-3">
        {data?.attributes?.Abstract}
      </p>

      {/* cover image */}
      <div
        className="lg:w-[100%] w-[100%] h-60 lg:h-[500px] bg-cover"
        style={{ backgroundImage: `url("${data?.attributes?.Cover}")` }}
      ></div>

      {/* content */}
      <div className="py-2 lg:py-5">
        <p className="lg:max-w-[1400px] text-justify text-sm lg:text-lg max-w-[300px]">
        <div id="demo">
          <ReactMarkdown  escapeHtml={true}  >
          {data?.attributes?.Body}
            </ReactMarkdown>

      </div>   
        </p>
      </div>
      <hr className="text-[#c0c0c0]" />

{/* author */} 

      {/* <Comment /> */}
      <div className="w-full flex justify-center ">
      <ArticleReactions data={data} postID={postID} reactions={reactions} setReactions={setReactions} error={error} setError={setError} type={type} setType={setType}/>
      </div>
      
      {/* article comments section */}
      <div class="flex h-full bg-gray-800 justify-center items-center">
        <div class="  p-2 pt-4 rounded  w-full lg:mx-20">
          <div class="mt-3 p-3 w-full">
            <input 
            onChange={(e)=>{
              setName(e.target.value)
            }}
            className=" w-full outline-0 p-1 mb-2 border border-light/10 rounded px-2"
            placeholder="Your Name.."
            />
            <textarea
              onChange={(e) => {
                setComment(e.target.value);
              }}
              rows="3"
              class="border p-2 rounded w-full border-light/10 outline-0"
              placeholder="Write something..."
            ></textarea>
          </div>

          <div class="flex justify-between mx-3">
            <div>
              <button
                onClick={handleSubmit}
                class=" relative px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700 bg-red hover:bg-red/80 ease-in-out duration-150"
              >Submit
              </button>
            </div>
          </div>

          <hr className="my-4 text-blackk/10" />
          <div className="flex flex-col w-full p-5 mx-auto my-10 space-y-2 rounded-lg shadow-gray-300">
            <h3 className="text-2xl">Comments</h3>
            <hr className="pb-5"/>
            <div>
              {
                comments?.map((item)=>{
                  if(item?.attributes?.post_id === postID.toString()){
                    const time = parseInt(item?.attributes?.createdAt.slice(12,13)) + 3
                    return(
                      <>
                      <div className="lg:flex justify-between lg:mx-10 py-5"> 
                      <div className="flex"><h1 className="font-bold mt-2 text-light">{item?.attributes?.name} </h1>
                      <h1 className="my-2 mx-2">{item?.attributes?.comment }</h1></div>
                      <h1 className="my-2 text-xs"><span className="text-xs"><span className="mr-1">Posted at</span>
                 
                      {time}
                      {item?.attributes?.createdAt.slice(13,16)} 
                      </span>
                      
                       {/* {item?.attributes?.createdAt.slice(0,10)} */}
                       <span className="mx-1">
                       {item?.attributes?.createdAt.slice(8,10)}
                       {item?.attributes?.createdAt.slice(4,8)}
                       {item?.attributes?.createdAt.slice(0,4)}
                       </span>
                       </h1>
                      </div>
                      <hr className="text-blackk/10"/>

                      </>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ArticleSection;


