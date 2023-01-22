// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
// document.querySelector("#hamburger-menu").onclick = (e) => {
// 	navbarNav.classList.toggle("active");
// 	e.prevetDefault();
// };
const hamMenu = document.querySelector("#hamburger-menu");
hamMenu.addEventListener("click", function (e) {
	navbarNav.classList.toggle("active");
	e.preventDefault();
});
// ketika klik di luar side bar untuk menghilangkan side barnya
document.addEventListener("click", function (e) {
	if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});
