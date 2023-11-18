const nodemailer = require('nodemailer');

exports.sendEmail = (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-email-password',
        },
    });
    
    const { recipientEmail, subject, message } = req.body;
  
    ejs.renderFile(__dirname + '/views/emailTemplate.ejs', { recipientEmail, subject, message }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const mailOptions = {
          from: 'your-email@gmail.com',
          to: recipientEmail,
          subject: subject,
          html: data,
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.send(error);
          } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent: ' + info.response);
          }
        });
      }
    });
}