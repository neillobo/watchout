// start slingin' some d3 here.

//Game Options
var height = 540;
var width = 720;
var numEnemies = 0;


//Game Stats
var currentScore = 0;
var highScore = 0;

//Establish Player
//Give color
//Have him respond to mouse drag and then cursor keys

var svg= d3.select(".game").append("svg")
  .attr("width", 640)
  .attr("height", 500);

  svg.append("rect")
  .attr("x", 0).attr("y", 0 )
  .attr("width", 640)
  .attr("height", 500)
  .style("fill", "silver");

