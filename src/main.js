const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCoUJkZeuDKMvmxuZ06Y5jmA&part=snippet%2Cid&order=date&maxResults=1';
const content = document.getElementById('div-video');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64dc4c8fffmsh978beacbde10222p1e0bfajsn9d49e1635dd4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
	const response = await fetch(urlApi,options);
	const data = await response.json();
	return data;
}

//se ejecuta automaticamente al cargar el archivo
(async () => {
	try{
		const videos = await fetchData(url);
		let view = `
		${videos.items.map(video => `
			<h3>${video.snippet.title}</h3>
			<img id = "video-image" src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
		`)} 
		` //se puede usar slice() y join()*/
		content.innerHTML = view;
	}catch (error){
		content.innerHTML = `
			<p>Error jeje :(</p>
		`;
	}
})();
