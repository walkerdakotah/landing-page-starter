import React from "react";
import "./WhatHappens.scss";

const WhatHappens = () => (
  <div className="container--what-happens">
    <div className="container--ruler">
      <div className="what-happens__content">
        <div className="what-happens__title font-heavy">
          What Happens When I Call?
        </div>
        <ul className="what-happens__list">
          <li className="what-happens__list-item phone">
            <h3 className="what-happens__list-item--title font-heavy">
              We'll Listen.
            </h3>
            <p className="what-happens__list-item--content">
              Your Treatment Consultant will complete a 15-30 minute
              confidential clinical evaluation of you or your loved one’s
              addiction history and behavioral health issues (anxiety disorders,
              depression, bipolar disorder, etc.). This evaluation is absolutely
              free, and you are under no obligation to seek treatment.
            </p>
          </li>
          <li className="what-happens__list-item check">
            <h3 className="what-happens__list-item--title font-heavy">
              We'll verify your insurance and help you choose a facility.
            </h3>
            <p className="what-happens__list-item--content">
              We’ll quickly verify your insurance information over the phone and
              discuss co-pays and payment options, then match you with the
              facility that best meets your clinical and financial needs.
            </p>
          </li>
          <li className="what-happens__list-item heart">
            <h3 className="what-happens__list-item--title font-heavy">
              We’ll make sure you get the help you need.
            </h3>
            <p className="what-happens__list-item--content">
              {" "}
              Your Treatment Consultant will stay in contact with you and/ or
              your family throughout the entire admissions process for a
              seamless transition into residential treatment, where you’ll begin
              your recovery journey in a supportive, healing environment with a
              'whole person' approach.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default WhatHappens;
