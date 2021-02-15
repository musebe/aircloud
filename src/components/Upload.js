import React, { useState } from 'react';

const Upload = () => {
  const [imageDataUrl, setImageDataUrl] = useState('');

  const handleChange = (e) => {
    // console.log(e.target.files);
    // Get the single/individual file
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageDataUrl(reader.result);
    };
    reader.onerror = () => {
      console.log('AHHHHHHH');
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submitting');
    try {
      const res = await fetch('/.netlify/functions/upload ', {
        method: 'POST',
        body: imageDataUrl,
      });

      const data = res.json();
      // console.log(data);
      setImageDataUrl('');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <input type='file' onChange={handleChange} />
          <span>+</span>
        </label>

        <button type='submit' className='button' disabled={!imageDataUrl}>
          {' '}
          Upload Image
        </button>
      </form>
      {imageDataUrl && (
        <img className='img img-fluid' src={imageDataUrl} alt='Desk Setup' />
      )}
    </div>
  );
};

export default Upload;
