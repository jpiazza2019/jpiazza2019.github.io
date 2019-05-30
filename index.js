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
    hamlet: -3,
    claudius: -5,
    ahab: 2,
    ishmael: 3,
    mendingwall: 6,
    janie: 1,
    estragon: 0,
    godot: 0
  }

  var goodVals = {
    hamlet: -3,
    claudius: -6,
    ahab: -2,
    ishmael: 2,
    mendingwall: 5,
    janie: 5,
    estragon: -2,
    godot: 0
  }

  for (var answer of answers) {
    scores[answer.value] += 1;
  }
  sumX = 0;
  sumY = 0;

  for(var char in scores) {
    sumX += lawVals[char] * scores[char];
    sumY += goodVals[char] * scores[char];
  }

  finalX = sumX / 5;
  finalY = sumY / 5;

  console.log(finalX)
  console.log(finalY)
  $("#compassQuiz").css('display', 'none');
  document.getElementById("res").innerHTML = (finalX.toString()+" "+finalY.toString())
})
