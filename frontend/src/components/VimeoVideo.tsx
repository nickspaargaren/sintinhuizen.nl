import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledVimeoVideo = styled.div`
  padding-top: 56.25%;
  position: relative;

  iframe {
    height: 100%;
    left: 0;
    max-height: calc( 100vh - 200px );
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

type VimeoVideoProps = {
  title: string,
  url: string
}

const VimeoVideo = ({ title, url }: VimeoVideoProps): ReactElement => (
  <StyledVimeoVideo>
    <iframe
      src={url}
      allow="autoplay; fullscreen; picture-in-picture"
      frameBorder="0"
      title={title}
    />
  </StyledVimeoVideo>
);

export default VimeoVideo;
