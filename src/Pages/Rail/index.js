import React from "react";
import GetTouchForm from "../../Components/GetTouchForm";

function Rail() {
  return (
    <>
      {/* ************* banner *************  */}
      <div
        className="home_banner_first"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Assets/rail.jpg"
          })`,
        }}
      >
        <a href="/Blog">
          <button>Back</button>
        </a>

        <h1>Rail Construction</h1>
      </div>

      {/* **********  *********** */}
      <div className="Product_section">
        <div className="Product_container blog_big_container">
          <p>
            Unlike other types of road building, such as highway guardrail
            construction, before starting the railway construction, the
            materials such as steel rails, rail fasteners and the ballasts need
            to be prepared in advance. The surveying work before railway
            construction should also be completed before construction. After a
            simple cleaning of the roadbed,the railway construction can be
            started. For the first ballast laying of railway track construction,
            the bottom layer has to be laid, mainly the ballast belt laid in the
            area below the two rails. After that the remaining ballasts are
            transported by trains after the railway line is placed.
          </p>
          <p>
            Due to the current railway track construction mostly using concrete
            sleepers, the weight is relatively heavy, all need to use machinery
            for transport. The railway track construction machine used to lifts
            the concrete sleeper from the rear container, transfers it to the
            front cantilever, falls into position, adjusts the position and
            places it on the ballast. After each railway sleeper is laid, the
            machine moves forward a section of distance, so cycle to complete
            the railway sleeper laid.
          </p>

          <p>
            Railroad fasteners, such as iron plates, track bolts, rail clips,
            etc., will be pre-reinforced on the rail sleeper at this time, and
            will be reinforced again after the rail is placed.Track laying will
            still use the railway track construction machine. The machine lifts
            the steel rail section up and moves it to the iron plate above the
            railway sleeper. After adjusting the position, the railway track
            machine put down the rail and continued to lay the next section of
            rail. At this time, there will be workers operating equipment to
            fasten the rail fasteners, so that the rail is fixed. Ballasting
            work includes transporting, uploading, tamping, ballast trimming and
            other operations. All these processes can be completed by using a
            ballast-laying machine with comprehensive working performance. After
            track laying and ballasting, the rail sections need to be fixed to
            form a stable line. Fish plates and fish bolts are usually used to
            connect rail sections of ordinary railways. For high-speed railway
            lines, the thermite welding method is usually used to link rail
            sections. Finally, the large road maintenance machine will carry out
            mechanical work and carry out final arrangement and inspection of
            the track.
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

export default Rail;
