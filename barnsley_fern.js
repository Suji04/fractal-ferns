var f1=document.getElementById("btn1");
var f2=document.getElementById("btn2");
var f3=document.getElementById("btn3");
var f4=document.getElementById("btn4");
var r=document.getElementById("res");

var a;
var b;
var c_;
var d;
var c = document.getElementById('can');
var ctx = c.getContext('2d');
// ctx.fillStyle="rgb(122, 108, 209)";
// ctx.fillRect(0,0,c.width,c.height);
var x=0;
var y=0;

function mapRange (value, e, f, g, h) {
    value = (value - e) / (f - e);
    return g + value * (h - g);
}

function drawFern1(){
	
	var px=mapRange(x,-2.1820,2.6558,5,c.width-5);
	var py=mapRange(y,0,9.9983,c.height-5,5);
	if(a==false) return;
	ctx.beginPath();
	ctx.arc(px,py,1,0,2*Math.PI);
	green=mapRange(py,5,600,240,50);
	ctx.fillStyle="rgb(50, "+green+",0)";
	ctx.fill();
	var x1;
	var y1;
	var prob = Math.random();
	if(prob<.01){
		x1 = 0;
		y1 = 0.16 * y;
	}
	
	else if( prob<.86){
		x1 = 0.85 * x + 0.04 * y;
		y1 = -0.04 * x + 0.85 * y + 1.6;
	}

	else if(prob<.93){
		x1 = 0.2 * x -0.26 * y;
		y1 = 0.23 * x + 0.22 * y + 1.6;
	}
	
	else if(prob<1){
		x1 = -0.15 * x + 0.28 * y;
		y1 = 0.26 * x + 0.24 * y + 0.44;
	}
	x=x1; y=y1;
	
	window.requestAnimationFrame(drawFern1);
}

function drawFern2() {
	var px=mapRange(x,-1.8,2,0,c.width);
	var py=mapRange(y,-.6,7.5,c.height,5);
	if(b==false) return;
	ctx.beginPath();
	ctx.arc(px,py,1,0,2*Math.PI);
	green=mapRange(py,5,600,240,100);
	ctx.fillStyle="rgb(79, "+green+", 66)";
	ctx.fill();
	var x1;
	var y1;
	var prob = Math.random();
		if(prob<.02){
		x1 = 0;
		y1 = 0.25* y -.4;
	}
	
	else if( prob<.86){
		x1 = 0.95 * x + 0.005 * y -.002;
		y1 = -0.005 * x + 0.93 * y + .5;
	}

	else if(prob<.93){
		x1 = 0.035 * x -0.2 * y -.09;
		y1 = 0.16 * x + 0.04 * y + .02;
	}
	
	else if(prob<1){
		x1 = -0.04 * x + 0.2 * y +.083;
		y1 = 0.16 * x + 0.04 * y + 0.12;
	}
	x=x1; y=y1;
	
	window.requestAnimationFrame(drawFern2);
}

function drawFern3() {
	if(c_==false) return;
	var px=mapRange(x,-1.8,2,0,c.width);
	var py=mapRange(y,-.6,7.5,c.height,5);
	
	ctx.beginPath();
	ctx.arc(px,py,1,0,2*Math.PI);
	green=mapRange(py,5,600,240,50);
	ctx.fillStyle="rgb(0, "+green+", 0)";
	ctx.fill();
	var x1;
	var y1;
	var prob = Math.random();
		if(prob<.02){
		x1 = 0;
		y1 = 0.25 * y -.4;
	}
	
	else if( prob<.86){
		x1 = 0.95 * x + 0.002 * y -.002;
		y1 = -0.002 * x + 0.93 * y + .5;
	}

	else if(prob<.93){
		x1 = 0.035 * x -0.11 * y -.05;
		y1 = 0.27 * x + 0.01 * y + .005;
	}
	
	else if(prob<1){
		x1 = -0.04 * x + 0.11 * y +.047;
		y1 = 0.27 * x + 0.01 * y + 0.06;
	}
	x=x1; y=y1;
	window.requestAnimationFrame(drawFern3);
	
}

function drawFern4() {
	if(d==false) return;
	var px=mapRange(x,-1.8,2,5,c.width-5);
	var py=mapRange(y,0,6,c.height-5,5);
	ctx.beginPath();
	ctx.arc(px,py,1,0,2*Math.PI);
	green=mapRange(py,5,600,240,50);
	ctx.fillStyle="rgb(0, "+green+", 0)";
	ctx.fill();
	var x1;
	var y1;
	var prob = Math.random();
	if(prob<.01){
		x1 = 0;
		y1 = 0.25 * y -.14;
	}
	
	else if( prob<.86){
		x1 = 0.85 * x + 0.02 * y ;
		y1 = -0.02 * x + 0.83 * y + 1;
	}

	else if(prob<.93){
		x1 = 0.09 * x -0.28 * y ;
		y1 = 0.3 * x + 0.11 * y + .6;
	}
	
	else if(prob<1){
		x1 = -0.09 * x + 0.28 * y ;
		y1 = 0.3 * x + 0.09 * y + 0.7;
	}
	x=x1; y=y1;
	
	window.requestAnimationFrame(drawFern4);
}

f1.addEventListener("click",function(){
	res();
// 		ctx.fillStyle="rgb(122, 108, 209)";
// 	ctx.fillRect(0,0,c.width,c.height);
	a=true;
	for (var i = 0; i < 100; i++) {
		if (a==false) break;
		drawFern1();
	}
});

f2.addEventListener("click",function(){
	res();
// 		ctx.fillStyle="rgb(122, 108, 209)";
// 	ctx.fillRect(0,0,c.width,c.height);
	b=true;
	for (var i = 0; i < 100; i++) {
		if(b==false) break;
		drawFern2();
	}
});

f3.addEventListener("click",function(){
	res();
// 		ctx.fillStyle="rgb(122, 108, 209)";
// 	ctx.fillRect(0,0,c.width,c.height);
	c_=true;
	for (var i = 0; i < 100; i++) {
		drawFern3();
	}
});

f4.addEventListener("click",function(){
	res();	
// 	ctx.fillStyle="rgb(122, 108, 209)";
// 	ctx.fillRect(0,0,c.width,c.height);
	d=true;
	for (var i = 0; i < 100; i++) {
		drawFern4();
	}
});

function res(){
	a=false;
	b=false;
	c_=false;
	d=false;
	ctx.clearRect(0,0,c.width,c.height);
	// ctx.fillStyle="rgb(122, 108, 209)";
	// ctx.fillRect(0,0,c.width,c.height);
}

r.addEventListener("click",function(){
	res();
});
