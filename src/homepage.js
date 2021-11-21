// make it an immediately invoked function later
import Image from "./zap's-pizza.jpg";

const createHomepage = () => {
    // array to use for appending to container later
    let elements = [];

    // push element onto array
    function addToArray(element) {
        elements.push(element);
    }

    // container to append to
    let container = document.getElementById('content');
    Object.assign(container.style,{display:'flex',flexDirection:'column'});

    // name of business
    let business = document.createElement('h1');
    business.textContent = "Zap's Pizza";
    addToArray(business);

    // picture of business
    let picture = document.createElement('img');
    picture.setAttribute('src', Image);
    picture.setAttribute('alt', 'pizza parlor');
    Object.assign(picture.style,{height:'auto',width:'200px'});
    addToArray(picture);

    // tagline
    let tagline = document.createElement('div');
    tagline.textContent = 'Pizza with some pizzazz';
    addToArray(tagline);

    // blurb
    let blurb = document.createElement('div');
    blurb.textContent = "Tired of the same old pizza? Need to spice it up some, well Zap's does spice and plenty more."
    addToArray(blurb);

    // add to homepage
    elements.forEach(index => container.appendChild(index));

}

export { createHomepage };