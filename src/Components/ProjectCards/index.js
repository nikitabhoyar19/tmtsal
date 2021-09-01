import React, { useEffect, useState } from "react";
import "./ProjectCards.css";
import Slider from "react-slick";
import { db } from "../../firebase";

function ProjectCards() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    db.collection("projects")
      .get()
      .then((docs) => {
        const projects = [];
        docs.forEach((doc) => {
          projects.push(doc.data());

          //   console.log(doc.data());
        });
        setProjects(projects);
      });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
                      // autoplay
                      autoplay: true,
                      autoplaySpeed: 3500,
                      cssEase: "linear",    
         
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
                      // autoplay
                      autoplay: true,
                      autoplaySpeed: 3500,
                      cssEase: "linear",    
         
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
                      // autoplay
                      autoplay: true,
                      autoplaySpeed: 3500,
                      cssEase: "linear",             
        },
      },
    ],
  };

  return (
    <>
      <div className="Pro_Section">
        <Slider {...settings}>
          {projects
            ? projects.map((project) => (
                <div>
                    <div
                      className="proj_card"
                      style={{
                        backgroundImage: `url(${project.projectImgUrl})`,
                      }}
                    >
                      {/* inner card */}
                      <a href="/Blog">
                      <div className="proj_inner_sec">
                        <h2>{project.ProjectTitle}</h2>
                        <p>{project.ProjectDesc}</p>
                        <a href={project.ProjectLink}>
                          <small>Read More</small>
                        </a>
                      </div>
                      </a>
                    </div>
                </div>
              ))
            : null}
        </Slider>
      </div>
    </>
  );
}

export default ProjectCards;
