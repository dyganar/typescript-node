import { Router } from "express";
import mensagemController from "../controllers/mensagem.controller";
import authMiddleware from "../middlewares/auth.middleware";

const mensagemRoute = Router()

mensagemRoute.post(
    '/:id', 
    authMiddleware.autorizarUsuarioByParams,
    authMiddleware.autorizarUsuarioByToken, 
    mensagemController.enviar
)

export default mensagemRoute