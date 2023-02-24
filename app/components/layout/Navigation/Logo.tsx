import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/assets/images/logo.svg'

export const Logo = () => {
	return (
		<Link className="px-layout mb-10 block" href="/" passHref>
			<Image
				src={logoImg}
				width={247}
				height={34}
				alt="Online Cinema"
				draggable={false}
			/>
		</Link>
	)
}
