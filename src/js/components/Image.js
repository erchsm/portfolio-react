import React, {Component} from "react"
import classNames from "classnames"

export default class Image extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {

		const { src, aspectRatioWidth, aspectRatioHeight, style } = this.props;

		const pb = aspectRatioHeight / (aspectRatioWidth / 100);
		
		const _style =  {
			position: 'relative',
			display: 'block',
			height: 0,
			paddingBottom: pb + '%',
			overflow: 'hidden',
		}	

		style ? Object.assign(_style, style) : null

		return (
			<div style={_style}>
				<img src={src} style={{
					display: 'block',
					// width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					// bottom: 0,
					left: 0,
					// right: 0,
				}}/>
			</div>
		);
	}
}