 const display = document.getElementById("display");
 
function submit(){
    if (display.value > 9000) {
    document.getElementById("dialogue").innerHTML = "You're pretty strong!";
    document.getElementById("goku").src='assets/goku.png';
    }
    if (display.value <= 9000) {
        document.getElementById("dialogue").innerHTML = "You're weak...";
        document.getElementById("goku").src='assets/goku_mad.png';
    }
}
function reset(){
     document.getElementById("dialogue").innerHTML = "Tell me you're power level!";
     document.getElementById("goku").src='assets/goku.png';
}