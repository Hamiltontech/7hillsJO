import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "./Footer";
import {IoChevronBackCircleSharp} from 'react-icons/io5'

const Search = ({ search, data , setSearchPage}) => {
    const [ deals, setDeals ] = useState([])
    const [ quizzes, setQuizzes ] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(() => {
      axios
        .get("https://strapi-104357-0.cloudclusters.net/api/articles")
        .then((response) => {
          setArticles(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    useEffect(()=>{
        axios.get("https://strapi-104357-0.cloudclusters.net/api/offers").then((response)=>{
            setDeals(response.data.data)
        })
    }, [])

    useEffect(()=>{
        axios.get("https://strapi-104357-0.cloudclusters.net/api/quizzes").then((response)=>{
            setQuizzes(response.data.data)
        })
    }, [])

    function copied() {
        setTimeout(function() {
            document.getElementById('mydiv').style.display = 'block';
        });
        setTimeout(function() {
          document.getElementById('mydiv').style.display = 'none';
      }, 500)
    }

  return (
    <>    


    <div className="pt-[120px] font-blinker">
<div className="mx-10" onClick={()=>setSearchPage(false)}>
<IoChevronBackCircleSharp size={40} className="hover:text-red ease-in-out duration-150 hover:scale-105 cursor-pointer"/>
</div>
      <div className=" lg:flex justify-between pt-10 h-screen">
        {/* Articles search */}
        <div className="lg:w-[33.3%] lg:mx-10  ">
          <h1 className="text-3xl font-bold mx-2">Articles</h1>
<hr className="mx-2 text-blackk/20 mt-2"/>
          <div className="grid mt-5">
            {articles?.map((item, key) => {
              if (item?.attributes?.Title.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <>
                   <Link href={"/post/" + item?.attributes?.Slug}>
                      <div
                        key={key}
                        className="p-3 lg:mx-20 mt-2 hover:bg-blackk/10 cursor-pointer ease-in-out duration-150"
                      >
                        <div>
                          <div
                            className="bg-cover h-[200px]  "
                            style={{
                              backgroundImage: `url("${item?.attributes?.Cover}")`,
                            }}
                          ></div>
                        </div>
                        <div className=" mt-2 ">
                          <h1 className="font-bold ">
                            {item?.attributes?.Title}
                            <br></br>
                            <span className="text-sm font-medium text-justify "></span>
                          </h1>
                          <p className=" text-sm">
                            {item?.attributes?.Abstract}
                            <span className="font-light ml-2"></span>
                          </p>
                        </div>
                      </div>
                      </Link>
                  </>
                );
              }
            })}
          </div>
        </div>

        {/* Quizzes search */}
        <div className="lg:w-[33.3%] lg:mx-10  ">
          <h1 className="text-3xl font-bold">Quizzes</h1>
          <hr className="mx-2 text-blackk/20 mt-2"/>
          <div className="grid mt-5">
            {quizzes?.map((item, key) => {
              if (item?.attributes?.Name.toLowerCase().includes(search.toLowerCase()) || item?.attributes?.Description.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <>
                    <Link href={item?.attributes?.URL} target="_blank">
                      <div
                        key={key}
                        className="  p-3 lg:mx-20 mt-2 hover:bg-blackk/10 cursor-pointer ease-in-out duration-150"
                      >
                        <div>
                          <div
                            className="bg-cover h-[200px]  "
                            style={{
                              backgroundImage: `url("${item?.attributes?.Image
                              }")`,
                            }}
                          ></div>
                        </div>
                        <div className=" mt-2 ">
                          <h1 className="font-bold ">
                            {item?.attributes?.Name}
                            <br></br>
                            <span className="text-sm font-medium text-justify "></span>
                          </h1>
                          <p className=" text-sm grid">
                            {item?.attributes?.Description}
                            <span className="font-bold "></span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              }
            })}
          </div>
        </div>

        {/* Hot Deals Search */}
        <div className="lg:w-[33.3%] ">
       
          <h1 className="text-3xl font-bold lg:mx-10">Hot Deals</h1>
          <hr className="mx-2 text-blackk/20 mt-2"/>
          <div className="grid mt-5">
          {/* <div id="mydiv" style={{"display": "none"}}>Copied!</div> */}
            {deals?.map((item, key) => {
              if (item?.attributes?.Brand.toLowerCase().includes(search.toLowerCase()) || item?.attributes?.Decsription.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <>
                      <div
                        key={key}
                        className=" p-3 lg:mx-20 mt-2 bg-light/10 "
                      >
                        <div>
                          <div
                            className="bg-cover h-[200px]  "
                            style={{
                              backgroundImage: `url("${item?.attributes?.ImageURL
                              }")`,
                            }}
                          ></div>

                        </div>
                        <div className=" mt-2 ">
                          <h1 className="font-bold ">
                            {item?.attributes?.Brand}
                            <br></br>
                            <span className="text-sm font-medium text-justify "></span>
                          </h1>
                          <p className=" text-sm grid">
                            {item?.attributes?.Decsription}
                            
                           
                            <button className="font-bold p-2 bg-white mt-1" onClick={()=>{ copied(); navigator.clipboard.writeText(item?.attributes?.Promo)}}>{item?.attributes?.Promo}</button>
                          </p>
                        </div>
                      </div>
                  </>
                );
              }
            })}
          </div>
          <div id="mydiv" style={{"display": "none"}} className="  flex justify-center relative">
    <h1 className="text-center  font-extrabold flex justify-center ">Copied!</h1>
      </div>
        </div>
   
      </div>
    </div>
    </>

  );
};

export default Search;
