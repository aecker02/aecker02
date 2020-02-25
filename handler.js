"use strict";
const AWS = require("aws-sdk");
const SES = new AWS.SES();

function sendEmail(formData, callback) {
  const emailParams = {
    Source: "aecker02@gmail.com", // SES SENDING EMAIL
    ReplyToAddresses: [formData.reply_to],
    Destination: {
      ToAddresses: ["aecker02+receiver1@gmail.com"]
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `\nMaterial: ${formData.material}\nName: ${formData.name}\nEmail: ${formData.reply_to}\nRegion: ${formData.region}`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Enquiry from CompareTheStonecat.com"
      }
    }
  };

  SES.sendEmail(emailParams, callback);
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        message: err ? err.message : data
      })
    };

    callback(null, response);
  });
};
