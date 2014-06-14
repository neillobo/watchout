var Game = {
  width : 600,
  height : 500,
  numEnemies : 10
};

var svg = d3.select('body').append('svg')
  .attr({
    width : Game.width,
    height : Game.height
  }).append('g');
  // .attr("transform", "translate(32,"+ (Game.height / 2) + ")");

//Player is rectangle
//Corresponds to a single object
//Has initial position at height/2 width/2
//new position = new mouse click ps
//
var playerData = [{
  x: Game.width/2,
  y: Game.height/2,
  width: 15,
  height: 15,
  fill: 'black'
}];

var drag = d3.behavior.drag().on('drag', dragmove);

function dragmove(d){
  var x = d3.event.x;
  var y = d3.event.y;
  d3.select(this).attr('x', x-7.5)
  .attr('y',y-7.5);
}

function updatePlayer(pData){
  var rect = svg.selectAll('rect')
    .data(pData);

  rect.enter().append('rect')
    .attr('x', function(d){
      return d.x;
    }).attr('y', function(d){
      return d.y;
    }).attr('height', function(d){
      return d.height;
    }).attr('width', function(d){
      return d.width;
    }).attr('fill', function(d){
      return d.fill;
    })
    .call(drag);
}

//on mouse drag event, take in new position of mouse
//and change player data to replect that
//and then call the updatePlayer function again
//


updatePlayer(playerData);

var enemyData = [];

var dataGen = function(n, arr){
  for(var i = 0; i < n; i++){
    var enemy = {};
    enemy.cx = Math.random()*Game.width - 10;
    enemy.cy = Math.random()*Game.height - 10;
    enemy.r = 10;
    arr.push(enemy);
  }
  return arr;
};

enemyData = dataGen(15,enemyData);

function update(someData) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var circle = svg.selectAll("circle")
      .data(someData);
      // , function(d){ return d;});

  // UPDATE
  // Update old elements as needed.
  circle.attr("class", "update");

  // ENTER
  // Create new elements as needed.
  circle.enter().append("circle")
      .attr("class", "enter")
      // .style('fill', 'blue');

  // ENTER + UPDATE
  // Appending to the enter selection expands the update selection to include
  // entering elements; so, operations on the update selection after appending to
  // the enter selection will apply to both entering and updating nodes.
  // text.text(function(d) { return d; });
  circle.transition().duration(1000)
      .attr("cx", function(d, i) { return d.cx; })
      .attr("cy", function(d,i){return d.cy;})
      .attr("r", function(d){
        return d.r;
      })
      .attr('fill', function(d){
        return "rgb(" + (d.cx + d.cy)%255+ ","+d.cx%255+"," + d.cy%255 +")";
      });

  // EXIT
  // Remove old elements as needed.
  circle.exit().remove();
}

// The initial display.
update(enemyData);

// Grab a random sample of letters from the enemyData, in alphabetical order.
setInterval(function() {
  // update(shuffle(enemyData)
  //     .slice(0, Math.floor(Math.random() * Game.numEnemies)));
  update(movement(enemyData));
}, 1000);

// Shuffles the input array.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array;
}

function movement(array){
  for (var i=0; i<array.length;i++){
    var curr = array[i];
    curr.cx = 10 + Math.random()*(Game.width - 20);
    curr.cy = 10 + Math.random()*(Game.height - 20);
  }
  return array;
}
