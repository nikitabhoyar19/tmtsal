import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function MSRound() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/product2.jpg"
          })`,
        }}
      >
        {/* *********************************************** */}
        {/* back button */}
        <a href="/Product">
          <button>Back</button>
        </a>

        <h1>MS Round</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container">
          {/* first section */}
          <div className="product_card_des">
            {/* image of product */}
            <img src="./Assets/round1.jpg" alt="" />
            {/* description */}
            <div>
              <h2>Description</h2>
              <p>
                Ms Round bars is a long, cylindrical shaped metal bar stock
                which is made up with a common form of purified metal. These
                bars help in support, framework and superior surface finish with
                exact dimensions. For greater support these bars are going to be
                helpful.
              </p>
              <p>
                MS Round bars have a very longer service life duration with
                safety and operational convience. These are used in forging
                industries and anchor bolts, pin rollers and other engineering
                industries.
              </p>
            </div>
          </div>

          {/* second section of related images */}
          <div className="related_images_sec">
            {/*  */}
            <img src="./Assets/round2.jpg" alt="" />
            <img src="./Assets/round.jpg" alt="" />
            {/*  */}
            <img src="./Assets/round3.jpg" alt="" />
            <img src="./Assets/round4.jpg" alt="" />
          </div>

          {/* third section of brouchers and time */}
          <div className="brouchers_appointment">
            {/* broucher section */}
            <div className="product_broucher">
              {/*  */}
              <div className="broucher_container">
                <div>
                  <a href="/">
                    <h2>
                      <i class="bx bxs-file"></i>
                      Download broucher
                    </h2>
                  </a>
                </div>
              </div>
            </div>

            {/* *********************************** */}
            {/* appointment section */}
            <div className="product_appointment">
              <h3>MS Round are available in</h3>
              <p>Fe 415, Fe 415 D, Fe 500, Fe 500 D as per IS 1786:2008</p>
              <h3>
                <span>Sizes Available: </span>8mm to 32mm
              </h3>
              {/* button */}
              <button type="submit">
                <a href="/Dealers" style={{ color: "#FFFFFF" }}>
                  Get Appiontment
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ************* second video section and Form ************ */}
      <div className="second_video_banner">
        <video
          src={process.env.PUBLIC_URL + "/Assets/video2.mp4"}
          controlsList="nodownload"
          oncontextmenu="return false"
          autoPlay="true"
          loop
          muted
          style={{
            objectFit: "cover",
          }}
        />

        <div className="get_in_touch_section">
          <GetTouchForm />
        </div>
      </div>
    </>
  );
}

export default MSRound;
