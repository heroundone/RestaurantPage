import Image from './pancake-pizza.jpg'

class menuItem {
    constructor(dishName, image, description, price) {
        this.dishName = dishName;
        this.image = image;
        this.description = description;
        this.price = price;
    };
    
    addToPage() {
        let content = document.getElementById('content');
        let docFrag = document.createDocumentFragment();
        Object.assign(content.style,{display:'flex',flexDirection:'column'});
        let elements = [];
        
        let divDishName = document.createElement('div');
        divDishName.textContent = this.dishName;
        elements.push(divDishName);

        let dishImage = document.createElement('img');
        dishImage.setAttribute('src', `${this.image}`);
        Object.assign(dishImage.style,{height:'auto',width:'200px'});
        elements.push(dishImage);

        let divDescription = document.createElement('div');
        divDescription.textContent = this.description;
        elements.push(divDescription);

        let divPrice = document.createElement('div');
        divPrice.textContent = this.price;
        elements.push(divPrice);

        elements.forEach(element => {
            docFrag.appendChild(element);
        });
        console.log(docFrag);

        content.appendChild(docFrag);
    }
}

function createMenu() {
    let pancakePizza = new menuItem('Pancake Pizza', Image, 'fluffy pancakes topeed with your traditional basic pizza toppings', '$10.00');
    pancakePizza.addToPage();
};

export { menuItem, createMenu };
