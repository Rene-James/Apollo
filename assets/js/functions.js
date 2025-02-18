$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});


//Definition des variables
document.addEventListener("DOMContentLoaded", function() {
	slides = document.querySelectorAll('.slider li');
	var prevButton = document.querySelector('.prev'); 
	var nextButton = document.querySelector('.next');
	var bannerItems = document.querySelectorAll('.banner li');
	let currentIndex = 1;
  
//Ajout de fonctions	
	function changeSlide() {

//Control du slider (ajout et retrait de la classID)
	  slides.forEach((slide, index) => {
		slide.classList.remove('current');
		slide.classList.remove('back');
		slide.classList.remove('front');
		
		if (index === currentIndex) {
		  slide.classList.add('current');
		} else if (index === (currentIndex - 1 + slides.length) % slides.length) {
		  slide.classList.add('back');
		} else if (index === (currentIndex + 1) % slides.length) {
		  slide.classList.add('front');
		}
	  });
  
	  
	  bannerItems.forEach((bannerItem, index) => {
		bannerItem.classList.remove('active');
		if (index === currentIndex) {
		  bannerItem.classList.add('active');
		}
	  });
	}
  
	//Pour gerer le bouton <
	prevButton.addEventListener('click', () => {
	  currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
	  changeSlide(); 
	});
  
	//Pour gerer le bouton >
	nextButton.addEventListener('click', () => {
	  currentIndex = (currentIndex + 1) % slides.length;
	  changeSlide();
	});
  

  });


  var map = L.map('map').setView([45.756880, -73.705978], 13);
  var marker = L.marker([45.756880, -73.705978]).addTo(map);
  

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick)

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);