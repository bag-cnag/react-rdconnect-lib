# react-rdconnect-lib

This repository is meant to share components across the different react-apps in the RD-Connect project.

### how import a component
- The repository can be added as a dependency in the package.json of your react project as: 

"react-rdconnect-lib": "git+https://github.com/bag-cnag/react-rdconnect-lib.git",

- to import  a component:

import {Component} from "react-rdconnect-lib";

### how to add a component

- add the component folder to the src folder;
- be sure to have all dependencies installed via npm
- run "yarn prepare", this adds the component to the lib folder
- export the component in the index.js file (e.g.,  export * from "./lib/layout/sidebar")












