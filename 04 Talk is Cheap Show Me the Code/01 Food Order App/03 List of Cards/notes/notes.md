# props
props are just normal arguments to a function.  
It is pass argument to a function.
It is pass properties to a component.

# Optional Chaining
```Javascript 
name: resData?.info.name, // Optional Chaining
```

# key
React identify the each listItem thats why we give key property.
Otherwise react cannot understand which item is newly added or removed or modified.
without key property react re-render the all the list items.

* Don't use __index__ as a key. please use __unique id__