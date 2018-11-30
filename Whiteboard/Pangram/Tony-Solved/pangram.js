let sentence = "The quick brown fox jumps over the lazy dog.";

pangramCheck = () =>{

    if(sentence.length<26){
        console.log("This cannot be a pangram!");
    } else {

        uniqueCount = 0;
        specials = ["!", ".", "?", ",", ";", " "];
        testArray = [];
        countArray = [];
        duplicateNumCount = 0;

        let test = sentence.toLowerCase();

        for(i=0; i<test.length; i++){
            console.log(specials.indexOf(test[i]));
            if(specials.indexOf(test[i])===-1){
                testArray.push(test[i]);
            }
        }

        console.log(testArray);
        
        for(i=0; i<testArray.length; i++){
            console.log(testArray.indexOf(testArray[i]));
            if(countArray.indexOf(testArray[i])===-1){
                countArray.push(testArray[i]);
            }
        }

        console.log("Unique Array: ", countArray);

        if (countArray.length == 26){
            console.log("This is a pangram with " + countArray.length + " unique letters!");
        } else {
            console.log(`This is not at pangram as it only has ${countArray.length} unique letters`);
        }
    }
}

pangramCheck();