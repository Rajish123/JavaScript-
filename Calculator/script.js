(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.getElementById('btnClear');
    // let equal = document.querySelector('.equal');
    let equal = document.getElementById('btnEqual');
    console.log(eval(screen.value));


    // many buttons inside .btn so to find out which button was pressed, use loop
    buttons.forEach(function(button){
        // function will only work if event is active
        button.addEventListener('click',(e)=>{
            // console.log(e,"event")
            let value = e.target.dataset.num;
            // value is pushed inside screen
            screen.value += value;
        })
    });

    btnEqual.addEventListener("click",function(e){
        if (screen.value === ''){
            screen.value = "Please enter";
        }else{
            let answer = eval(screen.value);
            console.log(eval(screen.value));
            screen.value = answer;
        }
    })

    clear.addEventListener('click',function(e){
        screen.value = "";
    })

})();


