//--------------------------------------------------------------
// Dependecies
//--------------------------------------------------------------

    import React, { Component } from 'react';

//--------------------------------------------------------------
// Class definition
//--------------------------------------------------------------

    class Slider extends Component {
        constructor(props) {
            super(props);
            
            // Binding Context
            this.startCarousel   = this.startCarousel.bind(this);
        }

        // life cycle
        componentDidMount() {
            this.startCarousel();
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

        render() {
            return (
                <section id="slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                                    <div className="title">
                                        <h3>Featured <span>Works</span></h3>
                                    </div>
                                    <div id="owl-example" className="owl-carousel">
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-1.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-2.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-3.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-4.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-1.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-2.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-3.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src="images/slider/slider-img-4.jpg" alt=""/>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }

    export default Slider