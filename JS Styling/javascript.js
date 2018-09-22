
//change image sizes
document.getElementById("grow").addEventListener("click",function(){
	document.getElementById("box").style.height = "250px";
	document.getElementById("box").style.width = "250px";
});

document.getElementById("shrink").addEventListener("click",function(){
	document.getElementById("box").style.height = "50px";
	document.getElementById("box").style.width = "50px";
});


//change colors - if/else method
function color () {
	var color=document.getElementById("box");
	if (color.style.backgroundColor == "orange") {
		document.getElementById("box").style.backgroundColor = "blue";
		}
	else if (color.style.backgroundColor == "blue") {
		document.getElementById("box").style.backgroundColor = "green";
		}
	else if (color.style.backgroundColor == "green") {
		document.getElementById("box").style.backgroundColor = "yellow";
		}
	else if (color.style.backgroundColor == "yellow") {
		document.getElementById("box").style.backgroundColor = "red";
		}
	else if (color.style.backgroundColor == "red") {
		document.getElementById("box").style.backgroundColor = "purple";
		}
	else {
		document.getElementById("box").style.backgroundColor = "orange";
		}
	}


//change colors - switch method

function colorTwo () {
	switch(document.getElementById("box").style.backgroundColor) {
    case "orange":
        document.getElementById("box").style.backgroundColor = "black";
        break;
   case "black":
        document.getElementById("box").style.backgroundColor = "red";
        break;
   case "red":
        document.getElementById("box").style.backgroundColor = "green";
        break;
   case "green":
        document.getElementById("box").style.backgroundColor = "purple";
        break;
   case "purple":
        document.getElementById("box").style.backgroundColor = "yellow";
        break;
   case "yellow":
		document.getElementById("box").style.backgroundColor = "orange";
		break;
    default:
        document.getElementById("box").style.backgroundColor = "pink";
	}
}


//change transparency
document.getElementById("fade").addEventListener("click",function(){
	document.getElementById("box").style.opacity = "0.5";
});

document.getElementById("vanish").addEventListener("click",function(){
	document.getElementById("box").style.opacity = "0.1";
});


//reset image
document.getElementById("reset").addEventListener("click",function(){
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.opacity = "1";
	document.getElementById("box").style.marginLeft = "25px";
	document.getElementById("box").style.transform = "rotate(0deg)";
	document.getElementById("box").style.transform = "skewX(0deg)";
	document.getElementById("box").style.borderRadius = "0px";
});

//morph image
document.getElementById("morph").addEventListener("click",function(){
	document.getElementById("box").style.height = "400px";
	document.getElementById("box").style.width = "400px";
	document.getElementById("box").style.marginLeft = "400px";
	document.getElementById("box").style.backgroundColor = "red";
	document.getElementById("box").style.borderRadius = "20px";
	document.getElementById("box").style.transform = "rotate(150deg)";
	document.getElementById("box").style.transform = "skewX(50deg)";
	
});
