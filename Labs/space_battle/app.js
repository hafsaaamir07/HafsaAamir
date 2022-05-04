// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

// Aliens vs Humans - GAME

// {H}: GO First
//  Only can Attack in Order

// After DestroyedShip = option2retreat

// {A}: 6 ships

// ship ={
// hull:
// firepower:
// accuracy:
// }

// Guile Throw https://onlinegiftools.com/images/examples-onlinegiftools/sonic-boom.gif

// https://www.fightersgeneration.com/characters/charlie-sonicshell.gif

// ----{  coudla done this  }
// function Alien(lifePoints,firePower,accuracy){
//     this.lifePoints = lifePoints
//     this.firePower = firePower
//     this.accuracy = accuracy
// }

let USS_HolaMundo = {
  lifePoints: 100,
  firepower: 10,
  accuracy: 10,
  attackAlien: function(){
    let enemyPosition = prompt(" Ready To Attack? ");

    if (enemyPosition === "y") {
      let relevantTarget = document.querySelector(".counter");
      let bomb = document.createElement("img");
      bomb.setAttribute(
        "src",
        "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif"
      );
      bomb.style.height = "60px";
      relevantTarget.replaceWith(bomb);
      
      console.log("ATTACKING!>!>!!!");
  
      let ship = document.querySelector(".ussr");
      ship.classList.toggle("pOneAttack");
      // let x = document.getElementById()
    }
  }
};

let alienOne = {
  lifePoints: 100,
  firepower: 10,
  accuracy: 10,
};

let alienTwo = {
  lifePoints: 50,
  firepower: 10,
  accuracy: 5,
};
let alienGang = [alienOne, alienTwo];

const showDirections = () => {
  alert(
    "Earth has been attacked by a horde of aliens! You are the captain of the USS HelloWorld, on a mission to destroy every last alien ship.Battle the aliens as you try to destroy them with your lasers.There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat."
  );
};


const attackAlien = () => {
  // targetAlien & decrease Points
  let enemyPosition = prompt(" Ready To Attack? ");

  if (enemyPosition === "y") {
    let relevantTarget = document.querySelector(".counter");
    let bomb = document.createElement("img");
    bomb.setAttribute(
      "src",
      "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif"
    );
    bomb.style.height = "60px";
    relevantTarget.replaceWith(bomb);
    
    console.log("ATTACKING!>!>!!!");

    let ship = document.querySelector(".ussr");
    ship.classList.toggle("pOneAttack");
    // let x = document.getElementById()
  }
};

const objTest = (nput) =>{
    console.log(nput.email)
}

let me = {
    name: "Jordan",
    email: "a@a.com"
}



