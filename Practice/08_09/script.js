/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const addFig = ( description ) => {
  let newFig = document.createElement("figure")
  let newImg = document.createElement("img")
  newImg.src = "../../assets/images/everyday.svg"
  newImg.alt = description
  newImg.loading = "lazy"
  newFig.append(newImg)
  return newFig.outerHTML
}

// Baseline HTML output
const content = `
   
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
      ${addFig("description")}
    </ul>  
`;

const main = document.querySelector("main")
main.innerHTML = content
// main.append(addFig("description"))


const formatProperty = ( value ) => {
  let newElem = document.createElement("li")
  newElem.innerHTML = `
    Element requested: ${frogpack[value]}
  `
  return newElem
}

const displayProperty = ( value ) => {
  let newArticle = document.createElement("article")

  newArticle.append(formatProperty(value[0]))
  newArticle.append(formatProperty(value[1]))
  newArticle.append(formatProperty(value[2]))
  newArticle.append(formatProperty(value[3]))

  return newArticle
}

main.append(displayProperty(["name", "volume", "color", "pocketNum"]))
