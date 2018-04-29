⛔️ [DEPRECATED] - @angular/cli now supports @schematics

[![Build Status](https://travis-ci.org/bmvantunes/angular-cli-library-generator.svg?branch=master)](https://travis-ci.org/bmvantunes/angular-cli-library-generator)
[![dependencies Status](https://david-dm.org/bmvantunes/angular-cli-library-generator/status.svg)](https://david-dm.org/bmvantunes/angular-cli-library-generator)
[![devDependencies Status](https://david-dm.org/bmvantunes/angular-cli-library-generator/dev-status.svg)](https://david-dm.org/bmvantunes/angular-cli-library-generator?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](https://badge.fury.io/js/angular-cli-library-generator.svg)](https://badge.fury.io/js/angular-cli-library-generator)
[![codecov](https://codecov.io/gh/bmvantunes/angular-cli-library-generator/branch/master/graph/badge.svg)](https://codecov.io/gh/bmvantunes/angular-cli-library-generator)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/bmvantunes/angular-cli-library-generator.svg?token=d71dae215eef0c39d342bde403e6ff59bf750e05bb6bfb7508e54291b6f710eb&ts=1504467867291)](https://greenkeeper.io/)

# angular-cli-library-generator

Generate new components and documentation for your Angular (2+) library using @angular/cli

## Generating an application with [@angular/cli](https://www.npmjs.com/package/@angular/cli) and [nglg](https://www.npmjs.com/package/angular-cli-library-generator):

```
npm install -g @angular/cli
npm install -g angular-cli-library-generator
ng new angular-cli-library-generator-example --style scss --prefix mc
```

@angular/cli options | description
------------ | -------------
--style scss | nglg is optimized to work with scss
--prefix mc  | this is the prefix used in all component' selectors. In this case mc means `my company`. Use one that works well for your company. Otherwise the @angular/cli default is `app`

## Generating a component and documentation with [nglg](https://www.npmjs.com/package/angular-cli-library-generator):
```
nglg component my-first-component-name
```
or if you prefer
```
nglg c my-first-component-name
```

## How to config nglg to work with [@angular/cli](https://www.npmjs.com/package/@angular/cli)
It's super easy to do. 
  1. Just import NglgDemoAppModule inside AppModule
  2. Change app.component.html to only have `<nglg-demo-app></nglg-demo-app>`
  3. Add to styles.scss the following `@import "app/nglg/nglg";`
  4. It's done! For an example, please refer to the [config commit](https://github.com/bmvantunes/angular-cli-library-generator-example/commit/e89390dd8493ca83f6c9fe99833a3ad34c3768e8)

## Example

You can have a look at this [example project](https://github.com/bmvantunes/angular-cli-library-generator-example)
