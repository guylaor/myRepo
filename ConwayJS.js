//Creates the grid

var createGrid = function() {
	
	var cellCounter = 0;
	var content = "";

	for (i = 0; i < 10 ; i++) {

		content += "<div id=\"c" + i + "\" class=\"column\">";
		
		for ( z = 0; z < 10; z++) {

			content +=("<div id=\"c" + i + "r" + z + "\" class=\"cell\">" + cellCounter+ "</div>");
			cellCounter++;

		}

		content +=("</div>");

	}
	return content;
	
}

createGrid();

var elem = document.getElementById("grid");

elem.innerHTML = content;

//Creates the cell array
var cellArray = [];

var createArray = function() {

	for (i = 0; i < 10 ; i++) {

		for ( z = 0; z < 10; z++) {

			cellArray.push("[" + i + "][" + z + "]");
			
		}
		
	}
	
	return cellArray;
}

createArray();
