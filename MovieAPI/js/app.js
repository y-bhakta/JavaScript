const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWU2ZjI0ODM2MmM1NWE1ODAwYjUwODA5YTk5MTY3YiIsIm5iZiI6MTc1NzA0NDM0Mi43MjgsInN1YiI6IjY4YmE1ZTc2YmNlN2IyYTI5ODliZjc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._MnvvNdVDwk5988Ro4Gr57UoHZSDYevPhBL3FWSugNU'
    }
};
fetch(url, options)
    .then(res => res.json())
    .then((data) => {
        let movies=data.results;
        displaymovie(movies);
        console.log(movies);        
    })
    .catch(err => console.error(err));

let movielist = document.querySelector('.movielist');
const displaymovie = (movies) => {
    movies.forEach((movie) => {
        let col = document.createElement('div');
        col.classList.add("col-lg-3","p-2","col-md-4","col-sm-5","col-6");
        col.style.border = '1px solid teal';
        col.style.borderRadius = '15px';
        col.innerHTML += `
        <div class="w-100" style="overflow: hidden;border-radius:15px">
            <a href="#">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"class="w-100 himg" style="height: 375px;object-fit: cover;border-radius:15px" alt="">
            </a>
        </div>
        <div class="py-2">
            <h5 class="text-white">${movie.title}</h5>
            <h6 class="text-white fw-normal">${movie.release_date}</h6>
        </div>
    `
        movielist.append(col);
    });
}