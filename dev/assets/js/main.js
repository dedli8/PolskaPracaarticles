// language script starts
const langPanel = document.getElementsByClassName("language-panel")[0];
function changeLang(e) {
    if (e.target.classList.contains('language-item-active') && e.target.classList.contains('language-item')){
        return
    }
    else if (e.target.classList.contains('language-item')){
        e.target.parentElement.firstElementChild.classList.remove("language-item-active");
        e.target.parentElement.lastElementChild.classList.remove("language-item-active");
        e.target.classList.add("language-item-active");
    }
}
langPanel.addEventListener('click', changeLang);
// language script ends

// articles menu scripts starts
const articlesMenuArrow = document.querySelector(".articles-menu-arrow");
const articlesMenu = document.querySelector(".articles-menu");
const articlesMenuItem = document.querySelectorAll(".articles-menu-item");
function heightAuto(el) {
el.classList.toggle('height-auto');
}
function addClassActive(etarg) {
    if(etarg.classList.contains("articles-menu-item")){
        for (let i = 0; i < articlesMenuItem.length; i++){
articlesMenuItem[i].classList.remove("articles-menu-item-active");
        }
        etarg.classList.add("articles-menu-item-active");
    }
}
articlesMenuArrow.addEventListener('click', function (e) {
    heightAuto(articlesMenu);
    e.stopPropagation();
});
articlesMenu.addEventListener('click', function (e) {
    addClassActive(e.target);
});

// articles menu scripts ends