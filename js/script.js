const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);


const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a; 
let b; 
let c; 
let d; 1



for (let i = 1; i < 3; i++) {
    a = prompt("Ваш крайний фильм?", "");
    b = prompt("Ваша оценка этому фильму", "");
    personalMovieDb.movies[a] = b;
}


console.log(personalMovieDb);