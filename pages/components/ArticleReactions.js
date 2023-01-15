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
    })
    .then((response) => {
        if(response.status === 200){
        setReactions(response.data);
        setType("")
        setLoading(false);
        setNumberOfReactions(response.data.attributes.reactions.data);
        }else if(response.status === 400){
        console.log("An error occured: ", response.data)
        setLoading(false);
        }
    })
    .catch((error) => {
        console.log(error)
        setLoading(false);
    });
};

useEffect(() => {
    if(reactions && postID){
        const currentReactions = reactions.find(r => r.id === postID);
        if(currentReactions){
            setNumberOfReactions(currentReactions.attributes.reactions.data);
        }
    }
}, [reactions, postID])


  const likeCount = numberOfReactions.filter(r => r.attributes.Reaction === 'like').length
  const loveCount = numberOfReactions.filter(r => r.attributes.Reaction === 'love').length
  const laughCount = numberOfReactions.filter(r => r.attributes.Reaction === 'laugh').length
  const dislikeCount = numberOfReactions.filter(r => r.attributes.Reaction === 'dislike').length
  const clapCount = numberOfReactions.filter(r => r.attributes.Reaction === 'clap').length
  const sadCount = numberOfReactions.filter(r => r.attributes.Reaction === 'sad').length
  const shockCount = numberOfReactions.filter(r => r.attributes.Reaction === 'shock').length
  const angryCount = numberOfReactions.filter(r => r.attributes.Reaction === 'angry').length



  

    if (error) {
        return <p>An error occured: {error.message}</p>
    }

    if (loading) {
        return <p>Loading...</p> 
    } 

    return (
        <div className="grid place-items-center text-light/80 mt-10">
            <h1 className="font-bold">What do you think?</h1>
            <h1 className="font-extralight">Number of Responses</h1>
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 mt-4">
            <form>
            <div className="reaction-buttons">
    <button type="button" onClick={() => {setType("like"); handleSubmit()}}>Like</button>
    <button type="button" onClick={() => {setType("love"); handleSubmit()}}>Love</button>
    <button type="button" onClick={() => {setType("laugh"); handleSubmit()}}>Laugh</button>
    <button type="button" onClick={() => {setType("dislike"); handleSubmit()}}>Dislike</button>
    <button type="button" onClick={() => {setType("clap"); handleSubmit()}}>Clap</button>
    <button type="button" onClick={() => {setType("sad"); handleSubmit()}}>Sad</button>
    <button type="button" onClick={() => {setType("shock"); handleSubmit()}}>Shock</button>
    <button type="button" onClick={() => {setType("angry"); handleSubmit()}}>Angry</button>
</div>


</form>
{/* ADD THE IMAGE */}
<h1 className="px-3 font-semibold">Likes {likeCount}</h1>
<h1 className="px-3 font-semibold">Love {loveCount}</h1>
<h1 className="px-3 font-semibold">Laugh {laughCount}</h1>
<h1 className="px-3 font-semibold">Dislike {dislikeCount}</h1>
<h1 className="px-3 font-semibold">Clap {clapCount}</h1>
<h1 className="px-3 font-semibold">Sad {sadCount}</h1>
<h1 className="px-3 font-semibold">Shock {shockCount}</h1>
<h1 className="px-3 font-semibold">Angry {angryCount}</h1>







              
        </div>
      </div>
  );
};

export default ArticleReactions;
