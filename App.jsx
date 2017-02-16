import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            data: 'data 1',

        };

    };

    render() {
        return (
            <div>

                Page Routing
                <br/>
                    <div>
                         <ReactCSSTransitionGroup
                                component="div"
                                transitionName="example"
                                transitionAppear = {true} transitionAppearTimeout = {1000}
                                transitionEnter = {true} transitionLeave = {true}>

                                {React.cloneElement(this.props.children, {
                                    key: location.href
                                })}
                            </ReactCSSTransitionGroup>
                    </div>

            </div>
        );
    }
}


export class PageCenter extends React.Component {
    render() {
        return (
            <div>
                <h1>Page Center </h1>
                <Link to="pageTop">Top </Link> <br/>
                <Link to="pageRight">Right -&gt;</Link> <br/>
                <Link to="pageDown">Down v</Link> <br/>
                <Link to="pageLeft"> &lt;- Left</Link> <br/>
            </div>
        )
    }
}


export class PageTop extends React.Component {
    render() {
        return (
            <div>
                <h1>Page TOP</h1>
                <Link to="pageTop">Top </Link> <br/>
                <Link to="pageRight">Right -&gt;</Link> <br/>
                <Link to="pageDown">Down v</Link> <br/>
                <Link to="pageLeft"> &lt;- Left</Link> <br/>
            </div>
        )
    }
}


export class PageRight extends React.Component {
    render() {
        return (
            <div>
                <h1>Page pageRight</h1>
                <Link to="pageTop">Top </Link> <br/>
                <Link to="pageRight">Right -&gt;</Link> <br/>
                <Link to="pageDown">Down v</Link> <br/>
                <Link to="pageLeft"> &lt;- Left</Link> <br/>
            </div>
        )
    }
}
export class PageDown extends React.Component {
    render() {
        return (
            <div>
                <h1>Page pageDown</h1>
                <Link to="pageTop">Top </Link> <br/>
                <Link to="pageRight">Right -&gt;</Link> <br/>
                <Link to="pageDown">Down v</Link> <br/>
                <Link to="pageLeft"> &lt;- Left</Link> <br/>
            </div>
        )
    }
}
export class PageLeft extends React.Component {
    render() {
        return (
            <div>
                <h1>Page pageLeft</h1>
                <Link to="pageTop">Top </Link> <br/>
                <Link to="pageRight">Right -&gt;</Link> <br/>
                <Link to="pageDown">Down v</Link> <br/>
                <Link to="pageLeft"> &lt;- Left</Link> <br/>
            </div>
        )
    }
}




