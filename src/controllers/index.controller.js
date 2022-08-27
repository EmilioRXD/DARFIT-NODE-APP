// MOdelos de basesd de datos
import Note from "../models/Note.js";

export const renderIndex = async (req, res) => {
  const notes = await Note.find();
  res.render("index", { notes });
};

export const renderBiography = (req, res) => {
  res.render("pages/biography");
};

export const renderContact = (req, res) => {
  res.render("pages/contact");
};

export const renderPlans = (req, res) => {
  res.render("pages/plans");
};
