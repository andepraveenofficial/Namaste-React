# npm
npm : package manager
npm is a standard repository for all the packages.

# ReactApp Setup
1. npm setup
   - __npm init__ : give your own configuration 
   - __npm init -y__ : automatic general configuration
2. `package.json` 
   - It is automatically created after npm setup.
   - This is useful for manage the App information   
3. install `DevDependencies`
   `npm install -D parcel`
4. `package-lock.json`
   - It is automatically created after dependencies installation.
   - It maintains the Exact versions of Application.
   - It keeps the track of all the exact versions of dependencies.
5. install `Dependencies`
6. install `dependencies`
   - These are Normal Dependencies.
   - `npm install react` 
   - `npm install react-dom`

7. command
    - `npm install`
    - It is used to recreate node modules

# versions 

 ```JSON 
"devDependencies": {
    "parcel": "^2.10.3" // ^ => It is automatically update to minor upgrade
}
```

 ```JSON 
"devDependencies": {
    "parcel": "~2.10.3" // ~ => It is automatically update to major upgrade
}
```

 ```JSON 
"devDependencies": {
    "parcel": "2.10.3" // No Upgrade
}
```

# npx
   - npx is used to executing our package.
   - `npx parcel index.html`

# After Executing our package
Automatically two Folders are created 
   - `.parcel-cache`
   - `dist`

# .gitignore
we can create `.gitignore` file to ignore the some unwanted files to push to github.

# stop the server
 - `ctrl + c`