$("#compassQuiz").submit(function(event) {
  event.preventDefault();

  var answers = $(this).serializeArray();
  var scores = {
    hamlet: 0,
    claudius: 0,
    ahab: 0,
    ishmael: 0,
    mendingwall: 0,
    janie: 0,
    estragon: 0,
    godot: 0
  }

  var lawVals = {
    hamlet: -4,
    claudius: -5,
    ahab: 2,
    ishmael: 3,
    mendingwall: 6,
    janie: 1,
    estragon: 0,
    godot: 0
  }

  var goodVals = {
    hamlet: -1,
    claudius: -6,
    ahab: -4,
    ishmael: 4,
    mendingwall: 5,
    janie: 6,
    estragon: -2,
    godot: 0
  }

  for (var answer of answers) {
    scores[answer.value] += 1;
  }
  sumX = 0;
  sumY = 0;
  for(var animal in scores) {
    sumX += lawVals[animal] * scores[animal];
    sumY += goodVals[animal] * scores[animal];
  }

  finalX = sumX / 3;
  finalY = sumY / 3;

  console.log(finalX)
  console.log(finalY)
  $("#compassQuiz").css('display', 'none');
  $(".result#"+finalX.toString()+" "+finalY.toString()).css('display', 'block');
})
