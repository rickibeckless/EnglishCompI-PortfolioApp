document.addEventListener('mouseover', e => {
    const isDropdownLink = e.target.matches('[data-dropdown-link]');
    if (!isDropdownLink && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownLink) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    };

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });
});

const hamburger = document.querySelector('.hamburger');
const headerLinks = document.querySelector('.header-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerLinks.classList.toggle('active');
});

document.querySelectorAll('.h-l-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    headerLinks.classList.remove('active');
}));