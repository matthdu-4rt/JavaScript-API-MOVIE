const loadMovie = async () => {

	try {
		const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e08aa68772768fa745f32494ec514fa2&language=es-MX');
		console.log(response);

		//Si la respuesta es correcta:
		if (response.status === 200) {
			const data = await response.json();

			let movies = '';
			data.results.forEach(movie => {
				movies += `

				<div class="listMovie"> 
				    <img class="poster" src=" ">
				</div>
				<h1>${movie.title}</h1>
				
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



















