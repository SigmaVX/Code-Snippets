var zebra = {
    "bob": 23,
    "joey": 45,
    "beth": 33
}

for (key in zebra){
    console.log(`${key} is ${zebra[key]} years old`)
}

// find if zebra has a j in its name

for(key in zebra){
    if(key.includes("j")){
        console.log(`${key} has a J in its name`);
    }
}