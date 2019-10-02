const monthSvg = d3.select("svg.month")

const radiusScale = d3.scaleSqrt() /* square root -> circle */
    .domain([0, 30000]) /* input */
    .range([0, 50]) /* output */

const colourScale = d3.scaleSqrt()
    .domain([0, 30000])
    .range(["#c1e7ff", "#004c6d"])

monthSvg
    .selectAll("circle")
    .data(monthData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => { return (i % 7) * 120 + 60 })
    .attr("cy", (d, i) => { return Math.floor(i / 7) * 100 + 60})
    .attr("r", (d, i) => { return radiusScale(d) })
    .attr("fill", (d, i) => { return colourScale(d) })