
##### parcel 
parcel is basically a bundler.  
It is bundle our application. it takes all your files and bundle into one file.

##### Make smaller bundles
Example : all the js files bundle into 1 file is good. but some cases 1000 files bundle into 1 file is not good. also don't call 1000 files in browser. browser do lot of work to call 1000 files.

**Chunking**
Chunking has many names
1. Code Splitting
2. Dynamic Bundling
3. LazyLoading
4. on demand loading
5. Dynamic Import
 
 we do logically break your entire application into smaller applications.

 ##### Grocery Component
 Create separate bundle for Grocery.
 If we use LazyLoading, initial our Grocery code is not in app bundler, hen we go the Grocery component then only Grocery load.

 ##### lazy
``` Javascript 
import React, { lazy, Suspense } from 'react';

const Grocery = lazy(() => import('./components/Grocery'));
```

# Suspense

``` Javascript 
import React, { lazy, Suspense } from 'react';

const Grocery = lazy(() => import('./components/Grocery'));
```
