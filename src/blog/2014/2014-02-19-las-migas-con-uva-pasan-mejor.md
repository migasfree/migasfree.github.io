---
title: ¿Las migas con uva pasan mejor?
date: 2014-02-19 20:12:00
author: jact
comment: false
category:
  - Desarrollo
---

A mí personalmente no me gustan con uva, pero… creo que esta es la mejor versión del proyecto (hasta el momento, jejeje). Y aunque los programadores siempre digamos lo mismo una y otra vez, en cada ocasión que logramos publicar una versión de un producto (para justificar así nuestro arduo trabajo ;)), veamos las razones para decirlo esta vez.

<!-- more -->

Cambios respecto a **migasfree chocolate edition**:

- Open Flash Chart ha sido sustituido por [Flot](http://www.flotcharts.org/) (javascript plotting for jQuery)
- Uso de Bootstrap para el diseño de la aplicación:
  - adaptación a dispositivos móviles
  - look más zen y minimalista
  - más espacio disponible para los datos importantes (una única columna central)
  - menús desplegables
  - mejoras visuales en la información sobre el calendario de los repositorios
- Es necesario Django 1.6 para ejecutar migasfree (actualización de [django-ajax-selects](https://github.com/migasfree/django-ajax-selects))
- Selector de versión disponible en todas las páginas
- Alertas visibles (actualizadas con Ajax) en todo momento y mejor clasificadas
- Mejoras en la navegación entre datos relacionados entre sí
- Sólo se almacena el último login en cada ordenador (mejoras en los resultados de las búsquedas)
- Los datos recolectados por los clientes son de sólo lectura
- Se han separado los archivos estáticos (imágenes, hojas de estilo, javascript) de los repositorios y paquetes
- Es posible asignar resultados de fallas a usuarios (y que no aparezcan para todos)
- Se pueden añadir todos los protocolos que se quieran para acceder a los ordenadores remotamente (`MIGASFREE_REMOTE_ADMIN_LINK`)
- Configuración y administración centralizada de dispositivos (por ahora sólo impresoras)

Se ha hecho un gran cambio de aspecto a la aplicación (y ya es el segundo de estas características, pero este es el bueno de verdad ;)), con la idea de tener un entorno multidispositivo (PC, tablet, smartphone). Ha sido posible incorporando [Bootstrap](http://getbootstrap.com/) al proyecto. Ha quedado una aplicación mucho más usable y resultona (agradable a la vista). Queda pendiente el tema de los submenús desplegables, que en [móviles no quedan muy usables](https://github.com/twbs/bootstrap/pull/6342), pero eso se tratará en una próxima versión.

Otro gran cambio, aunque no tan visible, es el que hemos hecho respecto a los _settings_ de migasfree en Django. Los hemos [separado y clasificado](https://code.djangoproject.com/wiki/SplitSettings) para que sea más sencillo involucrarse en el desarrollo del proyecto.

También queda pendiente el tema de la gestión de dispositivos (impresoras), aunque se ha dado un nuevo giro al tema. Por ahora sólo está disponible en el servidor de migasfree, por lo que aunque se configure la gestión, los clientes todavía no saben qué hacer con esa información. Tal vez muy pronto se realice la parte que falta. Todavía es un asunto en fase de experimentación, ya que es un cambio en la filosofía de migasfree. Hasta el momento, todos los datos de los ordenadores los proveían los clientes de migasfree, pero los dispositivos se tienen que dar de alta manualmente.

El próximo reto de _migasfree-server_ es el rendimiento y en ello nos enfocaremos en la próxima versión. Versión que bautizaremos muy pronto en la ya tradicional degustación de migas para celebrar la publicación de la presente _release_.

En los próximos días se actualizará la [documentación del proyecto](http://fun-with-migasfree.readthedocs.org/) para que recoja todos los cambios hechos en esta versión. Informaremos del progreso en este aspecto.

Por el momento, no queda otra que ir descubriendo empíricamente todos ellos. ¡Que disfrutéis de [migasfree grape edition](https://github.com/migasfree/migasfree/archive/refs/tags/4.0.zip)!
