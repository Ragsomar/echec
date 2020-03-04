import React from 'react'

class Homepage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='flex-column'>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish border:bottom background'
				>
					<div className='flex-justify:center space:inline'>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p className='space:inset-stretch'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</p>
				</a>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish border:bottom background'
				>
					<div className='flex-justify:center space:inline'>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p className='space:inset-stretch'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</p>
				</a>
				<a
					href='https://github.com/FortAwesome/react-fontawesome#features'
					className='flex-row space:inset-squish background'
				>
					<div className='flex-justify:center space:inline'>
						<img src='https://via.placeholder.com/150x105' alt='' />
					</div>
					<p className='space:inset-stretch'>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</p>
				</a>
			</div>
		)
	}
}

export default Homepage
