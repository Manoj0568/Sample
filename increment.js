let twitter = document.getElementById("twitter")
let youtube = document.getElementById("youtube")
let facebook = document.getElementById("facebook")



let load =0;
const myinterval = setInterval(loading,30);

function loading(){
    load++
    console.log(load)
    if(load>=100){
        clearInterval(myinterval);
    }

    twitter.innerText = scale(load,0,100,0,12000);
    youtube.innerText = scale(load,0,100,0,5000);
    facebook.innerText = scale(load,0,100,0,7500);
    
}

function scale(number, inmin,inmax,outmin,outmax){
   return (number - inmin)*(outmax-outmin)/(inmax-inmin) + outmin;
}