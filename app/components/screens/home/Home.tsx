import { FC } from 'react'

import { Layout } from '@/components/layout/Layout'
import { Heading } from '@/components/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

export const Home: FC = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV online"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}
