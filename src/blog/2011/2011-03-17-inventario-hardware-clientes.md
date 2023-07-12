---
title: Inventario hardware de los clientes de migasfree
date: 2011-03-17 19:18:00
author: agacias
comment: false
category:
  - Desarrollo
---

Implementada la funcionalidad de inventario de hardware.

Gracias a la nueva versión de [lshw](http://ezix.org/project/wiki/HardwareLiSter) (la B.02.15), que permite la salida de la información hardware en formato [JSON](http://es.wikipedia.org/wiki/JSON), migasfree ahora es capaz de almacenar el hardware de los equipos en su base de datos. Hemos creado para ello las siguientes tablas:

- HW_Node
- HW_Capability
- HW_Configuration
- HW_LogicalName

Así que ahora podremos crearnos consultas de hardware que nos permitirían saber, por ejemplo:

- Los equipos que tienen menos de 512 MB de RAM
- La cantidad de equipos por CPU
- Los equipos que tienen una determinada tarjeta de sonido
- …

También se han creado unas vistas que nos muestran gráficamente el hardware de un determinado equipo (sería el equivalante a la utilidad lshw-gui).

Si te bajaste el [appliance de VirtualBox](http://migasfree.org/pub/), puedes probarlo ejecutando:

```sh
clone-migasfree
```
