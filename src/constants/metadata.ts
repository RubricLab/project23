import {Metadata} from 'next'

export const META = {
	desc: 'decentralized compute network for training AI models',
	siteURL: 'http://localhost:3000',
	title: 'project 23',
	twitter: '@rubriclabs'
}

export const DEFAULT_META: Metadata = {
	description: META.desc,
	openGraph: {
		description: META.desc,
		title: META.title
	},
	title: META.title,
	twitter: {
		card: 'summary_large_image',
		creator: META.twitter,
		description: META.desc,
		title: META.title
	}
}
