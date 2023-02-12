const axios = require('axios');
require('dotenv').config()

// const { merakiToStrapiConverter } = require('./merakiToStrapi')
const merakiToStrapiConverter = require('./merakiToStrapi');

const postBaseURL = 'http://merd-strapi.merakilearn.org/api';
const getBaseURL = 'https://dev-api.navgurukul.org';

const data = {
  "component": "image",
  "value": "https://merakilearn.s3.ap-south-1.amazonaws.com/course_images_v2/If-else_10/assets/theory_images/if-statement-intro_whatsapp-blue-grey-ticks.jpg ",
  "alt": "whatsapp-ticks"
};

console.log(merakiToStrapiConverter.image)
const img = merakiToStrapiConverter.image(data)