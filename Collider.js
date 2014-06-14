var enemies = svg.selectAll('circle').data(enemyData, function(d){
  return d;
})
  .enter().append('circle').attr({
    cx : function(d, i){
      return (Game.width/Game.numEnemies)*i;
    },
    cy : function(d,i){
      return (Game.height/Game.numEnemies)*(i);
    },

    r:function(d){
      return d + 10;
    }
  }).style('fill','red');

var enemyUpdate = function(data){
  var enemy = svg.selectAll('circle');
  enemy.data(data, function(d){return d;})
  .enter().append('circle').attr({
    cx : function(d, i){
      return (Game.width/Game.numEnemies)*i;
    },
    cy : (Game.height/2),

    r:function(d){
      return d + 10;
    }
  }).style('fill','green');
  enemy.exit().remove();
};
