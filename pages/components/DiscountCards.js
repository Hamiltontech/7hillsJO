import React from "react";


const DiscountCards = ({ data }) => {

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

<div id="mydiv" style={{"display": "none"}} className="flex justify-center relative">
    <h1 className="text-center font-extrabold flex justify-center ">Copied!</h1>
      </div>
    <div className="grid lg:grid-cols-2 gap-1 font-blinker lg:gap-3 ">
      {data?.map((item, key) => (
        <>
          <div
            key={key}
            className="duration-200 ease-in-out lg:p-5  lg:flex bg-light/10 p-3"
          >
            <div>
              <div
                className="bg-cover lg:w-[200px] h-[150px]"
                style={{
                  backgroundImage: `url("${item?.attributes?.ImageURL}")`,
                }}
              ></div>
            </div>
            <div className="lg:ml-5 mt-2 lg:mt-0">
              <h1 className="font-bold lg:text-xl">
                {item?.attributes?.Brand}
                <br></br>
                <span className="text-sm font-medium lg:max-w-[300px] text-justify ">
                  {item?.attributes?.Decsription}
                </span>
              </h1>

              <button onClick={()=>{ copied(); navigator.clipboard.writeText(item?.attributes?.Promo)}}>
              <p className="font-extrabold text-sm grid bg-white p-3 px-5 mt-3 hover:bg-red ease-in-out duration-150 hover:text-white">
                {item?.attributes?.Promo}
              </p>
              </button>

            </div>
          </div>
        </>
      ))}
    </div>

    </>
  );
};

export default DiscountCards;
