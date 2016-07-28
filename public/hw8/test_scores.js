var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};

function addScore() {
  var name = $("name").value;
  var score = parseInt($("score").value);
  if (isNaN(score) || name.length == 0) {
    alert("Name or score invalid!");
  } else {
    names.push(name);
    scores.push(score);
    $("name").value = "";
    $("score").value = "";
  };
};

function displayResults() {
  var avgScore = calcAvg(scores);
  var topScore = Math.max(...scores);
  var topName = names[scores.indexOf(topScore)];
  
  $("results").innerHTML = '<h2>Results</h2>\
  <p>Average score = ' + avgScore + '</p>\
  <p>High score = ' + topName + ' with a score of ' + topScore + '</p>';
};

function displayScores() {
  var content = '';
  names.forEach(function(name, i) {
    content += '<tr><td>' + name + '</td><td>' + scores[i] + '</td></tr>'
  });
  $("scores_table").innerHTML = '<h2>Scores</h2>\
    <tr><th>Name</th><th>Score</th></tr>' + content;
};

function calcAvg(scores) {
  if (scores.length > 0) {
    return Math.round(scores.reduce(function(a, b) { return a + b; }, 0) / scores.length);
  } else {
    return 0;
  }
};