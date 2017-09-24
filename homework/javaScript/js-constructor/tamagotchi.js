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
    };

    puke(){
        this.foodInTummy--;
        console.log('tears tears tears!!!! This baby is SICK! There is now:' + this.foodInTummy-- + 'in its belly!');

    };
    yawn() {
        this.rested--;
        console.log(this.name + " is a very tired Tamagotch. There is only " + this.rested-- + ' in its reserves.');
    }

    begin() {
        this.name
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

tamTam1.puke();
tamTam2.puke();

tamTam1.yawn();
tamTam2.yawn();

//console.log(tamTam1.cry());

let Tasha = new Tamagotchi('Tasha', 'Worlick Tamagotchi Creature')