import React, {Component} from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import IntersectionVisible from "react-intersection-visible"

import NavToggle from "./NavToggle"
import Sidebar from "./Sidebar"
import ScrollArrow from "./ScrollArrow"
import GridLines from "../components/GridLines"
import TextLink from "../components/TextLink"

import palette from "../services/palette"

export default class ClipWrapper extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {

		const { name, onSetActive, black, sections, activeSection } = this.props;

		const classnames = classNames({
			"clip-wrapper": true,
		})

		const textPath = `<textPath xlink:href="#curve">  Home  —  ${ name } —————————————  </textPath>`;

		return (
			<div className={classnames}>
				<Link style={{display: "none"}} to={name} spy={true} smooth={"easeOutCubic"} duration={1200} hashSpy={false} offset={0} onSetActive={onSetActive}/>

				{(name == sections[0]) ? (
					<ScrollArrow to={sections[1]} onSetActive={onSetActive}/>
				) : null}

				{(name == sections[1]) ? (
					<ScrollArrow to={name} onSetActive={onSetActive}/>
				) : null}

				<Sidebar 
				sections={sections} 
				activeSection={activeSection}
				/>

				<div className="logo logo--top">
					<NavLink to="/">
						<h4><i className="iconcss icon-logo"/></h4>
					</NavLink>
				</div>
				
				<div className="logo logo--bottom">
					{/*<svg viewBox="0 0 96 96" width="96px" height="96px">
						<defs>
							<path id="curve" d="M 84 48 A 12 12 0 1 1 12 48 A 12 12 0 1 1 84 48"/>
						</defs>
						<text width="96" dangerouslySetInnerHTML={{__html: textPath }}></text>
					</svg>*/}
					
					{/*<h6 className="uppercase no-mb">{name.split('')[0]}</h6>*/}
					{<h7 className="uppercase no-mb">{name}</h7>}
					<hr/>
					{/*<h5 className="no-mb" style={logoStyle}><i className="iconcss icon-caret-right"/></h5>*/}
				</div>

				<NavToggle/>
			</div>
		);
	}
}