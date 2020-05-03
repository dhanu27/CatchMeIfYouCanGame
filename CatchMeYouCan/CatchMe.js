'use strict';
function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

var area=document.getElementById("outer-box");
area.style.top="10vh";
area.addEventListener("mouseover",function(){
   console.log(area.style.top);
   var xy = getRandomPosition(area);
	area.style.top = xy[0] + 'px';
	area.style.left = xy[1] + 'px';
   
});


