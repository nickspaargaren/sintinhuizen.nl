import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import gebouwen from '../assets/images/gebouwen.svg';
import logo from '../assets/images/logo.svg';
import sinterklaas from '../assets/images/sinterklaas.svg';
import Aankomst from '../components/Aankomst';
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

export const pageQuery = graphql`
  query {
    markdownRemark(id: {eq: "97da612d-3a7c-53ee-b81a-87b566b1bbfb"}) {
      html
      id
      frontmatter {
        title
      }
    }
  }
`;

type HomeProps = {
  data: {
    markdownRemark: {
      html
    }
  }
}

const Home = ({ data }: HomeProps): ReactElement => {
  const [ fotos2020, fotos2019 ] = useFotoalbum();

  const berichtSint = data.markdownRemark;

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
              </h1>

              <h2>
                Op
                {' '}
                <strong>zaterdag 13 november</strong>
                {' '}
                komt Sint Nicolaas met zijn Pieten aan in Huizen. Ze zullen worden verwelkomd in de haven van het
                {' '}
                <strong>Nautisch Kwartier</strong>
                . De feestelijkheden beginnen om
                {' '}
                <strong>
                  13.30 uur.
                </strong>
                {' '}
              </h2>

              <p style={{ marginBottom: '5px' }}><strong style={{ color: '#f1cb19' }}>Coronamaatregelen?</strong></p>

              <p>Wat betreft de coronamaatregelen bij de intocht heeft de overheid het volgende besloten:</p>

              <p>Georganiseerde jeugdactiviteiten, zoals een Sinterklaasintocht, zijn uitgezonderd van de plicht een coronatoegangsbewijs (CTB) te tonen. Dit geldt voor deelnemers tot en met 17 jaar en hun begeleiders.</p>

              <p>We zijn blij weer een leuk feest voor de kinderen te kunnen organiseren. En met ieders medewerking gaat dat zeker lukken!</p>

              <p>Bestuur Stichting Intocht Sint Nicolaas Huizen</p>

            </div>
            <img src={logo} alt="Logo" style={{ width: '300px', height: '195px' }} loading="lazy" />
          </div>
          <div className="illustratie">
            <div style={{ textAlign: 'right' }}><Button title="Verkeer en parkeren" url="/verkeer-en-parkeren" /></div>
            <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
          </div>
        </StyledHeader>
      </section>
      <section><Aankomst /></section>

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

          <div dangerouslySetInnerHTML={{ __html: berichtSint.html }} />

          <div>
            <div style={{
              textAlign: 'center', position: 'sticky', top: '0', height: '100vh', display: 'flex',
            }}
            >

              <StaticImage
                style={{
                  margin: 'auto', width: '100%', position: 'relative', maxWidth: '321px',
                }}
                src="../assets/images/sinterklaas-2020.jpg"
                alt="Intocht Sinterklaas"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </Layout>
  );
};
export default Home;
