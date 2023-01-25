import Header from "./components/Header";
import MainHero from "./components/MainHero";
import Trending from "./components/Trending";
import TopArticlesAds from "./components/TopArticlesAds";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import Link from "next/link";
import TopQuizzes from "./components/TopQuizzes";
import TopChannel from "./components/TopChannel";
import TopChannelAds from "./components/TopChannelAds";
import Footer from "./components/Footer";
import { useEffect, useState, useRef } from "react";
import LatestArticles from "./components/LatestArticles";
import axios from "axios";
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import AddToHomeScreenButton from "../pages/components/AddToHomeScreenButton";
import Search from "./components/Search";

const PWA = dynamic(() => import("../pwa"), {
  ssr: false,
});

export default function Home() {
  const [data, setData] = useState([]);
  const [spotify, setSpotify] = useState([]);
  const [searchPage, setSearchPage] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/articles")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/spotifies/1")
      .then((response) => {
        setSpotify(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Home = () => {
    return (
      <div>
        <AddToHomeScreenButton />
      </div>
    );
  };

  return (
    <div>
      <title>7Hills</title>
      <link rel="apple-touch-icon" href="https://i.imgur.com/waprZ5a.png" />
      <Header
        searchPage={searchPage}
        setSearchPage={setSearchPage}
        search={search}
        setSearch={setSearch}
      />

      {searchPage ? (
        <>
          <Search search={search} data={data} />
        </>
      ) : (
        <>
          <MainHero data={data} />
          <div id="add-to-home-screen">
            Add 7Hills Magazine to your home screen
            <AddToHomeScreenButton />
          </div>

          {/* Home page main section */}
          <div className="h-screen max-w-full pt-2 text-white bg-red font-blinker">
            <div className="w-full p-10 bg-blackk">
              <Trending data={data} />
              <div>
                <TopArticlesAds />
              </div>

              {/* quizzes section */}

              <div className="w-full bg-blackk p-2 pb-10">
                <div> {parse(`${spotify?.attributes?.embed_link}`)}</div>
              </div>

              <div className="flex mt-10  lg:mt-0">
                <h1 className="text-2xl font-extrabold text-white uppercase lg:text-5xl">
                  Top Quizzes
                </h1>
              </div>
              <hr />
              <div className="h-[500px] align-middle overflow-hidden mt-5">
                <TopQuizzes />
              </div>

              {/* channel videos section */}
              {/* <TopChannel /> */}

              {/* Latest articles section */}
              <div id="latest">
                <LatestArticles data={data} />
              </div>
              {/* add section */}
              <TopChannelAds />
              {/* footer section */}
            </div>

            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
