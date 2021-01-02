# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
state --> handles by useState() (should defied in constructor)
props
lifecyle --> handles by useEffect() ------ 1-constructor() 2-render()   3-componentDidMount,componentDidUpdate,componentWillUMount

class function vs component function


Format: useEffect()(  ()=>{} , []  ) -run just 1 time after render (componentDidMount)
Format: useEffect()(  ()=>{} ) -run each time somthing changes and at least 1 time after render (componentDidUpdate)
Format: useEffect()(  ()=>{} , [dependencyList]  ) -run each time passed dependecy changes(componentDidUpdate)
Format: useEffect()(  ()=>{ return() } , [dependencyList]  ) -run when component dispose(componentWillUnmount)

*useEffect() allways will run at least 1 time
*DependencyList Concept= props or state or anything that the function invokation is dependent to it list

Component function structure:

//here is how we define a function out of main function in function-components:
//call its name whithout () no BIND needed!
const onClickDiv= ()=>{}

function f(props){
{
//everything goes here assume that runs in constructor (here we should handle states)

useState()

useEffects(()=>{

	//if a function returns, it means that componentWillUnMount invoked
	return()=>{
		//componentWillUnMount body
		  }

},[//no dependency or empty array means componentDidMount invoked])

}

//everything goes in return is equal to Render()
return()

}


Hooks:
useState ---> const [name, function] = useState(boolean)
useEfect ---> handles lifecyles in functions ---> useEffect(()=>{},[dependencies]) 
--> if we pass an empty array as dependency to useEffect it means --> componentDidMount(it runs just after render())
--> componentDidMount: uses for long process works such as connectiong to DB and so on
--> componentWillUnMount: (runs just before component dispose it means user close the page that contained component) we should clear memory...
--> componentDidUpdate: runs just after a component updates

//if we dont pass any other parameters to useEffect, infact no second parameters ---> ,[]
//means componentDidUpdate invoked, sample --> useEffects(()=>{})

//if we pass any parameters to useEffect it depends on that state
// sample --> useEffects(()=>{},[myState]) --> will run only if myState state changes


----------------------------
*components can be a complete page or just a part of a page
***very important note: if we name a component using lower-case later
	-it cannot use the Hooks(starts with 'use')

//Map function
data.map((item) => {
	return(
		//component
	)
})

//Filter function
var tmp = data.filter((p) => {
		//function will insert each item from 'data' in p and do the login on block on that
		//if result equals to true item will add to 'tmp' else item will be eliminated
})


//sort (buble) function
var sorted = data.sort((item1, item2) => {
		//function will compare item1 and item 2 
		//if result = 1 will replace item1 with item 2, if result = -1 keep item1
		if (item1.title > item2.title){
			//comparing String means Alphabetic compare
			return 1;
		}
		return -1;
})

*** sorted array Must pass by elements to *setData([...sorted])* not by object *setData([sorted])*

**tip for arrays:
var a= [1, 5]
var b= [3, 2]
var c= [a, b]
c= [[1, 5], [3, 2]]
var c= [...a, ...b] //will concat two arrays
c= [1, 5, 3, 2]

*buble sort
[1, 5, 3, 7] check if first elem is greater that next other emelS
[1, 3, 5, 2] check if second elem is greater that next other emelS (elem 3) (if true replace them)
[1, 2, 5, 3] check if second elem is greater that next other emelS (elem 4) (if true replace them)
[1, 2, 3, 5] check if third elem is greater that next other emelS (elem 4) (if true replace them)

//if want to pass params to function 
const myFunction = (params)=>{}
onClick={()=> myFunction(prams)}


pure component:
//only will render if its props or states changes
how to use:
 //in function:
1- import hook {memo}
2- move "export default memo (function name)" to end of class
//in class:
1- class extends pureComponent

React Router (for web):
npm install react-router-dom --save

1-import {BrowserRouter as Router, Switch, Route} from react-router-dom
2- define Route in Switch with Router  parent  like this -->
<Route exact path="/" component={Home}/>

*exact: eliminate the rest of path input String
*each import params in block{} must have exact library name or use 'as' keyword for own prefered name
but out of block we are free to use our prefered name because of (export default - each component only has one exp def)

React-Router hooks:

useParams: seParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
useRouteMatch: The useRouteMatch hook attempts to match the current URL in the same way that a <Route> would.
			   It’s mostly useful for getting access to the match data without actually rendering a <Route>
useHistory: The useHistory hook gives you access to the history instance that you may use to navigate
useLocation: The useLocation hook returns the location object that represents the current URL.
			 You can think about it like a useState that returns a new location whenever the URL changes.
//window.scrollTo(0,0)

React DOM:

App:{
	Home:
	Main:{
		Header:{
			HeaderLeft:
			HeaderCenter:
			HeaderRight:
		}
		Content:
	}
}

React Helmet:
//it will handle the meta tags description and titles

npm i react-helmet --save

<Helmet>
	<title> t </title>
	<meta name="description" content="page description" />
</helmet>

if( x == 0 ) // just check the value
if( x === 0 ) // check both the type and value

{useMemo} hook:
//prevents to define repeatetive function
{useCallBack} hook:
//prevents to repeatetive function invokation

---------------Project Structure-----------------

{
	component
	pages
	routes
	themes{
		theme1
		palette
		typography
		...
	}
}

----------UI KITs------- Material UI-------------
what is JSS? its a file type for writing styles in java script

npm i @material-ui/core --save
npm i @material-ui/icons --save
npm i @material-ui/lab --save

<ThemeProvider theme={your theme}>
	//wrap whole project
</ThemeProvider>

<Grid > //is the same of <div> with extra props and has 2 types 1-Container 2-Item(responsive handling)
<Container> //if set maxWidth='xs' it's suitable for phone displays
<Box m='1' >//it related to 'spacing' prop in theme.js m = 1*spacing value

** now on... we should styles whole the project using jss files
//it's a convention that we name our jss files
//by seprating them whith a dot for instance: 'home.styles.js'
//whenever using RTL styles whole left and right positions will be replaced!(left <=> right) in our jss.
//** only those that used in makeStyle() not inline styles
