import { Schema, model } from "mongoose";

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

export default model('Usuario', UsuarioSchema)