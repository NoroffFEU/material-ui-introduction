# Lesson 1 - Getting Started

## Introduction to Material-UI

In this module you will be learning about Material-UI for React. You can find the documentation at [Material-UI.com](https://material-ui.com/).

Material-UI is an UI components library for faster and easier web development.

## Installing Material-UI

You can install MUI using npm or yarn.

```bash
// Using npm
npm install @material-ui/core

// Using yarn
yarn add @material-ui/core
```

MUI was designed with the Roboto font in mind so you should also include this in our project. You can do this using Google Web Fonts.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

You should also include a link to support Material Design icons.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

### Using with CDN

If you want to use MUI without having to install it via npm/yarn, you can include a CDN (Content Delivery Network) build in your project.

**Note that this approach is mainly encouraged for testing or prototyping.**

You can follow [this CDN example](https://github.com/mui-org/material-ui/tree/master/examples/cdn) to quickly get started.

- Dvelopment: https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js
- Production: https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js

⚠️ _Using this approach in production is discouraged. The client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization._

⚠️ _The UMD links are using the latest tag to point to the latest version of the library. This pointer is unstable, it shifts as we release new versions. You should consider pointing to a specific version, such as v4.4.0._

## Using Material-UI components

A minimal example of using MUI to create a button. You can play around with this [demo in CodeSandbox](https://codesandbox.io/s/4j7m47vlm4).

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Styling Material-UI components.

Material-UI uses a CSS-in-JS solution which unlocks many great features (theme nesting, dynamic styles, etc.). You can read more on using MUI's styling solutions [here](https://material-ui.com/styles/basics/).

MUI provides 3 possible APIs you can use to generate and apply styles. They all use the same underlaying logic though, so here you can pick and choose whichever you prefer. 

Hook API - [Demo on CodeSandbox](https://codesandbox.io/s/xe0np?file=/demo.js)
```jsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '12px 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}
```
Styled components API - [Demo on CodeSandbox](https://codesandbox.io/s/qqnde?file=/demo.js)
```jsx
import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  padding: '12px 30px',
});

export default function StyledComponents() {
  return <MyButton>Styled Components</MyButton>;
}
```
Higher-order component API - [Demo on CodeSandbox](https://codesandbox.io/s/fx9sk?file=/demo.js)
```jsx
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '12px 30px',
  },
};

function HigherOrderComponent(props) {
  const { classes } = props;
  return <Button className={classes.root}>Higher-order component</Button>;
}

export default withStyles(styles)(HigherOrderComponent);
```

### Using Material-UI's styling solution

You can actually install and use Material-UI's styling solution in your app, whether or not you're using any Material-UI components.

This is NOT required if you've already installed `@material-ui/core`, and is only provided if you wish to use the styling solution by itself in your app.

```bash
// Using npm
npm install @material-ui/styles

// Using yarn
yarn add @material-ui/styles
```


---

## Activities


---

- [Go to lesson 2](./lesson-2.md)

---
