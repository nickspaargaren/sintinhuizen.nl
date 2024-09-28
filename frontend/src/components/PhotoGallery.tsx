import "photoswipe/style.css";

import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

type PhotoGalleryProps =
  | Queries.photoGalleryQuery["photos2022"]["nodes"]
  | Queries.photoGalleryQuery["drawings"]["nodes"];

const PhotoGallery = ({
  images,
}: {
  images: PhotoGalleryProps;
}): ReactElement => (
  <div
    data-cy="photogallery"
    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 my-auto mx-0"
  >
    <Gallery>
      {images.map((item, index) => {
        return (
          <div key={item.id} className="bg-white/75 p-1 shadow-lg -rotate-2">
            <Item
              original={item.publicURL || ""}
              thumbnail={item.publicURL || ""}
              width={item.childImageSharp?.original?.width || 0}
              height={item.childImageSharp?.original?.height || 0}
            >
              {({ ref, open }) => {
                if (!item.childImageSharp?.gatsbyImageData) return <></>;

                return (
                  <button ref={ref} onClick={open} data-cy={`image-${index}`}>
                    <GatsbyImage
                      image={item.childImageSharp.gatsbyImageData}
                      alt={item.relativePath}
                    />
                  </button>
                );
              }}
            </Item>
          </div>
        );
      })}
    </Gallery>
  </div>
);

export default PhotoGallery;
