import axios from 'axios'

export const GenreService = {
	async getPopularGenres(limit = 4) {
		return axios.get<IGenre[]>('')
	}
}
