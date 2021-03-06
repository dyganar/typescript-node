import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import usuarioRoute from './routes/usuario.route';
import mensagemRoute from './routes/mensagem.route';

export class App {
    private express: express.Application
    private port = 3000

    constructor() {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
        this.listen()
    }

    public getApp(): express.Application {
        return this.express
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private listen(): void {
        this.express.listen(this.port, () =>{
            console.log(`Servidor iniciado na porta ${this.port}`)
        })
    }

    private database(): void {
        mongoose.connect(process.env.connectionString,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }

    private routes(): void {
        this.express.use('/usuarios', usuarioRoute)
        this.express.use('/mensagens', mensagemRoute)
    }
}