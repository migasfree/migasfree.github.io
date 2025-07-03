---
title: migasfree en la Gestión de la Configuración
author: jact, alberto
date: 2012-01-12 10:00:00
timeline: false
description: Analiza la importancia de gestionar los cambios de software para garantizar la integridad del sistema, lo que es esencial para que las organizaciones mantengan sistemas estables. Los beneficios de este enfoque son la reducción de los costes de desarrollo y mantenimiento, el aumento de la estabilidad del sistema y la mejora de las prácticas de gestión de cambios.
---

## Presentación

Charla preparada para la Conferencia Internacional de Software Libre, celebrada en enero de 2012 en Granada.

Soy Jose Antonio Chavarría y trabajo en el Servicio de Redes y Sistemas del Ayuntamiento de Zaragoza, desarrollando y manteniendo `AZLinux`, el escritorio libre que usamos, a día de hoy, unos 600 trabajadores municipales.

Vamos a ver el método que empleamos en `AZLinux` para personalizar nuestros escritorios.

## Introducción

En primer lugar, vamos a repasar algunos conceptos básicos sobre la Gestión de la Configuración Software (en adelante GCS).

Esto permitirá establecer la base desde la que poder tratar las dificultades que vas a encontrarte a la hora de personalizar los escritorios GNU/Linux de tu organización, y de cómo puedes superarlas.

Finalmente veremos `migasfree`, la herramienta que ha sido clave en la evolución de `AZLinux`.

## La permanencia del cambio

Un hombre no puede bañarse dos veces en el mismo río, porque el segundo día el río ya no es el mismo, y ni siquiera ese hombre es el mismo.

## El cambio es deseable e inevitable

Dejando aparte la filosofía y centrándonos sólo en el mundo del software podemos decir que __el cambio es inevitable y además es deseable__.

Inevitable porque los desarrolladores no podemos evitar cometer errores y es mediante la modificación, o cambio en el software, que estos errores son corregidos. Son los llamados __cambios correctivos__.

Por otro lado el cambio es deseable ya que a menudo queremos incorporar nuevas funcionalidades al software o mejorar aquellas que ya existían. Mediante los __cambios evolutivos__ es como mejoramos el software.

Estos cambios se producen desde que concebimos, construimos y también mientras mantenemos un proyecto software, es decir, durante todo su ciclo de vida.

## La importancia del control

El gran reto de los proyectos software reside precisamente en gestionar, de forma controlada, dichos cambios usando alguna estrategia que favorezca y facilite el cambio.

De esto trata precisamente la __GCS__, un proceso de la Ingeniería del Software que identifica, hace seguimiento y controla cada uno de los cambios que se producen en los sistemas.

## Conservación de la integridad

El objetivo de la Gestión de la Configuración es conservar la __integridad__ de los sistemas frente a los cambios.

Un sistema será íntegro frente al cambio si:

* mantiene correctamente las __relaciones__ entre los distintos cambios a medida que se van produciendo (el típico problema de dependencias entre elementos),
* y además permite la __auditoría__ de cambios (conocimiento del estado de un sistema al que se le han ido aplicando cambios sucesivamente).

## Proceso Gestión de Configuración Software

El proceso de la GCS es un conjunto de actividades que nos permitirá garantizar dicha integridad, y que podemos resumir en: __petición__ de cambio, __cambio__ y __liberación__.

__Petición de cambio__: Cuando se nos reporta un error o una petición de mejora, lo primero que hacemos es identificar el elemento de configuración software (ECS) al que se refiere.

Un ECS es cualquier objeto software sometido a la GCS. Puede ser un manual de usuario, una especificación, un conjunto de datos para realizar pruebas, una aplicación, una librería, incluso las herramientas que se usan para realizar los cambios, etc.

Una vez identificado el ECS se registra la petición de cambio. Las herramientas típicas para registrar y hacer el seguimiento del cambio son los llamados gestores de proyectos (Redmine, Bugzilla, Tracker, etc.).

Cada __petición de cambio__ es analizada más tarde pudiendo ser aceptada o rechazada. Si es rechazada se avisa al informador y se cierra la petición; si es aceptada se asigna la petición a alguien para que realice dicho cambio.

El __cambio__ es la actividad que modifica el ECS, generando una nueva versión del ECS. En esta actividad se utilizan un conjunto muy diverso de herramientas, desde procesadores y editores de texto, sistemas de control de versiones, entornos de desarrollo integrados (IDE), depuradores, compiladores...

La __liberación__ es la actividad de situar la nueva versión del ECS generada, en un repositorio o almacén para que posteriormente los clientes del ECS puedan acceder a él e instalarlo.

## GCS en proyectos de software libre

Si observamos como en el mundo del software libre los distintos proyectos (Gnome, KDE, LibreOffice, Mozilla Firefox, Gimp, migasfree, etc.) realizan la __GCS__, vemos que realizan las actividades mencionadas liberando finalmente el código fuente del proyecto en internet, pero podemos observar cómo trabajan con distintos tipos de __ECS__ (.png, .txt, .py, .c, .bin, etc.) usando los Sistemas de Control de Versiones que les proporcionan las denominadas forjas de proyectos (plataformas de desarrollo colaborativo como sourceforge.net, github.com, etc.).

Este código fuente será posteriormente compilado por los mantenedores de las Distribuciones GNU/Linux (Fedora, Red Hat, Debian, Ubuntu, etc.) realizando su propia GCS, pero a diferencia de los primeros, las Distribuciones GNU/Linux sólo trabajan sobre un único tipo de ECS: __el paquete__, donde introducirán el programa ya compilado.

Este simple hecho permite garantizar la integridad frente a los cambios de forma eficaz y sencilla como veremos a continuación.

## El paquete como contenedor

Un __paquete__ es un contenedor que encapsula un __ECS__ liberado por un determinado proyecto, más su metainformación.

Contendrá, por tanto, el programa compilado para una determinada Distribución y arquitectura, más un conjunto amplio de información como puede ser: el autor del programa, la dirección del repositorio del proyecto, la versión del ECS, arquitectura, nombre del empaquetador, fecha de empaquetado, nombre del equipo en que se produjo el empaquetado, una descripción corta del contenido del paquete, una descripción larga, ...

Pero, además, suelen incluir:

1. __Código__ a ejecutar antes y después de instalar, actualizar o eliminar el paquete.

2. __Dependencias__ con otros paquetes.

Una vez que la Distribución GNU/Linux ha compilado y creado el paquete, lo __libera__ poniéndolo en un __repositorio__ público o almacén, a disposición de los clientes.

## Actualización de software en Linux

¿Y cómo se actualizan los paquetes en los distintos escritorios GNU/Linux?

Los encargados de aplicar los cambios son los llamados __gestores de paquetes__. Un gestor de paquetes es un programa que compara los paquetes instalados con los paquetes de los repositorios configurados, detectando los que han sido modificados (han aumentado su versión), resolviendo sus dependencias y finalmente, si no hay conflictos, obtienen desde los repositorios sólo los paquetes necesarios. Ejemplos de gestores de paquetes son `yum`, `zypper` o `apt`.

Una vez han descargado los paquetes, dan órdenes a los _backends_ (`rpm`, `dpkg`, etc.) para que se produzca la actualización. Los _backends_ abren el paquete, y grosso modo:

1. Extraen los ficheros del programa copiándolos en el sistema, y ejecutando además el código programado para antes y después de la actualización.

2. La metainformación es extraída del paquete y se almacena en la base de datos del backend.

Decía Ian Murdock, fundador de Debian, que el gran aporte del software libre a la industria ha sido precisamente la invención del sistema de paquetería (paquete, repositorio, gestor de paquetes). Y no es para menos, ya que este sistema nos proporciona los dos requisitos necesarios que veíamos anteriormente y que garantizarán la integridad frente a los cambios, es decir:

1. El control de __dependencias__, mediante el gestor de paquetes.

2. La __auditoría__, mediante las consultas a la base de datos a través del _backend_.

Si estás acostumbrado a instalar programas mediante el típico `./configure`, `make`, `install`, tienes que hacerte consciente que estás rompiendo la integridad frente a los cambios cuando lo haces, ya que la base de datos del backend no es actualizada con este procedimiento (en la auditoría no saldrá reflejada este programa y además es posible que una actualización posterior del sistema podría hacer que tu programa dejase de funcionar). Tenlo en cuenta.

Recuerda esto: __Todo lo que no sea instalar programas mediante el gestor de paquetes o el _backend_, rompe la integridad frente a los cambios de tu sistema__.

## Administrando equipos

Hasta ahora, hemos hablado de la __GCS__ en general, y de cómo las Distribuciones GNU/linux en particular utilizan el sistema de paquetería para __garantizar la integridad__ frente al cambio.

Esto está muy bien si tienes un equipo doméstico, ya que con el simple hecho de dar la orden al gestor de paquetes para que actualice tu sistema, todos los cambios producidos por los distintos proyectos que forman parte de tu Distribución GNU/Linux serán actualizados correctamente.

Pero en una organización, la primera dificultad importante a la que se va a enfrentar un administrador, va a ser la de la __personalización__.

## Personalización inicial y evolutiva

Imagina que tienes que migrar 1000 equipos a GNU/Linux. Imagina también que tienes en tu red un servicio NTP y se requiere que todos tus escritorios estén sincronizados con este servicio. Vas a tener que personalizar el cliente NTP en todos tus escritorios. Una solución sería partir de una instalación desde el DVD de la Distribución que hayas elegido, editar el fichero de configuración del cliente NTP y configurar la IP del servidor donde se encuentra el servicio NTP. Después puedes crear una imagen del disco duro con Clonezilla y migrar uno a uno los 1000 equipos usando dicha imagen. Una personalización inicial usando este método es sencilla de realizar y puede ser muy útil. Pero sigamos imaginando. Un día, a mitad de migración, recibes una petición como esta:

> A partir del día 10, NTP va a dejar de dar servicio y en su lugar vamos a poner un nuevo servicio llamado "QueHoraEs" que es mucho mejor porque...

En este momento piensas en los 400 equipos que tienes ya migrados y te echas las manos a la cabeza, pensando qué vas a hacer para actualizarlos.

Recuerda esto: __La personalización inicial es muy sencilla de realizar pero la personalización puede darse en cualquier momento, y tienes que estar preparado para poder realizarla.__

Afortunadamente, existen unas herramientas denominadas __Gestores de Sistemas__ (Systems Management Systems) que pueden sacarnos del apuro. Algunos de estos Gestores de Sistemas se centran en la adquisición del inventario hardware (como OCSInventory), otros sobre la adquisición del estado de los equipos (como Nagios), y otros permiten automatizar tareas mediante la ejecución de código en los equipos de manera centralizada (Zenworks for linux, Landscape, chef, puppet, cfengine, etc.).

## Gestores de sistemas

Veamos un ejemplo de funcionamiento típico de un __Gestor de Sistemas__. Mediante un lenguaje propio de tipo declarativo se escribe un código que especifica a qué estado se quiere llevar a los equipos, no cómo llegar a ese estado, en nuestro caso sería algo parecido a esto:

* asegúrate que el paquete `ntp-client` está desinstalado

* asegúrate que el paquete `quehoraes-client` está instalado

* asegúrate que el fichero de configuración de `quehoraes-client` es el mismo que el que está en el servidor.

Periódicamente, los clientes se conectarán al servidor para obtener este código que será ejecutado mediante el __intérprete propio__ del Gestor de Sistemas instalado en el cliente.

Este sistema permite automatizar aquellas tareas que realizan a menudo los administradores de sistemas, y aunque algunos Gestores de Sistemas se las ingenian para llevar un control de versiones y de dependencias, mantienen una base de datos independiente de la de los _backends_ de los gestores. ¿Tengo alguna manera de saber qué cambios (de aplicaciones y de personalizaciones) se han producido en el sistema? Realizan muy bien su tarea, es cierto, pero también es cierto que la integridad frente a los cambios queda en entredicho.

## Empaquetar la personalización

En AZLinux usamos otro método: __Empaquetamos siempre la personalización.__

Para el caso del cliente "QueHoraEs", escribiríamos en nuestro lenguaje favorito (`bash`, `python`, `perl`, `ruby`...) un código similar a este:

```txt
# Código a ejecutar después de la instalación:
En el fichero de configuración del cliente QueHoraes, modificar el valor de la entrada “server=” por la IP del servidor QueHoraEs
```

y crearíamos un paquete con la siguiente metainformación:

* Dependencias: `quehoraes-client`
* Obsoletos: `ntp-client`

¡Listo! Con esto queda garantizada la integridad frente al cambio ya que hacemos uso del sistema de paquetería de nuestra Distribución.

Date cuenta que no es necesario ningún Gestor de Sistemas para instalar dicha personalización. Sólo necesitas el __Gestor de Paquetes__, y éste siempre lo tienes disponible.

## Liberaciones en una organización

El segundo problema con el que vas a tener que lidiar es el de la __liberación__.

Por un lado, debes __independizarte__ de los repositorios públicos de tu Distribución GNU/Linux, por el simple motivo que no puedes permitir que el control de los cambios que se instalarán en tus máquinas lo tenga tu Distribución GNU/Linux en vez de tu organización. ¿Imaginas que habría pasado en AZLinux cuando OpenSuSE sustituyó OpenOffice por LibreOffice? Cuando los usuarios hubieran encendido las máquinas a las 8:00 de la mañana, se iniciaría la actualización a LibreOffice automáticamente, pudiéndose producir muchas incidencias, ¿funcionaría todo? ¿No es mejor probar LibreOffice antes de liberarlo a los usuarios?

Tienes que poder decidir por ti mismo el software que deben tener tus usuarios y por tanto debes tener los gestores de paquetes configurados a tus propios repositorios de paquetes y gestionarlos de alguna manera.

Además, es necesario tener la posibilidad de poder __planificar__ a quién y cuándo liberar los cambios. Imagina nuevamente el ejemplo de la sustitución de OpenOffice por LibreOffice, estaríamos hablando de una actualización de cerca de 500 MB por equipo que multiplicado por 600 equipos a la vez... es evidente que es mucho tráfico de red.

Además, otra ventaja de planificar la liberación es que permite distribuir poco a poco los cambios, de tal manera, que si hay errores afectará inicialmente a muy pocos equipos permitiendo actuar de manera más relajada para corregir cualquier incidencia.

## Repositorio migasfree

Por todo esto, y como los repositorios estándar de las Distribuciones no tienen ningún mecanismo de planificación de la liberación, es por lo que decidimos desarrollar __migasfree__, extendiendo el concepto de repositorio de paquetes al concepto de __repositorio de paquetes planificable__.

Un repositorio de migasfree es simplemente un repositorio estándar más la capacidad de poder especificar cuándo y quién puede acceder a ese repositorio.

## Funcionamiento de migasfree

Veamos el funcionamiento de migasfree:

1. __Los cambios son empaquetados y subidos al servidor migasfree.__

2. Se crea un __Repositorio Lógico__ con los paquetes subidos y se establece a quién (atributos de usuario+equipo), y en qué momento se deben aplicar dichos cambios. Esto no es más que un registro en la tabla de Repositorios de la base de datos de migasfree.

3. El servidor migasfree crea un __Repositorio Físico__ (idéntico al de cualquier Distribución GNU/Linux) con dichos paquetes, utilizando las herramientas estándar de creación de repositorios (`createrepo` para paquetería RPM o `dpkg-scanpackages` para paquetería Debian).

4. Cuando un cliente se conecta al servidor le pasa sus atributos.

5. El servidor __consulta los Registros Lógicos__ para determinar, en función de los atributos pasados, la lista de los __Repositorios Físicos__ que tiene el cliente a su disposición y se los pasa al cliente.

6. El cliente __configura, en el Gestor de Paquetes__, los Repositorios Físicos.

7. El cliente da __instrucciones al Gestor de Paquetes__ para que se produzca la instalación,
actualización y eliminación de los paquetes desde los Repositorios Físicos.

## GCS en una organización

Hemos hablado anteriormente del proceso de la __GCS__ en los distintos proyectos de software libre y también del de las Distribuciones GNU/Linux. Pues bien, en una organización también debe realizarse el proceso de la GCS.

En AZLinux realizamos nuestra propia GCS y vemos cómo se repiten nuevamente las mismas actividades: petición de cambio, cambio y liberación.

Usamos dos tipos de peticiones de cambio:

1. __Actualización de aplicaciones__. Si recibimos una petición para actualizar, por ejemplo, Mozilla Firefox, descargamos desde los repositorios de la Distribución la versión deseada, la probamos en laboratorio, registrando cualquier información relevante en la petición de cambio. Finalmente, cuando todo está correcto, se liberan los paquetes a través de un repositorio migasfree, planificando su distribución.

2. __Personalización de aplicaciones__. Se produce cuando llega, por ejemplo, una petición de cambio para añadir un motor de búsqueda de sinónimos a Mozilla Firefox. Introducimos entonces, en un paquete propio de AZLinux (`azl-firefox`), el código que instala dicho motor de búsqueda y liberamos el paquete también en un repositorio de migasfree planificando la distribución del cambio.

Las herramientas que usamos en cada actividad son:

- __Petición__ de cambio: __Redmine__.
- __Cambio__: Únicamente un editor de textos, como __Geany__.
- __Liberación__: __Migasfree__.

## Beneficios de la GCS

Y llegados a este punto, puedes estar pensando: Entiendo que el objetivo de la GCS es __garantizar la integridad__ frente a los cambios y su importancia, y como el sistema de paquetería me facilita enormemente alcanzar dicho objetivo pero, ¿qué beneficios concretos me aporta aplicar todo esto en mi empresa?

Los beneficios que obtendrás son los que proporciona la propia GCS y, por tanto, tu empresa:

1. Reducirá el coste de los servicios de desarrollo y mantenimiento.
2. Optimizará el uso de los recursos.

Y para ti, como administrador:

1. Tendrás equipos más estables.
2. Vas a pasar de ser un administrador que se echa las manos a la cabeza ante cualquier cambio a ser un __administrador favorecedor del cambio__, ya que tienes las herramientas apropiadas para hacer el seguimiento y control de los cambios.
3. Y, en última instancia, vas a mejorar sustancialmente la resolución de incidencias.

## Contacto

Si estás interesado en hacer una GCS simple y eficaz, accede a la dirección del proyecto de [migasfree](https://migasfree.org).

Puedes también contactar con nosotros a través de Twitter.
