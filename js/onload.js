var xmlhttp1 = new XMLHttpRequest();

xmlhttp1.onreadystatechange = function () {
  console.log("Response: ");
  console.log(this.readyState);
  console.log(this.status);
  console.log(this.responseText);
  if (this.readyState == 4 && this.status == 200) {
    console.log("OkeyGET");
    console.log(this.responseJson);
    var responseJson = JSON.parse(this.responseText);
    addHistoryFromDB(responseJson);
    addHistoryFromDB(responseJson);
    addHistoryFromDB(responseJson);
  }
};

window.addEventListener('load',
  function () {
    xmlhttp1.open("GET", 'https://iteraapp.herokuapp.com/api/history', true); // must open every time
    xmlhttp1.setRequestHeader("Content-type", "application/json");
    xmlhttp1.send();
    console.log("Event");
  }
);

function addHistoryFromDB(result) {
  var table = document.getElementsByClassName('log__history')[0];
  for (var i = 2; i >= 0; i--) {
    var row = table.insertRow(1),
      cell1 = row.insertCell(0),
      cell2 = row.insertCell(1),
      cell3 = row.insertCell(2),
      cell4 = row.insertCell(3);

    table.deleteRow(table.rows.length - 1);

    cell1.innerHTML = `<td><div class="colored colored_widly">${result[i].range}</div></td>`;
    cell2.innerHTML = `<td><div class="colored">${result[i].choice}</div></td>`;
    cell3.innerHTML = `<td><div class="colored" >${result[i].bet}</div></td>`;
    cell4.innerHTML = `<td><div class="colored">${result[i].game}</div></td>`;
  }
}