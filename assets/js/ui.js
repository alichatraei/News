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
  //validate Form
  validateForm(query, country, category) {
    if (query == "" && country == "unknown" && category == "unknown") {
      this.showErrors(
        "لطفا حداقل یکی از مقادیر را پر یا انتخاب کنید!",
        "alert alert-danger text-center mt-4"
      );
    } else {
      let news = this.fetchDate(query, country, category);
      //forward news object to showNews function
      this.showNews(news);
    }
  }

  showNews(news) {
    //get data and process it
    news.then((value) => {
      console.log(value);
      if (value.articles.length === 0)
        this.showErrors(
          "خبری مطابق با جست و جوی شما یافت نشد",
          "alert alert-danger text-center"
        );
      else {
        value.articles.forEach((data) => {
          //create card elements and show news in there
          let mainElement = document.querySelector("main .row");
          //show News
          mainElement.innerHTML += `
        <div class="card col-md-3 text-right m-3"> 
            <img class="card-img-top pt-3" src="${data.urlToImage}"></img>
            <div class="card-body">
              <h5 class="card-title">${data.title.split("-", 1)}</h5>
              <hr/>
              <p class="card-text">${data.description}</p>
              <hr/>
              <p class="badge badge-primary badge-pill"> تاریخ انتشار : ${data.publishedAt.split(
                "T",
                1
              )}</p>
            </div>
          </div>
        `;
        });
      }
    });
  }
}
