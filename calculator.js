function squareNumber(num){
	x = num * num;
	result = "The result of squaring the number " +  num + " is " + x;
	 console.log(result);
	 return x

}
function halfNumber(num){
	x = num/2;
	result = "Half of " + num + " is " + x;
	return console.log(result);
}

function percentOf(num1,num2){
	x = ((num1/num2)*100).toFixed(2);
	result = num1 + " is " + x +"% of " + num2;
	return console.log(result);
}

function areaOfCircle(rad){
	x = 3.14 * rad * rad;
	result = "The area for a circle with radius " + rad + " is " + x;
	return console.log(result);
}