import { graphql, useStaticQuery } from "gatsby";

const PhotoGalleryData = () => {
  const { photos2023, drawings } = useStaticQuery<Queries.photoGalleryQuery>(
    graphql`
      query photoGallery {
        photos2023: allFile(
          filter: { relativeDirectory: { eq: "photos-2023" } }
          sort: { relativePath: ASC }
        ) {
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

        drawings: allFile(
          filter: { relativeDirectory: { eq: "drawings" } }
          sort: { relativePath: ASC }
        ) {
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
    `,
  );

  return [photos2023.nodes, drawings.nodes];
};

export default PhotoGalleryData;
