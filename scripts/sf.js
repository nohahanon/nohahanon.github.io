// sf.htmlで使うランダム図書紹介
const books = document.querySelectorAll('.book');
const randomContainer = document.getElementById('random-book');
const button = document.getElementById('random-button');

function showRandomBook() {
  randomContainer.innerHTML = '';
  const randomIndex = Math.floor(Math.random() * books.length);
  const randomBook = books[randomIndex].cloneNode(true);
  randomContainer.appendChild(randomBook);
}
showRandomBook();
button.addEventListener('click', showRandomBook);

// 目次作るとき
document.addEventListener('DOMContentLoaded', () => {
    const heads = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (heads && heads.length) {
        let contents = '';
        heads.forEach((head, i) => {
            contents += `<li><a href="#head${i}">${head.textContent}</a></li>`;
            head.innerHTML += `<a id="head${i}"></a>`;
        })
        document.querySelector('#table-of-content').innerHTML += `<ol>${contents}</ol>`;
    }
});