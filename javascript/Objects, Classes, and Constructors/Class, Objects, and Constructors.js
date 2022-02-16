/* Class a blueprint - defines all methods and different 
properties can have but does not change data or information */

/* Object - specific version of class that has extra information filled in */

/* Think of class as blueprint and object as actual house */

// new changes class into object


class House {
    // puts parameters inside of house, ie color
    constructor(color) {
        this.color = color;
    }

    getFurniture() {
        return 'sofa';
    }
}

// as house gets constructed, 
// color changes due to different objects

// calls constructor from above
const houseObject = new House('red');
const houseObject2 = new House('blue');

// SOFA GETS PASSED INTO ALL
console.log(houseObject.color);
console.log(houseObject.getFurniture());

console.log(houseObject.color);
console.log(houseObject.getFurniture());