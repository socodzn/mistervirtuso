
import React from 'react';
import style from './gallery.module.css'

const Gallery = () => {
  const imageUrls = [
    '/download.jpg',
    '/download_2.jpg',
    '/download_3.jpg',
    '/download_4.jpg',
    '/download_5.jpg',
    '/download_6.jpg',
    '/download_7.jpg',
    '/download_8.jpg',
    '/download_9.jpg',
  ];

  return (
    <div className={style.gallery}>
         <p className={style.season}>
        SS 2024
      </p>
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className={style.galleryImage}
          width="500" 
          height="600"
        />
      ))}
    </div>
  );
};

export default Gallery;