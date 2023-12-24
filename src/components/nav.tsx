import Link from 'next/link'

export default function Nav({title}: {title: string}) {
	return (
		<div className='fixed top-0 z-20 flex w-full items-baseline justify-between p-5'>
			<Link
				className='text-xs no-underline'
				href='/'>
				{title}
			</Link>
			<Link
				className='text-xs no-underline'
				target='_blank'
				href='https://github.com/RubricLab/project23'>
				github
			</Link>
		</div>
	)
}
