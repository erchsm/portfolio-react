import React from 'react'
import { Route, Switch } from 'react-router'

import NavTakeover from '../components/NavTakeover'
import Cursor from '../components/Cursor'

import Home from './Home'
import AmericanMade from './AmericanMade'
import Vai from './Vai'
import Translator from './Translator'
import JnjHome from './JnjHome'

import AboutMe from './AboutMe'

const routes = (
	<div>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/process" component={Home}/>
			<Route path="/about-me" component={AboutMe}/>
			<Route path="/resume" component={AboutMe}/>

			<Route exact path="/american-made" component={AmericanMade}/>
			<Route exact path="/vai" component={Vai}/>
			<Route path="/translator" component={Translator}/>
			<Route path="/jnj-home" component={JnjHome}/>
			{/*<Route path="/jnj-mdc" component={JnjMdc}/>
			<Route path="/jnj-home" component={JnjHome}/>
			<Route path="/micro-app-interactions" component={MicroAppInteractions}/>
			<Route path="/micro-app-templates" component={MicroAppTemplates}/>
			<Route path="/perforce" component={Perforce}/>
			<Route path="/cisco" component={Cisco}/>
			<Route path="/protohack" component={Protohack}/>*/}
		</Switch>
		<NavTakeover/>
		<Cursor/>
	</div>
)

export default routes
