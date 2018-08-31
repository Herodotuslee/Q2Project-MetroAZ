'use strict';
const nodemailer = require('nodemailer');

module.exports = function(to, name){

  var sendMail = nodemailer.createTestAccount((err, account) => {

      let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'fakeAlbertTest@gmail.com',
              pass: 'galvanize96'
          }
      });

      let mailOptions = {
          from: '"Metro Engineering & Survey" <fakeMetroTest@gmail.com>',
          to: to,
          subject: 'Your Email To Metro Engineering & Survery Was Sent!',
          html: `<h1>Hi ${name}! Your message Has Been Received!</h1> <br> <p> We Will be getting back to you very soon!</p> <br> <b> Thank you for your inquiry`
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);

          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
  });
}
