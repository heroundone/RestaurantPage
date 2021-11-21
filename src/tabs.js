// function to generate buttons
function makeButton(tabName) {
    let button = document.createElement('button');
    Object.assign(button.style,{padding:'20px',margin:'0px'});
    button.textContent = tabName;
    return button;
};

const createTabs = () => {
    // element to which all is appended
    let content = document.getElementById('content');

    // container for buttons
    let container = document.createElement('div');
    Object.assign(container.style,{display:'flex',gap:'0px',});

    // make buttons
    let buttons = [];
    buttons.push(makeButton('home'));
    buttons.push(makeButton('menu'));
    buttons.push(makeButton('contact'));

    // add tabs to container and container to content(tabs must be topmost content)
    buttons.forEach(button => container.appendChild(button));
    content.insertAdjacentElement("afterbegin",container);
};

export { makeButton, createTabs };