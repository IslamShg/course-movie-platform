import axios from 'axios'

import { API_URL } from '@/config/api.config'

console.log('URL: ', API_URL)
export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
