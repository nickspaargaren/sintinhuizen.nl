import React, { ReactElement } from 'react';

type VimeoVideoProps = {
  title: string,
  url: string
}

const VimeoVideo = ({ title, url }: VimeoVideoProps): ReactElement => (
  <>
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src={url}
        allow="autoplay; fullscreen; picture-in-picture"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maxHeight: 'calc( 100vh - 200px )',
        }}
        frameBorder="0"
        title={title}
      />
    </div>
    <script src="https://player.vimeo.com/api/player.js" />
  </>
);

export default VimeoVideo;
