import type { GatsbySSR } from "gatsby";
import React from 'react'

export const onRenderBody: GatsbySSR["onRenderBody"] = (
  { setPostBodyComponents },
) => {
  setPostBodyComponents(
    [
      <script key="plausible" defer data-domain="sintinhuizen.nl" src="https://plausible.io/js/plausible.js"></script>,
    ],
  );
};
