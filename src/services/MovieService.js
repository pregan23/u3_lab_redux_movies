import Client from './'


export const GetMovieList = async () => {
    try {
        const res = await Client.get(`discover/movie/?api_key=${process.env.REACT_APP_API_KEY}`)
        // console.log(res.data)
        return res.data

    } catch (error) {
        throw error
    }
}

export const GetMovieDetails = async (id) => {
    try {
        const res = await Client.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
        
        return res.data
    } catch (error) {   
        throw error
    }
}