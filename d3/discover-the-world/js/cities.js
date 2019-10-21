
// 3 places where we want to run our data visualization

// 1. on page load

// 2. on any change of any select box

// all of them will run the same code

const svg = d3.select("svg")

svg
    .attr("width", 960)
    .attr ("height", 720)



const placeCities = function() {
   
    let valueX = "singlePerson"
    let valueY = "apartment"

    const cities = svg
        .selectAll("g.city")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "city")
        .attr("transform", (d, i) => { return `translate(${i * 50}, 0)`})
    
    cities
        .append("circle")
        .attr("cx", 40)
        .attr("cy", 40)
        .attr("r", 40)

}

// on page load

placeCities()


// on select change

const selectTags = document.querySelectorAll("select")

selectTags.forEach((selectTag) => {
    selectTag.addEventListener("change", function() {
        placeCities()
    })
})



