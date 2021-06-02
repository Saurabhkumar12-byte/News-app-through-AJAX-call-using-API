// 79b66b2937c8fc27aac8d1e146c1ae99
// https://newsapi.org/v2/top-headlines?country=in&apiKey=22a5022795d640a48d727ad3ce005fdf

let newsAccordian = document.getElementById("newsaccordian");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"
  ,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles= json.articles;
    // console.log(articles);
    console.log(json);
    let newsHtml=" ";
    articles.forEach(function(element, index) {
        
    
    
        let news = `
        <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          ${element['title']}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse show " aria-labelledby="heading${index}" data-bs-parent="#newsaccordian">
          <div class="accordion-body">
           ${element['description']} <a href="${element['url']}" target="_blank">Read more here</a>
          </div>
        </div>
      </div>
                    `;
        newsHtml+=news;
        
    });
    newsAccordian.innerHTML=newsHtml;
  } else {
    console.log("Error");
  }
};
xhr.send();


