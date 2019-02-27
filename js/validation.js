

// document.getElementsByClassName('submit')[0].addEventListener("click", function(){
//     if(isValid(document.getElementsByClassName('only-numbers')[0], /^[0-9]+$/)){
//         console.log("Ok");
//     }else{
//         console.log("Bad");
//     }
// });


    issetMessage = false;

function isValid(input, from, to){
    if(check(input, /^[0-9]+$/, "Pattern of bet")) 
        if(input.value >= from && input.value <=to) return true;
        else 
        showMessage(input, "045d78fe4 | Bad: not from 0 to 36");
    return false;
}

function isValidRange(inputBigRange, inputSmallRange){
    pattern = /^[0-9]+-{1}[0-9]+$/;
    if(check(inputBigRange, pattern, "Pattern of first range") && check(inputSmallRange, pattern, "Pattern of second Range")){
        br = inputBigRange.value.split("-");
        sr = inputSmallRange.value.split("-");
        if (isLessThen(br[0],sr[0],inputSmallRange) && isLessThen(sr[1],br[1],inputSmallRange)) return true;
    }
    return false;
}
    function check(val, pattern, name){
        if(val.value.match(pattern)) return true;
        showMessage(val, "045d78fe4 | Bad: " + name);
        return false;
    }

    function isLessThen( small, big, val ){
        console.log(small+":s b:"+big);
        if ((+small<=+big) && +small>=0 && +big>=0) return true;
        showMessage(val, "045d78fe4 |Second range overflow");
        return false;
    }

    function showMessage(val, text){
        val.classList.add('invalid');
        messageDOM = document.createElement('div');
        messageDOM.className = "message";
        messageDOM.innerHTML = '<div class="trouble"><p>'+text+'</p></div>';
        document.body.appendChild(messageDOM);
        setTimeout(function(){val.classList.remove('invalid');}, 5000);
        messageDOM.addEventListener("click", function(){this.remove()});


    }