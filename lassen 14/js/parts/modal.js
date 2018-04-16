function modal() {
	let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	}); 
	close.addEventListener('click', function(){
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let scription_btn = document.querySelectorAll('.description-btn');



	scription_btn: function btn () {
		for (let i = 0; i < scription_btn.length; i++) {
		scription_btn[i].addEventListener('click', showModal);
	};
		};
 		

 	function showModal() {

       this.classList.add('more-splash');
       overlay.style.display = "block";
       document.body.style.overflow = 'hidden';

   };

scription_btn[0].addEventListener('click', showModal);
scription_btn[1].addEventListener('click', showModal);
scription_btn[2].addEventListener('click', showModal);
scription_btn[3].addEventListener('click', showModal);
}

module.exports = modal;