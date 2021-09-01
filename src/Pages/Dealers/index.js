import React from "react";
import "./Dealers.css";
import { useHistory } from "react-router-dom";
import GetTouchForm from "../../Components/GetTouchForm";

function Product() {
  const history = useHistory();

  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="other_banner_second"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/dealertop.png"
          })`,
        }}
      >
        <h1>Dealers</h1>
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

      {/* ********** Dealer *********** */}
      <div className="Product_section">
        {/* Dealer container */}
        <div className="Deal_container">
          {/* location symbol */}
          <img src="./Assets/location.png" alt="" />
          {/* state */}
          <h3>STATE</h3>
          <div className="ChooseState">
            <h2>STATE</h2>
            <select>
              <option value="" disabled selected>
                Choose your State
              </option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="UP">UP</option>
              <option value="Panjab">Panjab</option>
            </select>
          </div>
          {/* District */}
          <h3>District</h3>
          <div className="ChooseDistrict">
            <h2>DISTRICT</h2>
            <select>
              <option value="" disabled selected>
                Choose your Area/ District
              </option>
              <option value="Nagpur">Nagpur</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          {/* buttons container */}
          <div>
            {/*  */}
            <button
              className="reset_btn"
              type="submit"
              onClick={() => history.push("/")}
            >
              Reset
            </button>

            {/*  */}
            <button
              className="search_btn"
              type="submit"
              onClick={() => history.push("/")}
            >
              Search
            </button>
          </div>
        </div>
      </div>

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
        {/* ********* Get In Touch Form ******** */}
        <div className="get_in_touch_section">
          <GetTouchForm />
        </div>
      </div>
    </>
  );
}

export default Product;
