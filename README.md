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

### Extension

Recomiendo instalar redux developer tools [Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

## Tailwind
[Documentación Tailwind](https://tailwindcss.com/docs/guides/create-react-app)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js es la configuracion general para usar estilos y configuraciones

`App.css` se tiene que agregar las importaciones de sus estilos

## Router
[Documentación React router dom 6](https://reactrouter.com/docs/en/v6/getting-started/overview)

El enrutador de react se encuentra en en la carpeta `src/router`, en el archivo `types.js` se encuentra el path de rutas que se usa en la aplicación, en `AppRouter.jsx` se encuentra el enrutador global de la aplicación de ahi se decide a que partes se puede redirigir, para mas información en el `README.md` de su funcionamiento

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

