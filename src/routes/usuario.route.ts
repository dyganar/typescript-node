import { Router, Response, Request } from "express";
import usuarioController from "../controllers/usuario.controller";
import authMiddleware from "../middlewares/auth.middleware"

const usuarioRoute = Router()

usuarioRoute.post(
    '/cadastro', 
    usuarioController.cadastrar
)
usuarioRoute.post('/login', usuarioController.autenticar)
usuarioRoute.get('/', usuarioController.get)
usuarioRoute.get(
    '/:id', 
    authMiddleware.autorizarUsuarioByParams,
    authMiddleware.autorizarUsuarioByToken,
    usuarioController.getById
)

export default usuarioRoute