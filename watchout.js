var Game = {
  width : 600,
  height : 500,
  numEnemies : 10
};

var svg = d3.select('.gameBoard').append('svg')
  .attr({
    width : Game.width,
    height : Game.height
  });

var canvas = svg.append('rect')
  .attr({
    width : Game.width,
    height : Game.height
  }).style('fill','silver');

var createEnemies = function(){
  var enemies = [];
  for(var i = 0; i < Game.numEnemies; i++){
    enemies[i] = {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    };
  }
  return enemies;
};

var render = function(enemyData){
  var enemyObjects = canvas.selectAll('circle').data(enemyData, function(d){
    return d.id;
  });
  enemyObjects.enter().append('circle')
  .attr('cx', 50).attr('cy', 50).attr('r', 5);
  enemyObjects.exit().remove();
};

var enemyData = createEnemies();

// render(enemyData);

