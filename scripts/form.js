const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.querySelector('#product')

// going to try to use the map method to populate the array

let productsHTML = products.map(product => `<option value="${product.id}">${product.name}</option>`).join('');

select.innerHTML = productsHTML;

// was going to add an event listener for click, but AI advised using DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
        
    // running into an issue with Null being loaded into the loadCounter the 1st time. AI advised doing this:
    // loadCounter = loadCounter ? parseInt(loadCounter) : 0; This is basically an if statement. If it's null, make it 0. Otherwise, turn the text into a number.
        let loadCounter = localStorage.getItem('completeReview');

        loadCounter = loadCounter ? parseInt(loadCounter) : 0;

        loadCounter ++;
        
        localStorage.setItem("completeReview", loadCounter)

});