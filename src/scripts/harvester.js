
export const harvestPlants= (fieldArray) => {
    let harvestedPlants = [];

    for ( const plant of fieldArray) {
        let seedOutput = 0;
        if (plant.type === "Corn") {
            seedOutput = plant.output / 2
        } else {
            seedOutput = plant.output
        }

        for (let i = 0; i < seedOutput; i++) {
            harvestedPlants.push ({
                type: plant.type,
                height: plant.height,
                output: plant.output
            });
        }
    }

    return harvestedPlants;

}

// export const harvestPlants = (plantsArray) => {
//     let harvestedPlants = [];

//     for (const plant of plantsArray) {
//         if (Array.isArray(plant)) {
//             // Handle corn (array of two corn objects)
//             plant.forEach(cornPlant => {
//                 if (cornPlant && cornPlant.output) {
//                     let seedOutput = Math.floor(cornPlant.output / 2);  // Corn output is halved and rounded down
//                     for (let i = 0; i < seedOutput; i++) {
//                         harvestedPlants.push({
//                             type: cornPlant.type,
//                             height: cornPlant.height,
//                             output: cornPlant.output
//                         });
//                     }
//                 }
//             });
//         } else if (plant && plant.output) {
//             // Handle other plants (single objects)
//             let seedOutput = plant.output;
//   for (let i = 0; i < seedOutput; i++) {
//                 harvestedPlants.push({
//                     type: plant.type,
//                     height: plant.height,
//                     output: plant.output
//                 });
//             }
//         }
//     }

//     return harvestedPlants;
//}