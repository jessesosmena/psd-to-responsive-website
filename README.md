Demo: https://fathomless-harbor-56660.herokuapp.com/

## PSD to Responsive Website ##

 - jquery 3.2.1
 - Webpack & Webpack Dev Server.
 - Live Reloading.
 - PostCSS, Autoprefixer and SCSS.
 - PSD Template included / assets directory


## Installation ##

 1. `git clone`
 2. `npm install`

 Upon very first installation, the postinstall command in the package.json will build a bundle.js file for you,
 and insert it into the dist folder. The components folder contains a few small sample components to show you
 how things are connected together. Feel free to delete/modify the files as needed for your project.

## Running ##

- `npm run dev` (Hot Reload Dev Environment)
- `npm start` (Normal)

You need to run `npm run build` to apply changes to your 'dist' folders bundle.js if you are not
using the dev server.

## Testing ##

1. `npm run test`

Check out how the sample test works, and then head to Jest and Enzyme documentation to learn how to use them.
