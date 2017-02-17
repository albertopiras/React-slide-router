#  React Slide Page Router

This is a custom page routing with slide effect made with React. [view demo]


## Introduction

This is an example how to implement a React page routing with slide effect or custom animation effects using the React's 'ReactCSSTransitionGroup' component.
This is also the starting point to implement a React slideshow.
 --> [view demo] <--

## Structure


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


default basic page animations could be:
```
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
```

Now you can change your custom animation adding #yourPageID before each of above classes.
eg:
```
#pageX.react-page-router-enter.react-page-router-enter-active{
    opacity: 1;
    background: purple;
}
```

## Installation

If you want try the code locally:

Clone the repository

```sh
$ git clone https://github.com/Alberto-/React-slide-router.git
```


From project root `(
Prerequisites: node
)`


```
$ nmp install
```
this will download all required packages.


### Run

```
$ npm start
```

The example will run on http://localhost:4000/ with webpack dev server.



### Version
1.0

## License

MIT

[view demo]: <http://react-router-slide-show-enta.rhcloud.com/app/>
