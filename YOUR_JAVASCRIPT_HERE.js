// Write your JS here

let hero = {
  name: "", 
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "fists",
    damage: 2
  },
}

function submitForm(event) { // Allows the user to input a name
  event.preventDefault();
  hero.name = document.getElementById("name").value

  document.getElementById("nameDisplay").innerHTML = '<h2>Your hero\'s name is: ' + hero.name + '<h2>'
}

function displayStats() { // Displays stats
  document.getElementById("health").innerHTML = `<h2>Health: ${hero.health}<h2>`

  document.getElementById("weaponType").innerHTML= `<h2>Weapon Type: ${hero.weapon.type}`

  document.getElementById("weaponDamage").innerHTML= `<h2>Weapon Damage: ${hero.weapon.damage}`  
} 

function rest(person) { 

  if (person.health > 10) {
    alert("bug")
    person.health = 10
  }

  else if (person.health < 10) {
    person.health = 10
    alert("Your hero now has full health")
    document.getElementById("health").innerHTML = `<h2>Health: ${person.health}<h2>`
  }

  else {
    alert("Your hero's health is already full")
  }
  
  return person;
}

function pickUpItem(person, weapon) {
  weapon.type = 'dagger'
  weapon.damage = 2
  person.inventory.push(weapon)
  console.log(weapon)
}

function equipWeapon(person) {
  if (person.inventory.length > 0) {
    person.weapon = person.inventory[0]
    document.getElementById("weaponType").innerHTML= `<h2>Weapon Type: ${hero.weapon.type}`

    document.getElementById("weaponDamage").innerHTML= `<h2>Weapon Damage: ${hero.weapon.damage}`  
  }

}

function fightEnemy() {
  hero.health = hero.health - 5
  
  document.getElementById("health").innerHTML = `<h2>Health: ${hero.health}<h2>`

  document.getElementById("fightEnemy").style.display = 'none'
}


document.addEventListener('DOMContentLoaded', () => { // Event listener for once all DOM content has finished loading
  const form = document.querySelector('form');
  console.log('Form to name hero', form);
  form.addEventListener('submit', submitForm);
})
