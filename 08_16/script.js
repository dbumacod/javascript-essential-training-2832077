/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js"

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

// const content = `
//     <figure class="backpack__image">
//       <img src=${everydayPack.image} alt="" />
//     </figure>
//     <h1 class="backpack__name">${everydayPack.name}</h1>
//     <ul class="backpack__features">
//       <li class="packprop backpack__volume">Volume:<span> ${
//         everydayPack.volume
//       }l</span></li>
//       <li class="packprop backpack__color">Color:<span> ${
//         everydayPack.color
//       }</span></li>
//       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
//       <li class="packprop backpack__pockets">Number of pockets:<span> ${
//         everydayPack.pocketNum
//       }</span></li>
//       <li class="packprop backpack__strap">Left strap length:<span> ${
//         everydayPack.strapLength.left
//       } inches</span></li>
//       <li class="packprop backpack__strap">Right strap length:<span> ${
//         everydayPack.strapLength.right
//       } inches</span></li>
//       <li class="feature backpack__lid">Lid status:<span> ${
//         everydayPack.lidOpen ? "open" : "closed"
//       }</span></li>
//     </ul>
  
// `;

backpackObjectArray.forEach((backpackArray) => {
  const newArticle = document.createElement("article");
  const newHeader = document.createElement("h1")
  const newUList = document.createElement("ul");
  const newFigure = document.createElement("figure");
  const newImg = document.createElement("img")
  newImg.src = backpackArray.name.image
  newFigure.append(newImg)
  newHeader.append(backpackArray.name)
  

})


const content = document.querySelector(".maincontent");

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);
