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

    for (let i = 0; i < currentPlant.length; i++) {
        for (const plant of currentPlant[i]) {
//forward slashes are for testing output :)
                if (plant === "Potato") {
                let potato = createPotato() //"Potato"
                addPlant(potato)
                } else if (plant === "Soybean") {
                let soybean = createSoybean() //"Soybean"
                addPlant(soybean)
                } else if (plant === "Wheat") {
                let wheat = createWheat() //"Wheat"
                addPlant(wheat)
                } else if (plant === "Sunflower") {
                let sunflower = createSunflower() //"Sunflower"
                addPlant(sunflower)
                } else if (plant === "Asparagus") {
                let asparagus = createAsparagus() //"Asparagus"
                addPlant(asparagus)
                } else if (plant === "Corn") {
                let corn = createCorn() //"Corn"
                addPlant(corn)
                } else {
//in case something breaks :o
                    console.log("Han Shot First")
                }
            }
        }
//passing the array of this mess to addPlant() to make the field happy !
    }