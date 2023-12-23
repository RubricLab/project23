import {ImageResponse} from 'next/og'
import colors from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'Rubric logo with subtitle: We build software.'
export const contentType = 'image/png'
export const size = {
	height: 630,
	width: 1200
}

type Props = {
	params: object
}

export default async function Image({params}: Props) {
	return new ImageResponse(
		(
			<div
				style={{
					alignItems: 'center',
					background: colors['black'],
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					justifyContent: 'center',
					overflowY: 'hidden',
					position: 'relative',
					width: '100%',
					fontFamily: 'monospace'
				}}>
				<div style={{color: colors['white'], fontSize: 500}}>23</div>
			</div>
		),
		{
			...size
		}
	)
}
