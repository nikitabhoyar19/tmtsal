import React from "react";
import "./About.css";
import ProjectCards from "../../Components/ProjectCards";
import ClientCard from "../../Components/ClientCard";
import GetTouchForm from "../../Components/GetTouchForm";

function About() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="other_banner_second"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/abouttop.jpg"
          })`,
        }}
      >
        <h1 style={{ color: "yellow" }}>About Us</h1>
        <p style={{ color: "rgb(9, 20, 1)", fontWeight: "600" }}>
          The power of TMT is a manufacturer of structural TMTSAL steels in
          Punjab (India). The power of TMT products includes TMTSAL, Ms Square,
          Ms Flats, Ms Round and Angle Channel, SALSHAkTI. We manufacture these
          products to match the standards, demands and by seeing gradual changes
          in the industrial world. We manufacture all types of Ms Products by
          making sure of the quality of product and we also customize according
          to the customer specifications.
        </p>
      </div>

      {/* ********** vision Mission Section *********** */}
      <div className="Product_section">
        <div className="Vision_Misson_Section">
          {/* Vision */}
          <div>
            <h2>Our Vision</h2>
            <p>
              Our vision is to fulfil the needs and wants of our customer and to
              manufacture products according to the upcoming technology. We
              believe in adapting changes of life and technology to a new era of
              development, growth, productivity and technology by making sure of
              various properties of our products and providing better lives
              through technology.
            </p>
          </div>
          {/* Mission */}
          <div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide our customers with good quality and safe
              products. Customer satisfaction is our main priority. We will also
              ensure that our product matches the highest level of standards of
              quality and consistency and make sure that our products will be
              eco-friendly. We will make sure that our products will be up to
              date and match with new generation needs.
            </p>
          </div>
        </div>
      </div>

      {/******** overview Section ************/}
      <div className="OverView_Section">
        {/* overview first part */}
        <div>
          {/* 1st */}
          <div className="tmt_overview overview_main">
            <img src="./Assets/eco.png" alt="" />
            <div>
              <h2>Eco Friendly</h2>
              <p>
                As you know that the steel, metals have a bad reputation in
                matters of environment friendly products because some machines
                that cause harm to the environment are made up of metal but
                metal is a natural element which is found in earth. So we can
                resume the waste which comes from steel as steel produces rocky
                substances which most of the companies use in construction as
                cement. We use water heavily during the steel making process and
                this water is filled in various particles which can be removed
                through filtration and 98% of water can be recycled.
              </p>
            </div>
          </div>

          {/* 2nd for desktop */}
          <div className="tmt_overview overview_main">
            <img src="./Assets/trusted.png" alt="" />
            <div>
              <h2>Trusted By Many</h2>
              <p>
                By following our vision, we gained our customer’s trust by
                providing them good quality and safe products, eco-friendly
                products and by providing them with customized products and by
                our service. Now we are trusted by many of our customers and we
                will make sure to maintain their trust as our vision and mission
                is to satisfy our customers and provide them with the standard
                quality of products.
              </p>
            </div>
          </div>

          {/* 3rd */}
          <div className="tmt_overview overview_main">
            <img src="./Assets/widespread.png" alt="" />
            <div>
              <h2>Widesspread Service</h2>
              <p>
                As we prioritize our customers first we will make sure their
                needs and specifications regarding the product will be provided.
                We provide pure quality products which perfectly bond with
                cement, we also make sure of your safety as well so these
                products are earthquake resistant and can easily bendable and
                weldable. We deliver our products worldwide all over india.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ********** proj completed and client section ************** */}
      <div className="Product_section">
        {/* project completed */}
        <h2>Projects Completed</h2>
        <ProjectCards />

        {/* Our Clients */}
        <h2>Our Clients</h2>
        <ClientCard />
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

export default About;
