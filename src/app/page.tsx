import Blob from '~/components/blob'
import Status from '~/components/status'

export default function Page() {
	return (
		<div className='flex h-screen w-full flex-col items-center justify-center gap-10 p-5 sm:p-20'>
			<Blob />
			<Status />
		</div>
	)
}
