// define fieldArray[] as an empty array
// define and export a function named addPlant()
// define and export a function named usePlants() that exports a copy of the field array

let fieldArray = []

// check to see if the plantObject is an array. if true iterate over the array and push elements to the fieldArray[]
// else push the plantObject to the fieldArray[]
export const addPlant = (plantObject) =>{
    if(Array.isArray(plantObject)){
        for(const plant of plantObject){
            fieldArray.push(plant)
        }
    } else{
        fieldArray.push(plantObject)
    }
}

// make a copy of the fieldArray and return it

export const usePlants = () => {
    let returnedFieldArray = fieldArray
    return returnedFieldArray
}