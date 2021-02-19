import { Request, Response } from 'express'
import usuarioModel from '../models/usuario.model'

class UsuarioController {

    public async cadastrar(req: Request, res: Response): Promise<Response>{
        const usuario = await usuarioModel.create(req.body)
        return res.json(usuario)

    }
}

export default new UsuarioController()