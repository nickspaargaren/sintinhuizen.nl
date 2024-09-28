import React, { ReactElement } from "react";

type VimeoVideoProps = {
  title: string;
  url: string;
};

const VimeoVideo = ({ title, url }: VimeoVideoProps): ReactElement => (
  <iframe
    className="w-full aspect-video"
    src={url}
    allow="autoplay; fullscreen; picture-in-picture"
    frameBorder="0"
    title={title}
  />
);

export default VimeoVideo;
