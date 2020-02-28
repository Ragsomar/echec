import React from 'react'

class Homepage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='flex-column'>
				<div className='flex-row'>
					<div className='flex-justify:center'>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Commodi pariatur illum dolorem laborum repudiandae
						voluptatibus natus eveniet dolores, recusandae veniam,
						labore nobis deleniti sequi, expedita tempore unde ipsam
						ea quos.
					</p>
				</div>
				<div className='flex-row'>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Commodi pariatur illum dolorem laborum repudiandae
						voluptatibus natus eveniet dolores, recusandae veniam,
						labore nobis deleniti sequi, expedita tempore unde ipsam
						ea quos.
					</p>
					<div>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
				</div>
				<div className='flex-row'>
					<div>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Commodi pariatur illum dolorem laborum repudiandae
						voluptatibus natus eveniet dolores, recusandae veniam,
						labore nobis deleniti sequi, expedita tempore unde ipsam
						ea quos.
					</p>
				</div>
			</div>
		)
	}
}

export default Homepage
