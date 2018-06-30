// Select color input
// Select size input
$(function() {
  $("#sizePicker").submit(function(event) {
    event.preventDefault();
    let height = $("#inputHeight").val();
    let width = $("#inputWeight").val();
    makeGrid(height, width);
  });


  // color to be added to the cell when clicked
  $("body").on('click', 'td', function() {
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  });
});

function changeColor() {
  let color = $("#colorPicker").val();
  alert(color)

  $("td").css("background-color", color);
}

// When size is submitted by the user, call makeGrid()

function makeGrid(row, column) {
  $("tr").remove();

  //here is the loop
  for(let i = 0; i < row; i++) {
    $("#pixelCanvas").append("<tr></tr>");
  }
  for(let j = 0; j < column; j++) {
    $("tr").append("<td></td>");
  }
}