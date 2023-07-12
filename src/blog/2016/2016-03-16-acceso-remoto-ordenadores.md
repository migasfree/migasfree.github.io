---
title: Cómo conseguir acceso remoto a los ordenadores desde la aplicación web de migasfree
date: 2016-03-16 19:38:00
author: jact
comment: false
category:
  - Tutorial
---

En la documentación del proyecto, se menciona de pasada el parámetro `MIGASFREE_REMOTE_ADMIN_LINK`, describiendo brevemente cómo configurar el acceso por <acronym title="Virtual Network Computing">VNC</acronym> y <acronym title="Secure Shell">SSH</acronym> a los equipos, pero sin explicar cómo conseguir que esos protocolos sean accesibles directamente desde nuestro navegador web.

<!-- more -->

En el siguiente artículo vamos a sacarle más funcionalidades a este parámetro de configuración y a narrar cómo configurar nuestro entorno (se entenderá que es una máquina con Linux) para obtener un acceso directo a los protocolos desde el navegador (Firefox, Chrome/Chromium).

## En el servidor migasfree

Para comenzar, tendremos que configurar adecuadamente el parámetro en el archivo `/etc/migasfree-server/settings.py` de nuestro servidor migasfree. Un ejemplo, podría ser el siguiente:

```py
MIGASFREE_REMOTE_ADMIN_LINK = "mvnc://{{computer.ip}} mping://{{computer.ip}} mssh://root@{{computer.ip}} mupdate://root@{{computer.ip}}"
```

Para que los protocolos sean «personalizados» y no causen conflictos con otros que pueden tener otra configuración en los sistemas, he preferido anteponerles la letra «m» (de migasfree ;)).

Tras realizar los cambios, deberemos hacer que el servidor web relea la configuración para que se apliquen dichos cambios.

Como se comenta en el libro, después de activar este parámetro, cada vez que se represente un ordenador en la aplicación web de migasfree, tendremos disponibles nuevas acciones que vendrán indicadas por los nombres de los protocolos. Siguiendo el ejemplo serían: `mvnc`, `mping`, `mssh` y `mupdate`. Eso sí, por mucho que pulsemos sobre ellos en el interfaz, no van a realizar todavía ninguna acción, ya que todavía falta por configurar la parte cliente (nuestra estación de trabajo que se conecta al servidor), para obtener las funcionalidades perseguidas.

## En nuestro ordenador cliente

Creamos en primer lugar el fichero `/usr/bin/migasfree-protocols`, con el siguiente contenido:

```sh
#!/bin/bash

_PROTOCOL=$(echo $1 | awk 'BEGIN {FS = "://"}; {print $1}')
_URL=$(echo $1 | awk 'BEGIN {FS = "://"}; {print $2}')

case "$_PROTOCOL" in
    "mssh")
        gnome-terminal --command "ssh $_URL"
        ;;

    "mvnc")
        vncviewer $_URL
        ;;

    "mping")
        gnome-terminal --command "ping $_URL"
        ;;

    "mupdate")
        gnome-terminal --command "ssh $_URL migasfree --update; echo; echo TERMINADO; read"
        ;;
esac
```

En este fichero, que deberá tener permisos de ejecución, se describe qué hacer con cada uno de los protocolos. En este ejemplo son necesarias las utilidades `ssh` y `vncviewer`, pero se podrían cambiar por otras (al igual que `gnome-terminal`), dependiendo de nuestra distribución Linux.

Ahora sólo falta decirle al navegador qué debe hacer cuando se encuentre con los protocolos. El proceso va a diferir según el navegador web que usemos.

### Chrome/Chromium

Tenemos que configurar la asociación de protocolos a nivel de entorno gráfico. Para ello, crearemos el fichero `/usr/share/applications/migasfree-protocols.desktop`:

```
[Desktop Entry]
Encoding=UTF-8
Type=Application
Name=migasfree protocols
Exec=/usr/bin/migasfree-protocols %U
Terminal=false
MimeType=x-scheme-handler/mssh;x-scheme-handler/mvnc;x-scheme-handler/mping;x-scheme-handler/mupdate;
NoDisplay=true
StartupNotify=true
```

Como este lanzador sólo tiene fines de asociación de [MimeTypes](https://help.ubuntu.com/community/AddingMimeTypes), no se mostrará en el menú de aplicaciones (`NoDisplay=true`), por lo que no es necesario que tenga asociado un icono o las categorías definidas.

Después, sólo queda actualizar la base de datos de lanzadores y _mimetypes_ mediante los comandos (con un usuario con privilegios de root):

```sh
update-desktop-database
update-mime-database /usr/share/mime
```

### Firefox

Para este navegador, además del paso anterior, tendremos que crear el fichero `/usr/lib/firefox/defaults/pref/migasfree.js` con este contenido:

```
pref("network.protocol-handler.expose.mssh", false);
pref("network.protocol-handler.expose.mvnc", false);
pref("network.protocol-handler.expose.mping", false);
pref("network.protocol-handler.expose.mupdate", false);

pref("network.protocol-handler.app.mssh", "/usr/bin/migasfree-protocols");
pref("network.protocol-handler.app.mvnc", "/usr/bin/migasfree-protocols");
pref("network.protocol-handler.app.mping", "/usr/bin/migasfree-protocols");
pref("network.protocol-handler.app.mupdate", "/usr/bin/migasfree-protocols");

pref("network.protocol-handler.warn-external.mssh", false);
pref("network.protocol-handler.warn-external.mvnc", false);
pref("network.protocol-handler.warn-external.mping", false);
pref("network.protocol-handler.warn-external.mupdate", false);

pref("network.protocol-handler.external.mssh", true);
pref("network.protocol-handler.external.mvnc", true);
pref("network.protocol-handler.external.mping", true);
pref("network.protocol-handler.external.mupdate", true);
```

Y una vez que volvamos a iniciar el navegador ya tendremos disponible el comportamiento esperado.

## Corolario

Como puede verse, las posibilidades son amplias y van a depender de nuestro entorno particular para adecuarlo a unas necesidades determinadas. Es por ello que desde el proyecto migasfree no se ha creado un paquete genérico para cubrir esta funcionalidad.

Se deja como ejercicio práctico para cada organización el crear un paquete a medida con los protocolos que allí se consideren prácticos y realizar la configuración adecuada para sus entornos de explotación (navegadores) de la aplicación web de migasfree.

## Actualización (2018-03-02)

A partir de la versión `4.14` del servidor migasfree, el parámetro `MIGASFREE_REMOTE_ADMIN_LINK` se convierte en lista:

```py
MIGASFREE_REMOTE_ADMIN_LINK = [
    "mvnc://{{computer.ip}}",
    "mping://{{computer.ip}}",
    "mssh://root@{{computer.ip}}",
    "mupdate://root@{{computer.ip}}",
]
```
