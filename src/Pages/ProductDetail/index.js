import React from "react";
import "./ProductDetail.css";
import GetTouchForm from "../../Components/GetTouchForm";

function ProductDetail() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/proj1.png"
          })`,
        }}
      >
        <a href="/">
          <button>Back</button>
        </a>

        {/* //  onClick={history.push("/")} */}

        <h1>TMT BAR</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container blog_big_container">
          <p>
            As you know that the steel, metals have a bad reputation in matters
            of environment friendly products because some machines that cause
            harm to the environment are made up of metal but metal is a natural
            element which is found in earth. So we can resume the waste which
            comes from steel as steel produces rocky substances which most of
            the companies use in construction as cement. We use water heavily
            during the steel making process and this water is filled in various
            particles which can be removed through filtration and 98% of water
            can be recycled.{" "}
          </p>

          <p>
            {" "}
            By following our vision, we gained our customer’s trust by providing
            them good quality and safe products, eco-friendly products and by
            providing them with customized products and by our service. Now we
            are trusted by many of our customers and we will make sure to
            maintain their trust as our vision and mission is to satisfy our
            customers and provide them with the standard quality of products.
          </p>

          <p>
            We provide our product up to customer specification, we provide high
            tensile strength steel which is made up of various elements as we
            believe in achieving various properties like hardness, bearable at
            natural process disasters like earthquake and heat resistance.
          </p>
        </div>
      </div>
      {/* ********** Get In Touch ********** */}
      <div
        className="get_in_touch_section"
        style={{
          background: "#D6EAE5",
        }}
      >
        <GetTouchForm />
      </div>
    </>
  );
}

export default ProductDetail;
