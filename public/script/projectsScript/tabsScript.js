const projectTabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        });
        projectTabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
});