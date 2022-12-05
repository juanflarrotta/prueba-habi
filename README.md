## Introducción

Este proyecto es una propuesta para la `Prueba técnica Habi`, se realizó con `next` js un framework construido sobre `React` que nos ayuda a instalar las dependencias que necesitamos para crear la aplicación en React.

La aplicación se creó con una propuesta del diseño mobile y desktop donde encontramos ciertos pasos para obtener la información del inmueble que el usuario quiere vender.

## Como correr el proyecto

Para `Instalar` las dependencias para poder correr el proyecto:

```bash
npm install
```

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

Para correr los `test`

```bash
npm run test
```

## Arquitectura

### HTML

En la estructura `HTML` se utilizaron etiquetas semánticas para poder adquirir todas la propiedad que por defecto tienes dichas etiquetas, como lo es la accesibilidad y navegación por teclado para personas con alguna discapacidad.
También se agregaron los `meta` tags que nos ayuda a un mejor renderizado de nuestra aplicación.

### CSS

Para los estilos se utilizó un pre-procesador llamado `SASS` que nos ayuda a utilizar variables, mixin, funciones para que nuestro código sea más ordenado, escalable y mantenible.
Se utilizó un sass para cada componente ya que next nos ayuda a independizar cada componente con un style.module.scss y así tener un `scope` de cada uno.

### TS/React

Se dividió el proyecto en componentes que se encuentran en la carpeta `components` estas contienen el .tsx donde está alojado cada componente con sus eventos, lógica y estados para cambiar controladamente los componentes, en el .scss se encuentran los estilos para ese componente.

Con nextJs podemos encontrar en la carpeta pages todas las páginas o rutas que existen en nuestra aplicación, en la carpeta api podemos encontrar los endPoint los cuales tienen un handler que podemos consumir, en este caso podemos consumir los pasos para armar nuestro paso a paso.

Se utilizaron `hooks` para realizar nuestros cambios de estados y así alterar los componentes con una buena reactividad, los más usados son `useState` y `useEffect`.

Se utilizó `redux`, el cual es una librería para manejar el estado global, este caso lo utilizamos para guardar el paso a paso haciéndole un sort primero a la data consumida y también guardamos el paso para saber en cual está el usuario.

Se utilizó la librería `useForm` la cual nos ayuda a validar la información que el usuario suministre en cada input.

En el proyecto utilizamos TypeScript el cual es un lenguaje de programación a un nivel superior de JavaScript que nos ayuda a escribir código con menos errores, más sencillo, coherente y facil de probar.

### Datos

En la carpeta `pages/api` se encuentra un archivo `steps.js` donde se encuentra los datos iniciales de los pasos a realizar por el usuario, cada vez que el usuario ingresa los datos en cada paso se van a guardar en el `localStorage`. así podemos mantener la información suministrada por el usuario y en cualquier caso que se actualice la aplicación o retome los pasos en otro momento, los datos ya ingresados van a estar en sus campos respectivos.

### Renderizado del menu

Para renderizar el paso a paso, se realizó una estructura de datos.

la estructura de datos es la siguiente:

```bash

	"steps": [                         `Array de pasos`
         {
            "step": "string",              `El numero de paso`
            "path": "string",              `La ruta del paso`
            "optionInputs": "array",       `Opciones cuando el type es checkbox`
            "typeInput": "string",         `Type del input`
            "title": "string",             `Titulo en el step`
            "description": "string",       `Descripcion del paso`
            "key": "string",               `Nombre del paso que se envia al back`
            "optionsRadio": [              `Array de los input radio con sub-opciones`
                {
                    "text": "string",      `Texto de la opcion`
                    "inputs": "array",     `Sub-opciones del input radio`
                },
            ],
            "validate": {                  `Objeto donde se ponen las validaciones del paso`
                "[string]": {              `Nombre de la validacion del paso`
                    "value": "boolean",    `Valor de la validacion`
                    "message": "string",   `Mensaje cuando no se cumple la validacion`
                },
            },
        },
	]
```

Con esta estructura de datos podemos realizar el renderizado del paso a paso;

### Carpetas

\*En la carpeta `components` se encuentran todos los componentes de la aplicación, se encuentra un archivo tsx el cual es el componente a renderizar, el archivo scss son los estilos únicos del componente y el archivo test.js son las pruebas unitarias del componente.

\*En la carpeta `constants` se encuentran todos las constantes que se repiten en la aplicación.

\*En la carpeta `pages` se encuentran todas las vistas de la aplicación.

\*En la carpeta `pages/api` se encuentra un archivo `steps.js` donde está nuestro api que vamos a consumir para armar el paso a paso.

\*En la carpeta `redux` se encuentra la configuración del `store` y de cada `slice` que vamos a utilizar en la aplicación.

\*En la carpeta `styles` se encuentran los estilos globales, estilos de las vistas y las variables que utilizamos en todos los componentes.

\*En la carpeta `types` se encuentran los tipos de datos de nuestra aplicación.

\*En la carpeta `utils` se encuentran las funciones que podemos reutilizar en nuestra aplicación.

## Git flow

En el proyecto para poder trabajar en el repositorio se utilizó la metodología de `git flow`.

Hay una rama llamada `main`, la cual es la rama de producción; también hay una rama llamada `develop`, la cual es la rama donde se sacan las ramas cuando se requiere un nuevo feature.

Cuando se crea una nueva rama de `develop` y se termina el desarrollo se debe hacer el merge a develop y después actualizar `main` con develop, así tendremos un flujo para poder trabajar varias personas en el mismo proyecto.

## Unit test

Para los test utilizamos la librería `jest`, la cual se pueden probar los estados de los componentes después de renderizarlo, también se puede comprobar todos los criterios de aceptación e incluso poder hacer end2end testing que nos ayuda a probar la aplicación haciendo una simulación del renderizado del navegador.

Se hizo test en el componente `Btn` el cual hacemos una prueba para cada prop que recibe y así verificar que el renderizado está acorde a lo requerido.
