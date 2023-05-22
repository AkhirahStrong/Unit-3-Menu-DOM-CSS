//Access menu links
const letterLink = document.getElementById("menuItemsL");
const numberLink = document.getElementById("menuItemsN");

//Access content
const content = document.getElementById("content");

//Add an event listener to menu links
letterLink.addEventListener("click", showLetters);
numberLink.addEventListener("click", showNumbers);

//Handle events for letter link
function showLetters(e) {
  e.preventDefault();
  content.textContent = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

//handle events for number link
function showNumbers(e) {
  e.preventDefault();
  content.textContent = "1 2 3 4 5 6 7 8 9 10";
}

//Present the menu
document.querySelector("#menuIcon").addEventListener("click", function () {
  let menuItems = document.querySelector("#menu");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
});
