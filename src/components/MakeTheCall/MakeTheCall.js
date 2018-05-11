import React from "react";
import "./MakeTheCall.scss";

const MakeTheCall = () => (
  <div className="container--make-the-call">
    <div className="container--ruler">
      <div className="make-the-call__content">
        <div className="make-the-call__title font-light">
          Make the call now. We’ll handle the rest.
        </div>
        <div className="make-the-call__content--whole">
          <div className="make-the-call__content--half half--one">
            <div className="half--title font-blue blue-bottom font-heavy">
              For You.
            </div>
            <div className="half--body font-light">
              Congratulations on making the first step towards recovery. We
              offer a complete spectrum of treatment based on your individual
              needs. Your individualized addiction plan is customized according
              to the addiction severity, presence of a co-occurring mental
              health disorder, and your unique needs.
            </div>
          </div>
          <div className="make-the-call__content--half half--two">
            <div className="half--title font-teal teal-bottom font-heavy">
              For Someone You Care About.
            </div>
            <div className="half--body font-light">
              American Addiction Centers views addiction as a disease that
              touches all members of the family in some way. We believe the
              disease of addiction affects each family member at the same level
              as it does the individual “just differently” therefore, we treat
              the whole family system. In addition to offering on-site family
              therapy sessions and intensive workshops, our family program is
              offered online and via telephone conference. Our family program
              uses the Systemic Family Intervention Model developed by Wayne
              Raiter, MA, LICSW.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MakeTheCall;
