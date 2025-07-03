---
title: ¿Es migasfree para mí?
author: jact
date: 2015-05-05 10:00:00
timeline: false
description: Explica que migasfree administra paquetes de software para varios clientes, incluidos PCs y servidores, distribuyéndolos dinámicamente en función de atributos y un cronograma predefinido. Destaca que migasfree ofrece un sistema flexible y adaptable para organizaciones de todos los tamaños.
---

## Presentación

La siguiente presentación muestra en qué consiste la herramienta migasfree, para que cada entorno informatizado decida si es adecuada para su infraestructura.

## Qué es migasfree

¿Alguien ha oído hablar de migasfree?

¿Y sabe decir lo que es?

¿Qué es migasfree? Una herramienta de administración de ordenadores.

¿Cómo hace esta administración? Gestionando repositorios dinámicos de software. Distribuye este software a los equipos, dependiendo de características del ordenador (atributos) y del instante temporal (calendario).

Los clientes son todos aquellos sistemas que tengan un PMS (Sistema de Gestión de Paquetes) que asegure la integridad del sistema:

* PCs de escritorio
* servidores
* smartphones
* tablets

## Por qué usar migasfree

El 80% del tiempo del personal TIC se emplea en mantenimiento. Este consiste en actualizaciones de programas, parches de seguridad, auditorías (software y hardware) y cambios de configuración.

¿Por qué no usar otras herramientas de administración? Porque ninguna se basa directamente en la paquetería. Y la paquetería está demostrado que funciona porque diariamente se actualizan millones de equipos de esta forma (muchas de las distribuciones de Linux lo hacen así).

Además, migasfree proporciona una distribución controlada y personalizada para cada cliente (no todos tienen por qué tener lo mismo, pero necesito tenerlos todos controlados).

## Evolución en la administración

Distro actualizable (generalista):

* Administrada por el usuario.
* Configurada manualmente y por paquetes.
* Actualizada mediante repositorios públicos (oficiales y particulares).

Distro administrada (organización):

* Administrada remotamente por personal cualificado.
* Configurada por paquetes (permiten el seguimiento y el control de los cambios).
* Actualizada mediante un gestor de sistemas (como migasfree) con repositorios privados y controlados.

## Proceso Gestión de Configuración Software con migasfree

El ciclo petición/cambio/liberación: proceso GCS (Gestión de Configuración Software).

Como todo ciclo, nunca tiene fin... pero tiene como regla que cualquier cambio de configuración se empaqueta para su distribución (al igual que hacen las distros de Linux con los programas).

Alguien informa de una __petición__ (error/mejora/característica), otra persona elabora el __cambio__ empaquetado y, finalmente, migasfree __libera__ (distribuye) el paquete a los equipos que lo necesiten.

## Ámbitos de aplicación

¿Dónde se puede aplicar migasfree? Parece claro que donde haya muchos equipos que administrar ya que facilita las tareas de mantenimiento.

Empresa privada. Ya sea micro, PYME o una gran empresa.

Administración pública: áreas de negocio diferentes, grandes redes privadas, cada vez menos personal TIC... y el número de equipos aumenta.

Educación: el tema del mantenimiento tal vez no sea tan crítico como en los escenarios anteriores, pero la versatilidad que ofrece (instalación desatendida de aplicaciones, alertas sobre equipos), merece que tengamos en cuenta esta herramienta.

## Migasfree en el Ayuntamiento de Zaragoza

Veamos como migasfree se adapta a una determinada organización: el Ayuntamiento de Zaragoza.

A lo largo del tiempo han ido conviviendo diferentes proyectos y todos ellos (mientras haya un PMS que asegure la integridad) se han controlado con migasfree.

La personalización de un proyecto puede ser tan sencilla como añadir o quitar software que ya está disponible en la _distro_ base, y se puede complicar tanto como queramos creando paquetes propios que den solución específica a necesidades concretas.

Para cada uno de los proyectos hemos hecho una media de 75 paquetes diferentes personalizados (a esto hay que añadir las versiones de cada uno de ellos), para adaptar como un guante la plataforma de trabajo a las necesidades concretas de nuestros usuarios.

## Evolución de AZLinux

El proyecto de migración a Linux dentro del Ayuntamiento siempre ha ido sumando equipos, aunque ha habido épocas donde el crecimiento ha sido muy leve.

Sin embargo, eso nos ha dado tiempo para ir mejorando la plataforma base e ir cambiando de distribución.

Sin migasfree no habría sido posible tener tantos proyectos diferentes sin poderlos administrar con una única herramienta.

## Planes presentes y de futuro

Con la idea de abarcar gran cantidad de clientes (+ 10K por servidor), estamos replanteado la arquitectura de la solución migasfree.

Vamos a separar el servidor en componentes que puedan escalar horizontalmente (agregando más nodos) según la demanda de cada organización.

Para facilitar la comunicación y posibilitar el crecimiento de aplicaciones auxiliares (clientes para otras plataformas, interfaces de explotación de datos, integración con aplicaciones como sistemas de incidencias, ...), se está construyendo una API REST en el componente _backend_ de migasfree.

## Quién está usando migasfree

Y si todo esto tiene tan buena pinta... ¿por qué no hay millones de personas usando ya migasfree?

* ¿Porque no tenemos ni idea de hacer marketing?
* ¿Porque no estamos interesados en ganar dinero con esto (no nos da de comer)?
* ¿Porque hace falta leerse el manual para hacerlo funcionar?

En realidad es porque (creemos) lo de hacer paquetes... se ve mucho más complicado de lo que es (se cree que sólo es cosa de gurús y gente rara que vive en sótanos oscuros que se alimenta de coca-cola y pizza).

La verdadera complicación reside en conocer el funcionamiento del sistema. Lo de hacer paquetes es un proceso muy mecánico.

También porque otros sistemas (como Chef, Puppet) vienen con recetas predefinidas, mientras que migasfree es un folio en blanco. Aunque nosotros pensamos que esto es más una ventaja que un inconveniente, ya que deja control total a la organización sobre cómo quiere hacer las cosas.

## Qué diría Richard Stallman

Migasfree es software libre con licencia GPL, pero... ¿qué diría Richard Stallman, guardián y abanderado de la libertad del software, sobre una herramienta como esta?

## El gran dictador

Que somos demasiado controladores coartando la libertad y privacidad de las personas de la organización.

Pero... a veces... en un entorno que tiene que estar controlado... es mejor tener una  herramienta que facilite esta tarea ;)

## Conclusión

Y ahora, ¿alguien sabe decir lo que es migasfree?

```txt
Integridad + automatización = mejor mantenimiento
```

La integridad la pone el sistema de paquetería de nuestro sistema operativo.

La automatización la proporciona migasfree al facilitar y controlar la distribución de los cambios.

Así obtenemos una mejora sustancial en las tareas de mantenimiento en los equipos de nuestra organización.

## ¿Es migasfree para ti?

Después de todo lo que has visto, te toca a ti decidir si migasfree se adapta a tu ámbito.

En nuestro caso, migasfree se ha ido ajustando a los cambios que ha habido en nuestra organización. Si hay más gente que se anima a usarlo, seguro que se van añadiendo nuevas funcionalidades para que esta herramienta sea cada día más completa.

Necesitamos tu opinión para mejorar, sea la que sea.
