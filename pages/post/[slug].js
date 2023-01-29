import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleSection from "../components/ArticleSection";
import TopPostssBar from "../components/TopPostssBar";
import RelatedArticlesBar from "../components/RelatedArticlesBar";
import ShareButtons from "../components/ShareButtons";
import axios from "axios";
import { useRouter } from "next/router";
import ArticleAd from "../components/ArticleAd";
import Search from "../components/Search";
import Layout from "../components/Layout";

const Post = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { slug } = router.query;
  const [postID, setPostID] = useState("");
  const [comment, setComment] = useState("")

  const [searchPage, setSearchPage] = useState(false);
  const [search, setSearch] = useState("");
  
  // from strapi
  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/articles?populate=*")
      .then((res) => {
        const array = res.data.data;
        const found = array?.find((post) => post.attributes.Slug === slug);
        setPostID(found?.id || "");
        setData(found);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query.slug, router.isReady]);

useEffect(()=>{
  window.onscroll = function() {myFunction()}
})



  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%" ;
  }


  return (
    <Layout  >
    <div className="w-full h-screen">
      <Header 
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              search={search}
              setSearch={setSearch}
      />

{searchPage ? (
        <Search search={search} setSearchPage={setSearchPage} />
      ) : (
        <>
      <div className="progress-container h-[120px] bg-white fixed">
    <div className="progress-barb h-[120px] bg-yellow w-0" id="myBar"></div>
  </div>
      <div className="h-screen w-full pt-[100px] font-blinker">
        <ShareButtons data={data?.attributes} slug={slug} />
        <div className="grid gap-[200px]">
          <div className="flex justify-center w-full p-5 lg:p-20 lg:gap-20 gap-[5.5rem]">
            {/* article section */}
            <div className="w-[80%] lg:w-[75%]">
              <ArticleSection data={data} comment={comment} setComment={setComment} postID={postID}/>
            </div>

            <div className="lg:grid w-[25%] h-[70%] mx-3 hidden">
              <div className="border-4 lg:h-[100%] bg-white h-[750px]">
                <TopPostssBar />
              </div>

              <div className="w-full my-5 grid justify-center ">
                {/* <div className="w-[300px] h-[600px] bg-cover bg-[url('https://images.unsplash.com/photo-1617419250411-98aa962b070f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=1240')]" /> */}
             <ArticleAd />
              </div>
            </div>
          </div>

          <RelatedArticlesBar />
          <Footer />
        </div>
        {/* <Footer /> */}
      </div>
      </>
      )}
    </div>
    </Layout>
  );
};

export default Post;
