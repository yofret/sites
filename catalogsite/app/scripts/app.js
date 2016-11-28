//--------------------------------------------------------------
// Dependecies
//--------------------------------------------------------------

	import React, { Component } from 'react';

//--------------------------------------------------------------
// Class definition
//--------------------------------------------------------------

	class App extends Component {

		constructor(props) {
			super(props);
			
			// setting state 
			this.state = {
				mode: 'MAIN'
			}

			// Binding Context
			this.startCarousel   = this.startCarousel.bind(this);
			this.startNavigation = this.startNavigation.bind(this);
			this.startWow        = this.startWow.bind(this);
		}

		// Life cycle
		componentDidMount() {
			//Initiat Libraries
			this.startCarousel();
			this.startNavigation();
			this.startWow();
			// console.log($());
		}

		// Functions
		startCarousel() {
			$("#owl-example").owlCarousel({
				// Most important owl features
				items : 4,
				pagination : true,
				paginationSpeed : 1000,
				navigation : true,
				navigationText : ["","<i class='fa fa-angle-right'></i>"],
				slideSpeed : 800,
			});
		}

		startNavigation() {
			$("#navigation").sticky({
				topSpacing : 75,
			});

			$('#nav').onePageNav({
				currentClass: 'current',
				changeHash: false,
				scrollSpeed: 15000,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'easeInOutExpo'
			});

			$('#top-nav').onePageNav({
				currentClass: 'active',
				changeHash: true,
				scrollSpeed: 1200
			});
		}

		startWow(){
			new WOW().init();
		}

		render() {
			return (
				<div>
					<h1>Hello baby</h1>
					<img src='images/one.jpg' />
				</div>
			);
		}
	}


	export default App;