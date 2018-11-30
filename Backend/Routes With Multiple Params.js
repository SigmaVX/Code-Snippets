module.exports = function(app){
app.get("/:operator/:valOne/:valTwo", function(req, res) {
    
    var operator = req.params.operator;
    var valOne = parseInt(req.params.valOne);
    var valTwo = parseInt(req.params.valTwo);
    var answer =0;

    switch(operator) {
        case "add":
        case "+":
            answer = valOne + valTwo;
            break;
        case "subtract":
        case "-":
            answer = valOne - valTwo;
            break;
        case "multiply":
        case "*":
            answer = valOne * valTwo;
            break;
        case "divide":
            answer = valOne / valTwo;
            break;
        default:
            answer = ("I Don't Know!");
            break;
    }   

    res.send(answer.toString());

  });

};