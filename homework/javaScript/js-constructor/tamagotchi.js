console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType){
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.rested = 10;
        this.health = 10;
    }

    cry(){
        this.foodInTummy--;
        console.log('WaHHHHHHH');
        console.log('Oh my! Amount of food in belly:'  + this.foodInTummy--);
    }
}



//create new Tamagotchis
let tamTam1 = new Tamagotchi();
let tamTam2 = new Tamagotchi();


//test out your Tamagotchies below via console.logs
console.log(tamTam1);
console.log(tamTam2);

tamTam1.cry();
tamTam2.cry();

//console.log(tamTam1.cry());