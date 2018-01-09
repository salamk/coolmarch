var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'salamk17@gmail.com',
    pass: 'tne$215*MELE'
  }
});

var mailOptions = {
  from: 'salamk17@gmail.com',
  to: 'salamullah.khan@nadra.gov.pk',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
