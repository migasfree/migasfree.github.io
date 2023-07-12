---
title: ¿Por qué no usáis Puppet?
date: 2022-05-21 13:51:00
author: agacias
comment: false
category:
  - Teoría
---

::: center
![Estibadores en el puerto de Barcelona](https://mundet3elmar.files.wordpress.com/2010/03/estibadores-archivo-hist.jpg 'Estibadores en el puerto de Barcelona')
:::

Es la pregunta recurrente que me suelen hacer cuando alguien se acerca a migasfree por primera, segunda, o tercera vez. Lo entiendo, pero después de 12 años intentando explicarlo de distintas maneras veo que apenas lo consigo, y cada vez me ilusiona menos responderla.

<!-- more -->

Es primer fin de semana después de la «migascon 2022» y quiero reintentar explicarlo basándome en algo que dije allí, escribiéndolo aquí de manera ordenada y pausada porque la improvisación no es mi fuerte. Sin duda creo que me saldrá algo mejor. Si estuviste en la migascon sabrás a lo que me refiero 😉

De Ángel Lafuente, un alumno en prácticas que conocí hace 8 años, aprendí la revolución que supuso el uso del [contenedor normalizado](https://www.elmundo.es/economia/2016/05/06/5720fa2be2704e157f8b457d.html) en el transporte de mercancías.

Como un crío pequeño, me quedé fascinado con su explicación (su pasión por la logística a la hora de explicármelo algo contribuiría, sin duda).

Comprendí la sencillez de esa nueva idea, era tan tan tan evidente…

El simple hecho de meter las mercancias en una gran «caja» normalizada transformó todo. Desde el trabajo de los estibadores hasta el diseño de los camiones, barcos, almacenes y grúas de los puertos marítimos. ¡Qué importante puede llegar a ser una simple medida!.

Si tienes que llevar miles de televisores desde Qingdao (China) a Valladolid (España), no hay discusión, la manera óptima de hacerlo es meterlos en contenedores. No hay discusión. Estoy convencido que aparecerán _nuevas ideas disruptivas_, sí, pero no me vengas con que tu cuñado tiene una empresa internacional de repartidores «autónomos» con furgonetas eléctricas que lo haría mucho mejor, más rápido, más ecológico, a menor coste y todo ello sin usar contenedores.

Ahora imagina que las mercancías son ficheros, el contenedor el paquete deb, los almacenes del puerto los repositorios, apt los barcos y camiones, dpkg el repartidor que llega hasta tu casa.

¿Aún sigues por aquí?

El Modelo OSI de ISO, la misma revolución. Separar en capas, empaquetar y desempaquetar la
información en cada capa. Tambien sin discusión. Lo usas todos los días a todas horas sin reparar siquiera en ello, ¿lo ves? ha hecho su magia otra vez para que puedas leer este post.

El Sistema de Gestión de Paquetería de las Distros GNU/Linux (apt, yum, zypper, dnf, pacman… ). Más de lo mismo, lo transformó todo. Una simple medida, meterlo todo en una simple «caja normalizada»: **el paquete**.

Tampoco discutiré contigo esto, pero para mí (y también para las distribuciones GNU/Linux), la mejor manera de copiar todos los ficheros que componen el navegador Firefox hasta el ordenador de tu casa es hacer uso del Sistema de Gestión de Paquetes que incorpora tu S.O. ya que te va a propocionar **integridad**, es decir, control y auditoría de los cambios.

¿Hola, me sigues escuchando?

Tú me dices que usas Puppet, que es muy fácil modificar un fichero de configuración en miles
de ordenadores -aunque eso ya lo sé- e insistes: «Ya, pero ¿por qué no usas Puppet? Si es muy fácil.»

Otra vez la misma pregunta. Ya no sé qué más responderte. Me evado imaginando estibadores descargando manualmente sacos y cajas en el puerto de mi Cartagena natal a comienzos del siglo XX; pensando en mi [mar menor](https://www.youtube.com/watch?v=DyHyMFORUE4) y en los cangrejos que pescaba de pequeño a los que llamábamos «crancas pelúas», en mi abuelo materno que solo conozco por fotos e historias que me han contado mi madre y mis tías, él era patrón de un barco de pesca. Sigo imaginando los barcos gigantes que estarán surcando ahora mismo aguas de azules intensos para que tú puedas disfrutar de los bienes que se fabrican a miles de kilómetros, como el smartphone en el que probablemente me estarás leyendo, en grúas amarillas, camiones, mercancías, en Ángel Lafuente… y de repente se me cruza por la mente una idea y al fin te respondo:

¡¡¡¡¡ DPKG -S !!!!!

```
dpkg -S /etc/pam.conf
libpam-runtime: /etc/pam.conf
```

¡Mira, el fichero de configuración `/etc/pam.conf` de tu máquina te ha llegado gracias al paquete libpam-runtime! ¿No ves que Canonical te está configurando los módulos PAM en tu equipo mediante ese fichero y no usa Puppet para ello? Usa el Sistema de Gestión de Paquetes para configurar millones de ordenadores _around the world_: ¡El invento del siglo!

Ya, pero… ¿Por qué no usas Puppet?
