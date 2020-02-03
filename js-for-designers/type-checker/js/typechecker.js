const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value



sentenceTag.addEventListener("keyup", function() {

    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// when I type in my output tag, update sentence tag accordingly

outputTag.addEventListener("keyup", function () {
    sentenceTag.value = this.value
})


typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"

})


lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})


italicTag.addEventListener("change", function () {
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})