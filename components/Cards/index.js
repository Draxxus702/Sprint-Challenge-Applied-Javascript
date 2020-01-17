// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let cards = document.querySelector(".cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        Object.values(response.data.articles).forEach(item => {
            item.forEach(item => {
                cards.append(cardCollector(item));
            })
        })
    })

.catch(error => {
    console.log(error);
})

function cardCollector(data) {

    const card = document.createElement("div");
    const cardHeadline = document.createElement("div");
    const cardAuthor = document.createElement("div");
    const cardImg = document.createElement("div");
    const img = document.createElement("img");
    const cardSpan = document.createElement("span");

    card.append(cardHeadline);
    card.append(cardAuthor);
    card.append(cardSpan);
    cardAuthor.append(cardImg);
    cardImg.append(img);

    card.classList.add("card");
    cardHeadline.classList.add("headline");
    cardAuthor.classList.add("author");
    cardImg.classList.add("img-container");

    img.src = data.authorPhoto;
    cardSpan.textContent = `By: ${data.authorName}`;
    cardHeadline.textContent = data.headline

    return card;
}