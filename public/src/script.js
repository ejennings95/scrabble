$(document).ready(function(){

  var wordScore = new WordScore();
  var letterScore = new LetterScore();
  var game = new Game(wordScore);

  function letterBonusCheck(value) {
    if ($("#DLS").is(":checked")) {
      var dls = $("#DLS").val();
      game.inputArrayOfLetterScore(value, dls);
    } else if ($("#TLS").is(":checked")) {
      var tls = $("#TLS").val();
      game.inputArrayOfLetterScore(value, tls);
    } else {
      game.inputArrayOfLetterScore(value);
    }
  }

  $("#startAgain").hide();

  $("input[type=checkbox]").removeAttr("checked");

  $("#score").text(game.showTotalPoints());

  $("#A").click(function(){
    var value = $("#A").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#B").click(function(){
    var value = $("#B").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#C").click(function(){
    var value = $("#C").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#D").click(function(){
    var value = $("#D").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#E").click(function(){
    var value = $("#E").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#F").click(function(){
    var value = $("#F").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#G").click(function(){
    var value = $("#G").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#H").click(function(){
    var value = $("#H").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#I").click(function(){
    var value = $("#I").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#J").click(function(){
    var value = $("#J").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#K").click(function(){
    var value = $("#K").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#L").click(function(){
    var value = $("#L").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#M").click(function(){
    var value = $("#M").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#N").click(function(){
    var value = $("#N").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#O").click(function(){
    var value = $("#O").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#P").click(function(){
    var value = $("#P").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#Q").click(function(){
    var value = $("#Q").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#R").click(function(){
    var value = $("#R").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#S").click(function(){
    var value = $("#S").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#T").click(function(){
    var value = $("#T").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#U").click(function(){
    var value = $("#U").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#V").click(function(){
    var value = $("#V").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#W").click(function(){
    var value = $("#W").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#X").click(function(){
    var value = $("#X").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#Y").click(function(){
    var value = $("#Y").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#Z").click(function(){
    var value = $("#Z").val();
    letterBonusCheck(value);
    $("#score").text(game.showArrayOfLetterScores());
    $("#word").text(game.showArrayOfLetters(value));
  });

  $("#submit").click(function(){
    if ($("#DWS1").is(":checked")) {
      var dws1 = 2
      wordScore.inputWordTimesBonus(dws1);
    }
    if ($("#DWS2").is(":checked")) {
      var dws2 = 2
      wordScore.inputWordTimesBonus(dws2);
    }
    if ($("#TWS1").is(":checked")) {
      var tws1 = 3
      wordScore.inputWordTimesBonus(tws1);
    }
    if ($("#TWS2").is(":checked")) {
      var tws2 = 3
      wordScore.inputWordTimesBonus(tws2);
    }
    $("#score").text(game.showTotalPoints());
    $("#titlescore").text("Final Score:");
    $(":input").prop("disabled", true);
    $(":button").prop("disabled", true);
    $("#startAgain").show();
    $("#startAgain").prop("disabled", false);
  });

  $("#startAgain").click(function(){
    location.reload();
  });

});
