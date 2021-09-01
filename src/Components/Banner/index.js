import React, { Component } from "react";
import "./Banner.css";
import Slider from "react-slick";

export default class Banner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,

      // fade

      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: 0,

      // autoplay
      autoplay: true,
      autoplaySpeed: 2200,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          {/* 1st slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top6.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>
          {/* 2 slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top2.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>
          {/* 3 slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top3.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>
          {/* 4 slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top4.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>

          {/* 5th slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top5.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>

          {/* 6th slide */}
          <div className="">
            <div
              className="home_banner_first mobile_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top9.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>

          {/* 7th slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top7.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>

          {/* 8th slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/top8.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>

          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/banner15.jpg"
                })`,
              }}
            >
              <h1>The Power Of STEEL</h1>
              <p>
                With steel as our 'mettle', we're paving the building blocks of
                the future
                <b> THE PATHWAY TO TOMMORROW</b>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
