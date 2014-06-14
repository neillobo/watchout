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

// var alphabet= [12,23,29,36,51,67,72,85];
// var alphabet = [[10,10],[14,20],[70,20],[15,25],[15,20],[55,30],[15,25]];
var alphabet = [];

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

alphabet = dataGen(15,alphabet);

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
  circle.transition().duration(500)
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
update(alphabet);

// Grab a random sample of letters from the alphabet, in alphabetical order.
setInterval(function() {
  // update(shuffle(alphabet)
  //     .slice(0, Math.floor(Math.random() * Game.numEnemies)));
  update(movement(alphabet));
}, 500);

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
