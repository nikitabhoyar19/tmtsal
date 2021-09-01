import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function Building() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/project2.jpg"
          })`,
        }}
      >
        <a href="/Blog">
          <button>Back</button>
        </a>

        <h1>Building Construction</h1>
      </div>

      {/* ********** Building description container *********** */}
      <div className="Product_section">
        <div className="Product_container blog_big_container">
          <p>
            Building construction is also known as construction, where these
            modern techniques are adopted in the industries which involves
            erection of structures, basically those who provide shelter.
            Building construction is an ancient human activity which began
            purely functional need to control the environment to moderate the
            effects of climate. Having a shelter comes in first place for every
            person whether he is rich or poor. Constructed shelters were one
            means by which human beings were able to adapt themselves to a wide
            variety of climates and become a global species. In ancient times
            humans used to make temporary shelter for themselves so that they
            could protect themselves from drastic climatic changes. Human
            shelters were at first very simple and perhaps lasted only a few
            days or months. Over time, however, even temporary structures
            evolved into such highly refined forms as the igloo. Gradually more
            durable structures began to appear, particularly after the emergence
            of agriculture, when the people began to stay in a place for a
            longer period. The first shelters were residences , but later other
            functions, such as food storage and ceremony, were housed in
            separate buildings. Some structures began to have symbolic as well
            as functional value, marking the beginning of the distinction
            between architecture and building.{" "}
          </p>

          <p>
            The history of building is marked by a number of trends. One is the
            increasing durability of the materials used. Early building
            materials were perishable, such as leaves, branches, and animal
            hides. Later, more durable natural materials—such as clay, stone,
            and timber—and, finally, synthetic materials—such as brick,
            concrete, metals, and plastics—were used. Another is a quest for
            buildings of ever greater height and span; this was made possible by
            the development of stronger materials and by knowledge of how
            materials behave and how to exploit them to greater advantage. A
            third major trend involves the degree of control exercised over the
            interior environment of buildings: increasingly precise regulation
            of air temperature, light and sound levels, humidity, odours, air
            speed, and other factors that affect human comfort has been
            possible. Yet another trend is the change in energy available to the
            construction process, starting with human muscle power and
            developing toward the powerful machinery used today.
          </p>

          <p>
            The present state of construction is complex. There is a wide range
            of building products and systems which are aimed primarily at groups
            of building types or markets. The design process for buildings is
            highly organized and draws upon research establishments that study
            material properties and performance, code officials who adopt and
            enforce safety standards, and design professionals who determine
            user needs and design a building to meet those needs. The
            construction process is also highly organized; it includes the
            manufacturers of building products and systems, the craftsmen who
            assemble them on the building site, the contractors who employ and
            coordinate the work of the craftsmen, and consultants who specialize
            in such aspects as construction management, quality control, and
            insurance.
          </p>
        </div>
      </div>

      {/* ************* second video section and Form ************ */}
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

export default Building;
