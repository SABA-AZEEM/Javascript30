//with the help of mouse click
document.querySelectorAll("button").forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let key=e.target.innerHTML;
        makeAnimation(key);
        makeSound(key);
    });
});
//with the help of keyboard key press
document.addEventListener('keypress',(e)=>{
    makeAnimation(e.key);
    makeSound(e.key);
})


//make sound function
function makeSound(key){
    switch(key){
        case 'A':
            let obj1=new Audio('./sounds/boom.wav');
            obj1.play();
            break;
        case 'S':
            let obj2=new Audio('./sounds/clap.wav');
            obj2.play();
            break;
        case 'D':
            let obj3=new Audio('./sounds/hihat.wav');
            obj3.play();
            break;
        case 'F':
            let obj4=new Audio('./sounds/kick.wav');
            obj4.play();
            break;
        case 'G':
            let obj5=new Audio('./sounds/openhat.wav');
            obj5.play();
            break;
        case 'H':
            let obj6=new Audio('./sounds/ride.wav');
            obj6.play();
            break;
        case 'J':
            let obj7=new Audio('./sounds/snare.wav');
            obj7.play();
            break;
        case 'K':
            let obj8=new Audio('./sounds/tink.wav');
            obj8.play();
            break;
        case 'L':
            let obj9=new Audio('./sounds/tom.wav');
            obj9.play();
            break;
        default:
            console.log(key);
    }
}

//make animation function
function makeAnimation(key){
    let activeButton=document.querySelector('.'+key);
    activeButton.classList.add("click_effect");
    setTimeout(()=>{
        activeButton.classList.remove("click_effect")
    },100);
}