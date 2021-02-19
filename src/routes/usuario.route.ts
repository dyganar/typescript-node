import { Router, Response, Request } from "express";
import usuarioController from "../controllers/usuario.controller";

const usuarioRoute = Router()

usuarioRoute.post(
    '/cadastro', 
    usuarioController.cadastrar
)
usuarioRoute.post('/login', usuarioController.autenticar)
usuarioRoute.get('/', usuarioController.get)

export default usuarioRoute