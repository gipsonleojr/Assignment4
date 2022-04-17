// loop for countdown to 10
function simpleCountdown() {
    var currTime = 10;
    for (var i = 0; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //if statement for output of Blastoff!!! and else output for time left
                document.getElementById("simpleTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        
        } else {
            setTimeout(function () {
                document.getElementById("simpleTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}