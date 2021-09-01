import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function AngleChannel() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/product7.jpg"
          })`,
        }}
      >
        {/* *********************************************** */}
        {/* back button */}
        <a href="/Product">
          <button>Back</button>
        </a>

        <h1>Angle Channel</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container">
          {/* first section */}
          <div className="product_card_des">
            {/* image of product */}
            <img src="./Assets/angle3.jpg" alt="" />
            {/* description */}
            <div>
              <h2>Description</h2>
              <p>
                Angle Channel is of 'L' shaped and between their legs there is a
                gap which is 90 degree angle, these are made up of low carbon
                steel shape which is used in manufacturing and repairing. These
                are basically used for making bridges, so for stronger and tough
                bridges use angle channels.
              </p>
              <p>
                {" "}
                Angle Channel is of 'L' shaped and between their legs there is a
                gap which is 90 degree angle, these are made up of low carbon
                steel shape which is used in manufacturing and repairing. These
                are basically used for making bridges, so for stronger and tough
                bridges use angle channels.
              </p>
            </div>
          </div>

          {/* second section of related images */}
          <div className="related_images_sec">
            {/*  */}
            <img src="./Assets/angle1.jpg" alt="" />
            <img src="./Assets/angle4.jpg" alt="" />
            {/*  */}
            <img src="./Assets/angle2.jpg" alt="" />
            <img src="./Assets/mainangle.jpg" alt="" />
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
              <h3>Angle Channels are available in</h3>
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

export default AngleChannel;
