
# Classroom Test Results Management Screen

Basic coding exercise to create a screen for managing classroom test results. I've been wanting to use `redux-saga` for something to get a better understanding of it.

## Quick Start

```shell
git clone https://github.com/bfillmer/lr-exercise.git
cd lr-exercise
npm install
npm run dev # Point browser to: http://localhost:8080
```

## Available Commands

```shell
npm run build # Minimized build in dist/
npm run dev # Dev server running at: http://localhost:8080
npm run lint # eslint
npm run reset # clean & install
npm run clean # clear dist/ and node_modules/
npm run update # update node_modules
```

## Development Notes

* Any paths leveraged within the codebase are relative to the `app/` directory.
* Any additional node modules needed by the application should be added to the `vendors` array in `webpack.config.babel.js` so they are concatenated into `vendors.js` on build.
* Assets leveraged within the `scss` files are relative to `appearance/scss/main.scss`. Thus most of the time to access anything within `appearance/img` you would use the following: `url('../img/an-image.png')`.

## Credits

* David Huff [davidryanhuff@gmail.com](davidryanhuff@gmail.com): For the Atomic CSS structure, and generally being a badass.
