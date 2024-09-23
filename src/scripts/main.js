import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"


const yearlyPlan = createPlan();

const plantedSeeds = plantSeeds(yearlyPlan);

const fieldArray = usePlants();

const harvestArray = harvestPlants(fieldArray);

const  htmlString = catalog(harvestArray)


 

