---
title: El rompecabezas Vartabedian
date: 2023-03-27 17:32:00
author: jact
comment: false
category:
  - Desarrollo
  - Noticia
---

En la [migascon de mayo de 2022](/migascon-2022), hicimos la presentación oficiosa de lo que será la suite de migasfree versión 5.

<!-- more -->

Entre las charlas, había una que hablaba de la [remodelación de Migasfree Play](https://speakerdeck.com/jact/migasfree-play-5). Se cambiaban las tecnologías usadas para normalizarlo y poderlo extender más fácilmente, pero esa nueva versión sólo iba a funcionar con [Migasfree Client versión 5](https://speakerdeck.com/jact/migasfree-client-5). Eso ha cambiado y es posible usar Migasfree Play 5 con clientes a partir de la versión 4.20. Esa misma versión del cliente que también es capaz de ser funcional comunicándose con el nuevo servidor de la versión 5.

El siguiente gráfico resume cómo gestiona las comunicaciones el flamante Migasfree Play 5, que ya hemos liberado en [nuestro repositorio de código](https://github.com/migasfree/migasfree-play):

::: center
![Comunicaciones de migasfree play](/img/migasfree-play_comunicaciones.png 'Comunicaciones de migasfree play')
:::

La configuración de la aplicación se hace a través del fichero `/root/.migasfree-play/settings.json` y podéis ver los valores por defecto en [README.md](https://github.com/migasfree/migasfree-play#settings).

También es posible establecer algunas variables de entorno para evitar que haya colisión con otros puertos en el equipo o cambiar el usuario de migasfree que va a usar Migasfree Play. Los valores por defecto se pueden consultar en README.md.

Migasfree Play sale de serie traducido al español, inglés, catalán, euskera y gallego, aunque podéis corregir los textos mediante el envío de [ficheros .po](https://github.com/migasfree/migasfree-play/tree/master/src/i18n).

Los requisitos imprescindibles en el equipo son que estén instalados el cliente de migasfree (>= 4.20) y nodejs (>= 12).

Disfrutad de esta nueva versión renovada y, si hay errores, [reportadlos en las incidencias](https://github.com/migasfree/migasfree-play/issues). La versión 1 de la aplicación pasa a estar en un [repositorio de código de sólo lectura](https://github.com/migasfree/migasfree-play-nwjs).
