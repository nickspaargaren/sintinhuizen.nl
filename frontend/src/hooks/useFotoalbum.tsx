import { graphql, useStaticQuery } from 'gatsby';

import { Images } from '../types';

const FotoalbumData = (): Images[] => {
  const {
    fotos2021, tekeningen,
  } = useStaticQuery(graphql`
    query {

      fotos2021: allFile(filter: {relativeDirectory: {eq: "fotos-2021"}}, sort: {fields: relativePath}) {
        nodes {
          id
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(width: 270, height: 200)
          }
        }
      }

      tekeningen: allFile(filter: {relativeDirectory: {eq: "tekeningen"}}, sort: {fields: relativePath}) {
        nodes {
          id
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(width: 270, height: 200)
          }
        }
      }

    }
    `);

  return [
    fotos2021.nodes,
    tekeningen.nodes,
  ];
};

export default FotoalbumData;
