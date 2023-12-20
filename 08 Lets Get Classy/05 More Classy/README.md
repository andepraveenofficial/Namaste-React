# React Component Life Cycle Methods
How the class based component in mounted on the Real DOM.  
when the class loads automatically constructor is called.

1. constructor => initialize the properties and state
2. render => return JSX
3. componentDidMount => after component mounted
4. componentWillUnmount => after component unmounted

* `componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree)

### Life Cycle Methods
1. Mounting
2. Updating
3. Unmounting

### React phases
1. render phase => creating the virtual DOM => costructor + render
2. commit phase => DOM updated in single batch


# debugger
It is used to debug the code.

##### setState
When we start setState then Updating phase will start.


### useEffect
* useEffect is called after every render.
* with empty dependencyArray useEffect is called initial render.


##### componentDidUnmount
we have to clear lot of things when we are leaving page.

