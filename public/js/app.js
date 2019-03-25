const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;
// Agregándole al formulario el evento submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
});

function addNews() {
  const data = JSON.parse(this.responseText);
  console.log(data.response);
  let article = data.response.docs.forEach(function(el) { 
    const title = el.headline.main;
    const snippet = el.snippet;
    const url = el.web_url;
  
    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerHTML = `<h2 class="articleTitle">${title}</h2><div class="articleBody"><a href="${url}" target="_blank"><i class="far fa-file-alt"></i><span class="text-align"></a>${snippet}</span></div>`;
  
    responseContainer.appendChild(li);

    return li;
  });
}

function handleError() {
  console.log('Se ha presentado un error');
}

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=ovGndvEDL1ALXIETqmqb93Hv1OTUyVCe`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}