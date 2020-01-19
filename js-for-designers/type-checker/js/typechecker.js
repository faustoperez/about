const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("section.output")
const originalText = outputTag.innerHTML

sentenceTag.addEventListener("keyup", function() {

    if (this.value) {
        outputTag.innerHTML = this.value
    } else {
        outputTag.innerHTML = originalText
    }

})