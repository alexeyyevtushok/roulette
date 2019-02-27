var xmlhttp4 = new XMLHttpRequest();

var btn1 = document.getElementsByClassName('range__button')[0];
    var rangeDom1 = document.getElementsByClassName('range__input_text')[0];
    var rangeDom2 = document.getElementsByClassName('range__input_text')[1];


 xmlhttp4.onreadystatechange = function () {
    console.log("Response: ");
    console.log(this.readyState);
    console.log(this.status);
    console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
        console.log("OkeyRequest");
        console.log(this);
        var responseJson = JSON.parse(this.responseText);
        //addToStats();
        addToHistory(responseJson);
        console.log("TESIIIIIIIING");
    }
};


    function sendRanges() {
        xmlhttp4.open("POST", 'https://iteraapp.herokuapp.com/api/bets/range', false); // must open every time
        xmlhttp4.setRequestHeader("Content-type", "application/json"); // must have
        var jsonBody10 = JSON.stringify({
            "rangeInput": rangeDom1.value,
            "betInput": rangeDom2.value 
        });
        xmlhttp4.send(jsonBody10);
        console.log("Event");
    }