var numberofDrumButtons = document.querySelectorAll(".drum").length

for(let i = 0;i<= numberofDrumButtons;i++)
document.querySelectorAll("button")[i].addEventListener("click",function(){
    //var audio = new Audio('sounds/tom-4.mp3')
    //audio.play();
    //console.log(this.innerHTML);
    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break; 
    }
    

});

document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("msg").innerHTML = document.getElementById("txt").value;

})


document.body.addEventListener("keydown",function(event){
    var key = event.key;
    switch(key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3')
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3')
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-4.mp3')
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/snare.mp3')
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/crash.mp3')
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/kick-bass.mp3')
                audio.play();
                break;             

    }
});

