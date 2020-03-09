import React from 'react'
import { slide as Menu } from 'react-burger-menu'

function BurgerMenu() {
	return (
		<Menu
			className='flex-column'
			pageWrapId={'page-wrap'}
			outerContainerId={'outer-container'}
		>
			<a id='home' href='/'>
				Home
			</a>
			<a id='about' href='/about'>
				About
			</a>
			<a id='contact' href='/contact'>
				Contact
			</a>
		</Menu>
	)
}

export default BurgerMenu
