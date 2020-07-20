/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
class Carousel {
  constructor() {
    this.pos = 0;
    this.carousel = document.createElement('div');
    this.carousel.classList.add('carousel');
    this.buttonStyle = "cursor: pointer; height: calc(90vw / 2.4); padding: 0 1rem; display: flex; align-items: center; font-weight: bold;";
    this.leftButton = document.createElement('div');
    this.leftButton.classList.add = "left-button";
    this.leftButton.innerText = "<";
    this.leftButton.style = this.buttonStyle;
    this.leftButton.addEventListener('click',()=>{this.clickLeft()})
    this.carousel.appendChild(this.leftButton);
    this.carouselViewport = document.createElement('div');
    this.carouselViewport.classList.add('carousel-viewport');
    //images are 1200x500, height = width/2.4
    this.carouselViewport.style = "position: relative; width: 90vw; height: calc(90vw / 2.4); overflow-x: hidden;"
    this.carousel.appendChild(this.carouselViewport);
    this.carouselMap = ["mountains","computer","trees","turntable"].map((img,idx)=>{
      const carouselImage = document.createElement('img');
      carouselImage.src = `./assets/carousel/${img}.jpeg`;
      this.carouselViewport.appendChild(carouselImage);
      const opacity = (this.pos === idx) ? "1" : "0";
      carouselImage.style.display = "inline";
      carouselImage.style.position = "absolute";
      carouselImage.style.left = "0";
      carouselImage.style.top = "0";
      carouselImage.style.opacity = opacity;
      carouselImage.style.transition = "opacity 0.3s ease-in";
      return carouselImage;
    })
    this.rightButton = document.createElement('div');
    this.rightButton.classList.add = "left-button";
    this.rightButton.innerText = ">";
    this.rightButton.style = this.buttonStyle;
    this.rightButton.addEventListener('click',()=>{this.clickRight()})
    this.carousel.appendChild(this.rightButton);
    document.querySelector('.carousel-container').appendChild(this.carousel);
  }
  clickLeft = () => {
    this.carouselMap[this.pos].style.opacity = "0";
    this.pos = (this.pos == 0) ? this.pos = this.carouselMap.length - 1 : this.pos - 1;
    this.carouselMap[this.pos].style.opacity = "1";
  }
  clickRight = () => {
    this.carouselMap[this.pos].style.opacity = "0";
    this.pos = (this.pos == this.carouselMap.length - 1) ? this.pos = 0 : this.pos + 1;
    this.carouselMap[this.pos].style.opacity = "1";
  }
}
const myCarousel = new Carousel();