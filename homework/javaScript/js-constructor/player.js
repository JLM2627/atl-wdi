console.log('player file is loaded');

var player = {
  name: "Neo",
  feedTamagotchi: function(tamTam1, tamTam2) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamTam1, tamTam2) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamTam1, tamTam2) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}; 

//feedTamagotchi(tamagotchi.foodInTummy--);
//console.log( 'is is working');
//end player
player(feedTamagotchi);
console.log('working');