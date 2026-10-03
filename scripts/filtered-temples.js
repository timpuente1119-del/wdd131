const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
	templeName: "Gilbert Arizona",
	location: "Gilbert, Arizona, United States",
	dedicated: "2014, March, 2",
	area: 85326,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
  },
  {
	templeName: "Provo City Center",
	location: "Provo, Utah, United States",
	dedicated: "2016, March, 20",
	area: 85084,
	imageUrl: 
	"https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
  },
  {
	templeName: "Johannesburg South Africa",
	location: "Johannesburg, South Africa",
	dedicated: "1985, August, 24-25",
	area: 19184,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  }
];

let photos = document.getElementById("pics");



function makeCard(array){
	let htmlInsert = "";
	array.forEach(temple => {
		htmlInsert += `
			<div class="temple-card">
				<h2>${temple.templeName}</h2>
				<p>Location: ${temple.location}</p>
				<p>Dedication: ${temple.dedicated}</p>
				<p>Size: ${temple.area}</p>
				<img src="${temple.imageUrl}" alt="${temple.templeName}" width="600" height="400" loading="lazy">
			</div>
		`;
	});

photos.innerHTML = htmlInsert;
};

makeCard(temples);

const oldTemplesLink = document.querySelector("#Old");
oldTemplesLink.addEventListener("click", () => {
	// const yearOld = new Date(temple.dedicated).getFullYear();
	// const yearOldInt = Number(yearOld);
	let oldTemples = temples.filter(temple => {
		const yearOld = new Date(temple.dedicated).getFullYear();
		const yearOldInt = Number(yearOld);
		return yearOldInt < 1900;
	});
	makeCard(oldTemples);
});

const newTemplesLink = document.querySelector("#New");
newTemplesLink.addEventListener("click", () => {
	
	let newTemples = temples.filter(temple => {
		const yearNew = new Date(temple.dedicated).getFullYear();
		const yearNewInt = Number(yearNew);
		return yearNewInt > 2000;
	});
	makeCard(newTemples);
});

const smallTemplesLink = document.querySelector("#Small");
smallTemplesLink.addEventListener("click", () => {
	
	let smallTemples = temples.filter(temple => {
		smallArea = temple.area;
		return smallArea < 10000;
	});
	makeCard(smallTemples);
});

const largeTemplesLink = document.querySelector("#Large");
largeTemplesLink.addEventListener("click", () => {
	
	let largeTemples = temples.filter(temple => {
		largeArea = temple.area;
		return largeArea > 90000;
	});
	makeCard(largeTemples);
});

const homeTemplesLink = document.querySelector("#Home");
homeTemplesLink.addEventListener("click", () => {
	
	makeCard(temples);
});

