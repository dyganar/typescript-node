import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export class App {
    private express: express.Application
    private port = 3000

    constructor() {
        this.express = express()
        this.listen()
        this.middlewares()
        this.database()
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
        mongoose.connect("mongodb+srv://dyganar:tkdy9826@cluster0.rod1s.mongodb.net/api-node?retryWrites=true&w=majority",
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }
}