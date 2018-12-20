import React, {Component} from 'react'
import { Parallax } from 'react-parallax'

import Nav from './Nav'
import GridLines from './GridLines'

export default class AmericanMade extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	splitText = (text) => (
		text.split(' ')
	)

	render() {

		const pageTitle = "American Made is an interactive film site created for Universal Pictures.";

		const splitTitle = this.splitText(pageTitle).map((item, index) =>
			<span key={index}>{item}{(index != this.splitText(pageTitle).length) ? '\u00A0' : null}</span>
		);

		const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

		return (
			<div>
				{/*<Nav/>*/}
				<Parallax bgImage={image1} blur={{ min: -3, max: 6 }} strength={600}>
					<div className="grid">
						<div className="grid__item grid__item--col-9 grid__item--col-12-medium">
							<h1 className="white">{splitTitle}</h1>
						</div>
					</div>
				</Parallax>
				<div style={{ height: 500 }} />
				<h2>{"\u2728"}</h2>
				<GridLines/>
			</div>
		);
	}
}