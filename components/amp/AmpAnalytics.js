import React from "react";

import { AmpIncludeAmpAnalytics } from "./AmpCustomElement";

export default props => (
  <>
    <AmpIncludeAmpAnalytics />
    <amp-analytics type={props.type}>
      {props.script && (
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props.script)
          }}
        />
      )}
    </amp-analytics>
  </>
);
