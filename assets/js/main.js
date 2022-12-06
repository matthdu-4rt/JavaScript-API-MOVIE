let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');


//Codigo de paginacion Buttom Siguiente
btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000) {
		pagina += 1;
	loadMovie();
	}
});

//Codigo de paginacion Buttom Anterior
btnAnterior.addEventListener('click', () => {
	if(pagina > 1) {
		pagina -= 1;
	loadMovie();
	}
});

// Codigo de API
const loadMovie = async () => {

	try {
		const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e08aa68772768fa745f32494ec514fa2&language=es-MX&page=${pagina}`);
		console.log(response);

		//Si la respuesta es correcta:
		if (response.status === 200) {
			const data = await response.json();

			let movies = '';
			data.results.forEach(movie => {
				movies += `
				<div class="movie"> 
				    <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
				</div>
				<h3 class="title">${movie.title}</h3>
				`;
			});

			document.getElementById('contenedor').innerHTML = movies;


		} else if(response.status === 401) {
			console.log('Pusiste la llave correcta?')
		} else if(response.status === 404) {
			console.log('La pelicula que has buscado no existe')
		} else {
			console.log('Se presento un error a la hora de la busqueda');
		}

	} catch (error) {
		console.log(error);
	}

}

loadMovie();



















