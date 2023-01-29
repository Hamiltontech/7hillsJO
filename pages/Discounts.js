import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisscountsAds from "./components/DisscountsAds";
import DiscountCards from "./components/DiscountCards";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Layout from "./components/Layout";

const Discounts = () => {
  const [data, setData] = useState([]);
  const [searchPage, setSearchPage] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/offers")
      .then((response) => {
        setData(response.data.data);
        arr.push(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
              Deals & Offers
            </h1>

            <hr className="mx-10" />
            <hr className="mx-10 " />

            <div className="gap-5 p-10 lg:flex">
              <div className="lg:w-[80%] ">
                <DiscountCards data={data} />
              </div>
              <div className="w-[20%] h-full lg:ml-20 mt-10 lg:mt-0 hidden lg:block">
                <DisscountsAds ad={ad} />
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

export default Discounts;
