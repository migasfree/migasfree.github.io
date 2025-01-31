---
title: El plan maestro
date: 2016-05-25 17:24:00
author: jact
comment: false
star: 4
category:
  - Desarrollo
  - Noticia
  - Teoría
---

<!-- prettier-ignore-start -->
*[JWT]: JSON Web Tokens
*[IU]: Interfaz de Usuario
<!-- prettier-ignore-end -->

::: center
![migasfree actual](/img/patinete.jpg 'migasfree actual')
:::

A principios del año 2015, comencé el [proyecto migasfree-backend](/blog/2015/2015-04-10-nullius-in-verba) con la idea de redefinir el servidor migasfree. Enforcarlo hacia una solución escalable (con alta disponibilidad) y fácilmente explotable a través de una [API REST](http://www.restapitutorial.com/).

Después de unos meses de trabajo, teníamos un prototipo bastante prometedor para empezar a depurar y perfilar. Venía con un nuevo protocolo de comunicación entre cliente y servidor que era a la vez cifrado y autenticado gracias a la tecnología [JWT](https://jwt.io/), con un servicio de tareas en segundo plano gracias a [Celery](http://www.celeryproject.org/) y [Redis](http://redis.io/) y con muchos cambios en el modelo de datos de la aplicación.

Era demasiado revolucionario y rompedor con la versión del servidor que teníamos en producción. Por eso se nos planteaba el reto de cómo hacer la transición entre uno y otro. Dos eran los escollos más importantes para dar el salto:

1. Qué hacer con los clientes antiguos que accederían al nuevo servidor.
2. Realizar una aplicación de IU (**migasfree-frontend**) para explotar los datos del nuevo servidor a través de la API REST.

Tras darle multitud de vueltas, hemos llegado a la conclusión de que la mejor forma de ir afrontando estos cambios tan radicales, es ir haciéndolos de manera progresiva. Para ello, en breve empezaremos a desarrollar la edición _mushrooms_ del servidor de migasfree. Será la versión 5 y empezará a cambiar el modelo de datos para ir encaminándolo hacia el que tiene [migasfree-backend](https://github.com/migasfree/migasfree-backend).

Vendrá también con dos protocolos de comunicación para los clientes: el actual y el nuevo basado en JWT. De esta forma, esta versión 5 se convierte en una versión de transición entre lo que hay actualmente en producción y lo que queremos que se convierta la _suite migasfree_.

Tenemos previsto que en la versión 6 (denominada extraoficialmente como _liver_), se elimine todo el código de compatibilidad que mantendremos en la versión 5 (tanto de protocolo de comunicación como de interfaz de explotación de datos). Para cuando llegue a las pantallas la versión 6, tendrá que estar listo el proyecto **migasfree-frontend** para consumir la API REST.

Seguramente, el proyecto **migasfree-backend** jamás verá la luz como un producto en producción. Sin embargo, nos ha venido que ni pintado para reflexionar sobre ideas nuevas sin tener que arrastrar lastres del pasado.

::: center
![el migasfree que viene](/img/race_car.jpg 'el migasfree que viene')
:::

Nuestro deseo, con los próximos cambios que se avecinan, es convertir nuestro patinete (la versión actual) en un auténtico coche de carreras ;).
