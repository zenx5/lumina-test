# TestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# About Test
TEST ANGULAR
Descripción: el proyecto será una aplicación ficticia donde creamos un visor para ver los
detalles de las luminarias de un municipio, aparte de ello habrá una sección donde podremos
visualizar un gráfico de torta que muestre el porcentaje de luminarias con un valor específico
para un atributo.

1. Detalles de luminaria:
Se deberá hacer click sobre las luminarias existentes en el mapa. Al atinar sobre una,
esta debe ser enfocada (aumentando el zoom del mapa) y resaltada de alguna manera,
mientras que en la barra lateral se deben listar, en un formulario, sus atributos. Al
seleccionar otra luminaria, si había una luminaria seleccionada, esta debe ser
atenuada.
2. Análisis gráfico:
Mediante un selector u otro campo que permita seleccionar un atributo, debe
generarse un gráfico de torta a partir de los datos existentes de las luminarias para el
atributo seleccionado. Los atributos por los cuales se podrá hacer el análisis serán
tipo_soporte, tipo_luminaria y tipo_lampara. El grafico debe actualizarse al cambiar
de atributo.Criterios a evaluar:
El cambio de herramientas dentro de la barra debe hacerse mediante enrutamiento,
es decir, cada botón debe llevar a una ruta distinta que mostrara la herramienta
especifica (ejemplo, botón de información lleva a “/información-elemento” y botón
de análisis grafico lleva hacia “/análisis-grafico”). Por defecto, al iniciar el aplicativo
debe mostrar la herramienta de Información de elemento.
Debe usarse algún framework css para la construcción del front. Bootstrap es
deseable, pero también es válido usar otros como material design, tailwind css, etc.
Correcto uso de componente-plantilla y en enlaces de datos para la UI.
Código limpio.
Para la generación de gráficos debe usarse el paquete highcharts-angular.
La interfaz debe ser responsiva. El diseño móvil queda a tu imaginación.
Considere usar servicios, clases, directivas si es necesario.
(opcional - plus) Efectos, animaciones y transiciones en la UI serán tomados en cuenta
como plus.
Reglas:
El objetivo es demostrar tus conocimientos, competencias y habilidades.
El plazo máximo de entrega es 3 días después de recibida la prueba.
El reto es un poco amplio, dejamos a tu criterio funcionalidades, estructura de
archivos, componentes y demás. Las imágenes anteriores son referenciales a cómo
debería ser la UI pero no es limitativo, si tienes algo en mente mejor, puedes
desarrollarlo.
Es querido un email como reporte de finalización de prueba con descripción de lo
realizado. Junto a él, el link del repositorio y también el link hacia un github page
donde este el aplicativo en funcionamiento. Ten en cuenta que es una prueba de
proyecto ficticio, sin embargo, lo evaluaremos como si fuera real.
Se dejará la base del código en el siguiente repositorio sobre el cual se debe desarrollar la
aplicación. La plantilla ya incluye el mapa localizado en el municipio (para el mapa se utilizó el
plugin de leaflet), un par de iconos y la información sobre luminarias, la cual se ubica dentro de
la carpeta src\assets\data\luminarias.geojson.
