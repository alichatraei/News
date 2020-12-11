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
    } else {
      let news = this.fetchDate(query, country, category);
      this.showNews(news);
    }
  }

  showNews(news) {
    //get data and process it
    news.then((value) => {
      value.articles.forEach((data) => {
        //create card elements and show news in there
        let mainElement = document.querySelector("main .row");
        mainElement.innerHTML += `
        <div class="card col-lg-3 col-md-2 text-right m-3"> 
            <img class="card-img-top" src="${data.urlToImage}"></img>
            <div class="card-body">
              <h5 class="card-title">${data.title.split("-", 1)}</h5>
              <hr/>
              <p class="card-text">${data.description}</p>
            </div>
          </div>
        `;
      });
    });
  }
}
