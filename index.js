// Create a new div element
const element = document.createElement("div");

// Append the div element to the body
document.body.appendChild(element);

// Create an unordered list and append list items to it
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.appendChild(li);
}

// Append the unordered list to the div element
element.appendChild(ul);

// Change properties of a main element
const main = document.getElementById("main");
if (main) {
  main.style.height = "300px";
  main.style.backgroundColor = "#27647B";
  main.textContent = "You've changed what's on the screen!";
  main.style.fontSize = "24px";
  main.style.marginLeft = "30px";
  main.style.lineHeight = 2;
  main.className = "pet-listing dog";
  main.classList.remove("dog");
  main.classList.add("cat", "sale");
}

// Remove the second child of the first unordered list found
const ulElement = document.getElementsByTagName("ul")[0];
if (ulElement) {
  const secondChild = ulElement.querySelector("li:nth-child(2)");
  if (secondChild) {
    ulElement.removeChild(secondChild);
  }

  // Remove the whole unordered list
  ulElement.remove();
}

// Add a new element with specific text content
const newElement = document.createElement("div");
newElement.textContent = "ERICK KATANA is the champion";
document.body.appendChild(newElement);

