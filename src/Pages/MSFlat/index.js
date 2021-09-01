import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function MSFlat() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/product5.jpg"
          })`,
        }}
      >
        {/* *********************************************** */}
        {/* back button */}
        <a href="/Product">
          <button>Back</button>
        </a>

        <h1>MS Flat</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container">
          {/* first section */}
          <div className="product_card_des">
            {/* image of product */}
            <img src="./Assets/flat1.jpg" alt="" />
            {/* description */}
            <div>
              <h2>Description</h2>
              <p>
                Ms Flat bars are the element of light portion of mild steel
                which vary the thickness of the strips, these are basically used
                in industrial grinding, grills outside the window. These thrive
                in low temperatures which gives them higher solidarity.
              </p>
              <p>
                These are basically used in industrial gratings and in various
                fabrication works. These are represented by the width and
                thickness of the flats. Like, when we say 35 X 5 FLAT, then it
                means the width is 35mm and the thickness is 5 mm.
              </p>
            </div>
          </div>

          {/* second section of related images */}
          <div className="related_images_sec">
            {/*  */}
            <img src="./Assets/flat.jpg" alt="" />
            <img src="./Assets/flat2.jpg" alt="" />
            {/*  */}
            <img src="./Assets/flat3.jpg" alt="" />
            <img src="./Assets/flat4.jpg" alt="" />
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
              <h3>MS Flat are available in</h3>
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

export default MSFlat;
