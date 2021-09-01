import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function SalShakti() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/product4.jpg"
          })`,
        }}
      >
        {/* *********************************************** */}
        {/* back button */}
        <a href="/Product">
          <button>Back</button>
        </a>

        <h1>Sal Shakti</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container">
          {/* first section */}
          <div className="product_card_des">
            {/* image of product */}
            <img src="./Assets/sal4.jpg" alt="" />
            {/* description */}
            <div>
              <h2>Description</h2>
              <p>
                Sal shakti are of high-strength build-up bars, they have a soft
                inner core but their outer core is tough. These bars are highly
                used in strengthening and building up the concrete. For strength
                and tough concrete TMT Bars have the ability.
              </p>
              <p>
                This is represented by height (h), leg width (b), waist
                thickness (d). Where the specification of domestic channel steel
                is from 6-40 means the height is 6-40 cm.
              </p>
            </div>
          </div>

          {/* second section of related images */}
          <div className="related_images_sec">
            {/*  */}
            <img src="./Assets/sal1.jpg" alt="" />
            <img src="./Assets/sal2.jpg" alt="" />
            {/*  */}
            <img src="./Assets/sal3.jpg" alt="" />
            <img src="./Assets/sal4.jpg" alt="" />
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
              <h3>Sal bars are available in</h3>
              <p>Fe 415, Fe 415 D, Fe 500, Fe 500 D as per IS 1786:2008</p>
              <h3>
                <span>Sizes Available: </span>8mm to 32mm
              </h3>
              {/* button */}
              <button type="submit">Get Appiontment</button>
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

export default SalShakti;
