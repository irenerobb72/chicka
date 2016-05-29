import d3 from 'd3'

var jsonCircles = [
  { "x_axis": 830, "y_axis": 60 "radius": 10, "color" : "green" },
  { "x_axis": 850, "y_axis": 60 "radius": 10, "color" : "green" },
  { "x_axis": 870, "y_axis": 60 "radius": 10, "color" : "green" },
  { "x_axis": 890, "y_axis": 60 "radius": 10, "color" : "green" },
  { "x_axis": 910, "y_axis": 60 "radius": 10, "color" : "green" },

  { "x_axis": 830, "y_axis": 80 "radius": 10, "color" : "green" },
  { "x_axis": 850, "y_axis": 80 "radius": 10, "color" : "green" },
  { "x_axis": 870, "y_axis": 80 "radius": 10, "color" : "green" },
  { "x_axis": 890, "y_axis": 80 "radius": 10, "color" : "green" },
  { "x_axis": 910, "y_axis": 80 "radius": 10, "color" : "green" },

  { "x_axis": 830, "y_axis": 100 "radius": 10, "color" : "green" },
  { "x_axis": 850, "y_axis": 100 "radius": 10, "color" : "green" },
  { "x_axis": 870, "y_axis": 100 "radius": 10, "color" : "green" },
  { "x_axis": 890, "y_axis": 100 "radius": 10, "color" : "green" },
  { "x_axis": 910, "y_axis": 100 "radius": 10, "color" : "green" },

  { "x_axis": 830, "y_axis": 120 "radius": 10, "color" : "green" },
  { "x_axis": 850, "y_axis": 120 "radius": 10, "color" : "green" },
  { "x_axis": 870, "y_axis": 120 "radius": 10, "color" : "green" },
  { "x_axis": 890, "y_axis": 120 "radius": 10, "color" : "green" },
  { "x_axis": 910, "y_axis": 120 "radius": 10, "color" : "green" },

  { "x_axis": 830, "y_axis": 140 "radius": 10, "color" : "green" },
  { "x_axis": 850, "y_axis": 140 "radius": 10, "color" : "green" },
  { "x_axis": 870, "y_axis": 140 "radius": 10, "color" : "green" },
  { "x_axis": 890, "y_axis": 140 "radius": 10, "color" : "green" },
  { "x_axis": 910, "y_axis": 140 "radius": 10, "color" : "green" },

  { "x_axis": 830, "y_axis": 160 "radius": 10, "color" : "green" },
  { "x_axis": 850, "y_axis": 160 "radius": 10, "color" : "green" },
  { "x_axis": 870, "y_axis": 160 "radius": 10, "color" : "green" },
  { "x_axis": 890, "y_axis": 160 "radius": 10, "color" : "green" },
  { "x_axis": 910, "y_axis": 160 "radius": 10, "color" : "green" },
]

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                        .attr("cx", function (d) { return d.x_axis; })
                        .attr("cy", function (d) { return d.y_axis; })
                        .attr("r", function (d) { return d.radius; })
                        .attr("fill", function (d) { return d.color; })
}}}
