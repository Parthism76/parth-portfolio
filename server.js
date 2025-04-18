require("dotenv").config(); 

/*express is a web framework for Node.js to create a server and handle API requests */
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

/*Setting up the server*/
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

/*setting up nodemailer*/ 
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "vibressence2022@gmail.com",
      pass: "bzzc gciq bryp guvs"
    },
  });

/*verifying the email configuration*/ 
contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

/*handling contact form submissions*/

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
  