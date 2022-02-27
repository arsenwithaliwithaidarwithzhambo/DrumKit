for(let i =0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttons =this.innerHTML;
        switch(buttons){
            case 'w':
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
            case 'a':
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
            case 's':
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;
            case 'd':
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
            case 'j':
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
            case 'k':
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;
            case 'l':
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;
            default:break;
        }
    });
}

$(document).ready(function(){
    $("body").keypress(function(event){
        if(event.which ===119){
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        else if(event.which===97){
            var audio = new Audio("sounds/tom-2.mp3");
                audio.play()
        }
        else if(event.which===115){
            var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
        }
        else if(event.which ===100){
            var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
        }
        else if(event.which ===106){
            var audio = new Audio("sounds/crash.mp3");
                audio.play();
        }
        else if(event.which ===107){
             var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
        }
        else if(event.which ===108){
            var audio = new Audio("sounds/snare.mp3");
                audio.play();
        }
    })
})
