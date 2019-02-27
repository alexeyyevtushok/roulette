    var type = "type"; // BLACK / RED / SINGLE / RANGE
    var values = "bet__input_num"; // - / - / 12 / 12,32,23,22
    var degree = "degree"; // 0-360
    var sendButton = "send-button";
    var result = "result";
    var tempCoord = 0;
    var nowDegree = 180;

    var typeDOM;
    var valuesDOM = document.getElementsByClassName(values)[0];
    var degreeDOM = document.getElementsByName(degree)[0];
    var sendButtonDOM = document.getElementsByName(sendButton)[0];
    var rouletteDOM = document.getElementsByClassName('roulette__wheel')[0];

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        console.log("Response: ");
        console.log(this.readyState);
        console.log(this.status);
        console.log(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            console.log("OkeyRequest");
            console.log(this);
            var responseJson = JSON.parse(this.responseText);
            inputResult(responseJson);
            rotateRoulette(responseJson.resultDegree);
            addToHistory(responseJson);
            
            console.log("TESIIIIIIIING");
        }
    };

    console.log(valuesDOM.value.split(","));

     sendButtonDOM.addEventListener("click",
        function(){
            // if(checkType()=="SINGLE")
            if(checkType()=="SINGLE" && !isValid(valuesDOM, 0, 36))
                return;
                typeDOM = checkType();
                xmlhttp.open("POST", 'https://iteraapp.herokuapp.com/api/bets/roulette', true); // must open every time
                xmlhttp.setRequestHeader("Content-type", "application/json"); // must have
                var jsonBody = JSON.stringify({
                    "type": typeDOM,
                    "values": valuesDOM.value.split(","),
                    "degree": nowDegree
                });
                xmlhttp.send(jsonBody);
                console.log("Event");
        }
     );

    function inputResult(result) {
        console.log("Result: ");
        console.log(result);
        var qw = document.getElementsByClassName('roulette__result')[0];
        if (result.game == "Win") {
            setTimeout(function () {
                qw.innerHTML = 'You Win'
            }, 5100);
        } else if (result.game == "Lose") {
            setTimeout(function () {
                qw.innerHTML = 'You Lose'
            }, 5100);
        }
    }

    function rotateRoulette(degree) {
        console.log(degree);
        tempCoord += 720 + (-degree);
        nowDegree += degree;
        if (nowDegree > 360.0)
            nowDegree -= 360.0;
        rouletteDOM.style.cssText = "transform: rotate(" + tempCoord + "deg);";
    }

    function checkType() {
        var black = document.getElementsByClassName('bet__checkbox_black')[0];
        var red = document.getElementsByClassName('bet__checkbox_red')[0];
        if (black.checked)
            return 'BLACK';
        else if (red.checked)
            return 'RED';
        else
            return 'SINGLE';           
    }