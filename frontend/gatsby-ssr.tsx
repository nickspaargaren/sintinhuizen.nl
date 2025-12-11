import alfaSlabOneWoff2 from "@fontsource/alfa-slab-one/files/alfa-slab-one-latin-400-normal.woff2?url";
import courgetteWoff2 from "@fontsource/courgette/files/courgette-latin-400-normal.woff2?url";
import type { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
  setHtmlAttributes,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      as="font"
      type="font/woff2"
      href={alfaSlabOneWoff2}
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      as="font"
      type="font/woff2"
      href={courgetteWoff2}
      crossOrigin="anonymous"
    />,
  ]);
  setHtmlAttributes({
    lang: "nl",
  });
  setPostBodyComponents([
    <script
      key="stats"
      defer
      data-domain="sintinhuizen.nl"
      data-api="/stats/api/event"
      src="/stats/js/script.js"
    />,
  ]);
};
