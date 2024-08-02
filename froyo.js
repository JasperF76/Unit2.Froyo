const froyoMenu = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
}

let placedOrder = prompt("Please enter one flavor for each frozen yogurt you wish to purchase. Separate each flavor by commas:");
let orderString = placedOrder.split(",")
function ringUpOrder(flavors) {
    let flavors = 0
    for (let i = 0; i < orderString.length; i++) {
        if (orderString = froyoMenu[0]) {Object.values(froyoMenu[0]) + 1;
        }
        else if (orderString = froyoMenu[1]) {Object.values(froyoMenu[1]) + 1;
        }
        else if (orderString = froyoMenu[2]) {Object.values(froyoMenu[2]) + 1;
        }

    }
    return flavors
}
console.log(ringUpOrder(flavors))
