import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function Shed() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/project1.jpg"
          })`,
        }}
      >
        <a href="/Blog">
          <button>Back</button>
        </a>

        <h1>Shed Construction</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container blog_big_container">
          <p>
            A shed is typically a simple, single-story roofed structure in a
            back garden or on an allotment that is used for storage, hobbies, or
            as a workshop. Sheds vary considerably in their size and complexity
            of construction, from simple open-sided ones, these are designed to
            cover bicycles or garden items to large wood-framed structures with
            shingled roofs, windows, and electrical outlets. These are basically
            used on farms or in industry in large structures. The main types of
            shed construction are metal sheathing over a metal frame, plastic
            sheathing and frame, all-wood construction (the roof may be asphalt
            shingled or sheathed in tin), and vinyl-sided sheds built over a
            wooden frame.
          </p>

          <p>
            Small sheds may include a wooden or plastic floor, during more
            permanent ones which may be built on a concrete pad or foundation.
            Sheds may be lockable to deter theft or entry by children, domestic
            animals, wildlife, etc.A culture of shed enthusiasts exists in
            several countries for people who enjoy building sheds and spending
            time in them for relaxation. In Australia and New Zealand there are
            magazines called The Shed, an association for shed hobbyists (the
            Australian Men's Shed Association), and a book entitled Men and
            Sheds. In 2020 the company Shed Hub was created as a platform for
            shed enthusiasts to learn about products and to foster a culture
            around sheds in the United States. The simplest and least-expensive
            sheds are available in kit form. These kits are designed for regular
            people to be able to assemble themselves using commonly available
            tools (e.g., screwdriver). Both shed kits and DIY (do-it-yourself)
            plans are available for wooden and plastic sheds.
          </p>

          <p>
            Sheds are used to store home and garden tools and equipment such as
            lawn tractors, and gardening supplies. In addition, sheds can be
            used to store items that are not suitable for indoor storage, such
            as petrol (gasoline), pesticides, or herbicides. For homes with
            small gardens or modest storage needs, there are several types of
            very small sheds. The sheds not only use less ground area but also
            have a low profile less likely to obstruct the view or clash with
            the landscaping.
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

export default Shed;
