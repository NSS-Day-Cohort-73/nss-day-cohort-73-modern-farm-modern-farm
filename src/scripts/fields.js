const fieldArray = []

const addPlant = (seed) => {
    if(Array.isArray(seed)) {
        seed.forEach(plant => fieldArray.push(plant))
    } else {
        fieldArray.push(seed)
    }
}

const usePlants = () => {
    return fieldArray.slice()
}
