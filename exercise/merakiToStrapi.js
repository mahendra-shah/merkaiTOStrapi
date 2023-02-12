// const axios = require('axios');
// require('dotenv').config()

// const postBaseURL = 'http://merd-strapi.merakilearn.org/api';
// const getBaseURL = 'https://dev-api.navgurukul.org';

class merakiToStrapiConverter {

  headPara(merakiData) {
    if (merakiData.component == 'header') {
      return {
        "id": "RR6LLbctBB",
        "type": "header",
        "data": {
          "text": merakiData.value,
          "level": merakiData.variant
        }
      }
    } else if (merakiData.component == 'text') {
      return {
        "id": "AFca5LpZrs",
        "type": "paragraph",
        "data": {
          "text": merakiData.value
        }
      }
    }
  };

  list(merakiData) {
    if (merakiData.decoration.type == 'number') {
      return {
        "component": "text",
        "value": merakiData.value,
        "decoration": {
          "type": "ordered",
          "value": merakiData.decoration.value
        }
      }
    } else if (merakiData.decoration.type == 'bullet') {
      return {
        "component": "text",
        "value": merakiData.value,
        "decoration": {
          "type": "unordered",
          "value": merakiData.decoration.value
        }
      }
    };
  };

  ytEmbed(merakiData) {
    if (merakiData.component == 'youtube') {
      return {
        "id": "-ypwIocwik",
        "type": "embed",
        "data": {
          "service": "youtube",
          "source": `https://youtu.be/${merakiData.value}`,
          "embed": `https://www.youtube.com/embed/${merakiData.value}`,
          "width": 580,
          "height": 320,
          "caption": ""
        }
      }
    }
  };

  image(merakiData) {
    if (merakiData.component == 'image') {
      const ext = merakiData.value.split('.').slice(-1)[0].trim()
      return {
        "id": "4RBYqrY3RK",
        "type": "image",
        "data": {
          "file": {
            "url": merakiData.value,
            "mime": `image/${ext}`,
            "height": 388,
            "width": 596,
            "size": 5.43,
            "alt": "if-statement-intro_flowchart1.png",
            "formats": {
              "small": {
                "ext": `.${ext}`,
                "url": merakiData.value,
                "hash": "small_if_statement_intro_flowchart1_eafdac5e44",
                "mime": `image/${ext}`,
                "name": `small_if-statement-intro_flowchart1.${ext}`,
                "path": null,
                "size": 34.5,
                "width": 500,
                "height": 326
              },
              "thumbnail": {
                "ext": `.${ext}`,
                "url": merakiData.value,
                "hash": "thumbnail_if_statement_intro_flowchart1_eafdac5e44",
                "mime": `image/${ext}`,
                "name": `thumbnail_if-statement-intro_flowchart1.${ext}`,
                "path": null,
                "size": 9.99,
                "width": 240,
                "height": 156
              }
            }
          },
          "caption": merakiData.alt,
          "withBorder": false,
          "stretched": false,
          "withBackground": false
        }
      }
    }
  };

  table(merakiData) {
    if (merakiData.component == 'table') {
      const tData = []
      const totalColumn = merakiData.value.length
      const tHeads = []
      for (let row in merakiData.value) {
        let head = merakiData.value[row].header.replace(/(<([^>]+)>)/ig, '')
        tHeads.push(head)
      };
      tData.push(tHeads)
      for (let row = 0; row < totalColumn + 1; row++) {
        const tcol = []
        for (let i = 0; i < totalColumn; i++) {
          tcol.push(merakiData.value[i].items[row])
        }
        tData.push(tcol)
      }
      return {
        "id": "mZbXQHt8Dj",
        "type": "table",
        "data": {
          "withHeadings": true,
          "content": tData
        }
      };
    }
  };

}

module.exports = merakiToStrapiConverter;