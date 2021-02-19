import { Schema, model } from "mongoose";

const MensagemSchema = new Schema({
    texto: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    remetente: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

export default model('Mensagem', MensagemSchema)