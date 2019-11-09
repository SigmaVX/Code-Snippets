// Count the number of unique values for the longest branch in a tree

let tree ={
    thing: "A",
    stuff: {
       one: {
            more: "B",
            things: "C"
            },
        two:{
                yet: {one: "E", two: "E"}
            },
        three: {junk: "F"}
        }
}   


const solution = (T) =>{
    
    let tree = T; 
    let valueArray = [];
    
    const loop = (object) =>{
        
        for(let key in object){
            
            if(typeof object[key] === "object" && object[key] !== null){
                loop(object[key]);
            } else {
                if(valueArray.indexOf(object[key]) === -1){
                    valueArray.push(object[key]);
                }
            }
        }

    }
    
    loop(tree);
    
    // console.log(valueArray);
    let count = valueArray.length
    return count
}

solution(tree)

