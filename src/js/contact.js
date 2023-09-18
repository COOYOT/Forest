const nameInput = document.querySelector('#name')
const surnameInput = document.querySelector('#surname')
const eMailInput = document.querySelector('#email')
const messageInput = document.querySelector('#textarea')

const clearBtn = document.querySelector('.contact__clear')
const sendBtn = document.querySelector('.contact__send')

const closePopupBtn = document.querySelector('.contact__close-pop')
const popup = document.querySelector('.contact__pop-up')

let inputs = [nameInput, surnameInput, eMailInput, messageInput]

const checkForm = input => {
	input.forEach(el => {
		if (el.value.trim() === '') {
			error(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const emailCheck = () => {
	const regExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
	if (!regExp.test(eMailInput.value)) {
		error(eMailInput, 'podaj poprawny adres e-mail')
	}
}

const error = (el, msg) => {
	const box = el.parentElement
	const err = box.querySelector('.contact__error')

	err.classList.add('contact__error--active')
	err.textContent = msg
}

const clearError = input => {
	const err = input.parentElement.querySelector('.contact__error')
	err.classList.remove('contact__error--active')
}

const clearForm = input => {
	input.forEach(el => {
		el.value = ''
		clearError(el)
	})
}
const openPopup = () => {
	const errors = document.querySelectorAll('.contact__error')
	let errcount = 0
	errors.forEach(err => {
		if (err.classList.contains('contact__error--active')) {
			errcount++
		}
	})
	if (errcount === 0) {
		popup.style.display = 'flex'
	}
}

const closePopup = () => {
	popup.style.display = 'none'
	clearForm(inputs)
}

closePopupBtn.addEventListener('click', closePopup)
clearBtn.addEventListener('click', () => {
	clearForm(inputs)
})
sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm(inputs)
	emailCheck()
	openPopup()
})
