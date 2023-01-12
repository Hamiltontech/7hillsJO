import {DiscussionEmbed} from "disqus-react"
  
const Comments = () => {
  const disqusShortname = "7hills-magazine"
  
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier:'123', 
    title: "Comments" 
  }
  
  return (
    <div className=" lg:mx-40 mt-5 ">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
  
export default Comments;