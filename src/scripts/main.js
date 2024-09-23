// console.log("Welcome to the main module")
// imports: createPlan(), plantSeeds(), usePlants(), harvestPlants(), createCatalog()
// variables: yearlyPlan[], fieldArray[], finalFieldArray[]

import { createPlan } from "./plan";
import {plantSeeds} from "./tractor.js"
import {usePlants} from "./field.js"
import {harvestPlants} from "./harvester.js"
import {createCatalog} from "./catalog.js"

// invoke createPlan() from plan.js into the yearlyPlan variable

// const yearlyPlan = []
// yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

// for each element in yearlyPlan invoke addPlant() return to variable

// yearlyPlan.forEach = (cropString) => {
   // addPlant(cropString)

   //  return yearlyPlan
// }
// pick one, above or below 
// for (const cropString of yearlyPlan) {
   // addPlant(cropString)

   // return yearlyPlan
// }

// invoke plantSeeds(yearlyPlan)

fieldArray = plantSeeds()

// invoke fieldArray = usePlants()

// const fieldHTML = usePlants()

// invoke finalFieldArray = harvestPlants(fieldArray)

finalFieldArray = []
finalFieldArray = harvestPlants(fieldArray)

// invoke catalog(finalFieldArray) to pass the final array to the HTML builder
// return the final array after passing though catalog() to convert into an HTML string to add to the DOM using innerHTML

const catalogHTML = catalog(finalFieldArray)
catalogHTML.innerHTML = finalFieldArray