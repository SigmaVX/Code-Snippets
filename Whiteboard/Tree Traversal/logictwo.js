// PWC Tests

let doc = {
    filename: 'Lease Agreement Between XYZ Company and ABC Company',
    status: 'Manager Review',
    content: 'Lease will start on 8/10/15 and end on 10/11/17 contingent upon...',
    template: [
            {
                name: 'Commencement Date',
                category: 'Dates'
            },
            {
                name: 'Landlord',
                category: 'Parties'
            },
            {
                name: 'Termination Date',
                category: 'Dates'
            }
    ],
    tags: [
        {
            name: 'Commencement Date',
            location: {offset: 20, length: 7}
        },
        {
            name: 'Termination Date',
            location: {offset: 39, length: 8}
        }
    ]
}


function compareTemplateAndTags(object) {
    let outputArray = [];
  	for(var key in object){ 		
      if(Array.isArray(object[key]) && !object[key][0].location){
        object[key].forEach((item)=>{
            outputArray.push(item.name);
        })    
      }  	
    }   
      console.log(outputArray);
      return outputArray;
  
}

compareTemplateAndTags(doc);


let tree = [
    { id: 0, parentId: null},
    { id: 4, parentId: 3},
    { id: 1, parentId: 0},
    { id: 3, parentId: 2},
    { id: 2, parentId: 0}
];

function getDescendantsCount(id, tree){
    let idArray = [];
    
    for(let i = 0; i < tree.length; i++){
        if(tree[i].parentId >= id && tree[i].parentId !== null){
            idArray.push(tree[i].id);
        }
    }
    idArray.sort();
    return (idArray.length);
}

getDescendantsCount(3, tree);