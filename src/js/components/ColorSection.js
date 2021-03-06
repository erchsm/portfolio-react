import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible  from "react-intersection-visible"
import IntersectionObserver  from "intersection-observer"

import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import HeroScrollButton from "./HeroScrollButton"
import GridLines from "./GridLines"
import TextLink from "./TextLink"
import ArrowGroup from "./ArrowGroup"
import Icon from "./Icon"

import palette from "../services/palette"
import pad from "../services/pad"
import splitLetter from "../services/splitLetter"

class ScrollSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		const { name, onSetActive, black, style, sections, activeSection, fullHeight, disableSectionNumber } = this.props;

		const classnames = classNames({
			"color-section": true,
			"color-section--black": this.props.black,
			"color-section--grey": this.props.grey
		})

		const updatedStyle = (() => {
			if (style) { return style } else { return {} }
		})()

		if (fullHeight) {
			Object.assign(updatedStyle, { 
				minHeight: this.props.windowHeight, 
				display: 'flex', 
				justifyContent: 'center' 
			})
		}
		
		return (
			<div className={classnames}>
				<div className="clip-wrapper">
					{/*<GridLines/>*/}
					{ sections.length > 1 ? [
						<Link style={{display: 'none'}} to={name} spy={true} smooth={"easeOutQuint"} duration={1200} hashSpy={false} offset={0} onSetActive={onSetActive} key={0}/>,
						,
						((name == sections[0]) ? (
							<HeroScrollButton to={sections[1]} onSetActive={onSetActive} key={1}/>
						) : null)
						,
						((name == sections[1]) ? (
							<HeroScrollButton to={name} onSetActive={onSetActive} key={2}/>
						) : null)
						,
						<div className="left-rail" key={3}>
							<NavLink to="/" /*style={{ transform: 'rotate(-90deg)'}}*/>
								<TextLink hideLine>
									<h4 className="uppercase mb0 light scale-up scale-up--sm">•</h4>
									{/*<h6 className="uppercase mb0 light" style={{ letterSpacing: '0.12em'}}>H<span>☺</span>me</h6>*/}
								</TextLink>
							</NavLink>
							<ArrowGroup isVertical>
								<Link to={sections[sections.indexOf(name) - 1]} spy={true} smooth={"easeOutQuint"} duration={1200} hashSpy={false} offset={0}>

								</Link>
								<Link to={sections[sections.indexOf(name) + 1]} spy={true} smooth={"easeOutQuint"} duration={1200} hashSpy={false} offset={0}>

								</Link>
							</ArrowGroup>
						</div>,
						<Sidebar 
						sections={sections} 
						activeSection={activeSection}
						key={4}/>
					] : null }

					<NavToggle sections={sections}/>
				</div>
			</div>
			)
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
	windowHeight: state.windowHeight,
})

export default connect(mapStateToProps)(ScrollSection)