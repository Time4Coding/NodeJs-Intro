const nodemailer = require("nodemailer");
const passGenerator = require("generate-password");

const password = passGenerator.generate({
  length: 10,
  numbers: true,
  symbols: true,
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "mailernode107@gmail.com",
    pass: "tepm npeq terf eljo",
  },
});

var mailOptions = {
  from: "hamza.hasnni@gmail.com",
  to: "feki.wael@gmail.com",
  subject: "Sending Email using Node.js",
  text: `Welcome student to our platform your login info :\n 
your E-mail : feki.wael@gmail.com\n
your Password : ${password}`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
