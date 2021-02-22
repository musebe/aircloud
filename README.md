# Serverless Image Storage & Manipulation Using React, Cloudinary, Airtable & Netlify functions

> The sample code above demonstrates how to perform image manipulation using [Cloudinary](https://cloudinary.com/), storage on an [AIRTABLE](https://airtable.com/) database using [Netlify cloud functions](https://www.netlify.com/products/functions/)

**USAGE**

## Getting started

### Prerequisites

Download Node.js and npm here: https://nodejs.org/en/

### Installation

1. `npm install`
2. Create a .env file in root project folder

```
CLOUDINARY_CLOUD_NAME=xxxxx
CLOUDINARY_API_KEY=xxxxxxx
CLOUDINARY_API_SECRET=xxxxxxx
CLOUDINARY_UPLOAD_PRESET=xxxxxxx
AIRTABLE_API_KEY=xxxxxxxx
AIRTABLE_BASE_ID=xxxxxxxxx
AIRTABLE_TABLE_NAME=xxxxxxxx
```
## Start Command

Install Netlify [CLI](https://docs.netlify.com/cli/get-started)
RUN ``ntl dev / netlify dev`` to start the application
## Built with

- [airtable.js](https://github.com/Airtable/airtable.js) - The official Airtable JavaScript library.
- [Cloudinary](https://github.com/cloudinary/cloudinary_npm) - Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

-[Nelify Functions](https://www.netlify.com/products/functions/) - Serverless functions built into every Netlify account

## Authors and contributors

- Eugene Musebe

## License MIT