import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryAds from "./components/CategoryAds";
import QuizzesCards from "./components/QuizzesCards";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Layout from "./components/Layout";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [searchPage, setSearchPage] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/quizzes")
      .then((res) => setQuizzes(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [ad, setAd] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/ads")
      .then((response) => {
        setAd(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>

    <div className="w-full h-screen font-blinker">
      <Header
        searchPage={searchPage}
        setSearchPage={setSearchPage}
        search={search}
        setSearch={setSearch}
      />

      {searchPage ? (
        <Search search={search} setSearchPage={setSearchPage}/>
      ) : (
        <>
          <div className="w-full h-full pt-[100px]">
            <h1 className="p-10 pb-1 text-3xl font-bold uppercase lg:text-5xl">
              Quizzes
            </h1>

            <hr className="mx-10" />
            <hr className="mx-10 " />

            <div className="gap-5 p-10 lg:flex">
              <div className="lg:w-[80%] ">
                {/* <DiscountCards  data={data} /> */}
                <QuizzesCards quizzes={quizzes} /> 
              </div>
              <div className="lg:w-[20%] h-full hidden lg:block ml-20">
                <CategoryAds ad={ad} />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
    </Layout>
  );
};

export default Quizzes;
