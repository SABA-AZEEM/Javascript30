function updateClock(){
    let hourEl=document.querySelector(".hour-hand");
    let minEl=document.querySelector(".min-hand");
    let secEl=document.querySelector(".sec-hand");

    const currentTime=new Date();
    const hours=currentTime.getHours();
    const minutes=currentTime.getMinutes();
    const seconds=currentTime.getSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    hourEl.style.transform=`rotate(${hourDeg}deg)`;
    minEl.style.transform=`rotate(${minuteDeg}deg)`;
    secEl.style.transform=`rotate(${secondDeg}deg)`;
}
//update the clock every second
setInterval(updateClock,1000);
//initial call
updateClock();