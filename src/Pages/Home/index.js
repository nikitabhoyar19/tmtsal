import React from "react";
import "./Home.css";
import ReactPlayer from "react-player";
import Banner from "../../Components/Banner";
import ProjectCards from "../../Components/ProjectCards";
import ClientCard from "../../Components/ClientCard";
import GetTouchForm from "../../Components/GetTouchForm";

function Home() {
  return (
    <>
      {/* banner  */}
      <Banner />

      {/******** overview Section ************/}
      <div className="OverView_Section">
        {/* overview first part */}
        <div className="overview_first_sec">
          <h2>Overview</h2>
          <div>
            {/* 1st */}
            <div className="tmt_overview">
              <img src="./Assets/eco.png" alt="" />
              <h2>Eco Friendly</h2>
            </div>
            {/* 2nd */}
            <div className="tmt_overview">
              <img src="./Assets/trusted.png" alt="" />
              <h2>Trusted by many</h2>
            </div>

            {/* 3rd */}
            <div className="tmt_overview">
              <img src="./Assets/widespread.png" alt="" />
              <h2>Widespread Service</h2>
            </div>
          </div>
        </div>

        {/* overview second part */}
        <div
          className="overview_second_sec"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/secontt.jpg"
            })`,
          }}
        >
          <p>
            TMTSAL, SALSHAKTI, product of Matharu Steel which is situated in
            Matharu VILL-KUMBH, NEAR S.D.PIPE PLANT, AMLOH ROAD, Mandi
            Gobindgarh, Punjab 148304, where we provide every kind of steel and
            also eco friendly and customize products. Our motto is to serve our
            customers first, as customer satisfaction and quality of products is
            our first priority. We believe in providing good quality products
            and service. We also deliver the products all over in India.
          </p>
        </div>
      </div>

      {/* ************* first video section ************ */}
      <div className="first_video_banner">
        <video
          src={process.env.PUBLIC_URL + "/Assets/video1.mp4"}
          controlsList="nodownload"
          oncontextmenu="return false"
          autoPlay="true"
          loop
          muted
          style={{
            objectFit: "cover",
          }}
        >
          {" "}
          hii{" "}
        </video>
        <p>
          As we prioritize our customers first we will make sure their needs and
          specifications regarding the product will be provided. We provide pure
          quality products which perfectly bond with cement, we also make sure
          of your safety as well so these products are earthquake resistant and
          can easily bendable and weldable. We deliver our products worldwide
          all over india. We provide our product up to customer specification,
          we provide high tensile strength steel which is made up of various
          elements as we believe in achieving various properties like hardness,
          bearable at natural process disasters like earthquake and heat
          resistance.
        </p>
      </div>

      {/* ************ Product ******************** */}
      <div className="Product_section">
        <h2>Our Products</h2>
        <div
          className="home_product"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/banner4.png"
            })`,
            backgroundColor: "rgba(43, 5, 5, 0.76)",
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

      {/* ******************** Choose ********************* */}
      <div className="Product_section">
        {/* Choose us cards*/}
        <h2>Why choose us</h2>
        <div className="ProjCard_Section">
          {/* first sec */}
          <div className="choose_card_grid">
            <div className="Choose_Card">
              <img src="./Assets/icon1.png" alt="" />
              <p>
                Pure & <br /> Anti- Corrosive
              </p>
            </div>
          </div>

          {/* 2nd */}
          <div className="choose_card_grid">
            <div className="Choose_Card">
              <img src="./Assets/icon2.png" alt="" />
              <p>
                Perfecy <br /> bonding with <br /> Cement
              </p>
            </div>
          </div>

          {/* 3rd */}
          <div className="choose_card_grid">
            <div className="Choose_Card">
              <img src="./Assets/icon3.png" alt="" />
              <p>
                Earthquake
                <br />
                Resistant
              </p>
            </div>
          </div>

          {/* 4th */}
          <div className="choose_card_grid">
            <div className="Choose_Card">
              <img src="./Assets/icon1.png" alt="" />
              <p>
                Easily <br />
                Bendable &
                <br /> Weldable
              </p>
            </div>
          </div>
        </div>

        <></>
      </div>

      {/* ******************* Video Media ******************* */}
      <div
        className="other_banner_second video_banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/Mediabanner.png"
          })`,
        }}
      >
        <ReactPlayer controls url="https://youtu.be/f4ESq26Yfog" />
      </div>

      <h2 style={{ color: "blue" }}>#MakeInIndia</h2>

      {/* *********** proj completed and client section ************** */}
      <div className="Product_section">
        {/* project completed */}
        <h2>Projects Completed</h2>
        <ProjectCards />

        {/* Our Clients */}
        <h2>Our Clients</h2>
        <ClientCard />

        <></>
      </div>

      {/* ********* Get In Touch ******** */}
      {/* ************* second video section ************ */}
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

      {/* ****************************************** */}
      {/* Map of Contact */}
      <div>
        <h2 style={{ color: "#14bdaf" }}>Contact </h2>
        <a
          href="https://goo.gl/maps/5QdwjuJHVvUfJFZY8"
          target="__blank"
          alt="Steel"
        >
          <div
            className="Map_Section"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/Assets/tmtmap.jpg"
              })`,
            }}
          ></div>
        </a>
      </div>
    </>
  );
}

export default Home;
