import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';

import Home from './Home';
import AmericanMade from './AmericanMade';
import AboutMe from './AboutMe'
import Vai from './Vai'


export default class Router extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div>
                <Redirect from="/" to="/home"/>
                <Route path="/home" component={Home}/>
                <Route path="/american-made" component={AmericanMade}/>
                <Route path="/vai" component={Vai}/>
                <Route path="/about-me" component={AboutMe}/>
            </div>
        );
    }
}