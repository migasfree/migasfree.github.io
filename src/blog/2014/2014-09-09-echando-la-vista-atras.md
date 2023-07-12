---
title: Echando la vista atrás
date: 2014-09-09 12:07:00
author: jact
comment: false
category:
  - Teoría
---

Ya han pasado más de 4 años desde que [Alberto Gacías](http://twitter.com/albertogacias) iniciara la andadura de [este proyecto en abierto](https://github.com/migasfree). El embrión que era por aquel entonces ha sufrido muchos y enormes cambios (aunque mantiene la esencia intacta) y ha evolucionado para convertirse en una potente herramienta administrativa para controlar la configuración software de los equipos de las organizaciones.

<!-- more -->

En un [artículo de agosto de 2010](https://web.archive.org/web/20210419155027/http://blackshell.usebox.net/archive/los-departamentos-tic-y-linux.html), se mencionaban una serie de características necesarias e imprescindibles para la gestión de grandes parques de ordenadores. En aquel año, el autor hablaba de aplicaciones como [Landscape](http://www.canonical.com/enterprise-services/landscape) o [Spacewalk](http://spacewalk.redhat.com/). Repasemos aquella lista para comprobar si migasfree puede competir con Canonical y Red Hat:

- **Inventariar las máquinas, tanto a nivel de software como hardware, con estadísticas de uso de las aplicaciones.**
  Migasfree echa mano de la base de datos del sistema de paquetería para inventariar el software y mantener un histórico de los cambios que se han producido en los equipos.

  Para el hardware, usa [lshw](http://ezix.org/project/wiki/HardwareLiSter) para recolectar los modelos de las piezas físicas. Además, convierte estos resultados en propiedades que luego pueden servir para asignar un determinado software a equipos que tengan un componente específico (como un controlador mejorado para un modelo especial de tarjeta gráfica).

  Sobre las estadísticas de uso de las aplicaciones todavía no se ha hecho nada.

- **Actualización de aplicaciones, parches de corrección de errores y seguridad, pudiendo planificar las acciones (temporalmente, por grupos, etc), y además automatizarlas.**
  Este es uno de los aspectos esenciales de migasfree. Al basarse en el sistema de paquetería de las distribuciones Linux, es muy fácil actualizar aplicaciones en los equipos. Esto unido al [sistema de distribución fundamentado en demoras de tiempo](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#calendarios), cumple con creces este apartado.

- **Gestión de configuración remota y centralizada, a nivel de sistema y de aplicaciones principales.**
  Aunque migasfree no es directamente la herramienta encargada de realizar estas acciones, sí que es la que se utiliza para distribuir los cambios.

  La filosofía en la que se apoya migasfree es: zapatero a tus zapatos. Es decir, que cada cual se dedique a lo que mejor sabe hacer. Si ya existe un sistema de paquetería que mantiene la integridad de los equipos Linux, que sea este sistema quien se encargue de hacer los cambios en la configuración software. Todo cambio, ya sea a nivel del sistema operativo o de una aplicación específica, es necesario empaquetarlo para que el sistema pueda conservar su integridad. Es después, con migasfree, cuando se distribuye a los equipos y se puede obtener un _feedback_ si la operación se ha completado o no correctamente.

- **Aprovisionamiento de estaciones nuevas.**
  Todo lo que necesita el servidor migasfree para agregar una nueva estación de trabajo en su sistema es que el cliente migasfree se conecte al servidor. Esto se consigue instalando el paquete del cliente y configurando cuando se quiere ejecutar periódicamente (lo cual se puede hacer con otro paquete).

  Y ya está. Migasfree también se basa en el concepto de **configuración cero** y es capaz de recolectar muchos datos de los equipos automáticamente.

- **Despliegue de aplicaciones.**
  Otro aspecto muy relevante en la gestión automatizada de equipos es poder ordenar la instalación o desinstalación de aplicaciones. En [cada repositorio que se crea en migasfree](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#serverdeployment), se pueden especificar qué paquetes es obligatorio instalar o desinstalar de los equipos. Es decir, además de poner como disponible cierto software se pueden transmitir órdenes al sistema de paquetería para que agrege o elimine paquetes.

- **Soporte al usuario, vía mensajería instantánea y escritorio remoto.**
  Si hemos quedado en que todo cambio en la configuración software se hace a través de paquetes, cumplir este requisito es tan sencillo como hacer los paquetes necesarios para configurar estas herramientas (u otras como conexiones por SSH) y distribuirlas en los equipos con migasfree. Además, con este sistema, se podrían cambiar puertos de conexión o contraseñas para los servicios muy fácilmente y de manera automatizada.

- **La posibilidad de realizar todas las acciones individualmente o por grupos.**
  Migasfree recolecta mucha información automáticamente de los equipos cliente a través de las [propiedades](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#formulas), que tienen la virtud añadida de ser programables.

  Por si esto fuera poco, también existen las [etiquetas](https://fun-with-migasfree.readthedocs.io/es/master/part03.html#etiquetas) para asignar atributos manualmente a ciertos equipos (por ejemplo, que estén en una determinada ubicación o que requieran una determinada funcionalidad).

  Con todo este conjunto de datos, se puede realizar la asignación de software sobre grupos muy concretos de ordenadores.
