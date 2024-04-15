let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

//to update the seconds 
setInterval(()=>{


//use  of current time object constructor 
    let currentTime = new Date();

    hrs.innerHTML =  (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML =  (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000)

//use  of current time object constructor 




