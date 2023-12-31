import {Plus_Jakarta_Sans} from 'next/font/google'
import Nav from '~/components/nav'
import './styles.css'

const font = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata = {
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US'
		}
	},
	metadataBase: new URL(
		process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: `http://localhost:${process.env.PORT || 3000}`
	)
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body
				className={`${font.className} relative flex h-full min-h-screen w-full flex-col items-center`}>
				<Nav title={'23'} />

				<div className='z-10 flex w-full max-w-3xl items-center justify-center'>
					{children}
				</div>
			</body>
		</html>
	)
}
