import User from "../models/User.js";
import passport from "passport";

export const renderSigninForm = (req, res) => res.render("auth/signin");

export const renderSignin = passport.authenticate("local", {
  successRedirect: "/panel",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});