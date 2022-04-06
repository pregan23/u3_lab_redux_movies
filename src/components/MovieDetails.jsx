import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailsState }) => {
    return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (id) => dispatch(LoadMovieDetails(id))
    }
}

const MovieDetails = (props) => {

    let { id } = useParams()

    useEffect(() => {
        props.fetchMovies(id)
    }, [id])

    console.log(props.movieDetailsState)

    return (

        <ul>

            <li>{props.movieDetailsState.movieDetails.overview}</li>
            <li>Release Date: {props.movieDetailsState.movieDetails.release_date}</li>
            <li>Rating: {props.movieDetailsState.movieDetails.vote_average}</li>
            <li>Runtime: {props.movieDetailsState.movieDetails.runtime} minutes</li>
            {/* {props.movieDetailsState.movies.length ? (
                props.movieDetailsState.movies.map((movie) => (
                    <li key={movie.id}>{movie.name}</li>

                ))
            ) : (
                <h3>No Movies</h3>
            )} */}
        </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)