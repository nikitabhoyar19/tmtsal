import React from "react";
import "./Media.css";
import ReactPlayer from "react-player";
import GetTouchForm from "../../Components/GetTouchForm";

function Media() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="other_banner_second"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/product2.jpg"
          })`,
        }}
      >
        <h1>Media</h1>
        {/* Socual Media Links Container */}
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

      {/* ********** original video *********** */}
      <div
        className="other_banner_second video_banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/Mediabanner.png"
          })`,
        }}
      >
        <ReactPlayer url="https://youtu.be/f4ESq26Yfog" />
      </div>

      {/* *************************************** */}
      {/* Media division Container */}
      <div className="Product_video_section">
        <ReactPlayer
          className="video_item"
          url="https://youtu.be/KpgY3mROvHI"
        />

        <ReactPlayer
          className="video_item"
          url="https://youtu.be/f4ESq26Yfog"
        />

        <ReactPlayer
          className="video_item"
          url="https://youtu.be/JBO2d5RkbHw"
        />
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
    </>
  );
}

export default Media;
