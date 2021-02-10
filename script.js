//1. When I click on the button with the data property of "button-number"
//2. The element with the id of the same name as the attribute of "button-number" property in the button should show up on the screen
 

const buttons = document.querySelectorAll('[data-number');


//Just working on the first button
const buttonOne = document.querySelector('#buttonOne');

//when I click on button one it will access box one
buttonOne.addEventListener('click', function () {

    //This is going to be "one"
    let boxNum = buttonOne.dataset.number; 

    //I want to ultimately... that the id with "one" will show the class
    let one = document.getElementById(boxNum);

    one.classList.add('show');

})