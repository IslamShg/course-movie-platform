import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { MaterialIcon } from '@/components/ui/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li className={classNames({ [styles.active]: asPath === item.link })}>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span >{item.title}</span>
			</Link>
		</li>
	)
}
