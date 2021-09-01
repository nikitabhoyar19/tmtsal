import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function PEB() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/project3.jpg"
          })`,
        }}
      >
        <a href="/Blog">
          <button>Back</button>
        </a>

        <h1>PFB Construction</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container blog_big_container">
          <p>
            Pre Engineered Buildings (PEB) are the buildings which are
            engineered at a factory and assembled at site. These are also called
            steel structures. Built-up sections are fabricated at the factory of
            exact size, they are transported to site and assembled at site where
            they have bolted connections. This type of Structural Concept is
            generally used to build Industrial Buildings, Metro Stations,
            Warehouses etc.The adaptability of PEB in the place of Conventional
            Steel Building design concept resulted in many advantages, including
            economy & easier fabrication. These types of building structure can
            be finished internally to serve any functions that are actually
            helpful in low rise building design. Examples of Pre-Engineered
            Buildings are warehouses, Canopies, Factories, Bridges etc. During
            the 1960s, standardized engineering designs for buildings were first
            marketed as PEBs.
          </p>

          <p>
            {" "}
            Historically, the primary framing structure of a pre-engineered
            building is an assembly of I-shaped members, often referred to as
            I-beams. In pre-engineered buildings, the I beams used are usually
            formed by welding together steel plates to form the I section. The I
            beams are then field-assembled (e.g. bolted connections) to form the
            entire frame of the pre-engineered building. Some manufacturers
            taper the framing members (varying in web depth) according to the
            local loading effects. Larger plate dimensions are used in areas of
            higher load effects. Other forms of primary framing can include
            trusses, mill sections rather than three-plate welded, castellated
            beams, etc. Some choices of economic form can vary by depending on
            factors such as local capabilities (e.g. manufacturing,
            transportation, construction) and variations in material vs. labour
            costs.Typically, primary frames are 2D type frames (i.e. may be
            analyzed using two-dimensional techniques).
          </p>

          <p>
            Advances in computer-aided design technology, materials and
            manufacturing capabilities have assisted a growth in alternate forms
            of pre-engineered building such as the tension fabric building and
            more sophisticated analysis (e.g. three-dimensional) as is required
            by some building codes.Cold formed Z- and C-shaped members may be
            used as secondary structural elements to fasten and support the
            external cladding.Roll-formed profiled steel sheet, wood, tensioned
            fabric, precast concrete, masonry block, glass curtain wall or other
            materials may be used for the external cladding of the building.In
            order to accurately design a pre-engineered building, engineers
            consider the clear span between bearing points, bay spacing, roof
            slope, live loads, dead loads, collateral loads, wind uplift,
            deflection criteria, internal crane system and maximum practical
            size and weight of fabricated members. Historically, pre-engineered
            building manufacturers have developed pre-calculated tables for
            different structural elements in order to allow designers to select
            the most efficient I beams size for their projects. However, the
            table selection procedures are becoming rare with the evolution in
            computer-aided custom designs.While pre-engineered buildings can be
            adapted to suit a wide variety of structural applications, the
            greatest economy will be realized when utilising standard details.
            An efficiently designed pre-engineered building can be lighter than
            the conventional steel buildings by up to 30%. Lighter weight
            equates to less steel and a potential price savings in structural
            framework.
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

export default PEB;
