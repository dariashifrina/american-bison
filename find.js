/*
American Bison - Daria Shifrina & Tiffany Moi
SoftDev1 pd7
K #17: Moo? 
2017-12-13
*/

var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;
var max_dist = 1;
var current_dist = 1;

var setIt = function(){
    targetX = Math.random() * boxWidth;
    targetY = Math.random() * boxHeight;
}

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return Math.sqrt(Math.pow((x0-x1),2) + Math.pow((y0 - y1),2));
};

var foundIt = function(e) {
    var dilution = current_dist/max_dist;
    console.log(dilution);
    if (dilution <= 0.02){
	alert("yayyyyy you won! Click to play again!");
	setIt();
    }
    
    
};

var findIt = function(e) {
    max_dist = findMax(test_dist()); 
    current_dist = distance(e.offsetX, e.offsetY, targetX, targetY);
    var dilution = current_dist/max_dist;
    console.log(dilution);
    box.style.backgroundColor = "rgba(255,0,0," + dilution + ")";
};

//test out all corners of the box
var test_dist = function() {
    var a = distance(boxWidth, boxHeight, targetX, targetY);
    var b = distance(0, boxHeight, targetX, targetY);
    var c = distance(boxWidth, 0, targetX, targetY);
    var d = distance(0, 0, targetX, targetY);
    return [a,b,c,d];
    
};

//find max of the distances
var findMax = function(arr){
    var max = 0;
    for ( i = 0; i < arr.length - 1; i ++){
	max = Math.max(arr[i], arr[i+1]);
    }
    return max;
};

setIt();
box.addEventListener("mousemove", findIt);
box.addEventListener("click", foundIt);
