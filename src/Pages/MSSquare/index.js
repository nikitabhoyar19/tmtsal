import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function MSSquare() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/product3.jpg"
          })`,
        }}
      >
        {/* *********************************************** */}
        {/* back button */}
        <a href="/Product">
          <button>Back</button>
        </a>

        <h1>MS Square</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container">
          {/* first section */}
          <div className="product_card_des">
            {/* image of product */}
            <img src="./Assets/square2.jpg" alt="" />
            {/* description */}
            <div>
              <h2>Description</h2>
              <p>
                Ms Square pipes are made up of mild steel, these pipes can
                easily be converted in any shape through welding for pipelining
                and basically used in water supply that is plumbing and also
                used in various other industrial and engineering applications.
              </p>
              <p>
                Ms Square bars are used in a lot of engineering components like
                in forging industries, grill fencing and constructing bridges
                and any type of steel structure. These are used in different
                sizes by using high grade material
              </p>
            </div>
          </div>

          {/* second section of related images */}
          <div className="related_images_sec">
            {/*  */}
            <img src="./Assets/square1.jpg" alt="" />
            <img src="./Assets/square5.jpg" alt="" />
            {/*  */}
            <img src="./Assets/square8.jpg" alt="" />
            <img src="./Assets/square4.jpg" alt="" />
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
              <h3>MS Square are available in</h3>
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

export default MSSquare;
