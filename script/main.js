async function apiCall(url) {
  let res = await fetch(url);
  let data = await res.json();
  let data1 = data.articles;
  return data1;
}

function appendArticles(arr, location) {
  arr.map(({ title, author, description, urlToImage, content }) => {
    let Mdiv = document.createElement("div");
    let ldiv = document.createElement("div");
    let head = document.createElement("h1");
    let auth = document.createElement("p");
    let detail = document.createElement("p");
    let img = document.createElement("img");
    head.textContent = title;
    auth.textContent = author;
    detail.textContent = description;
    img.src = urlToImage;
    ldiv.append(head, auth);
    Mdiv.append(ldiv, detail, img);
    Mdiv.addEventListener("click", () => {
      let news = {
        title: title,
        author: author,
        urlToImage: urlToImage,
        content: content,
      };

      localStorage.setItem("newsdata", JSON.stringify(news));

      window.location.href = "news.html";
    });
    location.append(Mdiv);
  });
}

export { apiCall, appendArticles };
