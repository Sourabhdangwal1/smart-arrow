var main=document.querySelector("#main")
var crsr=document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x+"px"
crsr.style.top=dets.y+"px"
})


// dets is a parameter representing the event object. It contains details about the mousemove event, such as the position of the mouse pointer, the target element where the event occurred, and other related information.


// crsr.style.left:

// Sets the horizontal position of the .cursor element relative to the main element.
// dets.x gives the mouse's X-coordinate in pixels.
// + "px" ensures the value is treated as a valid CSS pixel unit.


// crsr.style.top:

// Sets the vertical position of the .cursor element relative to the main element.
// dets.y gives the mouse's Y-coordinate in pixels.
