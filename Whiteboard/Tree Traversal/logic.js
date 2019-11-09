// Create a recurisve function that prints all items in a nested object.


let tree ={
    aStuff: "A",
    bStuff: [
        {
            nestedStuff1: "B",
            nestedStuff2: "C"
        },
        {
            nestedStuff3Array: ["D", "E"]
        },
        {
             nestedStuff4: {
                deepNest1: "F",
                deepNest2: "G",
                deepNest3: {
                    veryDeepNest1: "H"
                }
            }
        }

    ],
    cStuff: {
        junk: "I"
    }
};

let treeCopy = {...tree};
console.log(treeCopy);


const state = { nestedArray: ['item 1', 'item 2', 'item 3'] };
const newState = {...state};
console.log(newState);




const search = (node) =>{

    let items= [];

    for(var key in node){
        
        if(typeof node[key] === 'object' && node[key] !== null ){
            search(node[key]);
        } else if (Array.isArray(node[key])){
            search(node[key]);
        } else {
            console.log(node[key]);
        }
    } 
}

search(tree);


