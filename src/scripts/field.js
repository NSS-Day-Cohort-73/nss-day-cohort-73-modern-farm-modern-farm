// Create a seed object.
// Invoke addPlant() and specify the seed object as the argument.
// Invoke usePlants() and store its return value in a variable.

let plants = []
const addPlant = (seed) => {
    if(Array.isArray(seed)) {
        seed.forEach(plant => plants.push(plant))
    } 
    else {
        plants.push(seed)
    }
}

const usePlants = () => {
    console.log(plants)
    return [...plants]
}

export { addPlant, usePlants }




