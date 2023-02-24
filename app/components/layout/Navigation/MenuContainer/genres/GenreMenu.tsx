import { FC } from 'react'

import { Menu } from '../Menu'

import { usePopularGenres } from './usePopularGenres'

export const GenreMenu: FC = () => {
	const { data, isLoading } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">loading...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
