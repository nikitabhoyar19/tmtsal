import React from "react";
import "./Contact.css";
import GetTouchForm from "../../Components/GetTouchForm";
import DistributorForm from "../../Components/DistributorForm";

function Contact() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="other_banner_second"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/contacttop1.jpg"
          })`,
        }}
      >
        <h1>Contact</h1>

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

      {/* ********* Get In Touch Form Section ******** */}
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

      {/* ********** contact cards container *********** */}
      <div className="Product_section">
        <div
          className="Contact_Card"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/Assets/banner4.png"
            })`,
          }}
        >
          {/* main blog card */}
          <div className="Main_contact_card">
            <div
              className="contact_img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/con_icons.png"
                })`,
              }}
            >
              {/* contact_icon */}
              <i class="bx bxs-phone"></i>
            </div>

            {/* <img src="./Assets/con_icons.png" alt="" /> */}
            {/* <img > */}
            {/* inner product details */}
            <div className="inner_main_blog">
              <h2>Phone</h2>
              <h3>9988013139</h3>
            </div>
          </div>

          {/* card 2 */}
          <div className="Main_contact_card">
            <div
              className="contact_img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/con_icons.png"
                })`,
              }}
            >
              {/* contact_icon */}
              <i class="bx bx-mail-send"></i>
            </div>
            {/* inner product details */}
            <div className="inner_main_blog">
              <h2>Email</h2>
              <h3>support@tmtsal.com</h3>
            </div>
          </div>

          {/* card 3 */}
          <div className="Main_contact_card">
            <div
              className="contact_img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/con_icons.png"
                })`,
              }}
            >
              {/* contact_icon */}
              <i class="bx bxs-home-heart"></i>
            </div>
            {/* inner product details */}
            <div className="inner_main_blog">
              <h2>Address</h2>
              <h3>
                {" "}
                Vill kumbh, near S.D.
                <br />
                pipe plant, amloh road
                <br />
                mandi Gobindgrah, Fategrah <br />
                sahib Punjab, 147301
              </h3>
            </div>
          </div>
        </div>
        {/* 2 */}
      </div>

      {/* Distributor Form */}
      <DistributorForm />
    </>
  );
}

export default Contact;
