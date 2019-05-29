$("#compassQuiz").submit(function(event) {
  event.preventDefault();

  var answers = $(this).serializeArray();
  var scores = {
    char1: 0,
    char2: 0,
    char3: 0
  }

  var xVals = {
    char1: 1,
    char2: 2,
    char3: 3
  }

  var yVals = {
    char1: 1,
    char2: 2,
    char3: 3
  }

  for (var answer of answers) {
    scores[answer.value] += 1;
  }
  sumX = 0;
  sumY = 0;
  for(var animal in scores) {
    sumX += xVals[animal] * scores[animal];
    sumY += yVals[animal] * scores[animal];
  }

  finalX = sumX / 3;
  finalY = sumY / 3;

  console.log(finalX)
  $("#compassQuiz").css('display', 'none');
  $(".result#"+finalX.toString()+" "+finalY.toString()).css('display', 'block');
})
