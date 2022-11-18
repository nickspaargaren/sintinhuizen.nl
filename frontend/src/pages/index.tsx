import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import gebouwen from '../assets/images/gebouwen.svg';
import sinterklaas from '../assets/images/sinterklaas.svg';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import PhotoGallery from '../components/PhotoGallery';
import VimeoVideo from '../components/VimeoVideo';
import usePhotoGallery from '../hooks/usePhotoGallery';

const StyledHeader = styled.div`

  background-color: #4a6091;
  background-image: url(${gebouwen});
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 825px 175px;
  max-width: 100%;
  min-height: inherit;

  .headerintro {display: flex; flex-direction: column;}
  .headerintro h2 strong {white-space: nowrap;}
  .headerintro > div {margin-bottom: 20px;}
  .headerintro > .intro {margin: auto 0;}

  .illustration {display: flex; flex-direction: column;}
  .illustration img {margin-top: auto; max-height: 80vh; width: 100%;}


  @media screen and (max-width: 768px) {
    .illustration img {max-height: 300px;}
  }
`;

const StyledAankomst = styled.div`

.letter {
  background-color: #fff;
  border: 2px solid #f1cb19;
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  color: #333;
  padding: 10px 30px 10px;
  transform: perspective(3000px) rotateY(11deg) rotateX(4deg) rotate(-1deg);
}

.letter h3 {color: #c32c2b}

.rotatedImage {
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
  transform: perspective(3000px) rotateY(11deg) rotateX(4deg) rotate(-1deg);}

  @media screen and (max-width: 768px) {
    .letter, .tekst {transform: none;}
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
  const [ photos2021, photos2022, drawings ] = usePhotoGallery();

  const { berichtsint: { html: berichtSint } } = data;
  const { terugblik: { html: terugblik } } = data;

  return (
    <Layout title="Home" description="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!" canonical="https://www.sintinhuizen.nl">
      <>
        <section>
          <StyledHeader className="grid-2x">
            <div className="headerintro">
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
                  <span>12 november 2022</span>
                </h1>

              </div>
              <div className='intro'>
                <h2>Hallo kinderen,</h2>
                <p>Zaterdag 12 november 2022 kom ik weer naar Huizen. Ik verheug me er nu al op jullie te zien bij de haven in het Nautisch Kwartier.</p>
                <p>Kom je ook? Het feest begint om 13:30 uur!</p>
                <p>Hartelijke groet, mede namens de 30 pieten die met mij meekomen,</p>
                <p className="signature">Sint Nicolaas</p>
              </div>
            </div>
            <div className="illustration">
              <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
            </div>
          </StyledHeader>
        </section>
        <section>
          <div>
            <VimeoVideo title="Stichting Intocht Sint Nicolaas Huizen Intocht 2021" url="https://player.vimeo.com/video/650779183?h=8770fcab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
          </div>
        </section>
        <section>
          <StyledAankomst>
            <h2 style={{ textAlign: 'center', margin: '0px 0 40px' }}>
            Activiteiten Sint Nicolaas
              {' '}
              <strong>2022</strong>
              {' '}
            in Huizen
            </h2>

            <div className="grid-3x">
              <div>
                <div className="letter">
                  <div dangerouslySetInnerHTML={{ __html: terugblik }} />
                </div>
              </div>
              <div>
                <div className="rotatedImage">
                  <StaticImage src="../assets/images/sint-en-pieten-op-pakjesboot.jpg" alt="Sint en pieten op de boot" />
                </div>
                <div className="tekst">
                  <strong>De activiteiten van Hart van Huizen 2022:</strong>
                  <ul>
                    <li>Vrijdag 2 december 17:00 - 21:00 uur, Pietenband met pietjes</li>
                    <li>Zaterdag 3 december 13:00 - 17:00 uur, met Sint en Hoofdpieten van 13:00 - 14:00 uur, Pietenband met pietjes</li>
                    <li>Maandag 5 december 13:00 - 17:00 uur, Pietenband met pietjes</li>
                  </ul>
                  Er is wederom een Sinterklaaskleurplaat om in te leveren en een prijsje mee te winnen.
                  Op de website <a href="https://hartvanhuizen.nl" rel="noopener noreferrer" target="_blank">HartvanHuizen.nl</a> kun je hier alles over lezen.
                </div>
              </div>
              <div>
                <div className="rotatedImage">
                  <StaticImage src="../assets/images/poster-sinterklaas-oostermeent.jpeg" alt="Sint op de kade in de haven van Huizen" />
                </div>
                <div className="tekst">
                  De Sint bezoekt ook het winkelcentrum Oostermeent. Voor meer informatie zie de website <a href="https://www.winkelcentrumoostermeent.nl" rel="noopener noreferrer" target="_blank">Winkelcentrumoostermeent.nl</a>
                </div>
              </div>
            </div>
          </StyledAankomst>
        </section>

        <section className="photos">
          <div>
            <h3 style={{ textAlign: 'center' }}>
            Foto&apos;s van de aankomst op
              {' '}
              <strong>12 november</strong>
              {' '}
            2022
            </h3>
            <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
            <PhotoGallery images={photos2022} />
          </div>
        </section>

        <section className="photos">
          <div>
            <h3 style={{ textAlign: 'center' }}>
            Foto&apos;s van de aankomst op
              {' '}
              <strong>13 november</strong>
              {' '}
            2021
            </h3>
            <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
            <PhotoGallery images={photos2021} />
          </div>
        </section>

        <section>
          <div className="grid-2x vertical-align-middle">
            <div>
              <h2>De intocht gezien vanaf het water</h2>
              <p>Er gebeurde veel in de Haven waar iedereen wachtte op de komst van Sint Nicolaas en de Pieten. Maar ook op het water gebeurde er veel. Een vloot schepen wachtte de Sint op en bracht hem naar de haven. De film van Elles Schipper van Waveren geeft hiervan een goed voorbeeld.</p>
            </div>
            <div>

              <VimeoVideo title="Intocht vanaf het water" url="https://player.vimeo.com/video/650812118?h=8714d401f1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />

              <p><small>De film is van Elles Schipper van Waveren</small></p>
            </div>

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
                  src="../assets/images/sint-en-piet-met-burgemeester.jpg"
                  alt="Sint en piet met burgemeester"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="photos">
          <div>
            <h3 style={{ textAlign: 'center' }}>
            Bedankt kinderen voor deze
              {' '}
              <strong>prachtige tekeningen</strong>
            !
            </h3>
            <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
            <PhotoGallery images={drawings} />
            <StaticImage
              style={{
                margin: '40px auto 0', width: '100%', display: 'block', position: 'relative', maxWidth: '700px',
              }}
              src="../assets/images/bedankt-sint.jpeg"
              alt="Sint bedankt"
            />
          </div>
        </section>

        <Footer />
      </>
    </Layout>
  );
};
export default Home;
