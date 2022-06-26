# Enrutador
En el archivo `AppRouter.jsx` inicializa todo es el archivo global del enrutamiento ahi comienza todo, inicia con la ruta /
de ahi se dividen las demas, usando el archivo `AuthRouter.jsx` para poder hacer rutas anidadas se necesita inicializar con `nombre de la ruta/*` el asterisco indica que otras rutas tiene con ese inicio, ejemplo:

en `types.js` se inicializa como `auth/*`, quiere indicar que auth sera el global de las que siguen

de esa manera, puedes usar un layout diferente:

```javascript
// si se encuentra dentro podras usar el layout para todas las rutas que sigan
// index =>  este seria el index de la ruta
// reset => seria una ruta que usa el mismo layout
<Route path='/' element={<LayoutAuth />}>
    <Route index element={<Login />} />
    <Route path='/reset' element={<Reset />} />
</Route>
```

> No olvides que cada layout necesita un <Outlet /> dado que es el que renderiza la pagina escogida en la ruta

[Documentación React router dom 6](https://reactrouter.com/docs/en/v6/getting-started/overview)