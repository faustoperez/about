
// 3 places where we want to run our data visualization

// 1. on page load

// 2. on any change of any select box

// all of them will run the same code

const placeCities = function() {
    console.log("hi there")
}

// on page load

placeCities()

const selectTags = document.querySelectorAll("select")

selectTags.forEach((selectTag) => {
    selectTag.addEventListener("change", function() {
        placeCities()
    })
})



