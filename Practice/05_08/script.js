/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const main = document.querySelector(".maincontent");

const newNav = document.createElement("nav");
newNav.classList.add("nav-menu");

const content = `
<li><a href="#">Home</a></li>
<li><a href="#n">Season's Hottest</a></li>
<li><a href="#">All Items</a></li>
<li><a href="#">My Cart</a></li>
`
const newList = document.createElement("ul");
newList.innerHTML = content
newNav.append(newList)
// newNav.innerHTML = newList

// main.insertAdjacentElement("beforeBegin",newNav)
document.querySelector(".siteheader").append(newNav)
