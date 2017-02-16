# React page router example




This is an example how to implement react page routing with slide effect or custom effects.
This is also the starting point to implement a React slideshow.






If you want use  animation in React routing you have to install react-addons-css-transition-group module ad use it into your JS code.


	<ReactCSSTransitionGroup
		component="div"
		transitionName="react-page-router"
		transitionAppear = {true}
		transitionAppearTimeout = {1000}
		transitionEnter = {true}
		transitionLeave = {true}>

        {React.cloneElement(this.props.children, {
            key: location.href
        })}

	</ReactCSSTransitionGroup>


few page animations will be:

.react-page-router-enter {
    opacity: 0.01;
}

.react-page-router-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
}

.react-page-router-leave {
    opacity: 1;
}

.react-page-router-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
}


You can change your custom animation adding #yourPageID before each of above classes.

eg

#pageCenter.example-enter.example-enter-active{
    opacity: 1;
    background: purple;
}

























