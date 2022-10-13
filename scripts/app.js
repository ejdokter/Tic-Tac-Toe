$(document).ready(function () {
  $(".turn").append("Player Turn: 1");

  $(".resetbtn").click(function () {
    $(".modal").css("visibility", "hidden");
    // location.reload(true);
    $(".cell").html("");
    $(".turn").text("Player Turn: 1");
    turn = 1;
    play = true;
  });

  let turn = 1;
  let play = true;

  $("th").click(function () {
    if ($(this).text() == "" && play) {
      if (turn % 2 === 1) {
        $(this).append("X");
        $(this).css("color", "rgb(255, 187, 0)");
      } else {
        $(this).append("O");
        $(this).css("color", "rgb(136, 205, 255)");
      }
      turn++;
      findWinner();
      changeTurn();
    }
    //tie
    if (turn > 9) {
      $(".modal").css("visibility", "visible");
      return $(".gameover").text("TIE GAME");

      console.log("TIE");
    }
  });

  function findWinner() {
    // long af function
    // check rows
    if (
      ($("#table_0").text() == "X" &&
        $("#table_1").text() == "X" &&
        $("#table_2").text() == "X") ||
      ($("#table_3").text() == "X" &&
        $("#table_4").text() == "X" &&
        $("#table_5").text() == "X") ||
      ($("#table_6").text() == "X" &&
        $("#table_7").text() == "X" &&
        $("#table_8").text() == "X")
    ) {
      play = false;
      // $(".resetbtn").css("visibility", "visible");
      $(".modal").css("visibility", "visible");
      return $(".gameover").text("X WINS");
    }

    if (
      ($("#table_0").text() == "O" &&
        $("#table_1").text() == "O" &&
        $("#table_2").text() == "O") ||
      ($("#table_3").text() == "O" &&
        $("#table_4").text() == "O" &&
        $("#table_5").text() == "O") ||
      ($("#table_6").text() == "O" &&
        $("#table_7").text() == "O" &&
        $("#table_8").text() == "O")
    ) {
      play = false;
      $(".modal").css("visibility", "visible");
      return $(".gameover").text("O WINS");
    }

    //check columns
    if (
      ($("#table_0").text() == "X" &&
        $("#table_3").text() == "X" &&
        $("#table_6").text() == "X") ||
      ($("#table_1").text() == "X" &&
        $("#table_4").text() == "X" &&
        $("#table_7").text() == "X") ||
      ($("#table_2").text() == "X" &&
        $("#table_5").text() == "X" &&
        $("#table_9").text() == "X")
    ) {
      play = false;
      $(".modal").css("visibility", "visible");
      return $(".gameover").text("X WINS");
    }

    if (
      ($("#table_0").text() == "O" &&
        $("#table_3").text() == "O" &&
        $("#table_6").text() == "O") ||
      ($("#table_1").text() == "O" &&
        $("#table_4").text() == "O" &&
        $("#table_7").text() == "O") ||
      ($("#table_2").text() == "O" &&
        $("#table_5").text() == "O" &&
        $("#table_9").text() == "O")
    ) {
      play = false;
      $(".modal").css("visibility", "visible");
      return $(".gameover").text("O WINS");
    }

    //check diagnols
    if (
      ($("#table_0").text() == "X" &&
        $("#table_4").text() == "X" &&
        $("#table_8").text() == "X") ||
      ($("#table_6").text() == "X" &&
        $("#table_4").text() == "X" &&
        $("#table_2").text() == "X")
    ) {
      play = false;
      $(".modal").css("visibility", "visible");
      return $(".gameover").text("X WINS");
    }

    if (
      ($("#table_0").text() == "O" &&
        $("#table_4").text() == "O" &&
        $("#table_8").text() == "O") ||
      ($("#table_6").text() == "O" &&
        $("#table_4").text() == "O" &&
        $("#table_2").text() == "O")
    ) {
      play = false;
      $(".modal").css("visibility", "visible");
      return $(".gameover").text("O WINS");
    }
  }

  function changeTurn() {
    if (turn % 2 === 1) {
      $(".turn").text("Player Turn: 1");
    } else {
      $(".turn").text("Player Turn: 2");
    }
  }
});
