import React from "react";
import "./Product.css";

import GetTouchForm from "../../Components/GetTouchForm";

function Product() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="other_banner_second"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/product_top.png"
          })`,
        }}
      >
        {/* back button */}
        <a href="/">
          <button>Back</button>
        </a>

        <h1>Our Products</h1>
        {/* social link container */}
        <div className="social_links">
          {/* insta */}
          <a href="http://instagram.com/tmtsalindia" target="__blank">
            <i class="bx bxl-instagram"></i>
          </a>
          {/* facebook */}
          <a href="http://www.facebook.com/Tmtsal" target="__blank">
            <i class="bx bxl-facebook-square"></i>
          </a>
          {/* twitter */}
          <a href="https://twitter.com/MatharuSteel" target="__blank">
            <i class="bx bxl-twitter"></i>
          </a>
          {/* Youtube */}
          <a
            href="https://www.youtube.com/channel/UCMXZuE4criWMgCK7AtQja8A"
            target="__blank"
          >
            <i class="bx bxl-youtube"></i>
          </a>
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/company/matharu-steels/"
            target="__blank"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>

      {/* **********  *********** */}
      <div className="Product_section desktop_home_product">
        {/* first */}
        <div className="Main_prod_card">
          <img src="./Assets/tmt.jpg" alt="" />
          {/* inner product details */}
          <div className="inner_main_prod">
            <h2>TMTSAL</h2>
            <p>
              TMT Bars are of high-strength build-up bars, they have a soft
              inner core but their outer core is tough. These bars are highly
              used in strengthening and building up the concrete. For strength
              and tough concrete TMT Bars have the ability.
            </p>
            <a href="Tmtbar">
              <small>View Details</small>
            </a>
          </div>
        </div>

        {/* second */}
        <div className="Main_prod_card">
          <img src="./Assets/square2.jpg" alt="" />
          {/* inner product details */}
          <div className="inner_main_prod">
            <h2>MS Square</h2>
            <p>
              Ms Square pipes are made up of mild steel, these pipes can easily
              be converted in any shape through welding for pipelining and
              basically used in water supply that is plumbing and also used in
              various other industrial and engineering applications.
            </p>
            <a href="/MSSquare">
              <small>View Details</small>
            </a>
          </div>
        </div>

        {/* third */}
        <div className="Main_prod_card">
          <img src="./Assets/flat1.jpg" alt="" />
          {/* inner product details */}
          <div className="inner_main_prod">
            <h2>MS Flat</h2>
            <p>
              Ms Flat bars are the element of light portion of mild steel which
              vary the thickness of the strips, these are basically used in
              industrial grinding, grills outside the window. These thrive in
              low temperatures which gives them higher solidarity.
            </p>
            <a href="/MSFlat">
              <small>View Details</small>
            </a>
          </div>
        </div>

        {/* fouth */}
        <div className="Main_prod_card">
          <img src="./Assets/round1.jpg" alt="" />
          {/* inner product details */}
          <div className="inner_main_prod">
            <h2>MS Round Bar</h2>
            <p>
              Ms Round bars is a long, cylindrical shaped metal bar stock which
              is made up with a common form of purified metal. These bars help
              in support, framework and superior surface finish with exact
              dimensions. For greater support these bars are going to be
              helpful.
            </p>
            <a href="/MSRound">
              <small>View Details</small>
            </a>
          </div>
        </div>

        {/* fifth */}
        <div className="Main_prod_card">
          <img src="./Assets/angle1.jpg" alt="" />
          {/* inner product details */}
          <div className="inner_main_prod">
            <h2>AngleChannel</h2>
            <p>
              Angle Channel is of 'L' shaped and between their legs there is a
              gap which is 90 degree angle, these are made up of low carbon
              steel shape which is used in manufacturing and repairing. These
              are basically used for making bridges, so for stronger and tough
              bridges use angle channels.
            </p>
            <a href="/AngleChannel">
              <small>View Details</small>
            </a>
          </div>
        </div>

        {/* sixth */}
      </div>

      {/* ******************************************************************************** */}

      {/* product section for mobile view */}
      <div className="Product_section mobile_home_product">
        <div
          className="home_product "
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/bann.png"
            })`,
          }}
        >
          {/* card 1 */}
          <a href="/SalShakti">
            <div className="prod_card">
              {/* card img */}
              <img src="./Assets/sal2.jpg" alt="" />
              {/* card design */}
              <div
                className="prod_card_design"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/Assets/prod_design.png"
                  })`,
                }}
              >
                <a href="/SalShakti">
                  <p>Sal Shakti</p>
                </a>
              </div>
            </div>
          </a>

          {/* card 2 */}
          <a href="/MSSquare">
            <div className="prod_card">
              {/* card img */}
              <img src="./Assets/square2.jpg" alt="" />
              {/* card design */}
              <div
                className="prod_card_design"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/Assets/prod_design.png"
                  })`,
                }}
              >
                <a href="/MSSquare">
                  <p>MS Square</p>
                </a>
              </div>
            </div>
          </a>

          {/* card 3 */}
          <a href="/MSFlat">
            <div className="prod_card">
              {/* card img */}
              <img src="./Assets/flat1.jpg" alt="" />
              {/* card design */}
              <div
                className="prod_card_design"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/Assets/prod_design.png"
                  })`,
                }}
              >
                <a href="/MSFlat">
                  <p>MS Flat</p>
                </a>
              </div>
            </div>
          </a>

          {/* card 4 */}
          <a href="/MSRound">
            <div className="prod_card">
              {/* card img */}
              <img src="./Assets/round5.jpg" alt="" />
              {/* card design */}
              <div
                className="prod_card_design"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/Assets/prod_design.png"
                  })`,
                }}
              >
                <a href="/MSRound">
                  <p>MS Round</p>
                </a>
              </div>
            </div>
          </a>

          {/* card 5 */}
          <a href="/AngleChannel">
            <div className="prod_card">
              {/* card img */}
              <img src="./Assets/mainangle.jpg" alt="" />
              {/* card design */}
              <div
                className="prod_card_design"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/Assets/prod_design.png"
                  })`,
                }}
              >
                <a href="/AngleChannel">
                  <p>Angle channel</p>
                </a>
              </div>
            </div>
          </a>

          {/* card 6 */}
          <a href="/tmtbar">
            <div className="prod_card">
              {/* card img */}
              <img src="./Assets/tmt1.jpg" alt="" />
              {/* card design */}
              <div
                className="prod_card_design"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/Assets/prod_design.png"
                  })`,
                }}
              >
                <a href="/tmtbar">
                  <p>TMTSAL</p>
                </a>
              </div>
            </div>
          </a>
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

export default Product;
