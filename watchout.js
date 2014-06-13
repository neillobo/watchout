// start slingin' some d3 here.

//Game Options
var gameOptions = {
height : 540,
width : 720
};
var numEnemies = 0;


//Game Stats
var currentScore = 0;
var highScore = 0;

//Establish Player
//Give color
//Have him respond to mouse drag and then cursor keys

var svg= d3.select(".game").append("svg")
  .attr("width", gameOptions.width)
  .attr("height", gameOptions.height);

  svg.append("rect")
  .attr({
    x: 0,
    y: 0,
    width: gameOptions.width,
    height: gameOptions.height,
  })
  .style("fill", "silver");



var Player = function(){
  this.icon =svg.append("circle")
  .attr({
    cx: gameOptions.width/2 - 25,
    cy: gameOptions.height/2 - 25,
    r: 20
  }).style("fill", "black");

};

var player = new Player();
// player.icon.transition().duration(5000).attr("cx", 200)
//   .transition().duration(5000).attr("cy", 50)
//   .transition().duration(1000).attr({
//     cy: gameOptions.height - 50,
//     cx: gameOptions.width - 50
//   });
//

var Enemy = function(x,y){
  this.icon =svg.append('circle')
  .attr({
    cx: x,
    cy: y,
    r: 10
  }).style("fill", "blue");
};



var createEnemy = function(){
  for(var i = 0; i < 30; i++){
    var x = 20 + Math.floor(Math.random()* (gameOptions.width - 20));
    var y = 20 + Math.floor(Math.random()* (gameOptions.height - 20));
    new Enemy(x,y);
  }
};

createEnemy();





