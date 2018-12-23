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
