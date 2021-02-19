import { Request, Response } from 'express'
import usuarioModel from '../models/usuario.model'

class UsuarioController {

    public async cadastrar(req: Request, res: Response): Promise<Response>{
        const usuario = await usuarioModel.create(req.body)
        const resposta = {
            message: 'Usuário cadastrado com sucesso!',
            _id: usuario._id,
            nome: usuario.nome,
            avatar: usuario.avatar
        }
        return res.json(resposta)

    }

    public get(req: Request, res: Response): Response {
        return res.json({'mensage':'Ok'})

    }
}

export default new UsuarioController()