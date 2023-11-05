import { graphql, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import gebouwen from '../assets/images/gebouwen.svg';
import Button from '../components/Button';
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
  .illustration img {margin: auto auto 0 auto; max-height: 80vh; width: auto;}

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

.text {
  background-color: #fff; 
  border: 2px solid #f1cb19;
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  color: #333;
  margin-bottom: 20px;
  padding: 20px;
  transform: perspective(3000px) rotateY(11deg) rotateX(4deg) rotate(-1deg);}

  @media screen and (max-width: 768px) {
    .letter, .text {transform: none;}
  }
`;

export const pageQuery = graphql`
  query markdown {
    berichtsint: markdownRemark(fileAbsolutePath: { regex: "/bericht-sint.md/"}) {
      html
    }
    terugblik: markdownRemark(fileAbsolutePath: { regex: "/terugblik.md/"}) {
      html
    }
  }
`;

const Home = ({ data }: PageProps<Queries.markdownQuery>): ReactElement => {
  const [ photos2022, drawings ] = usePhotoGallery();

  const { berichtsint, terugblik } = data;

  return (
    <Layout>
      <>
        <section>
          <StyledHeader className="grid-2x">
            <div className="headerintro">
              <div>
                <h1>
                  <small>Laatste nieuws!</small>
                  {' '}
                  <br />
                  <strong>Sint Nicolaas</strong>
                  {' '}
                  <small>komt</small>
                  {' '}
                  <span>18 november 2023</span>
                  {' '}
                  <small>aan in</small>
                  {' '}
                  <strong>Huizen</strong>
                </h1>
                <p>Verderop kun je hier alles over lezen!<br />Hij brengt ook een Glutenvrije Piet mee!</p>

              </div>
            </div>
            <div className="illustration">
              <StaticImage
                src="../assets/images/sinterklaas.png"
                alt="Sinterklaas"
              />
              <h3><strong>Sint Niclolaas</strong> kijkt in het grote boek waarin staat welke cadeautjes de kinderen gevraagd hebben. Hij is erg zuinig op <strong>het boek</strong>, want als het kwijtraakt, weet hij niet waar de <strong>cadeautjes</strong> naartoe moeten!</h3>
            </div>
          </StyledHeader>
        </section>

        <section className="bericht">
          <div className="grid-2x">

            <div dangerouslySetInnerHTML={{ __html: berichtsint?.html || "" }} />

            <div>
              <div style={{
                textAlign: 'center', position: 'sticky', top: '0', width: '100%', height: '100vh', margin: 'auto', display: 'flex',
              }}
              >

                <StaticImage
                  style={{ margin: 'auto', width: '100%', height: '100%', position: 'relative' }}
                  src="../assets/images/sint-en-piet-op-kade.jpg"
                  alt="Sint en piet op de kade"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <StyledAankomst>
            <h2 style={{ textAlign: 'center', margin: '0px 0 40px' }}>
            Activiteiten Sint Nicolaas
              {' '}
              <strong>2023</strong>
              {' '}
            in Huizen
            </h2>

            <div className="grid-3x">
              <div>
                <div className="letter">
                  <div dangerouslySetInnerHTML={{ __html: terugblik?.html || "" }} />
                </div>
              </div>
              <div>
                <div className="rotatedImage">
                  <StaticImage src="../assets/images/poster-sinterklaas-hart-van-huizen.jpg" alt="Sinterklaas Hart van Huizen.jpg" />
                </div>
                <div className="text">
                  <strong>De activiteiten van Hart van Huizen:</strong>
                  <br/>Op de website <a href="https://hartvanhuizen.nl/activiteiten/sint-in-het-oude-dorp/" rel="noopener noreferrer" target="_blank">HartvanHuizen.nl</a> kun je hier alles over lezen.
                </div>
              </div>
              <div>
                <div className="rotatedImage">
                  <StaticImage src="../assets/images/poster-sinterklaas-oostermeent.jpg" alt="Sint op de kade in de haven van Huizen" />
                </div>
                <div className="text">
                  De Sint bezoekt ook het winkelcentrum Oostermeent. Voor meer informatie zie de website <a href="https://www.winkelcentrumoostermeent.nl" rel="noopener noreferrer" target="_blank">Winkelcentrumoostermeent.nl</a>
                </div>
              </div>
            </div>
          </StyledAankomst>
        </section>

        <section>
          <StyledAankomst>
            <h3 style={{ textAlign: 'center', marginBottom: '40px' }}><strong>Glutenvrije</strong> Piet & kruidnoten</h3>
            <div className="grid-3x">
              <div>
                <div className="text">
                  <p><strong>Waarom Glutenvrije Piet?</strong><br />In Nederland heeft 1 op de 100 kinderen de auto-immuunziekte coeliakie. Zij moeten om medische redenen een strikt en levenslang glutenvrij dieet volgen. De intocht van Sinterklaas is voor hen niet altijd feestelijk. Ze mogen de kruidnoten niet eten en highfiven met de Pieten gaat ook al niet, want van kruimels op de handschoen worden zij al ziek.</p>
                  <p><strong>Glutenvrije kruidnoten</strong><br />De bakkerij van glutenvrije kruidnoten maakt deze heerlijke kruidnoten voor kinderen die glutenvrij eten.
                  </p>
                </div>
                <div className="text">
                  <p>
                    <strong>Hoe herkent Glutenvrije Piet jou?</strong><br />Print deze vlag, hang &apos;m aan je pietenmuts of plak m om een stokje heen. Als je &apos;m goed omhoog houdt, ziet Glutenvrije Piet dat jij de glutenvrije kruidnoten mag hebben! Je kunt ook de kleurplaat downloaden, inkleuren en omhoog houden. Verwacht je slecht weer? Dan is lamineren een uitkomst.
                  </p>
                  <Button title="Print het vlaggetje" url='https://www.ncv.nl/l/library/download/urn:uuid:175f2bd8-7a80-4951-b8e3-14fcf84ca896/glutenvrij+groene+vlag+met+pietje.pdf'/>
                  <Button title="Print de kleurplaat" url='https://www.ncv.nl/l/library/download/urn:uuid:05f0afe4-9136-48c6-86a5-e70fd76dab2e/kleurplaat+glutenvrije+piet.pdf'/>
                </div>
              </div>
              <div>
                <div className="rotatedImage">
                  <StaticImage src="../assets/images/glutenvrije-pepernoten-ingrediënten.jpg" alt="Glutenvrije pepernoten ingrediënten" />
                </div>
              </div>
              <div>
                <div className="text">
                  <p><strong>Hoe herken je Glutenvrije Piet?</strong><br />De Glutenvrije Piet draagt een speciale tas, met daarin de glutenvrije kruidnoten, zodat ze niet vermengd worden met ander snoepgoed. De Glutenvrije Piet houdt een vlag omhoog met het Glutenvrije Piet logo erop. Je herkent hem dus zeker!</p>
                </div>
                <div className="rotatedImage">
                  <StaticImage src="../assets/images/glutenvrije-pepernoten-zak.jpeg" alt="Zak glutenvrije pepernoten" />
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

        <section>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Video&apos;s van de aankomst op <strong>12 november</strong> 2022</h3>
            <div className="grid-3x">
              <div>
                <VimeoVideo title="Korte impressie activiteiten op de kade" url="https://player.vimeo.com/video/772979203?h=f7b3963557" />
              </div>
              <div>
                <VimeoVideo title="Sint en burgemeester bezoeken de asielboot" url="https://player.vimeo.com/video/772979322?h=c10ed4027a" />
              </div>
              <VimeoVideo title="Het verleggen van de Asielboot 12 november 07.30 in de mist om de kade vrij te maken voor de aankomst van de Sint" url="https://player.vimeo.com/video/772980541?h=f6013edb27" />
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

        <section>
          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Muziekvideo van de aankomst van Sint Nicolaas op <strong>13 november</strong> 2021</h3>
            <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Dans je mee?</p>
            <VimeoVideo title="Stichting Intocht Sint Nicolaas Huizen Intocht 2021" url="https://player.vimeo.com/video/650779183?h=8770fcab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
          </div>
        </section>

        <Footer />
      </>
    </Layout>
  );
};

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://www.sintinhuizen.nl" />
    <title>Home | Stichting Intocht Sint Nicolaas Huizen</title>
    <meta name="description" content="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!" />
  </>
)
export default Home;
