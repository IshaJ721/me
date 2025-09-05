const tabs = document.querySelectorAll('.tab-button');
const pages = document.querySelectorAll('.tab-page');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});
