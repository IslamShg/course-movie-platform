import { useQuery } from 'react-query'


import { getGenreUrl } from '@/config/url.config'

import { IMenuItem } from '../menu.interface'
import { GenreService } from '@/services/genre.service'

export const usePopularGenres = () => {
	const queryData = useQuery('popular', () => GenreService.getAll(), {
		select: ({ data }) =>
			data
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name
						} as IMenuItem)
				)
				.splice(0, 4),

		onError(error) {}
	})

	return queryData
}
