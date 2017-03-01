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


//set svg/clockface
var width = 400;
var height = 200;
var svg = d3.selectAll("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
var clockFace = svg.append("g") 
                  .attr("transform", "translate(" + offSetX + "," + offSetY + ")"); 
clockFace.append("circle")
        .attr("r", 80)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);
clockFace.append("circle")
        .attr("r", 4)
        .attr("fill", "black")
        .attr("class", "clock innercircle")

//clockhands
var render = function(data) {
  clockFace.selectAll(".clockhand").remove();
  var secArc = d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(70)
                    .startAngle(function(d) {
                      return scaleSecs(d.numeric);
                    })
                    .endAngle(function(d) {
                      return scaleSecs(d.numeric)
                    });
  var minArc = d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(60)
                    .startAngle(function(d) {
                      return scaleMins(d.numeric);
                    })
                    .endAngle(function(d) {
                      return scaleMins(d.numeric)
                    });
  var horArc = d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(50)
                    .startAngle(function(d) {
                      return scaleHors(d.numeric % 12);
                    })
                    .endAngle(function(d) {
                      return scaleHors(d.numeric % 12)
                    });
  clockFace.selectAll(".clockhand")
           .data(data)
           .enter()
           .append("svg:path")
           .attr("d", function(d) {
            if (d.unit === "seconds") {
              return secArc(d);
            }
            else if (d.unit === "minutes") {
              return minArc(d);
            }
            else if (d.unit === "hours") {
              return horArc(d);
            }
           })
           .attr("class", "clockhand")
           .attr("stroke", "black")
           .attr("stroke-width", function(d) {
            if (d.unit === "seconds") {
              return 2;
            }
            else if (d.unit === "minutes") {
              return 3;
            }
            else if (d.unit === "hours") {
              return 4;
            }
           })
           .attr("fill", "none");
};

setInterval(function() {
  var data;
  data = fields();
  return render(data);
}, 1000);