//esercizo 1
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  oldest(x) {
    if (x.age > this.age) {
      return x.firstName + " è più grande di " + this.firstName;
    } else {
      return this.firstName + " è più grande di " + x.firstName;
    }
  }
}
const chiaraFais = new User("Chiara", "Fais", 20, "Latina");
console.log(chiaraFais);
const pippoRossi = new User("Pippo", "Rossi", 22, "Roma");
console.log(pippoRossi);

console.log(chiaraFais.oldest(pippoRossi));

//esercizio 2
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  owner(x) {
    if (x.ownerName === this.ownerName) {
      return true;
    }
  }
}
let pets = [];
const createPet = function () {
  let pet = {
    petName: document.querySelector("#petName").value,
    ownerName: document.querySelector("#ownerName").value,
    species: document.querySelector("#species").value,
    breed: document.querySelector("#breed").value,
  };
  if (
    pet.petName != "" &&
    pet.ownerName != "" &&
    pet.species != "" &&
    pet.breed != ""
  ) {
    let animale = new Pet(pet.petName, pet.ownerName, pet.species, pet.breed);
    for (let i = 0; i < pets.length; i++) {
      console.log(animale.owner(pets[i]));
    }
    pets.push(animale);
    console.log(pets);
    let containerPet = document.querySelector("#animali");
    let p = document.createElement("p");
    p.innerText =
      " NOME:" +
      animale.petName +
      " PADRONE:" +
      animale.ownerName +
      " SPECIE:" +
      animale.species +
      " RAZZA:" +
      animale.breed;
    containerPet.appendChild(p);
    document.querySelector("#petName").value = "";
    document.querySelector("#ownerName").value = "";
    document.querySelector("#species").value = "";
    document.querySelector("#breed").value = "";
  } else {
    let campoObb = document.querySelector("#obbligatorio");
    let p = document.createElement("p");
    p.innerText = "* non hai compilato uno o più campi richiesti!";
    campoObb.appendChild(p);
  }
};
