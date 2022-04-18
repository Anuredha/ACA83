var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width_pen = 2;

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;



if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color = document.getElementById("color").value;
    width_pen = document.getElementById("width_pen").value;
    
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;

}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_x = e.touches[0].clientX - canvas.offsetLeft
    current_y = e.touches[0].clientY - canvas.offsetTop;

   
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_pen;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();

    last_x = current_x;
    last_y = current_y;
    

    
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clienty - canvas.offsettop;

    if (mouseEvents == "mouseDown"){
        ctx.beginpath();
        ctx.strokesStyle = color;
        ctx.lineWeidth = weidth_of_line;
        ctx.moveto(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;

}
function cleararea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

