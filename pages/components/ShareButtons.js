import React from "react";
import { BsPinterest } from "react-icons/bs";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillCopy,
  AiFillMail,
} from "react-icons/ai";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

const ShareButtons = ({ slug }) => {

  function copied() {
    setTimeout(function() {
        document.getElementById('mydiv').style.display = 'block';
    });
    setTimeout(function() {
      document.getElementById('mydiv').style.display = 'none';
  }, 2000)
}

  return (
    <div className=" grid grid-cols-7 lg:block lg:top[20%] lg:fixed justify-center mt-5 ml-2 lg:ml-0">
      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <EmailShareButton
          url={"https://7-hills.vercel.app/post/" + slug}
          subject={"Check out this post from 7hills.Jo!"}
          body="body"
        >
          <AiFillMail size={25} />
        </EmailShareButton>
      </div>

      <div className="flex p-1 lg:my-1  mx-1 hover:scale-110">
        <FacebookShareButton
          url={"https://7-hills.vercel.app/post/" + slug}
          quote={"Check out this post from 7hills.Jo!"}
          hashtag={"#7hills"}
        >
          <AiFillFacebook size={25} />
        </FacebookShareButton>
      </div>

      <div className="flex p-1  lg:my-1 mx-1 hover:scale-110">
        <FacebookMessengerShareButton
          url={"https://7-hills.vercel.app/post/" + slug}
          appId={""}
        >
          <RiMessengerFill size={25} />
        </FacebookMessengerShareButton>
      </div>

      <div className="flex p-1 lg:my-1  mx-1 hover:scale-110">
        <PinterestShareButton
          url={"https://7-hills.vercel.app/post/" + slug}
          media={"Check out this post from 7hills.Jo!"}
        >
          <BsPinterest size={25} />
        </PinterestShareButton>
      </div>

      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <TwitterShareButton
          url={"https://7-hills.vercel.app/post/" + slug}
          title={"Check out this post from 7hills.Jo!"}
        >
          <AiOutlineTwitter size={25} />
        </TwitterShareButton>
      </div>

      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <WhatsappShareButton
          url={"https://7-hills.vercel.app/post/" + slug}
          title={"Check out this post from 7hills.Jo!"}
          separator=":: "
        >
          <RiWhatsappFill size={25} />
        </WhatsappShareButton>
      </div>
      
      <div className="flex p-1  lg:my-1 mx-1 hover:scale-110">
        <button
          onClick={()=>{
            copied()
            navigator.clipboard.writeText(window.location.href);
            
          }}
        >
          <AiFillCopy size={25} />
        </button>
        <div id="mydiv" style={{"display": "none"}} className="bg-white rounded-full p-1 text-sm">Link copied!</div>
      </div>
    </div>
  );
};

export default ShareButtons;
