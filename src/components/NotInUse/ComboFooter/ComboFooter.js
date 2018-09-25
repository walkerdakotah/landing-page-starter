import React from "react";
import ContactFooter from "./ContactFooter";
import BrandedFooter from "./BrandedFooter";

const ComboFooter = () => (
  <section className="content__section bg-blue-700 font-white ">
    <div className="content__section--content combo-col-row">
      <ContactFooter />
      <BrandedFooter />
    </div>
  </section>
);

export default ComboFooter;
