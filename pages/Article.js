import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleSection from "./components/ArticleSection";
import TopPostssBar from "./components/TopPostssBar";
import RelatedArticlesBar from "./components/RelatedArticlesBar";
import ShareButtons from './components/ShareButtons'
// import TopChannelAds from './components/TopArticlesAds'


const Article = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="h-screen w-full pt-[100px] font-blinker">
        
        <ShareButtons/>
        
        <div className="flex justify-center w-full p-5 lg:p-20 lg:gap-10 gap-[5.5rem]">
          {/* article section */}
          <div className="w-[80%] lg:w-[75%]">
            <ArticleSection />
          </div>

          {/* sidebar section -for top articles */}
          <div className="lg:grid w-[20%] h-[750px] mx-3 hidden">
            {/* <div className=" pb-2 pr-2 lg:pr-5 bg-yellow w-[80%] lg:w-full"> */}
            <div className="border-4 lg:h-[50%] bg-white h-[750px]">
              <TopPostssBar />
              {/* </div> */}
            </div>
          </div>
        </div>
        
        {/* bottom ad section */}
        {/* <div className=" ">  <div className='lg:w-[970px] lg:h-[90px] w-[320px] h-[50px]  bg-cover bg-[url("https://images.unsplash.com/photo-1575464601773-a21a584da2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80")]'></div></div> */}
        {/* <RelatedArticlesBar /> */}
        <Footer />
      </div>

    </div>
  );
};

export default Article;
