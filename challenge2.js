let speed = 120

// If the speed if less than 70, the output should be "Ok".
if(speed<=70) {console.log("Ok")}

//If the speed is between 70 and 130, for every 5km/s above the speed limit(70), one demerit point is given and the total number is printed out.
else if(speed>70 && speed<=130) {
    limit = speed - 70
    point = Math.floor(limit/5)
    console.log("Points:" + point);
}
// If the speed is above 130, the function should print out "License suspended".
else if(speed>130){console.log("License suspended")}

console.log(speed);

