import { Router } from "express";
import produtoRouter from "./produto.route.js";
import fotoRoute from "./foto.route.js";

const router = Router();

router.use("/produtos", produtoRouter);
router.use("/fotos", fotoRoute);

export default router;
