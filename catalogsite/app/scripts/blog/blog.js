//--------------------------------------------------------------
// Dependecies
//--------------------------------------------------------------

    import React, { Component } from 'react';
    import BlogItem from './blogItem';
    import Services from './../store/services';

//--------------------------------------------------------------
// Class Definition
//--------------------------------------------------------------

    class Blog extends Component {
        // Constructor
        constructor(props) {
            super(props);
            
            this.state = {
                products: []
            }

            // bind context
            this.renderProducts = this.renderProducts.bind(this);
        }

        // life cycle
        componentWillMount() {
            this.setState({products: this.getProducts()})
        }

        // functions
        getProducts(){
            return Services.getProducts();
        }

        renderProducts() {
            return this.state.products.map(function(product, id){
                return <BlogItem key={product.id} product={product} />
            })
        }

        render() {
            return (
                <section id="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block">
                                    <h1 className="heading">Latest <span>From</span> the <span>Blog</span></h1>
                                    <ul>
                                        {this.renderProducts()}
                                    </ul>
                                    <a className="btn btn-default btn-more-info wow bounceIn" data-wow-duration="500ms" data-wow-delay="1200ms" href="#" role="button">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }

    export default Blog
