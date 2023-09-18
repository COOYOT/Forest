const links = document.querySelectorAll('.nav__link')

window.addEventListener('scroll', () => {
	links[0].classList.toggle('nav__link--active', window.scrollY < 400)
	links[1].classList.toggle('nav__link--active', window.scrollY > 399 && window.scrollY < 1200)
	links[2].classList.toggle('nav__link--active', window.scrollY > 1199)
})
