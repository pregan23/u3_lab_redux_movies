import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieListState }) => {
    return { movieListState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(LoadMovies())
    }
}

const MovieList = (props) => {

    const IMAGE_BASE_PATH = `https://image.tmdb.org/t/p/w500`

    useEffect(() => {
        props.fetchMovies()
    }, [])
    // console.log(props.movieListState.movieList.results)
    return (
        <div>
            {props.movieListState.movieList.map((movie) => (
                <ul key={movie.id}>
                    <Link to={`/movie-list/${movie.id}`}><img src={`${IMAGE_BASE_PATH}${movie.poster_path}`} />{movie.title}</Link>
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)