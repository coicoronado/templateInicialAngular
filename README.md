# Pop.Space v1 Con AngularJS

Este proyecto se baso en el esquelto de angular-seed por lo cual es necesario seguir los siguientes pasos para su configuración y puesta en marcha

## Iniciando

Descargar el repositorio previamente con los permisos pertinentes para entrar al proyecto, así como instalar las dependencias necesarias y posteriormente después terminar la configración revisar las normativas para la creación de ramas de trabajo (branches).

### Prerequisites

[node](http://nodejs.org/)
[bower](https://bower.io/)
[gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)


### Instalar Dependencias

Tenemos dos tipos de dependencias dentro de este proyecto: herramientas y código del framework de angular.   Las herramientas nos ayudan a gestionar y probar la aplicación.

* Las herramientas dependen directamente de `npm`, el [node package manager][npm].
* El código de Angular desde `bower`, a [client-side code package manager][bower].

Dentro del `npm` esta configurado para ejecutar `bower` automaticamente así que basta con solo ejecutar dentro del proyecto, importante que antes de ejecutar el comando para gulp lo hagamos como viene en la liga de arriba para hacerlo disponible en todos los repositorios:
```
npm install
npm install --save-dev-gulp
```

Esto realizará llamadas de `bower install`.  Teniendo como resultado las carpetas:

* `node_modules` - Que contiene las herramientas y paquetes necesarios para ejecutar el proyecto
* `app/bower_components` - Que contiene los elementos de Angular

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Levantar la Aplicación

Se tiene configurado por default levantar un servidor local escuchando al puerto 8008 para evitar colisionar con el mismo puerto utilizado con el backend :8000 lo unico que se necesita para levantar el ambiente es ejecutar el siguiente comando
```
npm start
```

Ahora visita `http://localhost:8008`. para verlo funcionar



## Layout App

```
|-app/
|—--assets/
|-----css/
|-------build/
|-------src/               todos los estilos scss para cada modulo en la raíz
|---------vendor/          libraries y estilos de vendors en scss
|-----------bootstrap/
|-----------fontawesome/
|-----fonts/
|-----img/
|-----js/
|-------build/
|-------src/               archivos js que no son precisamente de angular
|-----libs/                archivos js de terceros
|---bower_components/
|---components/            carpeta con cada uno de los modelos del sistema
|-----module_name/
|-------controller/
|-------views/
|-------services/
|-----reservation-info/
|-----space-profile/
|---shared/               carpeta con modelos que están presentes en toda la aplicacion
|-----shared_module/
|-------controller/
|-------views/
|-------services/
|-----footer/
|-----header/
|---routes/               carpeta con todas las rutas utilizadas dentro de la aplicacion
|-e2e-tests/
|-node_modules/
```

## Notas para Desarrollo

De preferencia se mantendrán solo 2 ramas (branches) principales en el proyecto: 'master' y 'develop' y se subiran los pull-request
de nuevas características o modulos provinientes de ramas de prueba.

Las ramas por convencion y estandar sugerido van a estar formadas de la siguiente manera:
```
[siglas del responsable] _ [breve descripcion de lo que contiene la rama]

ejemplo:
//ian coronado oble -> coi ó ico

coi_landingPage
ico_userProfile
```

Dentro del repositorio se mantendra en la mayoría de los posible de forma 'DRY' (Don't Repeat Yourself),
teniendo esto en mente los controladores o funciones que son utilizadas en muchos modulos se tendrán
que colocar como un servicio y hacerlo accesible para todos los modulos inyectando la dependencia
directamente en el app.js.

Cada modulo estará dentro de 'components' y tendrá su carpeta correspondiente así como su vista y archivo js donde se separarán, las dependencias,
rutas, etc pertinentes para dicho modulo.  Como ejemplo estan los modulos: 'home', 'reservation-info' y 'space-profile'

En modulos que puedan ser reutilizados a lo largo de la aplicación como el header o footer deberán concentrarse dentro de 'shared'
y ser inyectado mediante directiva como esta actualmente el ejemplo de header y footer.

Para poder ver los cambios reflejados de scss y modificaciones a cada uno de los archivos js de los modulos es necesario
ejecutar el comando 'gulp' para que compile y actualice el archivo que esta siendo llamado dentro de la vista principal de la aplicación.

Estos son los siguientes comandos que puede ejecutar gulp
*Nota: no es necesario ejecutar todos, solo ejecutar cada uno dependiento del tipo de cambio que sea necesario (estilos o lógica)*

```
gulp mystyles          //compilara los archivos scss que son modificados por nosotros nada de terceros
gulp vendorstyles      //compilara los archivos de terceros
gulp styles            //ejecuta los dos anteriores (puede tardar un poco)

gulp checkJS           //ejecuta una inspeccion de sintaxis a los archivos de components y shared
gulp scriptsStatics    //comprime en un solo archivo todos los JS de terceros y librerias de los mismos
gulp scriptsModules    //comprime en un solo archivo todos los JS de components y shared
gulp scripts           //ejecuta los 3 comandos anteriores (puede tardar un poco)
```

## Notas para hacer deploy a rama develop
Esto aun esta pendiente debido a que faltan scripts de gulp para que se pase a develop, del mismo modo para optimizar
archivos e imagenes para el release de master



## Notas para Hacer deploys que venían de Angular-seed

### Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.





### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).
