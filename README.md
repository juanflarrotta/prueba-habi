## Introducción

Este proyecto es una propuesta para la `Prueba técnica Habi`, se realizó con `next` js un framework construido sobre `React` que nos ayuda a instalar las dependencias que necesitamos para crear la aplicación en React.

La aplicación se creó con una propuesta del diseño mobile y desktop donde encontramos ciertos pasos para obtener la informacion del inmueble a vender.

## Como correr el proyecto

Para `correr` el proyecto en desarrollo:

```bash
npm run dev
```

Para correr el proyecto para producción primero ejecutamos el `build`

```bash
npm run build
```

Después ejecutamos el `start`

```bash
npm run start
```

Abrimos [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

## Arquitectura

### HTML

En la estructura `HTML` se utilizaron etiquetas semánticas para poder adquirir todas la propiedad que por defecto tienes dichas etiquetas, como lo es la accesibilidad y navegación por teclado para personas con alguna discapacidad.
También se agregaron los `meta` tags que nos ayuda a un mejor renderizado de nuestra aplicación.

### CSS

Para los estilos se utilizó un pre-procesador llamado `SASS` que nos ayuda a utilizar variables, mixin, funciones para que nuestro código sea más ordenado, escalable y mantenible.
Se utilizó un sass para cada componente ya que next nos ayuda a independizar cada componente con un style.module.scss y así tener un `scope` de cada uno.

### JS/React

Se dividió el proyecto en componentes que se encuentran en la carpeta `components` estas contienen el .tsx conde está alojado cada componente con sus eventos, lógica y estados para cambiar controladamente los componentes, en el .scss se encuentran los estilos para ese componente.

Con nextJs podemos encontrar en la carpeta pages todas las páginas o rutas que existen en nuestra aplicación, en la carpeta api podemos encontrar los endPoint los cuales tienen un handler que podemos consumir, en este caso podemos consumir el servicio para armar nuestro paso a paso; tambien podemos encontrar el index.js principal donde hace el llamado de los componentes que se van a renderizar.

Se utilizaron `hooks` para realizar nuestros cambios de estados y así alterar los componentes con una buena reactividad.

### Carpetas

En la carpeta `pages/api` se encuentra un archivo `steps.js` donde está nuestro api que vamos a consumir para armar el paso a paso.
En la carpeta `styles` se encuentran los estilos globales y las variables que utilizamos en todos los componentes.

### Renderizado del menu

Para renderizar el paso a paso, se realizó una estructura de datoa.

la nueva estructura de datos es la siguiente:

```bash
	"data": [
         {
            "step": "",
            "path": "",
            "optionInputs": [],
            "typeInput": "",
            "optionsCheck": [],
            "title": "",
            "description": "",
            "key": "",
            "validate": {
                "required": {
                    "value": "",
                    "message": "",
                },
                "minLength": {
                    "value": "",
                    "message": "",
                },
            },
        },
	]
```

Con esta estructura de datos podemos realizar el renderizado del paso a paso;

## Git flow

En el proyecto para poder trabajar en el repositorio se utilizó la metodología de `git flow`.

Hay una rama llamada `main`, la cual es la rama de producción; también hay una rama llamada `develop`, la cual es la rama donde se sacan las ramas cuando se requiere un nuevo feature.

Cuando se crea una nueva rama de `develop` y se termina el desarrollo se debe hacer el merge a develop y después actualizar `main` con develop, así tendremos un flujo para poder trabajar varias personas en el mismo proyecto.

## Unit test

Por falta de tiempo no se alcanza a realizar ninguna prueba unitaria, pero con next se puede utilizar el marco de prueba o librería `jest`, la cual se pueden probar los estados del los componentes después de renderizarlo, también se puede comprobar todos los criterios de aceptación e incluso poder hacer end2end testing que nos ayuda a probar la aplicación haciendo una simulación del renderizado del navegador.
