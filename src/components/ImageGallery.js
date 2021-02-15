import React, { useEffect, useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await fetch('/.netlify/functions/getImages');
        const data = await res.json();
        setImages(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadImages();
  }, []);

  return (
    <div className='image-gallery'>
      {images.length > 0 &&
        images.map((image) => (
          <div className='gallery-img'>
            <Image
              key={image.id}
              cloudName='hackit-africa'
              publicId={image.imgId}
            >
              <Transformation width='300' height='300' crop='fit' />
            </Image>
          </div>
        ))}
    </div>
  );
};

export default ImageGallery;
