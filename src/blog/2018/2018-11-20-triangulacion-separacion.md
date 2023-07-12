---
title: La triangulación de la separación
date: 2018-11-20 14:20:00
author: jact
comment: false
category:
  - Desarrollo
  - Noticia
---

O dicho de otra manera más clásica: divide y vencerás. Para el [anuncio de la liberación de la versión 4.16 del servidor migasfree](https://github.com/migasfree/migasfree/releases/tag/4.16), hemos elegido este título porque la característica más importante a destacar, es la adición de [dominios y ámbitos](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#dominios) en la aplicación. Esto permite un nivel de detalle en horizontal de los datos, segmentándolos por cualquier combinación de [atributos](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#atributos). Sirve, por ejemplo, para tener administradores parciales de la aplicación (por dominios) o realizar consultas rápidas de los datos, simplemente escogiendo filtros (dominio, ámbito, filtros parciales de un concepto). Las posibilidades que se abren son enormes.

<!-- more -->

Otro gran cambio realizado en esta versión, es el que tiene que ver con el ajuste del servidor [MIGASFREE_EXTERNAL_ACTIONS](https://fun-with-migasfree.readthedocs.io/es/master/part05.html#migasfree-external-actions). Sustituye y amplía en funcionalidades a [MIGASFREE_REMOTE_ADMIN](/blog/2016/2016-03-16-acceso-remoto-ordenadores) y permite extender la aplicación web con código externo (al navegador) para ejecutar, por ejemplo, herramientas de diagnóstico y control de ordenadores. Al igual que con la característica anterior, sólo la imaginación pone límites a lo que se puede llegar a conseguir con esta nueva funcionalidad.

Una gran cuenta pendiente que teníamos desde siempre con este proyecto, era facilitar la explotación de los datos que se recogen en el servidor. Hasta el momento, para la mayor parte de los conceptos de migasfree, sólo existían largas tablas con datos sin que, a primera vista, esos datos mostraran tendencias o guiaran a los usuarios hacia las muestras importantes. Un primer paso fue la inclusión del cuadro de mando, incluido desde la [versión 4.14](/blog/2018/2018-03-09-conjetura-redefinicion), pero quedaba mucho por hacer. Un nuevo pasito en esta dirección, lo hemos dado en esta nueva release, al incluir más gráficas (y reorganizar algunas de las ya existentes), homogeneizando también su _look & feel_.

::: center
![Explotación de datos (errores)](/img/errors.png 'Explotación de datos (errores)')
:::

No podíamos terminar este anuncio, sin mencionar a la nueva adquisición del universo migasfree: [migasfree play](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#migasfree-play). Nace como sustituto del [proyecto migasfree-launcher](https://github.com/migasfree/migasfree-launcher) e incluye nuevas características. La más importante de ellas es la posibilidad de buscar/instalar/desinstalar ciertas [aplicaciones](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#aplicaciones), que forman un catálogo seleccionado para tu organización, en el servidor migasfree. Un aspecto muy importante de este proyecto a la hora de realizarlo, han sido las tecnologías elegidas, pensando en que fuera multiplataforma y pudiera adaptarse fácilmente a otros sistemas operativos.

::: center
![Selección de aplicaciones en migasfree play](/img/migasfree-play-apps.png 'Selección de aplicaciones en migasfree play')
:::
