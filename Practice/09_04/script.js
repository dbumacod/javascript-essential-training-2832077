/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


var allCell = document.querySelectorAll(".cell")
var grid1 = document.querySelector(".grid")


grid1.addEventListener("mouseenter", () => {
    grid1.style.outline = "2px solid red"
})

grid1.addEventListener("mouseleave", () => {
    grid1.style.outline = ""
})

grid1.addEventListener("mouseenter", () => {
    grid1.style.outline = "2px solid red"
})

allCell.forEach((item) => {
    item.addEventListener("click", () => {
        item.style.backgroundColor === "green" ? item.style.backgroundColor = "" : item.style.backgroundColor = "green";
    })
    item.addEventListener("mouseenter", () => {
        item.style.outline = "2px solid yellow"
        item.style.backgroundColor === "green" ? item.style.backgroundColor = "green" : item.style.backgroundColor = "grey"
    })
    item.addEventListener("mouseleave", () => {
        item.style.outline = ""
        item.style.backgroundColor === "green" ? item.style.backgroundColor = "green" : item.style.backgroundColor = "" 
    })
})
