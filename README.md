# Dether Map

[![GitHub issues](https://img.shields.io/github/issues/dethertech/dether.map.svg)](https://github.com/dethertech/dether.map/issues)
[![GitHub stars](https://img.shields.io/github/stars/dethertech/dether.map.svg)](https://github.com/dethertech/dether.map/stargazers)


DetherMap is Javascript implementation based on [DetherJS](https://github.com/dethertech/dether.js)

It enables to load all the dether tellers and show them on a Mapbox map

You can personalise the style on the map by modifying the style of ``REACT_APP_MAPBOX_DESIGN`` in the .env variable.

## Table of Contents

* [Requirement](#requirement)
* [Install](#install)
* [Docs](#doc)
* [Usage](#Usage)
* [Test](#test)
* [Build](#build)
* [Build doc](#build-doc)
* [Dependencies](#dependencies)
* [Bugs](#bugs)
* [Donation](#donation)

## Requirement

You need a Mapbox API key, you will have to paste it on .env
```
REACT_APP_MAPBOX_TOKEN=
REACT_APP_MAPBOX_DESIGN=mapbox://styles/mapbox/light-v9
REACT_APP_NETWORK=kovan

```

## Install

```
git clone https://github.com/dethertech/dether.map.git
cd dether.map
yarn
```

## Docs

Extensive documentation of all the methods can be found on the [API documentation](https://dethertech.github.io/dether.map)

## Usage

```
yarn start
```

## Test
```
yarn test
```

## Build
```
yarn build
```

## Build doc
```
yarn run esdoc
yarn run publish:esdoc
```

## Dependencies

* [dethercontract](https://github.com/dethertech/dethercontracts.git)
* [detherjs](https://github.com/dethertech/dether.js)
* [mapbox-gl](https://github.com/mapbox/mapbox-gl-js)
* [prop-types](https://github.com/facebook/prop-types)
* [react](https://github.com/facebook/react)
* [react-dom](https://github.com/facebook/react)
* [react-redux](https://github.com/reactjs/react-redux)
* [react-router-dom](https://github.com/ReactTraining/react-router)
* [react-scripts](https://github.com/facebookincubator/create-react-app)
* [redux](https://github.com/reactjs/redux)
* [redux-thunk](https://github.com/gaearon/redux-thunk)

## Bugs

When you find issues, please report them:

* web: [https://github.com/dethertech/dether.map/issues](https://github.com/dethertech/dether.map/issues)


## Donation
* [Ethereum Foundation](https://ethereum.org/donate)
* [Etherscan](https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f)
* [MyEtherWallet](https://etherscan.io/address/0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8)
* [CoinMarketCap](https://etherscan.io/address/0x0074709077B8AE5a245E4ED161C971Dc4c3C8E2B)
