import React from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import BurgerMenu from './components/BurgerMenu'
import './style/layout.css'
import './style/space.css'
import './style/separation.css'
import './style/color.css'
import './style/burger.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='flex-column' id='outer-container'>
				<Header />
				{
					//<BurgerMenu />
				}
				<main className='flex1 overflow height-max-100' id='page-wrap'>
					<Homepage />
				</main>
			</div>
		)
	}
}

export default App
