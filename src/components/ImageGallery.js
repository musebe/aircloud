// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  // const local_function = 'http://localhost:58665/api/getImages';
  const deployed_function = 'https://aircloud.netlify.app/.netlify/functions/getImages';

  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await fetch(
          deployed_function
        );
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
          <div className='gallery-img' key={image.id}>
            <Image cloudName='hackit-africa' publicId={image.imgId}>
              <Transformation width='280' height='280' crop='fit' />
            </Image>
          </div>
        ))}
    </div>
  );
};

export default ImageGallery;
