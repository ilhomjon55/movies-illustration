//  Get necessary HTML element
var elMoviesList = $_('.js-movies-list');

// Make List empty
elMoviesList.innerHTML = '';


//  Slice 200 movies and assign to the var
var movies = kinolar.slice(0, 200);


/* =====================================================
First homaki version
===================================================== */

/* for (var i = 0; i < movies.length; i++) {
  var elNewLi = document.createElement('li');
  elNewLi.setAttribute('class', 'col-12 col-sm-4 d-flex flex-column alert-info m-2 p-2');

  var elNewHName = document.createElement('h3');
  elNewHName.setAttribute('class', 'h5 text-center font-weight-bold');
  elNewHName.textContent = movies[i].title;

  var elNewPCast = document.createElement('p');
  elNewPCast.setAttribute('class', 'p-1 m-0')
  elNewPCast.textContent = movies[i].cast.join(', ')

  var elNewPGenre = document.createElement('p');
  elNewPGenre.setAttribute('class', 'border-bottom border-top border-info p-1 m-0 mt-auto');
  elNewPGenre.textContent = movies[i].genres;

  var elNewPYear = document.createElement('p');
  elNewPYear.setAttribute('class', 'p-1 m-0');
  elNewPYear.textContent = movies[i].year;

  elMoviesList.appendChild(elNewLi);
  elNewLi.appendChild(elNewHName);
  elNewLi.appendChild(elNewPCast);
  elNewLi.appendChild(elNewPGenre);
  elNewLi.appendChild(elNewPYear);

} */


/* =====================================================
Second forEach functional, advanced version
===================================================== */
movies.forEach(function (movie) {

  // Create new li
  var elNewLi = createNewEl('li', 'col-12 col-sm-4 d-flex flex-column alert-info m-2 p-2');

  // Create new h
  var elNewHName = createNewEl('h3', 'h5 text-center font-weight-bold', `Name: ${movie.title}`);

  // Create new p
  var elNewPCast = createNewEl('p', 'p-1 m-0', `Actors: ${movie.cast.join(', ')}`);

  // Create new p
  var elNewPGenre = createNewEl('p', 'border-bottom border-top border-info p-1 m-0 mt-auto', `Genre: ${movie.genres.join(',')}`);

  // Create new p
  var elNewPYear = createNewEl('p', 'p-1 m-0', `Released in: ${movie.year}`);

  // Append all created elements
  elMoviesList.appendChild(elNewLi);
  elNewLi.appendChild(elNewHName);
  elNewLi.appendChild(elNewPCast);
  elNewLi.appendChild(elNewPGenre);
  elNewLi.appendChild(elNewPYear);
});