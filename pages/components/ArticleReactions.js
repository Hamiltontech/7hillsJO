import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticleReactions = ({ data, postID, setReactions, reactions, error, setError, type, setType }) => {
    const [numberOfReactions, setNumberOfReactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = "your token here";

    useEffect(() => {
        if(reactions && Array.isArray(reactions)){
            const currentReactions = reactions.find(r => r.id === postID);
            if(currentReactions){
                setNumberOfReactions(currentReactions.attributes.reactions.data);
                setLoading(false);
            }else{
                setLoading(false);
            }
        }else{
            setLoading(false);
        }
    }, [reactions, postID])

    const handleSubmit = () => {
        setLoading(true);
        axios
        .post("https://strapi-104357-0.cloudclusters.net/api/reactions", {
            "data": {
                "Reaction": type || "",  
                "article": postID || "",
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        },{timeout: 30000}).then((response) => {
            if(response.status === 200){
            setReactions(response.data);
            setType("")
            setLoading(false);
        }else if(response.status === 400){
            console.log("An error occured: ", response.data)
            setLoading(false);
        }
    }).catch((error) => {
        console.log(error)
        setLoading(false);
    });
};
``


  const likeCount = numberOfReactions.filter(r => r.attributes.Reaction === 'like').length
  const loveCount = numberOfReactions.filter(r => r.attributes.Reaction === 'love').length
  const laughCount = numberOfReactions.filter(r => r.attributes.Reaction === 'laugh').length
  

    if (error) {
        return <p>An error occured: {error.message}</p>
    }

    if (loading) {
        return <p>Loading...</p> 
    } 

    return (
        <div className="grid place-items-center text-light/80 mt-10">
            <h1 className="font-bold">What do you think?</h1>
            <h1 className="font-extralight">No. Responses</h1>
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 mt-4">
              <form onSubmit={handleSubmit}>
    <select value={type} onChange={e => setType(e.target.value)}>
        <option value="like">Like</option>
        <option value="love">Love</option>
        <option value="laugh">Laugh</option>
        <option value="dislike">Dislike</option>
    </select>
    <button type="submit">Submit</button>
</form>
{/* ADD THE IMAGE */}
<h1 className="px-3 font-semibold">{likeCount}</h1>


                {numberOfReactions?.map((item)=>{
                    return(
                        <>
                            <h1>{item?.attributes?.Reaction}</h1> 
                        </>
                    )
                })} 
                {/* like */}
                <div className="bg-[#F8F8FF] rounded-full flex justify-between items-center px-2 py-1 hover:bg-blackk/20">
                    <button onClick={()=> {handleSubmit(); setType("like")}}>
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
