let total = 0

let greeting = prompt("Welcome to Shroomies! How are you doing today?");
if (greeting === ['Good','Super','Awesome']) {
  alert('Terrific!');
} else {
  alert('Glad to hear');
}

const menu = prompt("Would you like to see the menu?");
if (menu === [,'Let me see the menu','Yes','let me see the menu','menu please']) {
  alert ('Great! Here is the Menu.\n\n\n');
} else {
  alert ('okay! Here is the Menu.\n\n\n')
}

  const mainEntre = prompt("Here are your choices\n");
  alert('1. Regular Burger - Includes one beef pattie - with with american cheese, pickles, tomatoes, and onions.', '$1.50\n');
  alert('2. Double Burger - Includes 2 beef patties -with american cheese, pickles, tomatoes, and onions.', '$2.2one5\n');
  alert('1. Triple Burger - Includes 3 beef patties with american cheese, pickles, tomatoes, and onions.', '$3.50\n');

function burger() {
  let choiceBurger = prompt("Which burger choices would you like?");
  if (choiceBurger === 'one') { 
    alert ('Nice choice!\n'); 
    total = total + 1.50
  }
  else if (choiceBurger === 'two\n') {
    alert ('Awesome choice! That burger is very moist and delicious.\n');
    total = total + 2.25
  } 
  else if  (choiceBurger === 'three') {
    alert('You picked the best on the menu!\n');
    total = total + 3.5
  }
  else if (choiceBurger !== null) {
    alert ('That is not an option Please try again!')
    burger();
  }
}
burger()


const sideMenu = prompt('Here are two side choices for sides?\n');

alert ('1. Curly Fries', '$1.00');
alert ('2. Onion Rings', '$2.00\n');

function sides() {
  const sideM = prompt('What side would you like with your meal?\n');
  if (sideM === 'curly fries') {
    alert('Perfect!');
  total = total + 1.00
  }
  else if (sideM === 'onion rings') {
    alert("Nice Choice!");
  total = total + 2.00
  } 
  else if (sideM !== null) {
    alert ('That is not an option Please try again!');
    sides();
  }
}
sides()

const myBill = prompt('Would you like to see your bill?'); 
  if ('myBill === yes'){
  alert('Here is your bill with total');
  alert(total);
}