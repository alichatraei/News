class FetchData {
  constructor() {
    this.APIKey = "f3f2793e00d748f0b065b381a4a83158";
  }

  fetchDate(query, country, category) {
    let url = "https://newsapi.org/v2/";
    if (query !== "" && country === "unknown" && category === "unknown") {
      url += "everything?q=" + query + "&apiKey=" + this.APIKey;
    } else {
      url += "top-headlines?";
      if (query !== "") url += "q=" + query;
      if (category === "unknown")
        url += "country=" + country + "&apiKey=" + this.APIKey;
      else if (country === "unknown")
        url += "category=" + category + "&apiKey=" + this.APIKey;
      else if (country !== "unknown" && category !== "unknown")
        url +=
          "country=" +
          country +
          "&category=" +
          category +
          "&apiKey=" +
          this.APIKey;
    }
    console.log(url);
  }
}
