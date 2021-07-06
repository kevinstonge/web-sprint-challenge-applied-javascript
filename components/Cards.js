// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const createCard = (dataObject) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.innerText = dataObject.headline;
    cardDiv.appendChild(headlineDiv);
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    authorDiv.appendChild(imgContainer);
    const authorPhoto = document.createElement('img');
    authorPhoto.src = dataObject.authorPhoto;
    imgContainer.appendChild(authorPhoto);
    const authorSpan = document.createElement('span');
    authorSpan.innerText = dataObject.authorName;
    authorDiv.appendChild(authorSpan);

    cardDiv.addEventListener('click',()=>{console.log(dataObject.headline)})

    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(r=>{
    Object.keys(r.data.articles).forEach(cat=>{
        const catContainer = document.createElement('span');
        catContainer.classList.add('cat-container');
        catContainer.id = `cat-${cat}`;
        r.data.articles[cat].forEach(article=>{
            catContainer.appendChild(createCard(article));
        })
        document.querySelector('.cards-container').appendChild(catContainer)
    })
}).catch(e=>{
    const error = document.createElement('div');
    error.innerText = "something went wrong";
    document.querySelector('.cards-container').appendChild(error);
})