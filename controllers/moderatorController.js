import bcrypt from "bcrypt";
import userService from "../passportConfig/index.js";
import { v4 as uuidv4 } from "uuid";
import EmailService from "../common_services/emailService.js";
import userModal from "../models/userModal.js";

class moderatorController {
  static showModeratours = async (req, res) => {
    try {
      const allModerators = await userModal.find({ userType: "MODERATOR" });

      console.log(allModerators);
      res.render("pages/moderatour/index.ejs", { data: allModerators });
    } catch (error) {}
  };
  static moderatourPage = (req, res) => {
    try {
      res.render("pages/moderatour/create.ejs");
    } catch (error) {}
  };

  static saveModerator = async (req, res) => {
    try {
      const generateRandomNum = this.generateRandomString(8);
      const { first_name, last_name, email } = req.body;
      const makeHashedPass = await bcrypt.hash(generateRandomNum, 10);

      const user = await new User({
        id: uuidv4(),
        email: email,
        firstName: first_name,
        lastName: last_name,
        password: makeHashedPass,
        userType: "MODERATOR",
        source: "local",
      });
      user.save();
      const userSubject = "Success! Account Created";
      EmailService.sendEmail(email, generateRandomNum, userSubject);
      req.flash("success", "Moderator Account Created Successfully");
      return res.redirect("/moderatour");
    } catch (error) {
      console.log(error);
    }
  };

  static generateRandomString = (length) => {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
}

export default moderatorController;
