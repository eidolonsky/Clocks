var fields;

fields = function() {
  var currentTime, hor, min, sec;
  currentTime = new Date();
  sec = currentTime.getSeconds();
  min = currentTime.getMinutes() + sec / 60;
  hor = currentTime.getHours() + min / 60 + sec / 3600;
  return data = [
    {
      "unit": "seconds",
      "numeric": sec
    }, {
      "unit": "minutes",
      "numeric": min
    }, {
      "unit": "hours",
      "numeric": hor
    }
  ];
};

var w = 400;
var h = 200;
var offSetX = 150;
var offSetY = 100;
var pi = Math.PI;
var scaleSecs = d3.scale.linear()
                        .domain([0, 59 + 999/1000])
                        .range([0, 2 * pi]);
var scaleMins = d3.scale.linear()
                        .domain([0, 59 + 59/60])
                        .range([0, 2 * pi]) ;
var scaleHors = d3.scale.linear()
                        .domain([0, 11 + 59/60])
                        .range([0, 2 * pi]);
