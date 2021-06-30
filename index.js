// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    changeText()
});

function changeText() {
    const textNode = document.getElementById("text")
    textNode.innerHTML = "This is really cool!";
    // OR (both work)
    // document.getElementById("text").innerHTML = "This is really cool!"
}