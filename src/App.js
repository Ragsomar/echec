import React from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import BurgerMenu from './components/BurgerMenu'
import './style/layout.css'
import './style/space.css'
import './style/separation.css'
import './style/color.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isBurgered: false
		}
		this.burgerDisplay = this.burgerDisplay.bind(this)
	}

	burgerDisplay() {
		this.setState({ isBurgered: !this.state.isBurgered })
	}

	render() {
		return (
			<div>
				<Header
					isBurgered={this.state.isBurgered}
					burgerDisplay={this.burgerDisplay}
				/>
				{this.state.isBurgered && <BurgerMenu className='z1' />}
				<Homepage />
			</div>
		)
	}
}

export default App
