---
title: ¿Un servidor migasfree en internet en menos de 2 minutos?
date: 2017-03-23 19:27:00
author: agacias
comment: false
category:
  - Tutorial
---

::: center
![Play with Docker](/img/play_with_docker.png 'Play with Docker')
:::

Gracias a [play-with-docker.com](http://play-with-docker.com/) puedes instalar un servidor migasfree en Internet y «jugar» durante 4 horas con él. Es una buena manera de empezar con migasfree. ¿A qué esperas?

<!-- more -->

- Accede a [play-with-docker.com](http://play-with-docker.com/)

- Añade una nueva instancia

- Copia el acceso ssh en una terminal de tu equipo y ejecútalo.

- Copia y pega estos comandos:

  ```sh
  git clone https://github.com/migasfree/migasfree-docker.git
  cd migasfree-docker/mf
  . variables
  docker-compose up -d
  docker logs -f $FQDN-server
  ```

- Espera a que arranque el servidor migasfree

- Vuelve a la pagina web de play-with-docker y a la derecha de la IP te aparecerán los puertos abiertos. Pulsa sobre el puerto **80** con el botón derecho del ratón, copia el enlace y pégalo en un navegador web.

- Haz login con usuario admin y contraseña admin.
- Instala un cliente migasfree en un equipo de pruebas (o mejor en una máquina virtual):

  ```sh
  wget -O - http://migasfree.org/pub/install-client | bash
  ```

- Modifica el fichero `/etc/migasfree.conf` para que el cliente apunte al servidor:

  ```
  Server = pwd-ip-80.host2.labs.play-with-docker.com
  ```

- Ejecuta el cliente:

  ```sh
  migasfree -u
  ```

- [Aprende más](http://fun-with-migasfree.readthedocs.io/)
