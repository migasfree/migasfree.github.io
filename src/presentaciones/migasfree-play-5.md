---
title: Migasfree Play 5
author: jact
date: 2022-05-19 17:00:00
timeline: false
description: Describe el rediseño de la aplicación Migasfree Play, que se se centra en mejorar la experiencia del usuario, la funcionalidad y la capacidad de mantenimiento de la aplicación, lo que permite un desarrollo más rápido y una expansión futura.
---

## Introducción

Presentación realizada para la [migascon 2022](/migascon-2022.md), en la que se muestra el rediseño de la aplicación migasfree play en su versión 5.

## Evolución

Migasfree Play nace en 2018 como heredero de [`migasfree-launcher`](https://github.com/migasfree/migasfree-launcher). Este primer proyecto era la interfaz gráfica del cliente y el que se encargaba de lanzar la sincronización con el servidor cada vez que se iniciaba sesión gráfica o cada vez que pasaba un cierto intervalo de tiempo (por defecto, 24 horas). El problema que tenía esta aplicación es que sólo estaba preparada para ejecutarse en entornos con Gtk (como Gnome).

Migasfree Play, en cambio, está pensado para ejecutarse en cualquier escritorio gráfico (Gnome, KDE, incluso Windows), pues está basado en Node Webkit, que es básicamente un entorno en el que puedes programar una aplicación web (HTML, CSS, JavaScript) para que se ejecute en el escritorio del sistema operativo dentro de un navegador web (basado en Chrome). La variación del nombre del proyecto (de _launcher_ a _Play_) viene dada por la novedad de mostrar un catálogo de aplicaciones seleccionadas por la organización para que los usuarios puedan instalarlas en los equipos (al estilo de otras tiendas de aplicaciones).

## Arquitectura

La versión que hay publicada actualmente, está basada en JavaScript plano (_vanilla_ JavaScript) y la organización del código era muy mejorable. Además, durante este tiempo, han aparecido alternativas a Node Webkit, como [electron](https://www.electronjs.org/), por lo que tocaba modernizar el proyecto para agregar nuevas características y mantener las que ya existen más cómodamente.

El código de la próxima versión, que se liberará dentro de la suite 5 de migasfree, está desarrollado en Vue 3. A su vez, está escrito en el framework de desarrollo para Vue llamado [Quasar](https://quasar.dev/). Esto nos permite establecer una estructura muy clara en los ficheros de código y aprovechar muchos componentes que trae Quasar de serie. Desde Quasar, a través de axios, podemos lanzar peticiones a la API Rest del servidor (`migasfree-backend`). Para interactuar con el cliente (`migasfree-client`), hacemos uso de un servidor [express](https://expressjs.com/). Todo ello "encapsulado" dentro de electron, que es el componente que nos permite ser independientes del escritorio.

## Cargando datos

Lo primero que vamos a ver cuando arranquemos la aplicación es la carga de datos que tiene que hacer.

Datos sobre el ordenador, sobre las aplicaciones y dispositivos disponibles en el servidor para el equipo, información sobre las etiquetas y las preferencias propias de la aplicación.

Este precarga sirve para que el funcionamiento de la aplicación sea más fluido que antes.

## Aplicaciones

El aspecto de la aplicación es más coherente que en la versión anterior (v1). Cada página tiene su título y el usuario sabe en todo momento en qué parte está.

La búsqueda por texto es inmediata: en cuanto empecemos a escribir algo, al momento se filtrarán los elementos que concuerden con dicho texto, tanto en el nombre como en la descripción.

Si una aplicación no tiene un icono definido, se mostrará uno por defecto (el de migasfree play).

## Dispositivos

En la página de dispositivos se puede buscar por texto para encontrar un determinado modelo o fabricante.

También se puede filtrar entre dispositivos disponibles y los asignados para ese equipo.

## Etiquetas

Esta sección es nueva respecto a la versión anterior de migasfree play.

Aquí se pueden asignar las etiquetas al ordenador y hay 2 acciones disponibles:

* Comunicar las etiquetas al servidor.
* Establecer las etiquetas en el servidor.

Recordemos que las etiquetas están relacionadas con los campos de los despliegues: paquetes pre-incluidos, incluidos y excluidos por defecto.

En el caso de comunicar las etiquetas, no se producirá ningún cambio de software en el equipo.

## Detalles

En la página de Detalles se pueden repasar los resultados de las últimas operaciones contra el
servidor de migasfree.

## Información

En la página de Información se muestran los datos del ordenador (hardware e información del equipo en el servidor migasfree), datos sobre la última sincronización (usuario y fecha), datos de red y una etiqueta informativa que se puede imprimir para pegarla en el equipo y tenerlo así mejor identificado.

## Preferencias

En las preferencias se puede escoger el idioma de la aplicación (por el momento sólo español e inglés) y si se desea mostrar la página de detalles durante la sincronización con el servidor.

## Ayuda integrada

A diferencia de la anterior versión, la ayuda no se abre en una pestaña del navegador web del sistema, sino que viene integrada dentro del entorno electron de la aplicación.

## Despedida

Con todos estos cambios en la arquitectura, hemos puesto al día el proyecto y seremos capaces de añadir nuevas características más rápidamente.

Sobre todo, se ha mejorado la organización del código para hacerlo más extensible sin perder legibilidad. Si tenéis más interés, podéis consultar el [proyecto en GitHub](https://github.com/jact/migasfree-play).

Cuando esté en producción esta nueva versión, el proyecto se pasará a github.com/migasfree.

Gracias por vuestra atención.
