import React, { useState } from "react";
import "./Carriers.css";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";

function Carriers() {
  return (
    <>
      <div className="Information_Section">
        {/*  */}
        <div>
          <h2>The Right Move</h2>
          <p>
            Challenge the conventional, defy what’s logical, and achieve what’s
            impossible. Lets plan our growth together.
          </p>
          <p>
            Kamdhenu today is a leading player in the Steel and Infrastructure
            solutions industry and has invested constantly in the quality of its
            human resources. The search for the best personal profiles on a
            broad scale is a constant commitment, which has expanded continually
            over time. Whether you are an experienced professional or just
            embarking on your career, you owe it to yourself to consider a
            career with Kamdhenu. The possibilities here are endless.
          </p>
          <p>
            Talent here is only the starting point; a stimulating and
            challenging work atmosphere ensures your well being at Kamdhenu. As
            part of our team, you will experience global career
            opportunities...personal and professional growth...challenging and
            exciting work...being a part of a dedicated and innovative
            team...and outstanding rewards and recognition. You will be
            constantly learning. Your ideas will be welcomed in an atmosphere of
            collaboration and teamwork regardless of your position in the
            company. Your individuality will be recognized. You will be
            encouraged to be yourself.
          </p>
          <p>
            At Kamdhenu we believe, your future is our future. So come, let’s
            shape it together. Together we will progress, for sure.
          </p>
        </div>
      </div>
    </>
  );
}

export default Carriers;
