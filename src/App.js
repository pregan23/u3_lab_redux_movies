import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'


const App = () => {
  
  return (
    <div className="App">
      <h3>TMBD Movie List</h3>
      <div className='movie-list'>
    
      </div>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie-list/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
