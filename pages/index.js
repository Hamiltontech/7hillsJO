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
import { IoShareOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Layout from "./components/Layout";

const PWA = dynamic(() => import("../pwa"), {
  ssr: false,
});

export default function Home() {
  const [data, setData] = useState([]);
  const [spotify, setSpotify] = useState([]);
  const [searchPage, setSearchPage] = useState(false);
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState(false);

  useEffect(() => {
    axios
      .get("https://strapi-104357-0.cloudclusters.net/api/articles?populate=*")
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

  function closePopup() {
    document.getElementById("popup").style.display = "none";

  }


useEffect(()=>{
if (localStorage.getItem("newsletter")){
  setNewsletter(false)
}else{
  setNewsletter(true)
}
}, [newsletter])

  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubscribe = () => {
    if (email.toLowerCase().match(re)) {
      axios
        .post("https://strapi-104357-0.cloudclusters.net/api/subscriptions", {
          data: {
            Email: email.toString() || "",
          },
        })
        .then((response) => {
          console.log(response);
          setSubscription(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setTimeout(function () {
        document.getElementById("invalidEmail").style.display = "block";
      });
      setTimeout(function () {
        document.getElementById("invalidEmail").style.display = "none";
      }, 1500);
    }
  };

  return (
    <Layout>
      <div className="font-blinker">
        <title>7Hills</title>
        <link rel="apple-touch-icon" href="https://i.imgur.com/waprZ5a.png" />
        <Header
          searchPage={searchPage}
          setSearchPage={setSearchPage}
          search={search}
          setSearch={setSearch}
        />

        <div
          id="popup"
          className="md:hidden bg-red p-2 fixed flex justify-center left-[10%] top-[90%] rounded-full border border-white text-white"
        >
          <h1 className="mt-1 ml-2" id="add-to-home-screen">
            Add 7Hills to your home screen!
          </h1>
          {/* <AddToHomeScreenButton /> */}
          <button
            onClick={() => {
              closePopup();
              setPopup(true);
            }}
          >
            <spna className="mx-3 flex text-xs ">
              Click
              <div className="rounded-full p-1 hover:bg-blackk cursor-pointer ease-in-out duration-150">
                <IoShareOutline size={25} />
              </div>
            </spna>
          </button>
          <button
            className="-mt-12 hover:text-white/80 cursor-pointer ease-in-out duration-150"
            onClick={closePopup}
          >
            {" "}
            <AiFillCloseCircle size={20} />
          </button>
        </div>

        {popup && (
          <div
            id="defaultModal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 pt-[120px] right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[800px] md:h-full"
          >
            <div class="relative w-full max-w-2xl md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  
                  <button
                    onClick={() => setPopup(false)}
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-6 space-y-2 ">
                  <Image src="/popup.gif" width={400} height={100} />
                </div>

                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
              </div>
            </div>
          </div>
        )}

        {newsletter && (
          <div
            id="defaultModal"
            tabindex="-1"
            aria-hidden="true"
            class=" fixed pt-[120px] justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[800px] grid place-items-center"
          >
            <div class="relative w-full max-w-2xl md:h-auto shadow-xl shadow-blackk">
              <div class="relative bg-white dark:bg-gray-700 shadow-xl shadow-blackk pb-10">
                <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                  
                  <button
                    onClick={() => {
                      setNewsletter(false);
                      setSubscription(false);
                      localStorage.setItem('newsletter', true)
                    }}
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-2 lg:w-[600px] grid place-items-center">
                  <Image
                    src={
                      subscription
                        ? `https://cdn-icons-png.flaticon.com/512/709/709510.png`
                        : `https://cdn-icons-png.flaticon.com/512/542/542689.png`
                    }
                    width={100}
                    height={100}
                    className={
                      subscription ? "animate-pulse" : `animate-bounce `
                    }
                  />
                  {subscription ? (
                    <div className="p-16">
                    <h1 className="text-4xl font-extrabold">Thank You!</h1>
               </div>
                  ) : (
                    <>
                      <h1 className="text-2xl font-extrabold">
                        Subscribe to our newsletter !
                      </h1>
                      <p>
                        Be the first to get exclusive offers & the latest news
                        directly to your inbox.
                      </p>
                      <br></br>
                      <div className="flex">
                        <input
                          className="w-full p-2 outline-0 border-t border-l border-b text-lg"
                          type="email"
                          placeholder="Enter your email.."
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                          className="p-3 bg-red text-white w-[200px] hover:bg-red/50 ease-in-out duration-150"
                          onClick={handleSubscribe}
                        >
                          Subscribe
                        </button>
                      </div>{" "}
                    </>
                  )}

                  <p
                    style={{ display: "none" }}
                    className="text-red  mt-1 tracking-widest"
                    id="invalidEmail"
                  >
                    {" "}
                    Invalid Email !
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {searchPage ? (
          <>
            <Search search={search} data={data} setSearchPage={setSearchPage} />
          </>
        ) : (
          <>
            <MainHero data={data} />

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
    </Layout>
  );
}
