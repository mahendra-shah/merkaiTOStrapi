const axios = require('axios');
require('dotenv').config()

const postBaseURL = 'http://merd-strapi.merakilearn.org/api';
const getBaseURL = 'https://dev-api.navgurukul.org';


const makeTable = (merakiTable) => {
  
  const strapiTableFormat = {
    "id": "mZbXQHt8Dj",
    "type": "table",
    "data": {
      "withHeadings": true,
      "content": [
        // [
        //   "Name",
        //   "What is it?"
        // ],
        // [
        //   "Process / Input",
        //   "Any output (print statement), user input or process in the program can be represented using this box."
        // ],
        // [
        //   "Start",
        //   "This component indicates the start of the flowchart."
        // ],
        // [
        //   "Condition",
        //   "Any condition can be represented using this shape. Since an if statement can have only two outputs (True&nbsp;or&nbsp;False), two arrows go out from this shape."
        // ],
        // [
        //   "Arrow",
        //   "Arrows are used to indicate the flow of the program at every step."
        // ]
      ]
    }
  }
  const data = []
  for (let row in merakiTable.value) {
    // const rowCount = merakiTable.value[row].items.length
    for (let i = 0; i < merakiTable.value[row].items.length; i++) {
      if (row == 0) {
        data.push([merakiTable.value[row].items])
        data.push([merakiTable.value[row].items])
        data.push([merakiTable.value[row].items])
        data.push([merakiTable.value[row].items])
      }
    }
    // rowCount--
    console.log(data)
    const tHead = merakiTable.value[row].header.replace(/<\/?b>/g, '')
    // if ()
    console.log(tHead)
    // data[row].push([tHead])
  };
  // return strapiTableFormat;
  return data;
}

const merakiTable = {
  "component": "table",
  "value": [
      {
          "header": "<b>Name</b>",
          "items": [
              "Process / Input",
              "Start",
              "Condition",
              "Arrow"
          ]
      },
      {
          "header": "<b>Image</b>",
          "items": [
              "<img src=\"https://merakilearn.s3.ap-south-1.amazonaws.com/course_images_v2/If-else_10/assets/theory_images/if-statement-intro_flowchart-process.png\" alt=\"Process Box\" /> ",
              "<img src=\"https://merakilearn.s3.ap-south-1.amazonaws.com/course_images_v2/If-else_10/assets/theory_images/if-statement-intro_flowchart-start.png\" alt=\"Flowchart Start Box\" /> ",
              "<img src=\"https://merakilearn.s3.ap-south-1.amazonaws.com/course_images_v2/If-else_10/assets/theory_images/if-statement-intro_flowchart-if-box.png\" alt=\"Condition Box\" /> ",
              "<img src=\"https://merakilearn.s3.ap-south-1.amazonaws.com/course_images_v2/If-else_10/assets/theory_images/if-statement-intro_flowchart-arrow.png\" alt=\"Condition Box\" /> "
          ]
      },
      {
          "header": "<b>What is it?</b>",
          "items": [
              "Any output (print statement), user input or process in the program can be represented using this box.",
              "This component indicates the start of the flowchart.",
              "Any condition can be represented using this shape. Since an if statement can have only two outputs (<span border-radius: 2px; padding: 2px\">True</span> or <span border-radius: 2px; padding: 2px\">False</span>), two arrows go out from this shape.",
              "Arrows are used to indicate the flow of the program at every step."
          ]
      }
  ]
};
const strapiFormat = makeTable(merakiTable)
console.log(strapiFormat)