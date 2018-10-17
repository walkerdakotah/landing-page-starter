import React from 'react';
import { project } from '../../lib/project-config.js';

export default function SalesforceHiddenInputs() {
  return (
    <div>
      <input name="oid" type="hidden" value="00DG0000000CLl1" />
      <input name="retURL" type="hidden" value={`https://${project.url}/thank-you-2/`} />
      <input id="lead_source" name="lead_source" type="hidden" />
      <input id="OwnerId" name="OwnerId" type="hidden" value="00GG0000001MB0uMAG" />
      <input id="recordType" name="recordType" type="hidden" value="012G0000001QDubIAG" />
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
    </div>
  )
}


