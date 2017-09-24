console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(){
        this.foodInTummy = 10;
        this.rested = 10;
        this.health = 10;
    }

    cry(){
        this.foodIntummy -1;
        console.log('WaHHHHHHH');
        console.log('Oh my! Amount of food in belly:' this.foodInTummy)
    }
}



//create new Tamagotchis
let tamTam1 = newTamgotchi();
let tamTam2 = newTamgotchi();


//test out your Tamagotchies below via console.logs
console.log(tamtam1);
console.log(tamTam2);