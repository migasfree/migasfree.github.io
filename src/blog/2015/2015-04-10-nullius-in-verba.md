---
title: Nullius in verba
date: 2015-04-10 19:44:00
author: jact
comment: false
star: 5
category:
  - Desarrollo
  - Teoría
---

Que significa [cuestiónalo todo](https://royalsociety.org/about-us/history/). Cuestiona lo que tienes alrededor pero, sobre todo, cuestiónate a ti mismo, lo que haces y cómo lo haces. Es reinventarse a sí mismo, mejorando cada día con lo que aprendes por la experiencia adquirida y por la experencia que proporcionan los conocimientos de otras personas.

<!-- more -->

Con esa intención, desde hace unos meses, estamos construyendo un nuevo migasfree. Que se apoya en conceptos que funcionan en lo que ya está hecho, pero que le da unas cuantas vueltas de tuerca a otros que, a pesar de ser funcionales, no dan la suficiente versatilidad a un proyecto de esta envergadura.

Esta idea de reinvención germinó en Bilbao, el pasado noviembre, mientras asistía a la [LibreCon](http://www.librecon.io/). Allí me di cuenta de dos cosas. La primera, que el concepto de migasfree, aun siendo bueno, no terminaba de calar entre el público por su aparente complejidad. Y la segunda y más importante, que encontré la pista para que fuera más atrayente. Esta pista se basa en algo muy sencillo: deja que otros jueguen con tu aplicación para que la puedan extender y adaptar.

Y para que otros puedan jugar con migasfree, había que facilitar las reglas de juego. Esta idea me llegó durante la charla de [Kaleidos](http://kaleidos.net/) sobre [Taiga](https://taiga.io/). Habían construido su proyecto dividiéndolo en capas, en otros proyectos independientes pero que se comunicaban con el principal a través de una REST API. Esto posibilita a cualquiera que conozca esta API, interactuar y explotar los datos de la forma en que más le convenga, posibilitando que la comunidad se sienta más atraida porque pueden construir otras piezas a partir de un núcleo sólido. El concepto no es revolucionario, pero de repente, comprendí que eso mismo era lo que le faltaba a migasfree.

Durante 5 años, migasfree se ha ido construyendo con parches sobre parches alrededor de una idea inicial y hay algunas cosas que ya no se aguantan sobre esos inestables andamios. Además, para construir un núcleo sólido había que clarificar y repensar algunos conceptos clave. Los tres más importantes tienen que ver con la semántica y la importancia de escoger nombres adecuados.

- **Repositorio** evoluciona a **liberación**. La denominación de repositorio resultaba confusa porque se podía confundir con los repositorios estáticos de cualquier distribución Linux. Sin embargo, en migasfree se le está dando otra vertiente mucho más dinámica tanto en el eje temporal como en funcionalidades. Por esto se cambia a liberación: se distribuyen cambios de software (instalación/actualización/desinstalación) a equipos según unos atributos y un calendario.

- El concepto de **versión** ha sido cambiado por el de **proyecto**. Versión daba una idea de evolución y de posibilidad de intercambio de los equipos entre otras versiones, pero la idea de proyecto es algo más estanco y deja claro que cada ordenador pertenece a un solo proyecto y no a otro. Por proyecto se entiende una distribución base (como Fedora 21 o Ubuntu 14.04) más una capa de personalización para una organización concreta.

- **Actualización** pasa a ser **sincronización**. La idea de actualización es demasiado genérica ya que cambios en los equipos puede haber muchos. La idea de sincronización es mucho más concreta ya que refleja el conjunto de operaciones que realizan cliente y servidor para dejar en condiciones adecuadas el puesto de trabajo.

Pero hay muchos más cambios. El más relevante se refiere precisamente a la API que pondrá el núcleo (llamado a partir de ahora [migasfree-backend](https://github.com/migasfree/migasfree-backend)) a disposición de quien la quiera usar. Una API mucho más amplia y basada en [REST](http://es.wikipedia.org/wiki/Representational_State_Transfer). Otro cambio, también significativo, es la nueva escalabilidad que se va a conseguir al usar un conjunto de tecnologías: [Celery](http://www.celeryproject.org/), [Redis](https://redis.io/), [Circus](http://circus.readthedocs.org/), [Chaussette](https://chaussette.readthedocs.org/), [Nginx](http://wiki.nginx.org/), [HAProxy](http://www.haproxy.org/)…

::: center
![Escalabilidad de migasfree](/img/scaling_migasfree.png 'Escalabilidad de migasfree')
:::

El trabajo dista mucho de estar acabado, pero tenemos claro que esta es la dirección sobre la que tenemos que seguir avanzando. Tampoco sabemos qué pasará cuando tengamos una versión funcional y se quiera implantar sobre un migasfree actual. Será algo que nos plantearemos en su momento. El protocolo entre cliente y servidor ha cambiado sustancialmente y, aunque es trivial cambiar los clientes, habrá que pensar muy bien cómo actualizar el servidor.

Cuando hayamos encauzado todos estos cambios, migasfree habrá ascendido de categoría y estará en condiciones de ser usado en organizaciones muy grandes (con más de 10 mil equipos). Además, dará la libertad de programar clientes para cualquier plataforma imaginable y frontends en cualquier tecnología que se quiera. Tan solo tendrán que seguir la API proporcionada por **migasfree-backend** y añadir algún nuevo <acronym title="Package Management System">PMS</acronym> si fuera necesario.
