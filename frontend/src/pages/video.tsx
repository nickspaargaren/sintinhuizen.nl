import React, { ReactElement } from 'react';

import Button from '../components/Button';
import Layout from '../components/Layout';
import VimeoVideo from '../components/VimeoVideo';

const Video = (): ReactElement => (

  <Layout title="404" description="404">
    <section>
      <div>

        <div style={{ textAlign: 'right' }}><Button title="Terug naar de website" url="/" /></div>

        <VimeoVideo title="Stichting Intocht Sint Nicolaas Huizen Intocht 2021" url="https://player.vimeo.com/video/650779183?h=8770fcab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      </div>
    </section>
  </Layout>

);

export default Video;
