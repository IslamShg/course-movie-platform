import { FC } from 'react'

import { usePopularGenres } from './usePopularGenres'

export const GenreMenu: FC = () => {
	const {} = usePopularGenres()

	return <div>GenreMenu</div>
}
