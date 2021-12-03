canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
var current_position_of_x = 0;
var current_position_of_y = 0;
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;
if (mouseEvent="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle="turquoise";
    ctx.lineWidth=3;
    
    console.log("current position of X ="+current_position_of_x+"current position of Y="+current_position_of_y );
    console.log("last position of X="+last_position_of_x+"last position of Y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;

}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle="turquoise";
    ctx.lineWidth=3;
    
    console.log("current position of X ="+current_position_of_x+"current position of Y="+current_position_of_y );
    console.log("last position of X="+last_position_of_x+"last position of Y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;

}