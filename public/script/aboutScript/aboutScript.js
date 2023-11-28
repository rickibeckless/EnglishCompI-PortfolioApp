/* ACCORDION FUNCTION SCRIPT */
const accordionHeaders = document.querySelectorAll('.content-header');
const accordionContents = document.querySelectorAll('.content-text');
const accordionArrows = document.querySelectorAll('.a-arrow');

function showContent(content) {
    const cTarget = document.querySelector(content.dataset.contentTarget);
    const arrow = content.querySelector('.a-arrow');

    accordionContents.forEach(accordionContent => accordionContent.classList.remove('active'));
    accordionHeaders.forEach(content => content.classList.remove('active'));
    accordionArrows .forEach(accordionArrow => accordionArrow.classList.remove('active'));

    content.classList.add('active');
    cTarget.classList.add('active');
    arrow.classList.add('active');
}

accordionHeaders.forEach(content => {
    content.addEventListener('click', () => {
        showContent(content);
    });
});