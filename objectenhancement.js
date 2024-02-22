function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  // Write an ES2015 Version

  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  // Computed Property Names

  var favoriteNumber = 42;

  var instructor = {
    firstName: "Colt"
  }

  instructor[favoriteNumber] = "That is my favorite!"

  // Write an ES2015 version

let favoriteNumber = 42;

const instructor = {
    firtsName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

// Object Methods

var instructor = {
    firstName: "Colt",
    sayHi: function() {
    return "Hi!";
    },
    sayBye: function() {
        return this.firstName + " says bye!";
    }
}

// Write an ES2015 Version

const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  // Write a function which generates an animal object. The function should accepts 3 arguments:
// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

const d = createAnimal("dog", "bark", "Woof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woof!"

const s = createAnimal("sheep", "bleet", "BAAAaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}