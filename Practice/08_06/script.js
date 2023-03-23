/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


const mysteryShake = {
    name: "BananaSlur",
    color: "yellow",
    taste: "sweet",
    price: "75",
    rating: 2/5
}

const addContent = (content) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>**${content.name}**</h1>
    <ul>
        <li>Color: ${content.color}</li>
        <li>Taste: ${content.taste}</li>
        <li>Price: ${content.price}</li>
        <li>Rating: ${content.rating}</li>
    </ul>
    `
    return newArticle
}

const main = document.querySelector("main");
main.append(addContent(mysteryShake))

document.querySelector("main article ul").setAttribute("class", "contents")

const addClass = (classValue) => {
    document.querySelector("main article ul").classList.add(classValue)
}

addClass("shake")
addClass("banana")