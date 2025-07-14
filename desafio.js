
class heroi {
    constructor(name, age, type){
        this.nome = name;
        this.age = age;
        this.type = type;
    }

    attack(){
        let goAttack;

        if(this.type === "Mago"){
            goAttack = "Magia";
        } else if (this.type === "Guerreiro"){
            goAttack = "Espada";
        } else if (this.type === "Monge"){
            goAttack = "Artes Marciais";
        } else if (this.type === "Ninja"){
            goAttack = "Shuriken";
        }

        console.log(`${this.type} atacou usando ${goAttack}`);
    }

}

const heroi1 = new heroi("Ed", 20, "Mago");
const heroi2 = new heroi("Fran", 25, "Guerreiro");
const heroi3 = new heroi("Bruce", 45, "Monge");
const heroi4 = new heroi("Shinobido", 29, "Ninja");

heroi1.attack();
heroi2.attack();
heroi3.attack();
heroi4.attack();


