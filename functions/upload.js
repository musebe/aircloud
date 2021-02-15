require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const { table } = require('./utils/airtable');

exports.handler = async (event) => {
  const file = event.body;

  try {
    const { public_id, secure_url } = await cloudinary.uploader.upload(file, {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });

    console.log(public_id, secure_url);

    const record = await table.create({
      imgId: public_id,
      url: secure_url,
      username: 'musebecodes',
      likes: 0,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(record),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ err: 'Failed to upload image' }),
    };
  }
};
