class heroi{

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; 
    }

    ataque() {
        let ataque = "";
        switch (this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "Erro";
                break;
        }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
    
}

let hero1 = new heroi("Gandalf", 300, "mago");

hero1.ataque();