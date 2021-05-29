
// İsim girme

let guestName = prompt("Lütfen isminizi giriniz");
document.querySelector("#myName").innerHTML = guestName;



// Saat ve günü ekranda gösterme
function showTime(){
    
    var date = new Date();
    var h = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();


    h   = h < 10 ? "0" + h : h;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


    let days = 
    ["Pazartesi", 
    "Salı", 
    "Çarşamba", 
    "Perşembe", 
    "Cuma", 
    "Cumartesi", 
    "Pazar"];


        
    document.querySelector("#myClock").innerHTML = h + ":" + min + ":" + sec + " " + days[date.getDay()];

   setTimeout(showTime, 1000);
}

showTime();