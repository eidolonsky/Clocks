//get time
var fields = function() {
  var currentTime = new Date();
  var sec = currentTime.getSeconds();
  var min = currentTime.getMinutes() + sec / 60;
  var hor = currentTime.getHours() + min / 60 + sec / 3600;
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

//set scale
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


//set svg
var width = 400;
var height = 200;
var svg = d3.selectAll(".chart")
            .append("svg:svg")
            .attr("width", width)
            .attr("height", height);
var clockSet = svg.append("svg:g") 
                  .attr("transform", "translate(" + offSetX + "," + offSetY + ")"); 
clockSet.append("svg:circle")
        .attr("r", 80)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);
clockSet.append("svg:circle")
        .attr("r", 4)
        .attr("fill", "black")
        .attr("class", "clock innercircle");
