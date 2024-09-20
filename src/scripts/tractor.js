// define and export plantSeeds(yearlyPlan) function
// this will iterate over the yearlyPlan string array
// for each element invoke relevant createVegetable() function in seeds directory and return object 
// invoke the addPlant(xObject) function to push to fieldArray





for(let array of stringArray){
    let index = 0
    while( index < array.length){
        addPlant(array[index])
        ++index
    
    }
}