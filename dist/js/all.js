var fish_url_string = "file:///C:/Users/Daniel/Desktop/Fiskeside/dist/sub-pages/fish-specific.html?id=1"; //window.location.href
var fish_url = new URL(fish_url_string);
var c = fish_url.searchParams.get("id");
console.log(c);

///*Referance to the starting page of the game */
//
//
//
////setting variabler for api call
//const api = 'https://anapioficeandfire.com/api/characters/';
//const characters = [339, 583, 1303, 1052, 2024, 565, 148, 16, 849, 216];
///* Eddard stark(339), Jon snow(583), daenerys(1303), Tyrion Lanister( 1052), Tormund Giantsbane (2024), Joffrey (565), Arya Stark(148), Margarye tyrell (16), ramsay snow(849), //Brienne of Tarth(216) */
//
//
//
///* fetching api in a for loop, and run createCards each time as long as characters array */
//for (let i = 0; i < characters.length; i++) {
//	let url = api + characters[i];
//
//	fetch(url)
//		.then(result => result.json())
//		.then((res) => {
//			createCards(res);
//		})
//		.catch(err => console.log(err));
//}
//
//
//
//
//
//
//function createCards(result){
//
//
//	//creating each card element
//  var cardContainer = document.getElementById('cards');
//  var card = document.createElement('div');
//  card.classList.add('card');
//  cardContainer.appendChild(card);


var  api = 'https://raw.githubusercontent.com/DanielSolheim/fiskeside/master/app/jon/fisk.json';




  fetch(api)
     .then(result => result.json())
     .then((res) =>{

       createFish(res)
     })
     .catch(err => console.log(err));



   // Createfish is now being executed for every page.
   // I want it to only be executed



function createFish(result){




//
  var myFish = document.getElementById('fishContainer');

 const fishArray = result.map(function(article){
   return `
    <div class="fishCard">
      <p class="fish-name">${article.name}</p>
      <img class="fish-img" src="${article.imgurl + article.name + '.png'}" alt="${article.name + " image"}">
      <p class="shortInfo"> ${article.shortinfo} </p>
      <a src="google.com">
      <button onclick="window.location.href = './dist/sub-pages/fish-specific.html?id=1'"> See more </button>
      </a>
    </div>
   `
 }).join("");

 myFish.innerHTML = fishArray;





  ////fetching main container and creating cards
  // var fishContainer = document.getElementById('fishContainer');
  // var fishCard = document.createElement('div');
  // fishCard.setAttribute('class', 'fishCard');
  // fishContainer.appendChild(fishCard);
  // //adding some text to the Cards
  // var fishType = document.createElement('p');
  // fishType.setAttribute('class', 'fish-name');
  // fishCard.appendChild(fishType);
  // var fishTypeText =
  // document.createTextNode(result[i].name);
  // fishType.appendChild(fishTypeText);
  // var fishImg = document.createElement('img')
  // fishImg.setAttribute('src', 'dist/images/' + result[i].name + '.png');
  // fishImg.setAttribute('class', 'fish-img');
   //fishCard.appendChild(fishImg)






} //createfish function

