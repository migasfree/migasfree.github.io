---
title: La conjetura de la redefinición
date: 2018-03-09 13:13:00
author: jact
comment: false
category:
  - Desarrollo
  - Noticia
---

Seguimos hacia la convergencia que nos llevará (más pronto o más tarde) hacia la [esperada versión 5 de la suite migasfree](/blog/2016/2016-05-25-el-plan-maestro).

<!-- more -->

Anunciamos en la presente entrada 2 nuevas versiones de migasfree: la [4.14](https://github.com/migasfree/migasfree/releases/tag/4.14) y la [4.15](https://github.com/migasfree/migasfree/releases/tag/4.15).

## Cambios de la versión 4.14

La versión 4.14 introduce un cambio importante a la hora de instalar el servidor. Ya no distribuimos más paquetes, sino que ahora es un [contenedor docker](https://github.com/migasfree/migasfree-docker). Con _docker_ hemos conseguido colocar el servidor y sus dependencias en un contenedor virtual (un debian) que puede ejecutarse en cualquier servidor GNU/Linux. Esto nos ha proporcionado una flexibilidad y portabilidad para ejecutar el servidor de una forma muy simple tanto en un equipo físico [como en la nube](/blog/2017/2017-03-23-servidor-en-2-minutos).

Esta versión también contiene cambios de denominación de conceptos, [tal y como adelantábamos hace un tiempo](/blog/2015/2015-04-10-nullius-in-verba).

- **Actualización** pasa a ser **sincronización**. La idea de sincronización es mucho más concreta ya que refleja el conjunto de operaciones que realizan cliente y servidor para dejar en condiciones adecuadas el puesto de trabajo.
- **Versión** pasa a denominarse **proyecto**. Por proyecto se entiende una distribución base (como Fedora 21 o Ubuntu 16.04) más una capa de personalización para una organización concreta.
- **Repositorio** se convierte en **despliegue**. Se despliegan cambios de software a equipos según unos atributos y un calendario. Es algo más que un repositorio clásico de software.

Además, agregamos una nueva funcionalidad: el cuadro de mando. De esta manera se tiene un punto de resumen o de partida a la hora de consultar bastantes datos importantes que va recogiendo el servidor de los clientes.

::: center
![Cuadro de mando de migasfree](/img/dashboard.png 'Cuadro de mando de migasfree')
:::

## Cambios de la versión 4.15

Esta versión incorpora cambios menores respecto a la anterior, pero igualmente interesantes:

- Se añaden nuevas comprobaciones, en forma de alertas, para gestionar de manera más eficiente los despliegues. De esta forma, tendremos una comprobación que nos informará de los despliegues que tienen un calendario activo, y otra que nos avisará de los que ya han finalizado el calendario de distribución.
- Gracias a [Rafael Rodríguez Gayoso](https://twitter.com/rrgaioso), se incorpora la traducción al gallego en el servidor.
- Se han rediseñado varias páginas para conseguir una mejor experiencia de usuario:
  - Página de detalle de ordenador.
  - Detalle del hardware de un ordenador.
  - Página de detalle de despliegue.

::: center
![Página de detalle de ordenador](/img/computer_detail.png 'Página de detalle de ordenador')
:::

Seguid atentos al [desarrollo de migasfree](https://github.com/migasfree/), porque los cambios van a ser constantes.
