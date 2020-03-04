import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faBars)

function Header() {
	return (
		<div className='flex-row grey'>
			<FontAwesomeIcon
				icon='bars'
				size='3x'
				className='space-size:s space:inset'
			/>
			<div className='border:left'></div>
		</div>
	)
}

export default Header
