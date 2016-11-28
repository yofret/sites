//--------------------------------------------------------------
// Dependecies
//--------------------------------------------------------------

	import React, { Component } from 'react';

//--------------------------------------------------------------
// Class definition
//--------------------------------------------------------------

	class App extends Component {
		render() {
			return (
				<div className='wrapper'>
					<h1 className='title'>Ready for this stuff</h1>
					<p className='desc'>
						Gulp + Webpack + React Boilerplate <br/>
						is up to you whats next....
					</p>
					<div className='image-wrapper'>
						<img src='images/one.jpg' />
					</div>
				</div>
			);
		}
	}


	export default App;