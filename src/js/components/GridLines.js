import React, {Component} from 'react'

export default class GridLines extends Component {

	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// 	window.addEventListener('resize', this.detectMobile);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.detectMobile);
	// }

	// detectMobile = (event) => {
	// 	this.setState({
	// 		isMobile: detectMobile()
	// 	})
	// }

	render() {

		return (
			<div className="grid grid--lines">
				<div className="grid__line grid__item--col-1 grid__item--col-6-medium"/>
				<div className="grid__line grid__item--col-5 grid__item--hide-bp-medium"/>
				<div className="grid__line grid__item--col-5 grid__item--hide-bp-medium"/>
				<div className="grid__line grid__item--col-1 grid__item--col-6-medium"/>
			</div>
		);
	}
}