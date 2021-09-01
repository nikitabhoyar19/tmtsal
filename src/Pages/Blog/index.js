import React, { useState, useEffect } from "react";
import "./Blog.css";
import { useHistory } from "react-router-dom";
import GetTouchForm from "../../Components/GetTouchForm";
import { db } from "../../firebase";

function Blog() {
  const [Blog, setBlog] = useState(null);

  useEffect(() => {
    db.collection("Blog")
      .get()
      .then((docs) => {
        const Blog = [];
        docs.forEach((doc) => {
          Blog.push(doc.data());
        });
        setBlog(Blog);
      });
  }, []);

  const history = useHistory();

  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="other_banner_second every_banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/banner7.png"
          })`,
        }}
      >
        <h1>Blogs</h1>

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
      </div>

      {/* ********** blog container *********** */}
      <div className="Product_section blog_Section">
        {Blog
          ? Blog.map((blog) => (
              <div className="Main_blog_card">
                <img src={blog.blog_img} alt="" />
                {/* inner product details */}
                <div className="inner_main_blog">
                  <h2>{blog.blog_title}</h2>
                  <p>{blog.description}</p>
                  <button
                    className="search_btn"
                    type="submit"
                    onClick={() => history.push(`${blog.blog_link}`)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))
          : null}
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

export default Blog;
