var xmlhttp7 = new XMLHttpRequest();

xmlhttp7.onreadystatechange = function () {
  console.log("Response: ");
  console.log(this.readyState);
  console.log(this.status);
  console.log(this.responseText);
  if (this.readyState == 4 && this.status == 200) {
    console.log("OkeyGET");
    console.log(this.responseJson);
    var responseJson = JSON.parse(this.responseText);
    rouletteStat(responseJson);
  }
};

sendButtonDOM.addEventListener('click',
  function(){
    xmlhttp7.open("GET", 'https://iteraapp.herokuapp.com/api/statistic/roulette', true); // must open every time
    xmlhttp7.setRequestHeader("Content-type", "application/json");
    xmlhttp7.send();
    console.log("Event");
  }
);


function rouletteStat(rolStat){
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

        console.log('ROULETTESTATWEQWEWQEWQEWQEWQEQWEWQEWQEQW',rolStat);

        cell1.innerHTML = `<td>Value: <div class="colored colored_green">${rolStat[0].value}</div></td>`;
        cell2.innerHTML = `<td>Count: <div class="colored colored_red">${rolStat[0].count}</div></td>`;
        cell3.innerHTML = `<td>Percent: <div class="colored colored_wide">${Math.round(rolStat[0].percent *100)}%</div></td>`;
        cell4.innerHTML = `<td>Value1: <div class="colored colored_green">${rolStat[1].value}</div></td>`;
        cell5.innerHTML = `<td>Count1: <div class="colored colored_red">${rolStat[1].count}</div></td>`;
        cell6.innerHTML = `<td>Percent1: <div class="colored colored_wide">${Math.round(rolStat[1].percent *100)}%</div></td>`;
      },5100);
}