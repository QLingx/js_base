

var color = "blue";

function changeColor(){
	var anotherColor = "red";

	function swapColor(){
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		console.log(anotherColor,color);
	}

	swapColor();
}

changeColor();

//color = blue
//another = red;