import passport from "passport";
import userModal from "../../models/userModal.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currentUser = await userModal.find({ id });
  done(null, currentUser);
});

export default passport;
