import React, {Component} from 'react';
import { connect } from "react-redux"
import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import ReactHover from 'react-hover'
import IntersectionVisible  from "react-intersection-visible"
import IntersectionObserver  from "intersection-observer"

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import TextLink from '../components/TextLink'

import splitLetter from '../services/splitLetter'

class ProjectCard extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHovered: this.props.isHovered,
			isVisible: false,
		}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}
	
	componentDidUpdate(prevProps) {
	}

	handleMouseEnter = () => {
		this.setState({
			isHovered: true,
		})
		this.props.setCursorHover();
	}

	handleMouseLeave = () => {
		this.setState({
			isHovered: false,
		})
		this.props.setCursorUnhover();			
	}

	setVisible = () => {
		this.setState({
			isVisible: true
		})
	}

	setInvisible = () => {
		this.setState({
			isVisible: false
		})
	}

	render() {

		const { name, tags, href } = this.props;
		const { isHovered, isVisible } = this.state;

		const classnames = classNames({
			"project-card": true,
			"project-card--hovered": isHovered,
			"project-card--visible": isVisible,
		})

		// const tags = tags.map((item, index) => {

		// })

		return (
			<div className={classnames} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<NavLink to={href} onClick={this.handleMouseLeave}>
					<div className="project-card__asset">
						{this.props.children}
					</div>
					<div className="project-card__bottom">
						<TextLink hideUnderline><h2 className="mb0">{name}</h2></TextLink>
						{/*<i className="iconcss icon-arrow-right"></i>*/}
					</div>
					<div className="project-card__tags">
						<blockquote className="mb0">{tags.join(", ")}</blockquote>
					</div>
				</NavLink>
			</div>
		);
	}
}




const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard)