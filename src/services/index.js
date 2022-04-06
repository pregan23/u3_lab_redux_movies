import Axios from 'axios'

const Client = Axios.create({ baseURL: `https://api.themoviedb.org/3/` })

export default Client