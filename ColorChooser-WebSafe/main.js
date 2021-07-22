    //<![CDATA[
		//by Andy Harris
    //global color variables
    var red = 0x00;
    var green = 0x00;
    var blue = 0x00;

    function setColor() {
    	//applies current color settings to document, displays color value
    	//get hex values of current colors
    	hexRed = red.toString(16).toUpperCase();
    	hexGreen = green.toString(16).toUpperCase();
    	hexBlue = blue.toString(16).toUpperCase();
    	//correct for single digit 0
    	if (hexRed == "0") {
    		hexRed = "00";
    	}
    	if (hexGreen == "0") {
    		hexGreen = "00";
    	}
    	if (hexBlue == "0") {
    		hexBlue = "00";
    	}
    	//create a string representation of hex color
    	hexColor = "#" + hexRed + hexGreen + hexBlue;
    	//apply color to document
    	document.body.style.backgroundColor = hexColor;
    	//display hex color in h2
    	var output = document.getElementById("output");
    	output.innerHTML = "Current Color: " + hexColor;
    }

    function addRed(amount) {
    	//modifies red by amount
    	red += amount;
    	if (red > 255) {
    		red = 255;
    	}
    	if (red < 0) {
    		red = 0;
    	}
    	setColor();
    }

    function addGreen(amount) {
    	//modifies green by amount
    	green += amount;
    	if (green > 255) {
    		green = 255;
    	}
    	if (green < 0) {
    		green = 0;
    	}
    	setColor();
    }

    function addBlue(amount) {
    	//modifies blue by amount
    	blue += amount;
    	if (blue > 255) {
    		blue = 255;
    	}
    	if (blue < 0) {
    		blue = 0;
    	}
    	setColor();
    }

    function setRed(value) {
    	red = value;
    	setColor();
    }

    function setBlue(value) {
    	blue = value;
    	setColor();
    }

    function setGreen(value) {
    	green = value;
    	setColor();
    }
    //]]>