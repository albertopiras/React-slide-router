import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export class App extends React.Component {

    constructor(props) {
        console.log("INIT");
        super(props);

        this.state = {
            data: 'data 1',
        };

        document.onkeydown = (e)=>{
            e = e || window.event;

            // center
            if (e.keyCode == '13') {
                console.log("center");
                window.location.href= "#/pageCenter";
            }

            // up arrow
            if (e.keyCode == '38') {
                console.log("up");
                this.checkPage("pageDown", "pageTop");
            }

            // down arrow
            else if (e.keyCode == '40') {
                console.log("down");
                this.checkPage("pageTop", "pageDown");
            }

            // left arrow
            else if (e.keyCode == '37') {
                console.log("left");
                this.checkPage("pageRight", "pageLeft");
            }

            // right arrow
            else if (e.keyCode == '39') {
                console.log("right");
                this.checkPage("pageLeft", "pageRight");
            }
        }
    };

    checkPage(checkPage:string,redirectPage:string){
        if(window.location.href.includes(checkPage)){
            window.location.href= "#/pageCenter";
        }else{
            window.location.href= "#/" + redirectPage;
        }
    }

    render() {
        return (
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionAppear = {true} transitionAppearTimeout = {1000}
                    transitionEnter = {true} transitionLeave = {true}>
                    {React.cloneElement(this.props.children, {
                        key: location.href
                    })}
                    <div id="directionButtonsContainer">
                        <div id="directionButtons">
                            <Link to="pageLeft"><button className="btn-go-to-left btn" aria-label="go to page left"></button></Link>
                            <Link to="pageTop"><button className="btn-go-up btn" aria-label="go to page up"></button></Link>
                            <Link to="pageCenter"><button className="btn-go-center btn" aria-label="go to page center"></button></Link>
                            <Link to="pageDown"><button className="btn-go-down btn" aria-label="go to page down"></button></Link>
                            <Link to="pageRight"><button className="btn-go-to-right btn" aria-label="go to page right"></button></Link>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
        );
    }
}


export class PageCenter extends React.Component {
    render() {
        return (
            <div className="page" id="pageCenter">
                <h1>Page Center </h1>
                <h2>Move to right, down, left, top to route pages</h2>
            </div>
        )
    }
}


export class PageTop extends React.Component {
    render() {
        return (
            <div className="page" id="pageTop">
                <h1>Page Top</h1>
            </div>
        )
    }
}


export class PageRight extends React.Component {
    render() {
        return (
            <div className="page "  id="pageRight">
                <h1>Page Right</h1>
            </div>
        )
    }
}
export class PageDown extends React.Component {
    render() {
        return (
            <div className="page" id="pageDown">
                <h1>Page Down</h1>
            </div>
        )
    }
}
export class PageLeft extends React.Component {
    render() {
        return (
            <div className="page" id="pageLeft">
                <h1>Page Left</h1>
            </div>
        )
    }
}




