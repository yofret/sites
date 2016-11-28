//--------------------------------------------------------------
// Dependecies
//--------------------------------------------------------------

    import React, { Component } from 'react';
    import Header from './header/header'
    import Navigation from './header/navigation'

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
            this.startWow        = this.startWow.bind(this);
        }

        // Life cycle
        componentDidMount() {
            //Initiat Libraries
            // this.startCarousel();
            // this.startWow();
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

        startWow(){
            new WOW().init();
        }

        render() {
            return (
                <div id='wrapper'>
                    <Header/>
                    <Navigation/>
                </div>
            );
        }
    }


    export default App;