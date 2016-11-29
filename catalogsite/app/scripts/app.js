//--------------------------------------------------------------
// Dependecies
//--------------------------------------------------------------

    import React, { Component } from 'react';
    import Header from './header/header';
    import Navigation from './header/navigation';
    import Slider from './slider/slider';
    import About from './content/about';
    import Blog from './blog/blog';

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

            this.startWow = this.startWow.bind(this);
        }

        // Life cycle
        componentDidMount() {
            //Starting Wow instance
            this.startWow();
        }

        // Functions
        startWow(){
            new WOW().init();
        }

        render() {
            return (
                <div id='wrapper'>
                    <Header />
                    <Navigation />
                    <Slider />
                    <About />
                    <Blog />
                </div>
            );
        }
    }


    export default App;