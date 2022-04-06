import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import  MovieListReducer  from './reducers/MovieListReducer.js'
import  MovieDetailsReducer  from './reducers/MovieDetailsReducer.js'

const store = createStore(
  combineReducers({
    movieListState: MovieListReducer,
    movieDetailsState: MovieDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store