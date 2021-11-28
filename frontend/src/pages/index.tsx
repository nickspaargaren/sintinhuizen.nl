import { graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import gebouwen from '../assets/images/gebouwen.svg';
import sinterklaas from '../assets/images/sinterklaas.svg';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Fotoalbum from '../components/Fotoalbum';
import Layout from '../components/Layout';
import useFotoalbum from '../hooks/useFotoalbum';

const StyledHeader = styled.div`

  background-color: #4a6091;
  background-image: url(${gebouwen});
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 825px 175px;
  max-width: 100%;
  min-height: inherit;

  .headertekst {display: flex; flex-direction: column;}
  .headertekst h2 strong {white-space: nowrap;}
  .headertekst > div {margin-bottom: 20px;}
  .headertekst > img {margin: auto auto 0 0; max-width: 300px;}

  .illustratie {display: flex; flex-direction: column;}
  .illustratie img {margin-top: auto; max-height: 80vh; width: 100%;}


  @media screen and (max-width: 768px) {
    .headertekst {flex-direction: column-reverse;}
    .headertekst > div {margin-bottom: auto;}
    .headertekst > img {margin-bottom: 20px;}

    .headertekst > div .knop {font-size: 12px;}

    .illustratie img {max-height: 300px;}
  }
`;

const StyledAankomst = styled.div`

.brief {
  background-color: #fff;
  border: 2px solid #f1cb19;
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  color: #333;
  padding: 10px 30px 10px;
  transform: perspective(3000px) rotateY(19deg) rotateX(4deg) rotate(-1deg);
}

.brief h3 {color: #c32c2b}

.afbeelding {
  background: rgba(255,255,255,.7);
  box-shadow: 0 10px 39px -5px rgba(0,0,0,.2);
  box-sizing: border-box;
  line-height: 0;
  margin: 0 0 30px;
  overflow: hidden;
  padding: 3px;
  position: relative;
  text-align: center;
  transform: rotate(-2deg);
  width: 100%;
}

.tekst {
  background-color: #fff; 
  border: 2px solid #f1cb19;
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  color: #333;
  padding: 20px;
  transform: perspective(3000px) rotateY(19deg) rotateX(4deg) rotate(-1deg);}

  @media screen and (max-width: 768px) {
    .brief, .tekst {transform: none;}
  }
`;

export const pageQuery = graphql`
query {
  berichtsint: markdownRemark(fileAbsolutePath: { regex: "/bericht-sint.md/"}) {
    html
  }
  terugblik: markdownRemark(fileAbsolutePath: { regex: "/terugblik.md/"}) {
    html
  }
}
`;

type HomeProps = {
  data: {
    berichtsint: {
      html
    }
    terugblik: {
      html
    }
  }
}

const Home = ({ data }: HomeProps): ReactElement => {
  const [ fotos2021, fotos2020, fotos2019, tekeningen ] = useFotoalbum();

  const { berichtsint: { html: berichtSint } } = data;
  const { terugblik: { html: terugblik } } = data;

  return (
    <Layout title="Home" description="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!">
      <section>
        <StyledHeader className="grid-2x">
          <div className="headertekst">
            <div>
              <h1>
                <strong>Aankomst</strong>
                {' '}
                <br />
                <span>Sint Nicolaas</span>
                {' '}
                <br />
                <small>in</small>
                {' '}
                <strong>Huizen</strong>
                {' '}
                <span style={{ whiteSpace: 'no-wrap' }}>13 november 2021</span>

              </h1>

              <StaticImage src="../assets/images/pakjesboot-sint-huizen-2021.jpg" alt="Sint en pieten op de boot" />

            </div>
            {/* <img src={logo} alt="Logo" style={{ width: '300px', height: '195px' }} loading="lazy" /> */}
          </div>
          <div className="illustratie">
            <div style={{ textAlign: 'right' }}><Button title="Klik hier voor de film" url="/video" /></div>

            <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
          </div>
        </StyledHeader>
      </section>
      <section>
        <StyledAankomst>
          <h2 style={{ textAlign: 'center', margin: '0px 0 40px' }}>
            Activiteiten Sint Nicolaas
            {' '}
            <strong>2021</strong>
            {' '}
            in Huizen
          </h2>

          <div className="grid-3x">
            <div className="brief">
              <div dangerouslySetInnerHTML={{ __html: terugblik }} />
            </div>
            <div>
              <div className="afbeelding">
                <StaticImage src="../assets/images/sint-en-pieten-op-pakjesboot.jpg" alt="Sint en pieten op de boot" />
              </div>
              <div className="tekst">
                De Sint bezoekt het winkelcentrum Hart van Huizen in het Oude Dorp. Op
                {' '}
                <OutboundLink href="https://hartvanhuizen.nl" rel="noopener noreferrer" target="_blank">HartvanHuizen.nl</OutboundLink>
                {' '}
                kun je hier alles over lezen.
              </div>
            </div>
            <div>
              <div className="afbeelding">
                <StaticImage src="../assets/images/sint-op-kade.jpg" alt="Sint op de kade in de haven van Huizen" />
              </div>
              <div className="tekst">
                Op zaterdag 27 november 2021 bezocht de Sint het winkelcentrum Oostermeent. Zie
                {' '}
                <OutboundLink href="https://www.winkelcentrumoostermeent.nl" rel="noopener noreferrer" target="_blank">Winkelcentrumoostermeent.nl</OutboundLink>
              </div>
            </div>
          </div>
        </StyledAankomst>
      </section>

      <section className="fotos">
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Foto&apos;s van de aankomst op
            {' '}
            <strong>13 november</strong>
            {' '}
            2021
          </h3>
          <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
          <Fotoalbum fotos={fotos2021} />
        </div>
      </section>

      <section>
        <div className="grid-2x vertical-align-middle">
          <div>
            <h2>De intocht gezien vanaf het water</h2>
            <p>Er gebeurde veel in de Haven waar iedereen wachtte op de komst van Sint Nicolaas en de Pieten. Maar ook op het water gebeurde er veel. Een vloot schepen wachtte de Sint op en bracht hem naar de haven. De film van Elles Schipper van Waveren geeft hiervan een goed voorbeeld.</p>
          </div>
          <div>

            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/650779183?h=8770fcab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                }}
                frameBorder="0"
                title="Stichting Intocht Sint Nicolaas Huizen Intocht 2021"
              />

            </div>
            <script src="https://player.vimeo.com/api/player.js" />

            <p><small>De film is van Elles Schipper van Waveren</small></p>
          </div>

        </div>
      </section>

      <section className="fotos">
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Foto&apos;s van de aankomst op
            {' '}
            <strong>14 november</strong>
            {' '}
            2020
          </h3>
          <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
          <Fotoalbum fotos={fotos2020} />
        </div>
      </section>

      <section className="fotos">
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Foto&apos;s van de intocht
            {' '}
            <strong>2019</strong>
          </h3>
          <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
          <Fotoalbum fotos={fotos2019} />
        </div>
      </section>

      <section className="bericht">
        <div className="grid-2x">

          <div dangerouslySetInnerHTML={{ __html: berichtSint }} />

          <div>
            <div style={{
              textAlign: 'center', position: 'sticky', top: '0', height: '100vh', display: 'flex',
            }}
            >

              <StaticImage
                style={{ margin: 'auto', width: '100%', position: 'relative' }}
                src="../assets/images/kluspiet-2021.jpg"
                alt="Intocht Sinterklaas"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fotos">
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Bedankt kinderen voor deze
            {' '}
            <strong>prachtige tekeningen</strong>
            !
          </h3>
          <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
          <Fotoalbum fotos={tekeningen} />
          <StaticImage
            style={{
              margin: '40px auto 0', width: '100%', display: 'block', position: 'relative', maxWidth: '700px',
            }}
            src="../assets/images/sint-bedankt.JPEG"
            alt="Sint bedankt"
          />
        </div>
      </section>

      <Footer />

    </Layout>
  );
};
export default Home;
