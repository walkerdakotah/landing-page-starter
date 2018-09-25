import React from "react";
import BackgroundImage from "/Users/dakotahwalker/Sites/landing-page-starter/src/assets/background-images/treatment-choice.jpg";

const background = {
  backgroundImage: `url(${BackgroundImage})`,
};

const iconStyle = {
  height: "18px",
  paddingLeft: "0.25rem",
};

const TreatmentChoice = () => (
  <section className="content__section no-pad">
    <div style={background} className="bg-chevron-down" />
    <div className="content__section--content content--banner text-center">
      <h1 className="font-gray-900 font-300">
        You have a choice on where you're treated.
      </h1>
      <ul className="content__list list--checklist text-left">
        <li className="content__list-item">
          We strive for Clinical Excellence. We treat the whole person, not just
          the addiction.
        </li>
        <li className="content__list-item">
          We work with you to help determine which level of care is right for
          you.
        </li>
        <li className="content__list-item">
          We own and operate multiple facilities across the U.S., giving you
          access to resources near you.
        </li>
        <li className="content__list-item">
          We respect and protect your privacy throughout the treatment process.
        </li>
        <li className="content__list-item">
          We work directly with your insurance company.
        </li>
        <li className="content__list-item">
          We know family is important, that's why we incorporate loved ones into
          the treatment process.
        </li>
        <li className="content__list-item">
          We want to help you get the treatment you need; we'll explore every
          option to find a facility that's just right for you.
        </li>
        <li className="content__list-item">
          We understand your environment can be toxic. We can help you travel
          for treatment.
        </li>
        <li className="content__list-item">
          We believe treatment doesn't end when you graduate. We've created a
          national alumni program, so you'll find friends in recovery no matter
          where you live.
        </li>
        <li className="content__list-item">
          We understand it might not have worked in the past. Thousands of AAC
          alums would agree we're different.
        </li>
        <li className="content__list-item">
          We believe that recovery is possible. Make this call, the last call.
        </li>
      </ul>
    </div>
  </section>
);

export default TreatmentChoice;
