import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"

import { reset, setCounter } from "../../actions/counter"
import { home, americanMade, vai, translator, jjMdc, jjHome, wrap1, wrap2, perforce1, perforce2 } from "../../actions/abbreviation"
import { setPanel } from "../../actions/panel"

import ScrollSection from "../../components/ScrollSection"

import ParallaxBackground from "../../components/ParallaxBackground"
import GridLines from "../../components/GridLines"
import Sidebar from "../../components/Sidebar"
import CodepenEmbed from "../../components/CodepenEmbed"
import SideScroller from "../../components/SideScroller"
import TextLink from "../../components/TextLink"

import { HeroBlock, HeroBlockItem } from "../../components/blocks/HeroBlock"
import ProjectUpNextBlock from "../../components/blocks/ProjectUpNextBlock"
import ProjectDetailsBlock from "../../components/blocks/ProjectDetailsBlock"
import ProjectIntroBlock from "../../components/blocks/ProjectIntroBlock"
import ProjectSectionBlock from "../../components/blocks/ProjectSectionBlock"

import IFrame from "../../components/IFrame"
import Image from "../../components/Image"
import Video from "../../components/Video"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

import people from "../../data/people"


class MicroAppInteractions extends Component {

	static propTypes = {
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.wrap1();
		this.props.reset();
		this.props.setPanel("Wrap Media");
	}


	constructor(props) {
		super(props);

		this.state = {
			activeSection: "overview",
			sections: [
				"overview",
				"about",
				"minted",
				"warner-bros",
				"equinox",
				"salesforce",
			],
		}
	}

	setActiveSection = (idx) => {
		this.setState({
			activeSection: this.state.sections[idx],
		})
		this.props.setCounter(idx + 1);
	}


	render() {

		const { setCounter, setNavWhite, setNavBlack } = this.props;
		const { activeSection, sections } = this.state;

		const brandBlack = hexToRgb(palette("brand-black"));


		return (
			<article>

				<ParallaxBackground 
				style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .24),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .4)
						),
						url(../assets/img/card-components/share-animation.jpg)
					`, 
					backgroundSize: (this.props.isMobile ? 'cover' : 'contain'),
				}}/>


				<ScrollSection 
				name={sections[0]}
				black 
				fullHeight
				sections={sections} 
				activeSection={activeSection}
				style={{ 						
					backgroundColor: 'transparent'
				}}
				onSetActive={() => { this.setActiveSection(0); }}>
					<HeroBlock 
					headerText={[ `At`, <span><span className="outline">Wrap </span></span>, <span><span className="outline">Media </span></span>, `we designed delightful mobile experiences.`]}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[1]} 
				disableSectionNumber
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(1); }}>
					<ProjectIntroBlock 
					col1='
						Wrap Media aimed to garner adoption of its web based platfrom by partnering with clients. We partnered with high profile clients such as Warner Brothers Music, Salesforce, Minted, Equinox, BMW and many more to help them get started with our platform.
						\n\n 
						“Well what is a Wrap?” might the question your asking at this point. A Wrap is a highly-focused, app-like, mobile web experience.'
					col2='Wraps are mobile web apps and live at a URL. The flexibility of the URL allows a end user to enter the Wrap through many channels including social feeds, e-mail, web advertisement or, like shown below, through SMS. Wrap experiences are essentially a colleciton of cards — a new "page" of the traditional "app" is analagous to a card. The creation and distribution of the experiences was handled through a SAAS application that we developed in-house as well.'
					media={{
						type: 'image', 
						src: '../assets/img/card-components/perspective-cards.jpg', 
						aspectRatioWidth: 8, 
						aspectRatioHeight: 5 
					}}
					col3='On this particular effort I worked as a Creative Techonologist listening to the needs of the client and creating a web application within our platform catered to their needs. I used HTML, CSS, Javascript and the home-grown Wrap Developer API.'
					col4='The way that myself and the design team designed wraps was by designing cards. From the example above you can see that these experiences follow and "x-cross" pattern — The end user is able to scroll either up/down or swipe left or right.'
					/>
				</ScrollSection>

				{/*style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .85),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, 1)
						),
						url(../assets/img/card-components/banner.jpg)`, 
					backgroundColor: `transparent`,
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
					backgroundBlendMode: 'normal',
				}}*/}

				<ScrollSection 
				sections={sections} 
				activeSection={activeSection}
				>
					<ProjectDetailsBlock role="Creative Developer" date="Fall, 2016" client="Wrap Media" team={["Pete Petras", "Josh Bloom", "Jeff Klein", "Mei Yeh", "Theo Arguna"]} />
				</ScrollSection>

				<ScrollSection 
				black
				name={sections[2]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(2); }}>
					<ProjectSectionBlock 
					title="Realtime Poll"
					description1="For the Minted Challange Wrap, I designed this poll that allowed them to sample their users in real time. The Minted Challenge experience had higher engagement than any of their prior campaigns."
					media={{ type: 'video', src: 'assets/img/card-components/minted.mp4' }}
					/>

				{/*	<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2>Realtime Poll</h2>
								<blockquote>The Minted Challange Wrap seen above I worked on with Jeff Klein. I designed this poll that allowed them to sample their users in real time. The Minted Challenge experience had higher engagement than any of their prior campaigns.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-6 grid__item--col-12-medium">
							<Video src="assets/img/card-components/minted.mp4"/>
						</div>
						<div className="grid__item grid__item--col-4 grid__item--col-12-medium">
							<Image src="assets/img/card-components/minted-hand.jpg" aspectRatioWidth={3} aspectRatioHeight={4}/>
						</div>
					</div>*/}
				</ScrollSection>


				<ScrollSection 
				name={sections[3]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(3); }}>
					<ProjectSectionBlock 
					title="Cart & Share"
					description1="Myself with Wrap’s Studio Design Team and Warner Bros. Records partnered to create a mobile-first merchandise catalog for Tegan & Sara’s “Love You 2 Death” tour."
					description2="We helped Tegan & Sara create a brand based on their highly curated content and enthusiastic followers. Our approach was an immersive one, to value interaction and interface but not more than the content itself."
					media={{ type: "codepen", slug: "NRBOky", title: "Cart & Share Components", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight: this.props.isMobile ? 8 : 2 }}
					/>
				</ScrollSection>

				{/*<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<h2></h2>
								<blockquote></blockquote>
							</div>
						</div>
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<Video src="assets/img/card-components/share-animation.mp4"/>
							</div>
							<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
								<Image src="assets/img/card-components/cart-animation.gif" aspectRatioWidth={4} aspectRatioHeight={3}/>
							</div>
						</div>

					</div>
					<div className="grid">
						<div className="grid__row">
							{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
							<div className="grid__item grid__item--col-8 grid__item--col-12-medium">
								<blockquote>Our approach was an immersive one, to value interaction and interface but not more than the content itself. We helped Tegan & Sara create a brand based on two basic elements; their highly curated content and the enthusiastic followers that make up their team. We avoided gimmicks by highlighting the content.</blockquote>
							</div>
						</div>
					</div>
					<div className="grid">
						{<div className="grid__item grid__item--col-1 grid__item--hide-bp-medium"/>}
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
							{<CodepenEmbed slug="NRBOky" title="Cart & Share Components" height={720} handle="erchsm"/>}
						</div>
					</div>
				*/}


				<ScrollSection 
				name={sections[4]}
				black
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(4); }}>
					<ProjectSectionBlock 
					title="Places Nearby"
					description1="Partnering with Equinox we built an integration with the Google Places API's for helping users find a gym close to their location. I designed the prototype seen here."
					description2="Later we created a generic component in our product so that any account holder could add this to a card for their business."
					media={{ type: "codepen", slug: "ENNdJd", title: "Nearby Services Component", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight: this.props.isMobile ? 8 : 2 }}
					/>
				</ScrollSection>


				<ScrollSection 
				name={sections[5]}
				sections={sections} 
				activeSection={activeSection}
				onSetActive={() => { this.setActiveSection(5); }}>
					<ProjectSectionBlock 
					title="Starry Night"
					description1="Partnering with Salesforce Trailblazers we created a lead generation form to collect leads at their international conference in San Francisco."
					description2="I designed the interactive splash screen featuring a starry night sky. This aspirational backdrop helped boost the conversion rate on the form."
					media={{ type: "codepen", slug: "BLbpoZ", title: "Starry Night", aspectRatioWidth: this.props.isMobile ? 5 : 3, aspectRatioHeight: this.props.isMobile ? 8 : 2 }}
					/>
				</ScrollSection>

				{/*style={{ 
					backgroundImage: `
						radial-gradient(
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .5),
							rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .5)
						),
						url(../assets/img/card-components/banner-alt.jpg)
					`, 
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}*/}

				<ScrollSection 
				sections={sections} 
				activeSection={activeSection}>
					<ProjectUpNextBlock name="Wrap Templates" to="micro-app-templates"/>
				</ScrollSection>



			</article>
		);
	}
}

const mapStateToProps = state => ({
	count: state.count,
	abbreviation: state.abbreviation,
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	reset: () => dispatch(reset()),
	setCounter: (n) => dispatch(setCounter(n)),
	home: () => dispatch(home()),
	americanMade: () => dispatch(americanMade()),
	vai: () => dispatch(vai()),
	translator: () => dispatch(translator()),
	jjMdc: () => dispatch(jjMdc()),
	jjHome: () => dispatch(jjHome()),
	wrap1: () => dispatch(wrap1()),
	wrap2: () => dispatch(wrap2()),
	perforce: () => dispatch(perforce()),
	cisco: () => dispatch(cisco()),
	protohack: () => dispatch(protohack()),
	setPanel: (str) => dispatch(setPanel(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MicroAppInteractions)
