//creating the seeds() lets gooooooo
import { createPotato } from "./seeds.js/potato.js";
import { createSoybean } from "./seeds.js/soybean.js";
import { createWheat } from "./seeds.js/wheat.js";
import { createSunflower } from "./seeds.js/sunflower.js";
import { createAsparagus } from "./seeds.js/asparagus.js";
import { createCorn } from "./seeds.js/corn.js";
//addPlant() from field.js so we can pass the return of plantSeeds() along to it
import { addPlant } from "./field.js";

export const plantSeeds = (currentPlant) => {
    let plants = []

    for (let i = 0; i < currentPlant.length; i++) {
        for (const plant of currentPlant) {
            for (let i = 0; i < plant.length; i++) {
//forward slashes are for testing output :)
                if (plant[i] === "Potato") {
                let potato = createPotato() //"Potato"
                plants.push(potato)
                } else if (plant[i] === "Soybean") {
                let soybean = createSoybean() //"Soybean"
                plants.push(soybean)
                } else if (plant[i] === "Wheat") {
                let wheat = createWheat() //"Wheat"
                plants.push(wheat)
                } else if (plant[i] === "Sunflower") {
                let asparagus = createSunflower() //"Sunflower"
                plants.push(asparagus)
                } else if (plant[i] === "Asparagus") {
                let asparagus = createAsparagus() //"Asparagus"
                plants.push(asparagus)
                } else if (plant[i] === "Corn") {
                let corn = createCorn() //"Corn"
                plants.push(corn)
                } else {
//in case something breaks :o
                    console.log("Han Shot First")
                }
            }
        }
//passing the array of this mess to addPlant() to make the field happy !
    return addPlant(plants)
    }
}