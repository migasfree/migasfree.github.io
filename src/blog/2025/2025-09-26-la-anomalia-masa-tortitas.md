---
title: La anomalía de la masa de tortitas
date: 2025-09-27 09:30:00
author: jact
comment: false
category:
  - Desarrollo
  - Noticia
---

Hemos liberado actualizaciones de la suite Migasfree en su versión 4:

- Servidor `4.22`.
- Cliente `4.26`.

<!-- more -->

Aunque continuamos inmersos en el desarrollo y puesta a punto de la ["inminente" versión 5](/migascon-2022), nos hemos visto obligados, por las circunstancias del siempre cambiante panorama en el mundo Linux, a liberar versiones de "mantenimiento" del servidor y el cliente de la versión 4.

Los cambios que presenta el servidor `4.22` son:

- Se ha añadido información sobre la dirección IP del solicitante en las notificaciones sobre repositorios externos.

- Se ha cambiado el formato de los enlaces del protocolo `mea` ([Migasfree External Actions](https://fun-with-migasfree.readthedocs.io/es/master/chapter16.html#migasfree-external-actions)) para que se adecúe al [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) y funcione correctamente en las últimas versiones de los navegadores web. Esto implica que, si los estáis usando, deberéis modificar el _script_ que interpreta este protocolo. Para ello, podéis echar un vistazo al [ejemplo que proponemos en nuestro libro](https://github.com/migasfree/fun-with-migasfree-examples/blob/master/acme-migasfree-external-actions/usr/bin/acme-migasfree-external-actions).

- Para sistemas cliente que usen `apt` con versión 3 o superior, es necesario mejorar el cifrado de las claves de los repositorios. Esto se ha hecho en el servidor, pero el cambio no será efectivo hasta que se borren las claves de los repositorios existentes en el servidor para que las regenere, y se vuelvan a construir los metadatos de los repositorios que se sirvan a esos sistemas operativos (como Debian Trixie y derivados).

Al hacer este cambio de las claves de los repositorios para nuevos sistemas basados en `apt`, también ha sido necesario modificar el cliente. El mayor cambio en el cliente es que pide la clave de los repositorios cada vez que va a obtener la información de los repositorios. Es por ello que la nueva versión `4.26` del cliente va de la mano con el servidor `4.22`. El mejor procedimiento a seguir con la actualización de la suite en la versión 4 es el siguiente:

1. Actualizar los clientes del parque a la versión `4.26`.

2. Actualizar el servidor `4.22`.

3. Si tenéis sistemas cliente con `apt` 3 o superior, hay que borrar las claves actuales de los repositorios, regenerarlas (esto se consigue lanzando un cliente para que pida información sobre los repositorios), y volver a generar los metadatos de los repositorios basados en `apt`.

Esperamos que estan sean las últimas actualizaciones sobre la versión 4... aunque nunca se sabe... antes de liberar (por fin) la tan ansiada versión 5.

Seguiremos informando.
