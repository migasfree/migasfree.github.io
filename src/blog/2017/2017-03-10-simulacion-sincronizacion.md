---
title: La simulación de la sincronización
date: 2017-03-10 19:00:00
author: jact
comment: false
category:
  - Desarrollo
  - Noticia
---

Más bien parece el [título de otro capítulo de The Big Bang Theory](https://es.wikipedia.org/wiki/Anexo:Episodios_de_The_Big_Bang_Theory), pero en realidad es una nueva funcionalidad de la [versión 4.13 del servidor migasfree](https://github.com/migasfree/migasfree/releases/tag/4.13).

<!-- more -->

::: center
![Página de inicio de la versión 4.13](/img/migasfree_homepage.png 'Página de inicio de la versión 4.13')
:::

En total, [5 meses de trabajo y 23 incidencias resueltas](https://github.com/migasfree/migasfree/milestone/8?closed=1), comprenden esta nueva versión del servidor. Versión que se caracteriza por traer más características inéditas que correcciones de bugs. Entre ellas, destacaría:

- **Página de inicio de la aplicación**, explicando qué se puede esperar de esta solución y con enlaces relacionados a este _blog_, a la [documentación del proyecto](http://fun-with-migasfree.readthedocs.io/), al [código fuente](https://github.com/migasfree/migasfree/) y a la [licencia usada](http://www.gnu.org/licenses/gpl.html).

- **Simulación de la sincronización de un equipo**. Además de servir de introducción a este artículo, consiste en, dados los datos que tiene en ese momento el servidor migasfree del equipo, se pueden ver qué paquetes se instalarían o desinstalarían, que repositorios serían visibles para ese ordenador, qué fallas ejecutaría, que dispositivos se le asignarían y si se tendrían que obtener información acerca del hardware.

- **Información de la situación actual en la ficha de ordenador**. Esta información agrupa datos del estado del equipo, último _login_ (fecha y usuario), última actualización (y cuánto duró) y si hay errores y fallas por comprobar.

- Se ha añadido **más información relacionada en los elementos clave de migasfree**: ordenadores, repositorios, versiones… con la idea de navegar más rápidamente entre los datos. Así, además, se han eliminado varias consultas, ya que ahora han quedado resueltas con estos nuevos enlaces.

- Ahora es posible **asignar dispositivos mediante atributos**, en lugar de ordenadores directamente. Pensamos que, de esta forma, se mejora la gestión de los mismos.

[Se avecinan nuevos y grandes cambios en el proyecto migasfree](/blog/2015/2015-04-10-nullius-in-verba)… por el momento, vamos puliendo la rama _Grape Edition_ con esta versión que ahora liberamos.
