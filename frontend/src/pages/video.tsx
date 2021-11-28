import React, { ReactElement } from 'react';

import Button from '../components/Button';
import Layout from '../components/Layout';

const Video = (): ReactElement => (

  <Layout title="404" description="404">
    <section>
      <div>

        <div style={{ textAlign: 'right' }}><Button title="Home" url="/" /></div>

        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/650779183?h=8770fcab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
            title="Stichting Intocht Sint Nicolaas Huizen Intocht 2021"
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js" />
      </div>
    </section>
  </Layout>

);

export default Video;
