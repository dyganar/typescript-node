import { Schema, model, Document } from "mongoose";
import { MensagemInterface } from "../interfaces/mensagem.interface";

interface MensagemModel extends MensagemInterface, Document {}

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

export default model<MensagemModel>('Mensagem', MensagemSchema)