/*Add new row for 'Stats' table*/
function addToStats() {
  var stats = document.getElementsByClassName('log__stats')[0];
  var row = stats.insertRow(0),
    cell1 = row.insertCell(0),
    cell2 = row.insertCell(1),
    cell3 = row.insertCell(2);

  stats.deleteRow(1);

  cell1.innerHTML = `<td>Win: <div class="colored colored_green ">1</div></td>`;
  cell2.innerHTML = '<td>Lose: <div class="colored colored_red">27</div></td>';
  cell3.innerHTML = '<td>K/0: <div class="colored colored_wide">28.9%</div></td>';
}
