
///// MENÜÜÜÜ /////

var theToggle = document.getElementById('toggle');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}





var Persons = [
                        {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy1.jpg",	
			likes: 0    // numeric property used to store likes
			},

			{
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Robbie Williams", "Bausa", "Shaggy"],
			age: 25,
   			myPhoto: "img/boy2.jpg",	
			likes: 0    // numeric property used to store likes
			},
            
            {
			name: 'Maxima',
			surname: 'Musterman',
			favoritePerformers: ["Sia", "Britney Spears", "Willy Williams"],
			age: 25,
   			myPhoto: "img/foto2.jpg",	
			likes: 0    // numeric property used to store likes
			},

			{
			name: 'Selina',
			surname: 'Muster',
			favoritePerformers: ["Coldplay", "J Balvin", "MArk Forster"],
			age: 25,
   			myPhoto: "img/foto3.jpg",	
			likes: 0    // numeric property used to store likes
			},



			{
			name: 'Melinda',
			surname: 'Krim',
			favoritePerformers: ["Cris Cap", "Era Istrefi", "Lois Fonsi"],
			age: 26,
   			myPhoto: "img/foto4.jpg",	
			likes: 0    // numeric property used to store likes
			},

			{
			name: 'Sandra',
			surname: 'Ludwig',
			favoritePerformers: ["Madonna", "Michael Jackson", "Helena Fischer"],
			age: 32,
   			myPhoto: "img/foto5.jpg",	
			likes: 0    // numeric property used to store likes
			},

			{
			name: 'Hermann',
			surname: 'Stock',
			favoritePerformers: ["Jason Derula", "Maluma", "Nicki Minaj"],
			age: 20,
   			myPhoto: "img/foto6.jpg",	
			likes: 0    // numeric property used to store likes
			},
		
];


	
	var buttoon = document.createElement("button");
	likeButton.setAttribute("type", "button");
	likeButton.setAttribute("onclick", "incrementLikes(" + i + ", Persons[" + i + "])");
	likeButton.appendChild(document.createTextNode("Like"));
	buttonWrapper.appendChild(likeButton);
	
	var nrOfLikes = document.createElement("span");
	nrOfLikes.setAttribute("id", "person" + i + "_likes");
	nrOfLikes.appendChild(document.createTextNode(Persons[i].likes));
	like.appendChild(nrOfLikes);
	
	var heart = document.createElement("span");
	like.appendChild(heart);
	
	var heartImage = document.createElement("img");
	heartImage.setAttribute("src", "img/like.png");
	heart.appendChild(heartImage);
	
	tree.appendChild(container);
	}
document.getElementById("profiles").appendChild(tree);

function incrementLikes(index, person){
	person.likes++;
	document.getElementById("person" + index + "_likes").innerHTML = person.likes;
}



