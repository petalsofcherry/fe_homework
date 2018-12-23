const button = document.getElementById('login');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

document.addEventListener('click', function (e) {
    if (e.target === button && !popup.classList.contains('show')) {
        popup.classList.add('show')
    } else if (e.target === close) {
        popup.classList.remove('show')
    }
});

function enterArticle(item) {
    item = document.getElementsByClassName(item)["0"];

    localStorage.title = item.children[0].textContent;
    let textNode = item.children[1].children[0];
    localStorage.text1 = textNode.childNodes[0].textContent;
    localStorage.text2 = textNode.childNodes[2].textContent;
    localStorage.img = textNode.childNodes[1].currentSrc;

    location.href = "article.html";
}
