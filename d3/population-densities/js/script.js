const svg = d3.select("svg")

svg.attr("viewbox", "0 0 1000 600")

const worldGroup = svg.append("g")

const projection = d3.geoNaturalEarth1()
    .translate([500, 300])
    .scale(175)


const mapGenerator = d3.geoPath()
    .projection(projection)

d3.json("js/data.json").then(function (data) {
    d3.json("js/world-110m2.json").then(function (mapData) {
           
        worldGroup
            .selectAll("path")
            .data(mapData.features)
            .enter()
            .append("path")
            .attr("d", mapGenerator)
            .style("fill", "red")



    }) 
})


