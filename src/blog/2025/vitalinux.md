---
title: Vitalinux y su magia
date: 2025-03-27 21:20:00
author: agacias
comment: false
category:
  - Noticia
---

Mientras reescribía "Fun with Migasfree" para la versión 5, sentí la necesidad de incluir un ejemplo práctico y sencillo que demostrara cómo funciona el proceso de Gestión de Configuración de Software (SCM) al integrar Migasfree. Aunque el paso de la teoría a la práctica puede parecer desafiante, observar un ejemplo concreto y equilibrado ayuda, y es aquí donde los conceptos complejos se vuelven accesibles y fáciles de aplicar.

<!-- more -->

A los días de tenerlo escrito, mi hijo me sorprendió con un:

-- Papá, me gustaría regalarte una animación para migasfree.

-- Muchas gracias, Jesús, me hace mucha ilusión. Pensaré en ello.

En ese momento no tenía ni idea sobre qué podría tratar mi regalo.

Al día siguiente me decidí. Quería una animación del ejemplo de [Vitalinux](https://docs.vitalinux.educa.aragon.es/) que elegí para "Fun with Migasfree v5". Era perfecto: daba para cierre de un capítulo de libro, una entrada en este blog e incluso para una animación.

Vitalinux es la distribución Linux de la Diputación General de Aragón diseñada especialmente para el ámbito educativo.

Una de las características que diferencia a Vitalinux de otras distribuciones es que lleva instalado un cliente migasfree, permitiendo gestionar de forma remota, automatizada y desatendida el software de los equipos.

Lo que más me sorprende de Vitalinux es cómo, con solo dos técnicos al mando, logran gestionar alrededor de 10.000 equipos. Por supuesto, esto no sería posible sin el apoyo de los coordinadores Vitalinux de cada centro. Esta colaboración me parece un auténtico ejemplo de eficiencia y organización. ¡Chapeau!

Te invito a ver cómo quedó la animación, y después, te comentaré algunos detalles:

::: center
<LiteYoutubeEmbed id="kuCle7s2IGw" title="Migasfree es como, ¿mermelada?" />
:::

Gestionar la personalización de 145 [centros educativos](https://docs.vitalinux.educa.aragon.es/info/MapaCentros.html), cada uno con solicitudes individuales, es un desafío impresionante. No se trata sólo de cambiar los fondos de pantalla de cada colegio, sino de hacerlo de manera automatizada y dentro de rangos de fechas predefinidos, ¡a solicitud de cada centro! ¿Qué clase de bendita locura es esta? Sin duda, es una auténtica locura, pero maravillosamente bien organizada.

Aunque cambiar un fondo de pantalla pueda no parecer un caso de uso técnicamente complejo, es un excelente ejemplo de cómo gestionan sus tareas con eficacia.

Este caso en particular es perfecto para ilustrar su magia.

Dado que su trabajo se basa en tecnologías abiertas y está accesible al público, voy a explicarte cómo llevan a cabo la Gestión de Cambios de Software. Para ello, te muestro un caso sencillo.

![Petición de cambio](/img/vitalinux-support.png 'Petición de cambio')

En la imagen, puedes ver una **solicitud de cambio** en [Redmine](https://www.redmine.org/), el sistema de gestión de proyectos de Vitalinux. Esta petición fue enviada al [soporte de Vitalinux](https://soporte.vitalinux.educa.aragon.es/projects/vitallinux-dga-soporte) y resuelta mediante el proceso de Integración Continua y Despliegue Continuo (CI/CD). El caso en particular consiste en un cambio de fondo de pantalla para todos los ordenadores del [Colegio de Educación Infantil y Primaria Tenerías](https://www.colegiotenerias.com/) de Zaragoza, que debía mostrarse sólo entre el 24 y el 29 de noviembre.

A continuación, te explico cómo se llevó a cabo el proceso:

1. La solicitud fue realizada por Daniel el 19/11/2024, quien pidió que el fondo de pantalla del colegio se modificara, adjuntando imagen y el rango de fechas.

2. Arturo realizó el [cambio](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/commit/3b16cec8e46a1fa0e54d4a4a57fdeb85c5451e26) en el paquete [vx-dga-l-conf-centro-ceiptenerias](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias) el 20/11/2024 a las 13:00:06.

3. Inmediatamente después [etiquetó](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/tags) este cambio de configuración incrementando la versión `1.0-18` en el paquete. Al etiquetar, tal y como está programada la CI/CD para este paquete en el fichero [.gitlab-ci.yml](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/blob/master/.gitlab-ci.yml), se lanzaron los diferentes trabajos automatizados.

4. El [proceso de CI/CD](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/pipelines/3729) de Vitalinux automáticamente [construyó](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/jobs/12211) la nueva versión del paquete tanto para Vitalinux 18 como para Vitalinux 3x en la etapa "Build" del _pipeline_ de la CI/CD.

5. Estos paquetes fueron [subidos](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/jobs/12213) automáticamente al servidor migasfree en la etapa "Upload" y [liberados](https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/jobs/12215) en el despliegue Migasfree `repo-ceip-tenerias-zaragoza` en la etapa "Deployment", todo ello para las dos versiones de Vitalinux mencionadas. Toda la CI/CD se realizó en 53 segundos.

6. A partir de este momento, los equipos del colegio actualizarían su configuración de fondo de pantalla cuando los usuarios iniciaron sesión, sin necesidad de intervención manual alguna.

7. Así, entre 24 al 29 de noviembre, apareció automáticamente el fondo de pantalla solicitado en todos los ordenadores del colegio Tenerías.

Es importante destacar que Arturo se centró **exclusivamente** en la tarea técnica de modificar los archivos necesarios del paquete. Luego, simplemente etiquetó la versión del paquete incrementándola y finalmente registró su acción en la solicitud de cambio. El resto del proceso fue completamente automatizado gracias a la CI/CD de Vitalinux y a Migasfree. Así, con un mínimo esfuerzo, este cambio se implementó de forma rápida, eficiente y sin errores.

Aunque tengo una relación estrecha con Arturo y Nacho, los técnicos de Vitalinux, y compartimos ideas y conocimientos periódicamente, debo aclarar que toda esta información la he obtenido accediendo a su gestor de proyectos público. ¿Te has dado cuenta que sin ser ni tú ni yo parte de Vitalinux ni conocer a priori como trabajan, hemos podido seguir todo lo que hicieron? Este ejemplo demuestra cómo las herramientas de la **SCM** pueden hacer que tareas complejas y repetitivas se realicen de manera controlada, rastreable, auditable y eficaz.

Vitalinux siempre está mejorándose y renovándose. No me extrañaría ver a los colegios de Aragón autogestionando su propia configuración con algo que inventen. Sólo necesitarían un poco de tiempo y algo más de recursos. Con esto último o sin ello, apuesto a que nos dejarán de nuevo boquiabiertos, ¡al tiempo! Nosotros estaremos con ellos, apoyándoles en lo que humildemente podamos.

Si quieres explorar más sobre los paquetes de Vitalinux, te invito a [explorar](https://gitlab.vitalinux.educa.aragon.es/explore). Ya te aviso, lo de los fondos de escritorios es sólo una gotita comparado con el resto de cosas que hacen.

Enhorabuena [Gobierno de Aragón](https://www.aragon.es/). Aprovecho el momento para recordarte lo de los recursos, que cada año son más los colegios Vitalinux en Aragón y esto no para ;-)

Felicidades Arturo, felicidades Nacho. Se os quiere.

Pero sobre todo, felicidades y "sorpresas" a toda la comunidad Vitalinux.

¡Espera, espera! Para un musical este ejemplo no da, pero, ¿y para una canción?

::: center
<LiteYoutubeEmbed id="r6ROllPVs3M" title="La magia de Migasfree" />
:::
