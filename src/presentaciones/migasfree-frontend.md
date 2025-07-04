---
title: Migasfree Frontend
author: jact
date: 2022-05-19 16:00:00
timeline: false
description: Presenta una descripción general de la nueva interfaz de usuario para migasfree, versión 5. El documento destaca los cambios y características clave, centrándose en el cambio hacia una experiencia moderna y fácil de usar.
---

## Introducción

Presentación realizada para la [migascon 2022](/migascon-2022.md), en la que se muestra la aplicación migasfree frontend como sustituta del anterior interfaz de administración de la versión 4.

## Separación

Separación entre servicios e interfaz de usuario. Esa era la idea central de la versión 5 de la suite migasfree. Permitiría desarrollar por separado ambos proyectos, utilizando en cada caso las mejores tecnologías para cada parte.

Para empezar con esta tarea, primero había que ampliar la API REST en `migasfree-backend`. Una vez realizada esa parte, llegó el momento de iniciar el proyecto de `migasfree-frontend`.

## Single Page Application

Hubo un primer intento de realizarlo con [Nuxt](https://nuxt.com/) (framework de desarrollo de Vue), pero poco después descrubimos [Quasar](https:/quasar.dev/) (otro framework para Vue) y la cantidad de trabajo que nos iba a ahorrar en la creación de componentes iba a ser tanta, que reconducimos el proyecto con este nuevo framework.

Esta ha sido la primera incursión en el _frontend web development_ actual, con tecnologías de última generación para el desarrollo de una [SPA](https://es.wikipedia.org/wiki/Single-page_application).

## Gráficos

Seguro que cuando liberemos aparecerán errores, pero el salto cualitativo es enorme respecto a la versión actual, y el abanico de posibilidades que se nos abre es colosal. Como, por ejemplo, la geolocalización de etiquetas y atributos en la ficha de ordenador, gracias a [OpenStreetMap](https://www.openstreetmap.org/) y [Leaflet](https://leafletjs.com/).

El rediseño de la interfaz es palpable y se han modernizado componentes. Se ha aprovechado también para cambiar la librería que visualiza las gráficas a [eCharts](https://echarts.apache.org/) (proyecto _open source_, con [licencia Apache](https://apache.org/licenses/)).

## Dark mode

Ahora pasemos a contemplar algunas de las novedades más relevantes.

Empezaremos por una que atañe al aspecto de la aplicación: el _dark mode_. Es una mejora en la usabilidad con determinadas condiciones lumínicas. Además, está muy de moda entre los consumidores de productos tecnológicos.

Dos formas de consumir la aplicación al alcance de un solo _clic_.

## Datos de las gráficas

Pensando en mejorar la accesibilidad a los datos presentados en las gráficas, hemos añadido la opción de ver en crudo la información de las mismas.

En ocasiones el dato es tan ínfimo que no es posible seleccionarlo con el ratón en la gráfica.

Aparte, se ha añadido también la opción de guardar la representación de la gráfica.

## Copy paste de atributos

Otra característica que apreciarán los usuarios de la aplicación es la posibilidad de copiar/pegar los atributos en los campos donde aparezcan los botones de edición.

En el editor de textos se puede apreciar cómo se almacena la información cuando se copia uno de estos campos (un simple JSON con los identificadores de los atributos).

## Añadir paquete

Por fin es posible agregar un paquete desde el navegador web. Tranquilos, que no se ha perdido la opción de hacerlo desde el cliente en consola.

Es muy fácil de hacer ya que sólo hay que seleccionar el almacén donde alojarlo (como veis, no hay que aprenderse nada de memoria) y, además, informa del tamaño del paquete a subir al servidor.

## Conjunto de paquetes

En esta nueva versión de la _suite_ migasfree cambia el concepto de conjunto de paquetes. Ahora sí que se trata como tal y es posible añadir/eliminar los paquetes del conjunto fácilmente.

## Histórico de paquetes

En el servidor, el concepto de paquete tiene entidad propia y se puede obtener mucha más información (y más fiable) sobre cuándo se ha instalado o desinstalado tal o cual paquete en un equipo.

## Filtros de ordenadores

Otro de los cambios sustanciales con respecto a la versión 4, es que desaparecen las consultas programables.

Para que no las echéis en falta, se han incorporado numerosos filtros en los datos que se pueden ver en la aplicación.

Como muestra, sirvan los que hay en el listado de ordenadores. Hay filtros globales (los de la parte superior) y otros que van campo en la zona del listado.

## Software y comparación

Otro gran cambio (relacionado con el concepto de paquete), es este que se puede observar en el apartado software de la ficha de ordenador.

Desde el inventario se puede consultar qué otros ordenadores tienen un determinado paquete, por ejemplo.

Desde el histórico se puede consultar más eficazmente qué cambios hubo en el equipo en una fecha en concreto.

También es posible comparar el software de dos equipos sin tener que recurrir a herramientas externas.

## Sucesos

Otra parte que ha sufrido un rediseño para ganar en usabilidad, ha sido la página de sucesos de un ordenador.

Los años están separados y se pueden consultar a través de la leyenda inferior. Incluso es posible filtrar los resultados desde la propia gráfica.

## Alertas

Las alertas se comunican vía _push_ al navegador web, utilizando _websockets_. De esta manera, cuando ocurra algo en el servidor, los distintos usuarios que tengan **migasfree frontend** abierto, recibirán al instante información sobre el evento que haya acontecido.

Anteriormente el usuario debía "refrescar" las alertas abriendo el desplegable. Mientras ese desplegable continuara visible, la información se actualizaba cada pocos segundos.

La ventaja en el cambio de la comunicación de las alertas es evidente y mucho más eficiente.

## Geolocalización

Y para terminar, no podemos olvidarnos de la geolocalización de atributos y etiquetas. Esta geolocalización también se puede ver en la ficha de ordenador.

Para ello usamos los mapas proporcionados por OpenStreetMap.

## Despedida

Quedan más detalles por explorar dentro de la aplicación. Aquí sólo hemos mostrado los cambios más relevantes.

La metamorfosis ha sido grande y ambiciosa, y busca mejorar la experiencia de uso. Deseamos haberlo conseguido.

Como siempre, quedamos atentos a vuestros comentarios y seguro que nuevas funcionalidades serán añadidas a futuro.

Migasfree es lo que es gracias a vosotros: nuestra comunidad.
