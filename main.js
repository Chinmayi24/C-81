canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth = 1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.Strokestyle= "blue";
ctx.linewidth = 5;
ctx.arc(260,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.Strokestyle= "black";
ctx.linewidth = 5;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.Strokestyle= "red";
ctx.linewidth = 5;
ctx.arc(440,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.Strokestyle= "yellow";
ctx.linewidth = 5;
ctx.arc(305,260,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.Strokestyle= "green";
ctx.linewidth = 5;
ctx.arc(395,260,40,0,2*Math.PI);
ctx.stroke();