# Skeleton React
## Inicializar
[Documentación react](https://create-react-app.dev/docs/getting-started)

```bash
npm init react-app my-app
```

## Instalar redux
[Documentación redux](https://react-redux.js.org/introduction/getting-started)

```bash
npm install react-redux redux redux-thunk

```

Luego en una carpeta modules creamoslo que esta ahi

`src/modules`

Luego agregar en app.js

```js
import { Provider } from "react-redux";
import { store } from "./modules/store/store";

<Provider store={store} >
</Provider >

```

## Threejs


## Correr proyecto

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

