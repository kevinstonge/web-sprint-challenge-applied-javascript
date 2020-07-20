// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const dateFormatter = (dateObject) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateString = `${months[dateObject.getMonth()]} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
    return dateString
}

const Header = () => {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('date');
        const date = new Date();
        const dateString = dateFormatter(date);
        dateSpan.innerText = dateString;
        headerDiv.appendChild(dateSpan);
        const titleH1 = document.createElement('h1');
        titleH1.innerText = "Lambda Times";
        headerDiv.appendChild(titleH1);
        const tempSpan = document.createElement('span');
        tempSpan.classList.add('temp');
        headerDiv.appendChild(tempSpan);
    return headerDiv;
}
document.querySelector('.header-container').appendChild(Header())
axios.get("https://api.weather.gov/points/34.05223,-118.24368").then(r=>
    axios.get(r.data.properties.forecast).then(f=>{
        const tempSpan = document.querySelector('.temp');
        tempSpan.innerText = `${f.data.properties.periods[0].temperature}°F`;
    })
);

