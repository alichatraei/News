class Ui extends FetchData {
  showErrors(message, className) {
    let searchBox = document.querySelector("main"),
      p = document.createElement("p");
    p.innerHTML = `${message}`;
    p.setAttribute("class", className);
    searchBox.appendChild(p);
    // remove p after 3000 milliseconds
    setTimeout(() => {
      p.remove();
    }, 3000);
  }

  validateForm(query, country, category) {
    if (query == "" && country == "unknown" && category == "unknown") {
      this.showErrors(
        "لطفا حداقل یکی از مقادیر را پر یا انتخاب کنید!",
        "alert alert-danger text-center mt-4"
      );
    } else this.fetchDate(query, country, category);
  }
}
