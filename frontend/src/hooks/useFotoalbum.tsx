import { graphql, useStaticQuery } from 'gatsby';

const FotoalbumData = () => {
  const { fotos2020, fotos2019 } = useStaticQuery(graphql`
    query {

      fotos2020: allFile(filter: {relativeDirectory: {eq: "fotos-2020"}}, sort: {fields: relativePath}) {
        nodes {
          id
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(width: 270, height: 200)
          }
        }
      }

      fotos2019: allFile(filter: {relativeDirectory: {eq: "fotos-2019"}}, sort: {fields: relativePath}) {
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
  return {
    fotos2020,
    fotos2019,
  };
};

export default FotoalbumData;
