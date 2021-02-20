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

    public async autenticar(req: Request, res: Response): Promise<Response>{
        const {nome, senha} = req.body;

        const usuario = await usuarioModel.findOne({ nome })
        if(!usuario) return res.status(400).send({message: 'Usuário não encontrado'})

        const senhaValida = await usuario.compararSenhas(senha)
        if(!senhaValida) return res.status(400).send({message: 'Senha incorreta!'})

        return res.json({
            usuario,
            token: usuario.gerarToken()
         })
    }

    public async get(req: Request, res: Response): Promise<Response> {
        const usuarios = await usuarioModel.find({})
        return res.json({ message: usuarios })

    }

    public getById(req: Request, res: Response): Response {
        return res.json(req.usuarioChat)
    }

    public async listar(req: Request, res: Response): Promise<Response> {
        const idUsuarioLogado = req.usuario._id

        const usuarios = await usuarioModel.find({ _id: { $ne: idUsuarioLogado }})

        return res.json(usuarios)
    }
}

export default new UsuarioController()