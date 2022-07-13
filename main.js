var mouseEvent = "empty";
var lastposition_of_x,lastposition_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width = 2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    currentposition_of_mouse_x = e.clientX - canvas.offsetLeft;
    currentposition_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last position of x,y =");
        console.log("x = " + lastposition_of_x + "y =" + lastposition_of_y);
        ctx.moveTo(lastposition_of_x,lastposition_of_y);
        console.log("Current position of x,y =");
        console.log("x = " + currentposition_of_mouse_x + "y =" + currentposition_of_mouse_y);
        ctx.moveTo(currentposition_of_mouse_x,currentposition_of_mouse_y);
        ctx.stroke();
    


    }
    lastposition_of_x = currentposition_of_mouse_x;
    lastposition_of_y = currentposition_of_mouse_y;

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseLeave",my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent = "mouseLeave";
}
function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}





