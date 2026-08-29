<!DOCTYPE html>
<html>
<head>
<title>Ultimate Football 2026</title>

<style>
body {
    background:#222;
    color:white;
    text-align:center;
    font-family:Arial;
}

canvas {
    background:green;
    border:5px solid white;
}
</style>

</head>

<body>

<h1>⚽ Ultimate Football 2026</h1>

<p>
Arrow Keys = Move Player |
G = Goal |
T = +30 Seconds |
B = Slow Bot |
R = Reset
</p>

<canvas id="gameCanvas" width="900" height="500"></canvas>


<script>

const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");


let score=0;
let enemyScore=0;
let time=90;
let botSpeed=2;


let keys={};


let player={
x:100,
y:250,
size:30,
speed:5
};


let bot={
x:750,
y:250,
size:30,
speed:2
};


let ball={
x:450,
y:250,
r:12,
vx:0,
vy:0
};



document.addEventListener("keydown",e=>{

keys[e.key]=true;


if(e.key=="g"||e.key=="G")
score++;


if(e.key=="t"||e.key=="T")
time+=30;


if(e.key=="b"||e.key=="B")
bot.speed=1;


if(e.key=="r"||e.key=="R")
reset();

});



document.addEventListener("keyup",e=>{
keys[e.key]=false;
});



function update(){

// player

if(keys["ArrowUp"])
player.y-=player.speed;

if(keys["ArrowDown"])
player.y+=player.speed;

if(keys["ArrowLeft"])
player.x-=player.speed;

if(keys["ArrowRight"])
player.x+=player.speed;



// bot AI

if(bot.y<ball.y)
bot.y+=bot.speed;

if(bot.y>ball.y)
bot.y-=bot.speed;



// ball

ball.x+=ball.vx;
ball.y+=ball.vy;

ball.vx*=0.98;
ball.vy*=0.98;



if(ball.y<0 || ball.y>500)
ball.vy*=-1;



collision();



if(ball.x<0){
enemyScore++;
resetBall();
}


if(ball.x>900){
score++;
resetBall();
}

}



function collision(){


let d=Math.hypot(
player.x-ball.x,
player.y-ball.y
);


if(d<40){

ball.vx=8;
ball.vy=(ball.y-player.y)/5;

}



d=Math.hypot(
bot.x-ball.x,
bot.y-ball.y
);


if(d<40){

ball.vx=-8;
ball.vy=(ball.y-bot.y)/5;

}

}



function draw(){

ctx.clearRect(0,0,900,500);


// field

ctx.fillStyle="green";
ctx.fillRect(0,0,900,500);


// middle line

ctx.strokeStyle="white";
ctx.beginPath();
ctx.moveTo(450,0);
ctx.lineTo(450,500);
ctx.stroke();


// player

ctx.fillStyle="blue";
ctx.fillRect(
player.x,
player.y,
player.size,
player.size
);


// bot

ctx.fillStyle="red";
ctx.fillRect(
bot.x,
bot.y,
bot.size,
bot.size
);


// ball

ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(
ball.x,
ball.y,
ball.r,
0,
Math.PI*2
);
ctx.fill();


// scoreboard

ctx.fillStyle="white";
ctx.font="30px Arial";

ctx.fillText(
score+" - "+enemyScore,
420,
40
);

ctx.fillText(
"Time: "+time,
20,
40
);

}



function resetBall(){

ball.x=450;
ball.y=250;
ball.vx=0;
ball.vy=0;

}



function reset(){

score=0;
enemyScore=0;
time=90;
resetBall();

}



setInterval(()=>{

if(time>0)
time--;

},1000);



function game(){

update();
draw();

requestAnimationFrame(game);

}


game();


</script>

</body>
</html><!DOCTYPE html>
<html>
<head>
<title>Ultimate Football 2026</title>

<style>
body {
    background:#222;
    color:white;
    text-align:center;
    font-family:Arial;
}

canvas {
    background:green;
    border:5px solid white;
}
</style>

</head>

<body>

<h1>⚽ Ultimate Football 2026</h1>

<p>
Arrow Keys = Move Player |
G = Goal |
T = +30 Seconds |
B = Slow Bot |
R = Reset
</p>

<canvas id="gameCanvas" width="900" height="500"></canvas>


<script>

const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");


let score=0;
let enemyScore=0;
let time=90;
let botSpeed=2;


let keys={};


let player={
x:100,
y:250,
size:30,
speed:5
};


let bot={
x:750,
y:250,
size:30,
speed:2
};


let ball={
x:450,
y:250,
r:12,
vx:0,
vy:0
};



document.addEventListener("keydown",e=>{

keys[e.key]=true;


if(e.key=="g"||e.key=="G")
score++;


if(e.key=="t"||e.key=="T")
time+=30;


if(e.key=="b"||e.key=="B")
bot.speed=1;


if(e.key=="r"||e.key=="R")
reset();

});



document.addEventListener("keyup",e=>{
keys[e.key]=false;
});



function update(){

// player

if(keys["ArrowUp"])
player.y-=player.speed;

if(keys["ArrowDown"])
player.y+=player.speed;

if(keys["ArrowLeft"])
player.x-=player.speed;

if(keys["ArrowRight"])
player.x+=player.speed;



// bot AI

if(bot.y<ball.y)
bot.y+=bot.speed;

if(bot.y>ball.y)
bot.y-=bot.speed;



// ball

ball.x+=ball.vx;
ball.y+=ball.vy;

ball.vx*=0.98;
ball.vy*=0.98;



if(ball.y<0 || ball.y>500)
ball.vy*=-1;



collision();



if(ball.x<0){
enemyScore++;
resetBall();
}


if(ball.x>900){
score++;
resetBall();
}

}



function collision(){


let d=Math.hypot(
player.x-ball.x,
player.y-ball.y
);


if(d<40){

ball.vx=8;
ball.vy=(ball.y-player.y)/5;

}



d=Math.hypot(
bot.x-ball.x,
bot.y-ball.y
);


if(d<40){

ball.vx=-8;
ball.vy=(ball.y-bot.y)/5;

}

}



function draw(){

ctx.clearRect(0,0,900,500);


// field

ctx.fillStyle="green";
ctx.fillRect(0,0,900,500);


// middle line

ctx.strokeStyle="white";
ctx.beginPath();
ctx.moveTo(450,0);
ctx.lineTo(450,500);
ctx.stroke();


// player

ctx.fillStyle="blue";
ctx.fillRect(
player.x,
player.y,
player.size,
player.size
);


// bot

ctx.fillStyle="red";
ctx.fillRect(
bot.x,
bot.y,
bot.size,
bot.size
);


// ball

ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(
ball.x,
ball.y,
ball.r,
0,
Math.PI*2
);
ctx.fill();


// scoreboard

ctx.fillStyle="white";
ctx.font="30px Arial";

ctx.fillText(
score+" - "+enemyScore,
420,
40
);

ctx.fillText(
"Time: "+time,
20,
40
);

}



function resetBall(){

ball.x=450;
ball.y=250;
ball.vx=0;
ball.vy=0;

}



function reset(){

score=0;
enemyScore=0;
time=90;
resetBall();

}



setInterval(()=>{

if(time>0)
time--;

},1000);



function game(){

update();
draw();

requestAnimationFrame(game);

}


game();


</script>

</body>
</html>