/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  //document.getElementById("main").style.marginRight = "350px";
  //document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
  //document.getElementById("content-section").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("main").style.opacity = "0.5";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("main").style.marginRight = "0";
  //document.getElementById("main").style.backgroundColor = "white";
  //document.getElementById("content-section").style.backgroundColor = "white";
  document.getElementById("main").style.opacity = "1";
  //document.body.style.backgroundColor = "white";
} 