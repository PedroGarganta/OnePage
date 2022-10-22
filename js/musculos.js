var musculo = document.getElementById("#musculos");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a81a212b8bmsh3bfd8b1bb9b7652p1797bbjsn9da07f9378d2',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options, musculo)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
