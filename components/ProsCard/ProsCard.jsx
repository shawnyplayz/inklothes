import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";

function ProsCard(props) {
  const [prosImages, setProsImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (props.content) {
      let asd = [];
      props.content.prosPics?.map((el) => {
        asd.push({
          original: el?.url,
          thumbnail: el?.url,
        });
      });

      setProsImages([...asd]);
    }
  }, [props]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % prosImages.length);
    }, 3000); // Change the interval time as needed (in milliseconds)
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-row gap-12">
      <div className="flex w-2/3">
        {prosImages?.length != 0 ? (
          <ReactImageGallery
            items={prosImages}
            autoPlay
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={false}
            showNav={false}
            additionalClass="image"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col rounded shadow-lg max-w-xs h-full w-2/3 ">
        <div className="px-6 py-4">
          <p className="text-black text-lg">{props?.content?.pros[0]?.pros}</p>
        </div>
      </div>
    </div>

    // <div className="image-slider">
    //   {prosImages.map((image, index) => (
    //     <Image
    //       src={image?.secure_url}
    //       alt="Pros of Tattoo Sleeves"
    //       width={100}
    //       height={200}
    //       objectFit="contain"
    //       className={
    //         index === currentIndex ? "active relative h-96 w-96 rounded" : ""
    //       }
    //     />
    //   ))}
    // </div>
  );
}

export default ProsCard;
