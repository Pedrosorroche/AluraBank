import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes : Negociacao[] = [];

    adiciona(Negociacao : Negociacao){
        this.negociacoes.push(Negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

