import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
import userService from "../index.js";
import bcrypt from "bcrypt";

export default passport.use(
  new LocalStrategy(async function (email, password, done) {
    const currentUser = await userService.getUserByEmail({ email });

    if (!currentUser) {
      return done(null, false, {
        message: `User with email ${email} does not exist`,
      });
    }

    if (currentUser.source != "local") {
      return done(null, false, {
        message: `You have previously signed up with a different signin method`,
      });
    }

    if (!bcrypt.compareSync(password, currentUser.password)) {
      return done(null, false, { message: `Incorrect password provided` });
    }
    return done(null, currentUser);
  })
);
