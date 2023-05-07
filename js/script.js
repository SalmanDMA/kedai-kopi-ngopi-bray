const navbarNav = document.querySelector('.navbar-nav');
const hamMenu = document.querySelector('#hamburger-menu');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');
const shoppingCartSection = document.querySelector('.shopping-cart');

// Toggle class active hamburger menu
hamMenu.addEventListener('click', () => {
 navbarNav.classList.toggle('active');
});

// Toggle class active search form
searchButton.addEventListener('click', () => {
 searchForm.classList.toggle('active');
 searchBox.focus();
});

// Toggle class active shopping cart
shoppingCartButton.addEventListener('click', () => {
 shoppingCartSection.classList.toggle('active');
});

// ketika klik di luar element
document.addEventListener('click', function (e) {
 if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
  navbarNav.classList.remove('active');
 }
 if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
  searchForm.classList.remove('active');
 }
 if (!shoppingCartButton.contains(e.target) && !shoppingCartSection.contains(e.target)) {
  shoppingCartSection.classList.remove('active');
 }
});

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((item) => {
 item.addEventListener('click', () => {
  itemDetailModal.classList.add('active');
 });
});

// click icon close
const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', () => {
 itemDetailModal.classList.remove('active');
});

// klik di luar modal
window.addEventListener('click', (e) => {
 if (e.target === itemDetailModal) {
  itemDetailModal.classList.remove('active');
 }
});
