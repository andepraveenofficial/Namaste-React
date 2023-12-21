##### useEffect
`useEffect(() => {}, [])`
Basically useEffect is called on each render.
It is called after every render of that component.
**Dependency Array** :  
If Dependency Array is empty, useEffect is called on initial render.

If no Dependency Array, the useEffect called each render.

If Dependency Array has a variable, the useEffect is called everytime the variable is updated.


# useState
Don't create Local State variable outside component.  
create local State variable on Top level or Higher level.
Don't create in conditional stateement or loops or functions.

```Javascript 
// Don't create like this
if (true){
const [state, setState] = useState("")}
```


# Routing
library => `react-router-dom`

##### Routing Configuration

```Javascript 
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/about',
		element: <About />,
	},
]);
```

##### RouterProvider


##### useRouteError
It give more information to the error.
we can get more information about the error.
`import {useRouteError} from "react-router-dom"`


##### Link
Don't use <a></a> tag,  because the whole page got reload with anchor tag.
so use <Link> component of `react-router-dom`  
you can navigate to other page without reload the full page.

##### SPA
SPA -> Single Page Application
Components only interchange.

##### Routing
Routing in web apps are 2 
- Client Side Routing
- Server Side Routing



