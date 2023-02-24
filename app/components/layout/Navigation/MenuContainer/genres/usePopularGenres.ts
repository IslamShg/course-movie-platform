import { useQuery } from 'react-query'

export const usePopularGenres = () => {
	const queryData = useQuery('popular', () => {})

	return { queryData }
}
