// Nav elements

const btnMenu = document.querySelector('.nav__btn-menu')
const menu = document.querySelector('.nav__links')
const allLinks = document.querySelectorAll('.nav__link')

// Footer elements

const footerBox = document.querySelectorAll('.footer__title-box')
const descriptionBox = document.querySelectorAll('.footer__description-box')
const arrows = document.querySelectorAll('.footer__arrow')

const spanDate = document.querySelector('.footer__date')

// Date

const footerDate = () => {
	const date = new Date()
	spanDate.textContent = date.getFullYear()
}

// Menu & Footer function

const menuFunction = () => {
	menu.classList.toggle('nav__links--active')
	document.body.classList.toggle('sticky')
	allLinks.forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('nav__links--active')
			document.body.classList.remove('sticky')
		})
	})
}

for (let i = 0; i < footerBox.length; i++) {
	footerBox[i].addEventListener('click', () => {
		descriptionBox[i].classList.toggle('footer__description-box--active')
		arrows[i].classList.toggle('footer__arrow--active')
	})
}

btnMenu.addEventListener('click', menuFunction)
footerDate()
