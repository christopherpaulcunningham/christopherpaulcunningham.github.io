const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });
const timeline2 = gsap.timeline({ defaults: { ease: 'power1.out' } });
timeline.to('.nav-animation', { y: '0%', duration: 0.5, stagger: 0.2 });
timeline2.to('.profile-img', { x: '0%', duration: 0.75 });
timeline2.to('.intro-text', { y: '0%', duration: 0.5, stagger: 0.1 });
timeline2.to('.arrow-animation', { y: '0%', duration: 0.75, stagger: 0.1 });

// Add the current year to the footer.
const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerHTML = currentYear;

// Show the navigation menu when the hamburger menu is clicked.
const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
hamburgerButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
	hamburgerButton.classList.toggle('active');
});

// Change the active navbar option depending on the scroll position of the page.
let mainNavLinks = document.querySelectorAll('nav ul .navbar-button a');
let mainSections = document.querySelectorAll('main section');
let lastId;
let cur = [];

window.addEventListener('scroll', () => {
	// This should be throttled, especially because it will trigger when smooth scrolling.
	throttleFunction(() => {
		let fromTop = window.scrollY + (window.scrollY / 3);
		mainNavLinks.forEach((link) => {
			let section = document.querySelector(link.hash);
			if (
				section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop
			) {
				link.classList.add('current');
			} else {
				link.classList.remove('current');
			}
		});
	}, 300);
});

// A throttle method to limit how often an event is fired.
var timerId;
const throttleFunction = (func, delay) => {
	// If setTimeout is already scheduled, no need to do anything
	if (timerId) {
		return;
	}

	// Schedule a setTimeout after 'delay' seconds.
	timerId = setTimeout(() => {
		func();

		// When the function execution is finished, reset the timer.
		timerId = undefined;
	}, delay);
};