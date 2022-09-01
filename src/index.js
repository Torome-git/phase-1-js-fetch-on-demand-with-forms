const init = () => {
    let getForm = document.querySelector("form");
	getForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let getSearch = document.querySelector("#searchByID").value;
		fetch("http://localhost:3000/movies/" + getSearch)
			.then((res) => res.json())
			.then((data) => {
				let getMovie = document.querySelector("#movieDetails");
				getMovie.innerHTML = data.title;
			});
	});
};

document.addEventListener('DOMContentLoaded', init);