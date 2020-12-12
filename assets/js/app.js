//variables
const ui = new Ui(),
  fetchData = new FetchData(),
  submitButton = document.querySelector("#submit");

//eventListeners
eventListener();
function eventListener() {
  submitButton.addEventListener("click", (e) => {
    //prevent Default
    e.preventDefault();
    // Validate Inputs
    let query = document.querySelector("#query").value,
      country = document.querySelector("#country").value,
      category = document.querySelector("#category").value,
      mainElement = document.querySelector("main .row");
    if (mainElement.innerHTML !== "") mainElement.innerHTML = "";
    ui.validateForm(query, country, category);
  });
}
