// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-backend.herokuapp.com/topics").then(r=>{
    const cardsHeader = document.createElement('h1');
    cardsHeader.innerText = "click a topic above to see articles";
    document.querySelector('.cards-container').appendChild(cardsHeader);
    r.data.topics.forEach(t=>{
        tab = document.createElement('div');
        tab.classList.add('tab');
        tab.innerText = t;
        if (t=="node.js") { t = "node" }
        tab.addEventListener('click',()=>{
            cardsHeader.innerText = t;
            document.querySelectorAll(`.cat-container`).forEach(q=>{
                if (q.id.includes(t)) {
                    q.classList.add('visible');
                }
                else {
                    q.classList.remove('visible');
                }
            })
        })
        document.querySelector('.topics').appendChild(tab);
    })
})