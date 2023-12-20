# Optimizing Our App

##### Custom Hook
Single Resposibility priciple.
Hooks are utility functions.
Hooks are basically normal JS functions.

custom hooks benifits:
- More Readable
- Reusable

##### online or offline

```Javascript 
window.addEventListener('offline', () => {
			setOnlineStatus(false);
		});

		window.addEventListener('online', () => {
			setOnlineStatus(true);
		});
```

##### custom hook use keyword

* Component name should be in capital letter of start.
* use is not a mandatory, it is recommended. most of the developers uses the use word.
* use word is used to more readable.