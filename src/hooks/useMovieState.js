import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuid } from "uuid";

const useMovieState = initialMovies => {
    const [movies, setMovies] = useLocalStorageState("movies", initialMovies);

    return {
        movies,
        addMovie: title => {
            const newMovie = {
                id: uuid(),
                title,
                watched: false
            }

            setMovies(prevMovies => [...prevMovies, newMovie]);
        },
        removeMovie: id => {
            setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
        },
        toggleMovie: id => {
            setMovies(prevMovies =>
                prevMovies.map(movie =>
                    movie.id === id ? {...movie, watched: !movie.watched} : movie
                )
            );
        }
    }
}

export default useMovieState;