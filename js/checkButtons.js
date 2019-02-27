var betBlack = document.getElementsByClassName('bet__blackcol')[0];
var betRed = document.getElementsByClassName('bet__redcol')[0];
var input = document.getElementsByClassName('bet__input_num')[0];
var inputRed = document.getElementsByClassName('bet__checkbox_red')[0];
var inputBlack = document.getElementsByClassName('bet__checkbox_black')[0];





input.addEventListener("input", function(){ inputRed.checked=false; inputBlack.checked=false; });
betRed.addEventListener("click", function(){ input.value=""; });
betBlack.addEventListener("click", function(){ input.value=""; });

