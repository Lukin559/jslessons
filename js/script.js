const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);


const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Ваш крайний фильм?", ""),
      b = prompt("Ваша оценка этому фильму", ""),
      c = prompt("Ваш любимый фильм?", ""),
      d = prompt("Ваша крайний этому фильму", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);