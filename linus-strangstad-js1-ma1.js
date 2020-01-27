// taks 1
let cat = {
  complain: function() {
    console.log("Meow!");
  }
};

// task 2
const heading = document.querySelector("h3");

// task 3

heading.style.fontSize = "2em";

// tasks 4
heading.classList.add("subheading");

// task 5
let paragraphs = document.querySelectorAll("p");

// task 6
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// task 7

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function arrayOfCats1(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

arrayOfCats1(cats);
// task 8
function arrayOfCats(catArray) {
  let newHTML = "";
  for (let i = 0; i < catArray.length; i++) {
    newHTML += `<h5>${catArray[i].name}</h5>`;
  }
  return newHTML;
}

// task 9
resultsContainer.innerHTML += arrayOfCats(cats);

//  task 10
function arrayOfCats(catArray) {
  let newHTML = "";
  for (let i = 0; i < catArray.length; i++) {
    let noAge = "Age unknown";
    if (catArray[i].age) {
      noAge = catArray[i].age;
    }

    newHTML += `<div>
                  <h5>${catArray[i].name}</h5>
                  <p>${noAge}
                </div>`;
  }
  return newHTML;
}
