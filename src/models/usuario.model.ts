import { Schema, model, Document } from "mongoose";
import { UsuarioInterface } from "../interfaces/usuario.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface UsuarioModel extends UsuarioInterface, Document {
    compararSenhas(senha: string): Promise<boolean>
    gerarToken(): string
}

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    }
})

UsuarioSchema.pre<UsuarioModel>('save', async function criptografarSenha(){ //hook
    this.senha = await bcrypt.hash(this.senha, 8)
})

UsuarioSchema.pre<UsuarioModel>('save', function gerarAvatar() {
    const randomId = Math.floor(Math.random() * (1000000) + 1)
    this.avatar = `https://api.adorable.io/avatars/285/${randomId}.png`
})



UsuarioSchema.methods.compararSenhas = async function(senha: string): Promise<boolean> {
    const USER = this as UsuarioModel
    return await bcrypt.compare(senha, USER.senha )
}

UsuarioSchema.methods.gerarToken = function(): string {
    const USER = this as UsuarioModel
    const decodedToken = {
        _id: String(USER._id),
        nome: USER.nome,
        avatar: USER.avatar
    }

    return jwt.sign(decodedToken, process.env.JWT_KEY , { expiresIn: '5h'})
}



export default model<UsuarioModel>('Usuario', UsuarioSchema)