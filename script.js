
document.getElementById('searchButton').addEventListener('click', searchMovies)

let key_api = 'e09282e91f76b8800296c0b2daa28ab4'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultCointainer = document.getElementById('results')
function searchMovies() {
    resultCointainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?query=Jack+Reacher&api_key=${key_api}&query=${searchInput}`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(data => displayMovies(data.results))
        .catch(error => console.error(error)) 
    }
    
    
    function displayMovies(movies) {
        resultCointainer.innerHTML = ''
        
        if(movies.length === 0){
            resultCointainer.innerHTML = '<p>No se encontraron resultado </p>'
            return
        }

        movies.forEach(movie => {
            movieDiv = document.createElement('div')
            movieDiv.classList.add('movie')

            let title = document.createElement('h2')
            title.textContent = movie.title

            let release_date = document.createElement('p')
            release_date.textContent = 'Fecha de lanzamiento: ' + movie.release_date

            let overview = document.createElement('p')
            overview.textContent = movie.overview

            poster_path = urlImg + movie.poster_path
            let poster = document.createElement('img')
            poster.src = poster_path


            resultCointainer.appendChild(movieDiv)
            movieDiv.appendChild(poster)
            movieDiv.appendChild(title)
            movieDiv.appendChild(release_date)
            movieDiv.appendChild(overview)
        });
    }




