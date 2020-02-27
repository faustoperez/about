document.addEventListener("DOMContentLoaded", function () {
  

    const stamps = [
        "img/stamp-pentagon-pink.svg",
        "img/stamp-pentagon-blue.svg",
        "img/stamp-pentagon-green.svg",
        "img/stamp-pentagon-orange.svg",
        "img/stamp-pentagon-yellow.svg",
        "img/stamp-pentagon-red.svg",
        "img/stamp-square-pink.svg",
        "img/stamp-square-blue.svg",
        "img/stamp-square-green.svg",
        "img/stamp-square-orange.svg",
        "img/stamp-square-yellow.svg",
        "img/stamp-square-red.svg",
        "img/stamp-triangle-pink.svg",
        "img/stamp-triangle-blue.svg",
        "img/stamp-triangle-green.svg",
        "img/stamp-triangle-orange.svg",
        "img/stamp-triangle-yellow.svg",
        "img/stamp-triangle-red.svg",
        "img/stamp-star-pink.svg",
        "img/stamp-star-blue.svg",
        "img/stamp-star-green.svg",
        "img/stamp-star-orange.svg",
        "img/stamp-star-yellow.svg",
        "img/stamp-star-red.svg"
    ]

    const stampsTag = document.querySelector("div.stamps")

    const addStamp = function (x, y) {
        const img = document.createElement("img")

        const randomStamp = stamps[Math.floor(Math.random() * stamps.length)]

        img.setAttribute("src", randomStamp)

        // remove half the window width
        img.style.left = (x - window.innerWidth / 2) + "px"
        img.style.top = y + "px"

        stampsTag.appendChild(img)


    }

    document.addEventListener("click", function (event) {
        addStamp(event.pageX, event.pageY)
    })









})