const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }

  function getBumps(){
    return counter
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  return function armAnimal(deadlyDevice) {
    var newAnimal = {animalType: '${animalType}', deadlyDevice: '${deadlyDevice}'}
  }
}

var sharkCreator = (a) => createAnimal['shark'] = a
var sharkWithFrickinLaserbeam = {animalType: 'Shark', deadlyDevice: 'Laserbeam'}
var sharkWithFrickinCannon = {animalType: 'Shark', deadlyDevice: 'Cannon'}
