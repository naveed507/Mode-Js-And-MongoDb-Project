import userService from "../passportConfig/index.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import passport from "passport";
import nodemailer from "nodemailer";
class authController {
  static loginform = (req, res) => {
    try {
      res.render("pages/auth/loginform");
    } catch (error) {}
  };

  static registerform = (req, res) => {
    try {
      res.render("pages/auth/registerform");
    } catch (error) {}
  };

  static submitRegister = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if (password.length < 8) {
      req.flash("error", "Account Not Created, Password Must Be 8 Characters");
      return res.redirect("/register");
    }
    const makeHashedPass = await bcrypt.hash(password, 10);
    try {
      await userService.addLocalUser({
        id: uuidv4(),
        email,
        firstName: first_name,
        lastName: last_name,
        password: makeHashedPass,
      });
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "naveedexd@gmail.com",
          pass: "zyfqhvijyousiufe",
        },
      });

      let message = {
        from: "custom-crm-support@gmail.com",
        to: "m.naveed@exdnow.com",
        subject: "Subject",
        html: "<h1>Hello SMTP Email</h1>",
      };
      transporter.sendMail(message, function (err, info) {
        if (err) {
        } else {
        }
      });

      req.flash("success", "Account Created, Please Login");
      return res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };
  static logout = async (req, res) => {
    req.flash("success", "Successfully logged out");
    req.session.destroy(function () {
      res.clearCookie("connect.sid");
      res.redirect("/login");
    });
  };
}

export default authController;
