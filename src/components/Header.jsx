import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faBars)

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isBurgered: false
		}
	}
	render() {
		return (
			<div>
				<div className='grey flex-row'>
					<FontAwesomeIcon
						icon='bars'
						size='3x'
						onClick={this.props.burgerDisplay}
						className={
							this.state.isBurgered
								? 'white flex-row space-size:s space:inset'
								: 'grey flex-row space-size:s space:inset'
						}
					/>
					<div className='border:left'></div>
				</div>
			</div>
		)
	}
}
//Reflechir a comment afficher le menu burger pour qu il s affiche bien par
//dessus le contenu peut etre mettre le boolean et la methode dans App et utiliser le z index, surement ca
export default Header
