import { Request, Response } from "express";
import mensagemModel from "../models/mensagem.model"

class MensagemController {

    public async enviar (req: Request, res: Response): Promise<Response> {

        const mensagem = await mensagemModel .create(
            {
                texto: req.body.texto,
                remetente: req.usuario._id,
                destinatario: req.params.id
            }
        )

        return res.json(mensagem)
    }
}

export default new MensagemController()