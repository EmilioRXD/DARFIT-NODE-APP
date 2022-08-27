// MOdelos de basesd de datos
import Note from "../models/Note.js";

// Nuevo Prodcuto GET
export const renderNote = async (req, res) => {
    const notes = await Note.find();
    res.render("auth/panel", { notes });
};

// Nuevo Producto POST
export const createNote = async (req, res) => {
    const {
        title,
        description
    } = req.body;
    const errors = [];
    if (!title) {
        errors.push({ text: "Porfa introduzca un día" });
    }
    if (!description) {
        errors.push({ text: "Porfa introduzca una hora" });
    }
    if (errors.length > 0)
      return res.render("auth/panel", {
        title,
        description
      });
  
    const newProduct = new Note({
      title,
      description
    });
    await newProduct.save();
    req.flash("success_msg", "Horario agregado con éxito!");
    res.redirect("/panel");
};

// Edit Product GET
export const renderEditForm = async (req, res) => {
    const Note = await Note.findById(req.params.id);
    res.render("auth/panel", { Note });
};

// Edit Product PUT
export const updateNote = async (req, res) => {
    const {
      title,
      description
    } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
      title,
      description
    });
    req.flash("success_msg", "Horario actualizado satisfactoriamente");
    res.redirect("/panel");
  };

// Eliminar Producto
export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Horario eliminado satisfactoriamente");
  res.redirect("/panel");
};