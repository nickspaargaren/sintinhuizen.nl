import type { GatsbySSR } from "gatsby";
import React from 'react'

export const onRenderBody: GatsbySSR["onRenderBody"] = (
  { setPostBodyComponents },
) => {
  setPostBodyComponents(
    [
      <script key="stats" defer data-domain="sintinhuizen.nl" data-api="/stats/api/event" src="/stats/js/script.js"></script>,
    ],
  );
};
