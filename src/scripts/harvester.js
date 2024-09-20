import { plantsArray } from "./main.js"

export const harvestPlants= (plantsArray) => {
    harvestedPlants = [];

    for (plant of plantsArray) {
        let seedOutput = 0;
        if (plant.type === "corn") {
            seedOutput = plant.output / 2
        } else {
            seedOutput = plant.output
        }

        

       


    }


}