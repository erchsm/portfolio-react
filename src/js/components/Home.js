import React, {Component} from "react"
import { Parallax } from "react-parallax"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll";

import { reset, setCounter } from "../actions/counter"
import { home } from "../actions/abbreviation"
import { setNavWhite, setNavBlack } from "../actions/color"

import Nav from "./Nav";
import ScrollArrow from "./ScrollArrow";
import GridLines from "./GridLines"

import splitWord from "../services/splitWord"
import hexToRgb from "../services/hexToRgb"

// import detectMobile from "../services/detectMobile"


class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: "hello",
			isMobile: window.innerWidth <= 800,
			pageSections: [
			"hello",
			"about",
			"projects",
			],
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		window.addEventListener('resize', this.detectMobile);

		this.props.home();
		this.props.reset();
		this.props.setNavWhite();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.detectMobile);
	}

	componentDidUpdate(prevProps) {
		(prevProps.count == this.props.count) ? null : this.setState({ countIsIncreasing: (prevProps.count < this.props.count) })
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}

		
	setActiveSection = (name) => {
		this.setState({
			activeSection: name
		})
	}

	render() {

		{/* percentage => (
			<div className="grid" style={{opacity: `${1 -  (percentage * percentage)}`}}>
			</div>
		)*/}

		const { activeSection } = this.state;

		const image1 = "../assets/img/banner.jpg";

		const bgColor = hexToRgb("#232021");
		
		return (
			<div>
			{/*<div onWheel={(e) => {e.preventDefault(); this.debounce(this.wheel(e), 100)}}>*/}
				<Element name="hello" className={classNames({ "active-section" : activeSection == "hello"})}>
					<Parallax 
					bgImage={image1} 
					blur={null} 
					strength={600}
					renderLayer={percentage => (
						<div className="react-parallax-contents" style={{ backgroundColor: `rgba(${bgColor.r}, ${bgColor.b}, ${bgColor.g}, ${percentage})` }}>
							<div className="grid">
								<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
									<h1>{splitWord(`Eric C. Smith is a Creative Developer in New York City`, { opacity: -(0.5 * percentage) + 1.25, transform: `skewY(${((10 * percentage) - 5)}deg) translate3d(0,${(-400 * (1 - percentage)) + 200}px,0)`})}</h1>
								</div>
							</div>
							<Link style={{display: "none"}} to="hello" spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => {this.props.setCounter(1); this.props.setNavWhite(); this.setActiveSection("hello");}}>
								<ScrollArrow/>
							</Link>
							<Link to="about" spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => {this.props.setCounter(2); this.props.setNavBlack();  this.setActiveSection("about");}}>
								<ScrollArrow/>
							</Link>
							<Link style={{display: "none"}} to="projects" spy={true} smooth={true} hashSpy={true} offset={0} onSetActive={() => {this.props.setCounter(3); this.props.setNavBlack();  this.setActiveSection("projects");}}>
								<ScrollArrow/>
							</Link>
						</div>
					)}>
					</Parallax>
				</Element>
				<Element name="about" className={classNames({ "active-section" : activeSection == "about"})}>
					<section>
						<div className="grid">
							<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
								<h1 className="mb">{splitWord("Form & Function")}</h1>
								<p className="mb">
									{splitWord(`Hi there, my name is Eric. I am a Creative Developer and Designer. Here are some things I’ve worked on.`)}
									<br/><br/>
									{splitWord(`My design philosophy is about keeping it simple, the best design solution is the simplest and most direct. When im not writing code, I’m taking photos with friends or cycling.`)}
								</p>
							</div>
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--row grid__item--col-7 grid__item--col-12-medium">
								<div style={{transform: "translateY(-40%)"}} className="grid__item grid__item--col-4"><img src="../assets/img/me-4x3.jpg"/></div>
								<div style={{transform: "translateY(40%)"}} className="grid__item grid__item--col-4"><img src="../assets/img/lands-end-4x3.jpg"/></div>
								<div style={{transform: "translateY(-20%)"}} className="grid__item grid__item--col-4"><img src="../assets/img/mist-3x4.jpg"/></div>
							</div>
						</div>
					</section>
				</Element>
				<Element name="projects" className={classNames({ "active-section" : activeSection == "projects"})}>
					<section>
						<div className="grid">
							<div className="grid__item grid__item--col-6 grid__item--hide-bp-medium"/>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								<h2 className="mb">{splitWord("Motion, Visual Design & The Front-end.")}</h2>
								<p className="mb">
									{splitWord(`I specialize in working on HTML prototypes, visual design, motion graphics and front-end code. Here are some of the recent projects I’ve worked on.`)}
									<br/><br/>
									{splitWord(`Some of the clients that I have worked for include Warner Brothers Music, Perforce, Minted, BMW, Cisco, NBC Universal, Johnson & Johnson and many more.`)}
								</p>
							</div>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								<NavLink to="/american-made/">
									<img src="../assets/img/american-made/banner.gif"/>
									<h3>American Made Film Site</h3>
								</NavLink>
							</div>
							<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
								<img src="../assets/img/card-components/banner-alt.jpg"/>
								<h3 className="white">Card Components</h3>
							</div>
						</div>
					</section>
				</Element>
				<GridLines/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
})

const mapDispatchToProps = dispatch => ({
	reset: () => dispatch(reset()),
	setCounter: (n) => dispatch(setCounter(n)),
	home: () => dispatch(home()),
	setNavWhite: () => dispatch(setNavWhite()),
	setNavBlack: () => dispatch(setNavBlack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)