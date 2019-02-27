/*Add new row for 'History' table*/
function addToHistory(result) {
  setTimeout(function () {
    var table = document.getElementsByClassName('log__history')[0];
    var row = table.insertRow(1),
      cell1 = row.insertCell(0),
      cell2 = row.insertCell(1),
      cell3 = row.insertCell(2),
      cell4 = row.insertCell(3);

    table.deleteRow(table.rows.length - 1);

    cell1.innerHTML = `<td><div class="colored colored_widly">${result.range}</div></td>`;
    cell2.innerHTML = `<td><div class="colored ${returnColor(result)}">${result.choice}</div></td>`;
    cell3.innerHTML = `<td><div class="colored ${returnBetColor(result)}" >${result.bet}</div></td>`;
    cell4.innerHTML = `<td><div class="colored">${result.game}</div></td>`;
  }, 5100);
}
/*Return color of dropped value*/
function returnColor(result) {
  if (result.color == "BLACK") {
    return "";
  } else if (result.color == "RED") {
    return "colored_red";
  } else if (result.color == "GREEN") {
    return "colored_green";
  }
}
/*Return color of your bet*/
function returnBetColor() {
  var red = document.getElementsByClassName('bet__checkbox_red')[0];
  if (red.checked)
    return "colored_red";
  else
    return "";
}