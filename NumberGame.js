var num = [];
var f;
var g,h,j,k,l;
var w = new sp();
var boom = document.querySelector("#boom");
var fade = document.querySelectorAll(".fade");
var canvas = document.querySelector(".squares");
var hs = document.querySelectorAll(".hs");
hs[1].textContent = localStorage.hs1;
hs[2].textContent = localStorage.hs2;
hs[3].textContent = localStorage.hs3;
var lvl = document.querySelector(".level");
hs[4].textContent = localStorage.hs4;
hs[5].textContent = localStorage.hs5;
var b1 = document.getElementById("b1");
hs[7].textContent = localStorage.hs11;
hs[8].textContent = localStorage.hs21;
hs[9].textContent = localStorage.hs31;
hs[10].textContent = localStorage.hs41;
hs[11].textContent = localStorage.hs51;
var b2 = document.getElementById("b2");
b1.addEventListener("click", function(){
      lvl.textContent = "The Easy Level";
      square.classList.add("clicks");
	square.textContent = "click to start";
	canvas.style.height = "220px";
     w.reset();
     num = [];
     for (var i = 0; i<20 ; i++){
	num.push(i+1);
};
num = shuffle(num);
     for (var i = 0; i<25 ; i++){
	squares[i].style.opacity = 0;
	squares[i].textContent = null;
	Sound.stop();
};
      game();
});
	
var tr = true;
boom.addEventListener("click", function(){
    for(var i = 0;i<12;i++)
       hs[i].classList.toggle("hs");
  });
var s = document.querySelector(".s");

var mss = document.querySelector(".ms")
var str = document.querySelector("strong");
var newg = document.querySelector(".button");
for (var i = 0; i<20 ; i++){
	num.push(i+1);
};
num = shuffle(num);
var Sound = new sound("music.mp3");

var squares = document.querySelectorAll(".h");
var square = document.querySelector(".clicks");
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }    
}

newg.addEventListener("click", function(){
	square.classList.add("clicks");
	square.textContent = "click to start";
	canvas.style.height = "220px";
     w.reset();
     num = [];
     for (var i = 0; i<20 ; i++){
	num.push(i+1);
};
num = shuffle(num);
     for (var i = 0; i<25 ; i++){
	squares[i].style.opacity = 0;
	squares[i].textContent = null;
	Sound.stop();
};

game() 
});

function tc1(){
	square.classList.add("clickss");
	square.classList.remove("clicks");
	square.textContent = 1;
	
};
function tc2(){
	square.textContent = 2;
};
function tc3(){
	square.textContent = 3;
}
game();
function game(){
square.addEventListener("click",function(){
	tc1();
	setTimeout(tc2,1000);
	setTimeout(tc3,2000)
	setTimeout(startgame,3000);
     
});	};
function startgame(){
	for(var i = 20;i<25;i++){
		squares[i].textContent = null;
		squares[i].style.backgroundColor = null;
	}
	square.textContent = null;
	square.classList.add("clicks");
	square.classList.remove("clickss");
    w.start();
   Sound.play();
  for (var i = 0; i<20 ; i++){
	squares[i].textContent = num[i];
	squares[i].style.opacity = 1;
};
var b = 21;
var a = 1;
for (var i = 0; i<20 ; i++){
	squares[i].addEventListener("click", function(){
		 
		if(Number(this.textContent) === a){
			this.style.color = "green";
			this.style.backgroundColor = "black";
			if(b<41){
			this.textContent = b;
			a++;
			b++;}
			else if(a<40){
			this.style.color = "black";
			a++;
			}
			else {
				this.style.color = "black";
				str.textContent = "Game Over"; 
				w.stop();
				highsc();
				Sound.stop();
			};
		};
	});};};

b2.addEventListener("click", function(){
      lvl.textContent = "The Hard Level";
     square.classList.add("clicks");
	square.textContent = "click to start";
     	
     w.reset();
     for (var i = 0; i<25 ; i++){
	squares[i].style.opacity = 0;
	squares[i].textContent = null;
	Sound.stop();

};
      canvas.style.height ="275px";
      num = [];
      for (var i = 0; i<25 ; i++){
	num.push(i+1);};
	shuffle(num);
console.log(num);
	square.addEventListener("click",function(){
	tc1();
	setTimeout(tc2,1000);
	setTimeout(tc3,2000)
	setTimeout(stargame,3000);   
});

});
function shuffle(array) {
    var a = array.length;
    var t, i;
    while (a > 0) {
        i = Math.floor(Math.random() * a);
        a--;
        t = array[a];
        array[a] = array[i];
        array[i] = t;
    }
    return array;
}

function sp(){
	var t = 0;
	var i , up;

function upd(){
	t += d();
	var newt = tnew(t);
  s.textContent = newt;
}
 function d(){
 	var now = Date.now();
 	var tp = now - up;
 	up = now
 	return tp;
 }
 function tnew(timeInMilliseconds){
 	var t = new Date(timeInMilliseconds);
 	var min = t.getMinutes().toString();
 	var sec = t.getSeconds().toString();
 	var ms = t.getMilliseconds().toString();
    if(min.length<2){
       min = "0" + min;
    }
    if(sec.length<2){
    	sec = "0" + sec ;
    }
    if(ms.length<2){
    	ms = '00' + ms;
    }
    if(ms.length=2&&ms.length<3){
    	ms = '0' + ms;
    }
    return     sec + ':' + ms;
 }
 this.isOn = false;
 this.start = function(){
 	if(!this.isOn){
 	i = setInterval(upd, 10);
 	up = Date.now();
 	newg.textContent = "New Game";
 	this.isOn = true;}
 };
 this.stop = function(){
 	if (this.isOn){
 		clearInterval(i);
 		i = null;
 		newg.textContent = "Play Again?";
 		this.isOn = false;
 	    f = tnew(t);
 	    }
 };
 this.reset = function(){
 	clearInterval(i);
 		i = null;
 		this.isOn = false;
 	t = 0;
    s.textContent = tnew(t);
 };}

console.log(num);
function stargame(){
	for(var i = 20;i<25;i++){
		squares[i].textContent = null;
		squares[i].style.backgroundColor = null;
	}
	square.textContent = null;
	square.classList.add("clicks");
	square.classList.remove("clickss");
    w.start();
   Sound.play();
  for (var i = 0; i<25; i++){
	squares[i].textContent = num[i];
	squares[i].style.backgroundColor = "black";
	squares[i].style.opacity = 1;
};
  var e = 26;
  var d = 1;
for (var i = 0; i<25 ; i++){
	squares[i].addEventListener("click", function(){
		if(Number(this.textContent) === d){
			if(e<51){
			this.textContent = e;
			d++;
			e++;}
			else if(d<50){
			this.style.color = "black";
			d++;
			}
			else {
				this.style.color = "black";
				str.textContent = "Game Over"; 
				w.stop();
				Sound.stop();
			};
		};
	});};};


	function highsc1(){
	g = localStorage.hs11;
h = localStorage.hs21;
j= localStorage.hs31;
k=localStorage.hs41;
l=localStorage.hs51;
	if (f < g) {
 	    	localStorage.hs21 = g;
 	    	localStorage.hs11 = f;
 	    	localStorage.hs31 = h;
 	    	localStorage.hs41 = j;
 	    	localStorage.hs51 = k;
 	    }
 	    else if (f<h) {
 	    	localStorage.hs21 = f;
 	    	localStorage.hs31 = h;
 	    	localStorage.hs41 = j;
 	    	localStorage.hs51 = k;

 	    }
 	    else if (f< j){
 	    	localStorage.hs31 = f;
 	    	localStorage.hs41 = j;
 	    	localStorage.hs51 = k;

 	    }
 	    else if (f< k){
 	    	localStorage.hs41 = f;
 	    	localStorage.hs51= k;
 	    }
 	    else if (f< l) {
 	    	localStorage.hs51s = f;
 	    }
}

function highsc(){
	g = localStorage.hs1;
h = localStorage.hs2;
j= localStorage.hs3;
k=localStorage.hs4;
l=localStorage.hs5;
	if (f < g) {
 	    	localStorage.hs2 = g;
 	    	localStorage.hs1 = f;
 	    	localStorage.hs3 = h;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;
 	    }
 	    else if (f<h) {
 	    	localStorage.hs2 = f;
 	    	localStorage.hs3 = h;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;

 	    }
 	    else if (f< j){
 	    	localStorage.hs3 = f;
 	    	localStorage.hs4 = j;
 	    	localStorage.hs5 = k;

 	    }
 	    else if (f< k){
 	    	localStorage.hs4 = f;
 	    	localStorage.hs5 = k;
 	    }
 	    else if (f< l) {
 	    	localStorage.hs5 = f;
 	    }
}