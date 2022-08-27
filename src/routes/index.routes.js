import { Router } from "express";
import { renderIndex, renderBiography, renderContact, renderPlans } from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);

router.get("/biography", renderBiography);

router.get("/contact", renderContact);

router.get("/plans", renderPlans);


export default router;
