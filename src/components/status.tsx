'use client'
import {useEffect, useState} from 'react'

export default function Status() {
	const fullText = 'coming soon'
	const typingSpeed = 150 // Milliseconds per character
	const untypingSpeed = 150 // Milliseconds per character
	const [text, setText] = useState('')
	const [isTyping, setIsTyping] = useState(true)

	useEffect(() => {
		const typeText = () => {
			setText(currentText => {
				const charIndex = isTyping ? currentText.length : currentText.length - 2

				if (charIndex >= fullText.length) {
					setTimeout(() => setIsTyping(false), 1000)
					return fullText
				} else if (charIndex < 0) {
					setTimeout(() => setIsTyping(true), 1000)
					return ''
				} else
					return isTyping
						? fullText.slice(0, charIndex + 1)
						: fullText.slice(0, charIndex)
			})
		}

		const timeoutId = setTimeout(typeText, isTyping ? typingSpeed : untypingSpeed)
		return () => clearTimeout(timeoutId)
	}, [text, isTyping])

	return (
		<div className='absolute bottom-0 left-0 p-5 text-xs'>
			<a
				href='https://github.com/RubricLab/project23'
				className='flex items-center'>
				{text}
				<span className='animate-blink inline-block h-full w-1 bg-white'>
					&nbsp;
				</span>
			</a>
		</div>
	)
}
