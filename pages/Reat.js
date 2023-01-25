import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Reat = () => {
    // temporary - will be replaced wih the value from backend
const [total, setTotal ] = useState(null) 
const [click, setClick] = useState(false)
const [ Reactions, setReactions ] = useState([])

    useEffect(()=>{
        axios.get("https://strapi-104357-0.cloudclusters.net/api/articles?populate=*")
        .then((response)=>{
            setReactions(response.data.data)
        }).then(()=>{
            Reactions?.map((item)=>{
                setTotal(item.attributes.reactions.data.length)
            })
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

console.log(total)

const handleReact = ()=>{
    axios.post("https://strapi-104357-0.cloudclusters.net/api/reactions", {
        "data": {
            "Reaction": total ,  
            "article": postID || "",
        },
    })
}

  return (
    <div>

        {click? <h1 className='text-blackk/20'>Click me</h1> : <button onClick={()=>{setTotal(total + 1); setClick(true); handleReact()}}>Click me</button> }
        
        {/* here will be the value coming from backend */}
        <h1>{total}</h1>
    </div>
  )
}

export default Reat