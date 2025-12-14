const maxWeight = 50;

let currentInventoryWeight = 30;
let newItemName = "Iron Sword";
let newItemWeight = 15;

const totalWeight = currentInventoryWeight + newItemWeight;
const canPickUp = totalWeight <= maxWeight;

if(canPickUp) {
    console.log(`Success: Picked up ${newItemName}. Total weight: ${totalWeight}/${maxWeight}.`);
} else {
    console.log(`Failed: ${newItemName} is too heavy.`)
}
