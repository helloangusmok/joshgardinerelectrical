var menuIcon = document.getElementById('menu-icon');

function transitionIcon(){
	if (menuIcon.classList.contains('fa-bars')){
		menuIcon.classList.remove('fa-bars');
		menuIcon.classList.add('fa-times');
		document.getElementById('mobile-menu').style.width = '100%';
		document.querySelector('body').style.overflow = 'hidden';
	} else if (menuIcon.classList.contains('fa-times')){
		menuIcon.classList.remove('fa-times');
		menuIcon.classList.add('fa-bars');
		document.getElementById('mobile-menu').style.width = '0';
		document.querySelector('body').style.overflow = 'scroll';
	}
}

document.getElementsByClassName('small-menu')[0].addEventListener('click', function(){
	transitionIcon();
});