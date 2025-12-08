import { graphql, useStaticQuery } from "gatsby";

export const usePhotoGallery = () => {
  const { photos2024, photos2025, drawings } =
    useStaticQuery<Queries.photoGalleryQuery>(graphql`
      query photoGallery {
        photos2024: allFile(
          filter: { relativeDirectory: { eq: "photos-2024" } }
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

        photos2025: allFile(
          filter: { relativeDirectory: { eq: "photos-2025" } }
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
    `);

  return [photos2024.nodes, photos2025.nodes, drawings.nodes];
};
