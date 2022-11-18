import { graphql, useStaticQuery } from 'gatsby';

import { Images } from '../types';

const PhotoGalleryData = (): Images[] => {
  const {
    photos2021, photos2022, drawings,
  } = useStaticQuery(graphql`
    query {

      photos2021: allFile(filter: {relativeDirectory: {eq: "photos-2021"}}, sort: {fields: relativePath}) {
        nodes {
          id
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(width: 270, height: 200)
            original {
              height
              width
            }
          }
        }
      }

      photos2022: allFile(filter: {relativeDirectory: {eq: "photos-2022"}}, sort: {fields: relativePath}) {
        nodes {
          id
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(width: 270, height: 200)
            original {
              height
              width
            }
          }
        }
      }

      drawings: allFile(filter: {relativeDirectory: {eq: "drawings"}}, sort: {fields: relativePath}) {
        nodes {
          id
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(width: 270, height: 200)
            original {
              height
              width
            }
          }
        }
      }

    }
    `);

  return [
    photos2021.nodes,
    photos2022.nodes,
    drawings.nodes,
  ];
};

export default PhotoGalleryData;
