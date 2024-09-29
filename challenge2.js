let speed = 120

if(speed<=70) {console.log("Ok")}

else if(speed>70 && speed<=130) {
    limit = speed - 70
    point = Math.floor(limit/5)
    console.log("Points:" + point);
}

else if(speed>130){console.log("License suspended.")}
