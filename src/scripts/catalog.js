export function Catalog(harvestedPlants) {
    const mainElement = document.querySelector(".container");
    
    for (const food of harvestedPlants) {
        mainElement.innerHTML += `
            <section class="plant">${food.type}</section>
        `;
    }
}