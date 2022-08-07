function newquote(){
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let total=data.length;
    let random=Math.floor(Math.random()*total);
    document.getElementById('quote').innerHTML=data[random].text;
    document.getElementById('author').innerHTML=data[random].author;
  });
}
newquote();