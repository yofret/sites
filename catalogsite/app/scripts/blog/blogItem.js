//--------------------------------------------------------------
// Dependecies
//--------------------------------------------------------------

	import React, { Component } from 'react';

//--------------------------------------------------------------
// Class Definition
//--------------------------------------------------------------

	export class BlogItem extends Component {
		render() {
			return (
                <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                    <div className="blog-img">
                        <img src={this.props.product.imageurl}/>
                    </div>
                    <div className="content-right">
                        <h3>{this.props.product.title}</h3>
                        <p>{this.props.product.description}</p>
                    </div>
                </li>
			);
		}
	}

	export default BlogItem
