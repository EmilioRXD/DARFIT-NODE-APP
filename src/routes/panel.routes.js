import { Router } from "express";
import {
    renderNote,
    createNote,
    renderEditForm,
    updateNote,
    deleteNote
} from "../controllers/panel.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// Nuevo Producto
router.get("/panel", isAuthenticated, renderNote);
router.post("/panel/new-note", isAuthenticated, createNote);

// Edit Product
router.get("/panel/edit/:id", isAuthenticated, renderEditForm);
router.put("/panel/edit-note/:id", isAuthenticated, updateNote);

// Delete Product
router.delete("/panel/delete/:id", isAuthenticated, deleteNote);

export default router;