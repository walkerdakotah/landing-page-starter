import React from 'react';

import { facilityInfo } from '../../lib/project-config.js';

const Form = () => (
  <form
    className="mktgform md:m-auto md:max-w-1/2 lg:w-auto"
    id="ppcPage"
    method="POST"
    action="https://webto.Salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
  >
    <input name="oid" type="hidden" value="00DG0000000CLl1" />
    <input
      required
      id="first_name"
      className="container p-5  mb-10 "
      placeholder="First Name *"
      maxLength="40"
      name="first_name"
      type="text"
    />

    <input
      required
      id="last_name"
      className="container p-5  mb-10 "
      placeholder="Last Name *"
      maxLength="40"
      name="last_name"
      size="20"
      type="text"
    />
    <input
      required
      id="phone"
      className="container p-5 mb-10"
      placeholder="Phone *"
      name="phone"
      size="20"
      type="text"
    />

    <textarea
      required
      className="container p-5  mb-10 "
      name="description"
      rows="6"
      cols="40"
      placeholder="What can we help you with? *"
    />

    <input
      name="retURL"
      type="hidden"
      value={`https://${facilityInfo.url}/thank-you-2/`}
    />
    <input
      id="lead_source"
      name="lead_source"
      className="lead_source"
      type="hidden"
    />
    <input
      id="OwnerId"
      name="OwnerId"
      type="hidden"
      value="00GG0000001MB0uMAG"
    />
    <input
      id="recordType"
      name="recordType"
      type="hidden"
      value="012G0000001QDubIAG"
    />
    <input id="00NG000000F5Zwk" type="hidden" name="00NG000000F5Zwk" />
    <input id="00NG000000EZS9c" type="hidden" name="00NG000000EZS9c" />
    <input id="00NG000000F5Zx9" type="hidden" name="00NG000000F5Zx9" />
    <input id="00NG000000F5Zy2" type="hidden" name="00NG000000F5Zy2" />
    <input id="00NG000000F5ZyC" type="hidden" name="00NG000000F5ZyC" />
    <input id="00NG000000F5ZyH" type="hidden" name="00NG000000F5ZyH" />
    <input id="00NG000000F5Pip" type="hidden" name="00NG000000F5Pip" />
    <input id="00NG000000F5Zwp" type="hidden" name="00NG000000F5Zwp" />
    <input id="00NG000000EZK7K" type="hidden" name="00NG000000EZK7K" />
    <input id="00NG000000CrJNi" type="hidden" name="00NG000000CrJNi" />
    <input id="00NG000000F1UD4" type="hidden" name="00NG000000F1UD4" />
    <input id="00NG000000F5Zxx" type="hidden" name="00NG000000F5Zxx" />
    <button
      className="mb-10 xl:mb-20 px-40 py-10 font-300 text-18 bg-grey-100 hover:bg-navy text-navy hover:text-grey-100 border-navy border-2 rounded-full"
      type="submit"
    >
      Contact Me
    </button>
  </form>
);
export default Form;
