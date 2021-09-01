import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footer_Section">
        <hr />

        {/****** second section ********/}
        <div className="seving_contact">
          {/* Address */}
          <div className="serving_address">
            {/* map button */}
            <a href="https://goo.gl/maps/QDhdpByN5SEoaREe9" target="__blank">
              <button>Get Directions</button>
            </a>

            <p>
              VILL-KUMBH, Near S.D, PIPE Plant,
              <br />
              Amloh road, Mandi Gobindgarh,
              <br />
              Fategarh sahib, Punjab, 147301
              <br />
              India
            </p>
          </div>
          {/* serving */}
          <div>
            {/* first sec */}
            <div className="footer_about">
              <a href="/About">About Us</a>
              <a href="/TermsAndCondition">Terms & Conditions</a>
              <a href="/Privacy">Privacy Policy</a>
              <a href="/Blog">Blog</a>
              <a href="/Carriers">Carriers</a>
              <a href="/Contact">Contact Us</a>
            </div>

            <h2>Serving in</h2>
            <div className="cities_name">
              <a href="/">Delhi</a>
              <a href="/">Mumbai</a>
              <a href="/">Kolkata</a>
              <a href="/">Bangalore</a>
            </div>

            <div>
              <a
                href="/"
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  textDecorationStyle: "underline",
                }}
              >
                <h2>www.tmtsal.com</h2>
              </a>
            </div>
          </div>
          {/* contact number and mail container */}
          <div className="contact_number_mail">
            <h2>Customer Helpline</h2>
            <p style={{ textDecoration: "none" }}>9988013139</p>
            <div>
              <h2>Support Mail</h2>
              <p>support@tmtsal.com</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="opening_hours">
            <h2>Opening Hours</h2>
            <p style={{ color: "#FFFFFF" }}>Mon: 10:00 am – 7:00 pm</p>
            <p style={{ color: "#FFFFFF" }}>Tue: 10:00 am – 7:00 pm</p>
            <p style={{ color: "#FFFFFF" }}>Wed: 10:00 am – 7:00 pm</p>
            <p style={{ color: "#FFFFFF" }}>Thur: 10:00 am – 7:00 pm</p>
            <p style={{ color: "#FFFFFF" }}>Fri: 10:00 am – 7:00 pm</p>
            <p style={{ color: "#FFFFFF" }}>Sat: 10:00 am – 7:00 pm</p>
            <p style={{ color: "#FFFFFF" }}>Sun: Closed</p>
          </div>
        </div>

        {/* social links */}
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
        <hr />

        <h3>tmtsal©2021</h3>
      </div>
    </>
  );
}

export default Footer;
