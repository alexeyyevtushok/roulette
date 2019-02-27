var req = document.getElementsByClassName('range__input_text')[0];
var req1 = "Roulette";

var range = document.getElementsByClassName('range')[0];
var circle = document.getElementById('floatingCirclesG');

var xmlhttp5 = new XMLHttpRequest();


 xmlhttp5.onreadystatechange = function() {
   console.log("Response: ");
   console.log(this.readyState);
   console.log(this.status);
   console.log(this.responseText);
   if (this.readyState == 4 && this.status == 200) {
       console.log("Okey");
       console.log(this.responseJson);
       var responseJson = JSON.parse(this.responseText);
       addToStats(responseJson);
   }
 };


        // btn2.addEventListener('click',
             function sendRangeNum(){ 
             xmlhttp5.open("POST", 'https://iteraapp.herokuapp.com/api/statistic/range', true); // must open every time
             xmlhttp5.setRequestHeader("Content-type", "application/json");
             var jsonBody2 = JSON.stringify({
                "range": req.value
            }); 
             xmlhttp5.send(jsonBody2); 
             console.log("Event");
         }
    // );


         function doStatistic(){
            if(isValidRange(rangeDom1, rangeDom2)){
                sendRanges();
                sendRangeNum();
                range.style.opacity = 0;
                circle.style.opacity =1;            
                setTimeout(function () {
                    range.style.opacity = 1;
                    circle.style.opacity = 0;
                },5200);
            }
         }

     btn1.onclick = doStatistic;
           

    function addToStats(stat) {
        setTimeout(function(){
        var stats = document.getElementsByClassName('log__stats')[0];
        var row = stats.insertRow(0),
          cell1 = row.insertCell(0),
          cell2 = row.insertCell(1),
          cell3 = row.insertCell(2),
          cell4 = row.insertCell(3),
          cell5 = row.insertCell(4),
          cell6 = row.insertCell(5);
      
        stats.deleteRow(1);
      
          console.log('dsadsadsadsadsa',stat);
          cell1.innerHTML = `<td>Value: <div class="colored colored_green">${stat[0].value}</div></td>`;
          cell2.innerHTML = `<td>Count: <div class="colored colored_red">${stat[0].count}</div></td>`;
          cell3.innerHTML = `<td>Percent: <div class="colored colored_wide">${Math.round(stat[0].percent *100)}%</div></td>`;
          cell4.innerHTML = `<td>Value1: <div class="colored colored_green">${stat[1].value}</div></td>`;
          cell5.innerHTML = `<td>Count1: <div class="colored colored_red">${stat[1].count}</div></td>`;
          cell6.innerHTML = `<td>Percent1: <div class="colored colored_wide">${Math.round(stat[1].percent *100)}%</div></td>`;
        }, 5100);
      }


