import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function PowerPlant() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/project4.jpg"
          })`,
        }}
      >
        <a href="/Blog">
          <button>Back</button>
        </a>
        <h1>Power Plant Construction</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container blog_big_container">
          <p>
            Whether it is new construction or replacing equipment during an
            outage, today’s power plant construction projects place great
            emphasis on safety, on-time delivery, and budget. It doesn't matter
            the size or scope, where these projects required a great deal of
            pre-planning and coordination in order to execute well and deliver
            these results. One type of construction is practiced, modular
            construction, can enable greater success in meeting these
            objectives.
          </p>

          <p>
            Modular construction consists of fabricating and pre-assembling
            equipment in a shop environment, then these are shipped as
            sub-assemblies to the construction site via rail, barge, or truck.
            Once they are delivered to the jobsite, then the sub-assemblies are
            bolted or welded together so that they can form the final piece of
            equipment. These are the contrast to traditional construction
            practices which involved shipping pieces of steel, fiberglass, or
            other materials to site, where they were fabricated and set up one
            piece at a time.
          </p>

          <p>
            Modular construction is not a new process. Modular construction has
            been applied to it for decades by other industries. For example,
            homebuilders have been pre-assembling walls and trusses in the
            factory, instead of shipping bundles of un-fabricated shuffle to the
            home site. This type of process is being applied to power plant
            equipment like heat recovery steam generators (HRSGs), cooling
            towers, turbines, boilers, air cooled condensers (ACCs),
            transformers, and other equipment. It could also include components
            like stairways, conveyors, piping, electrical and control systems.
            Several EPCs are leading the modularization effort, and have built
            power plants with this type of approach. Modular construction is a
            common practice found in other parts of the world, and has been
            slowly adopted in the US. There are many benefits to this type of
            construction practice, but it also introduces some challenges.
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

export default PowerPlant;
