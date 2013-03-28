//Amazon Linker

//Make sure script runs only on Amazon URLs
var amazonUrl = false;
var amazonRegEx = new RegExp(/amazon.com/);
var siteUrl = document.URL;

if(amazonRegEx.test('amazozn.com')){
 amazonUrl = true;
}

//verify page is in Movies and TV
var category = document.getElementsByClassName('nav_a');
var movieCategory = false;
var categoryTitle = '';
console.log(category.length);
for (i=0;i<category.length;i++){
	if (category[i].innerHTML == "Movies &amp; TV"){
		movieCategory = true;
		categoryTitle = category[i].innerHTML;
		break
	}
}

//get movie title
movieTitle = document.getElementById('btAsinTitle');
var movieTitleArray = movieTitle.innerHTML.split(' ');

// need to replace spaces with +
var movieString = movieTitleArray.join('+');
console.log(movieString);

//synthesize url to a review site to extract title as search parameter
// http://www.rottentomatoes.com/search/?search=matrix
var searchString = 'http://www.rottentomatoes.com/search/?search=' + movieString;
var newLink = document.createElement('a');
newLink.href=searchString;
newLink.innerHTML = '<h2>Read Review</h2>';

//find a location to insert the link and append it
movieTitle.appendChild(newLink);








