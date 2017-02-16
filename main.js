import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory  } from 'react-router';
import { App, PageTop, PageRight, PageDown, PageLeft, PageCenter} from './App.jsx';



ReactDOM.render(

<Router history = {hashHistory}>
    <Route path = "/" component = {App}>
        <IndexRoute component = {PageCenter} />
        <Route path = "pageCenter" component = {PageCenter} />
        <Route path = "pageTop" component = {PageTop} />
        <Route path = "pageRight" component = {PageRight} />
        <Route path = "pageDown" component = {PageDown} />
        <Route path = "pageLeft" component = {PageLeft} />
    </Route>
</Router>

, document.getElementById('app'));