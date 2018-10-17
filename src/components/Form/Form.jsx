import React from 'react'
import SalesforceHiddenInputs from './SalesforceHiddenInputs'
import { callRail } from '../../lib/project-config'
import { onlinePolicy } from '../../lib/globals';

export default function Form() {
  return (
    <div className="bg-grey-100 text-center px-8 py-12">
      <a className="" href={`tel:+1${callRail.phone}`}>
        <button className="btn btn-orange">
          Call {callRail.phone}
        </button>
      </a>
      <h4 className="p text-navy my-4">
        Prefer a call or email from us instead?
              </h4>
      <form
        className="mktgform flex flex-col items-center mx-auto"
        id="ppcPage"
        method="POST"
        action="https://webto.Salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        style={{ maxWidth: `270px` }}
      >
        <input
          required
          id="first_name"
          className="w-full p-5 mb-10 "
          placeholder="First Name *"
          maxLength="40"
          name="first_name"
          type="text"
        />
        <input
          required
          id="last_name"
          className="w-full p-5 mb-10 "
          placeholder="Last Name *"
          maxLength="40"
          name="last_name"
          size="20"
          type="text"
        />
        <input
          required
          id="phone"
          className="w-full p-5 mb-10"
          placeholder="Phone *"
          name="phone"
          size="20"
          type="text"
        />
        <SalesforceHiddenInputs />
        <button className="btn-sm btn-grey-100" type="submit">
          Contact Me
      </button>
      </form>
      <h4 className="p my-4">Insurance Accepted. Privacy Guaranteed.</h4>
      <p className="p3">We won’t sell your information and will treat your information in accordance with our{' '}<a href={onlinePolicy} target="blank">privacy policy</a>.</p>
    </div>
  );
}
