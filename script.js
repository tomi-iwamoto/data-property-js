//1. When I click on the button with the data property of "button-number"
//2. The element with the id of the same name as the attribute of "button-number" property in the button should show up on the screen
 

//Working on individual buttons
const buttonOne = document.querySelector('#buttonOne');
const buttonTwo = document.querySelector('#buttonTwo');
const clearButton = document.getElementById('clear');



//when I click on button one, it will add the styling of class "show" making the background red
buttonOne.addEventListener('click', function () {

    //This will access the data attribute of button one - which the value is "one"
    let buttonOneData = buttonOne.dataset.number; 

    //I want to access the element with the same name in the id as the attribute of button one
    let highlightOne = document.getElementById(buttonOneData);

    //This will add the class of "show" to box one
    highlightOne.classList.add('show');

})


//When I click on button two, it will add the styling of class "show"-- make the background red
buttonTwo.addEventListener('click', function () {

    let buttonTwoData = buttonTwo.dataset.number;

    let highlightTwo = document.getElementById(buttonTwoData);

    highlightTwo.classList.add('show');

})


//This button clears the styles that were added to the elements after clicking buttons
clearButton.addEventListener('click', function () {

    let one = document.getElementById('one');
    let two = document.getElementById('two');
    one.classList.remove('show');
    two.classList.remove('show');

})

