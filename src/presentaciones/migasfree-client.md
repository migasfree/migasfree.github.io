---
title: Migasfree Client
author: jact
date: 2022-05-19 16:30:00
timeline: false
description: Resume los principales cambios introducidos en la versión 5 del cliente de migasfree, específicamente su protocolo de comunicación mejorado, sistema de complementos y compatibilidad con Windows.
---

## Introducción

Presentación realizada para la [migascon 2022](/migascon-2022.md), en la que se muestran los cambios más importantes de la aplicación migasfree client en su versión 5.

## Protocolo de comunicación v4

El gran cambio respecto al cliente actual (versión 4), es el protocolo de comunicación usado con el servidor (`migasfree-backend`).

En la versión 4, los mensajes entre cliente y servidor sólo están firmados mediante un CRC. Como puede apreciarse, si alguien intercepta la comunicación, se puede ver claramente qué se intercambia entre las aplicaciones.

```txt
{"upload_computer_message": "Conectando al servidor migasfree..."}3�_�!A�l<��i�hT�J������	��8\Olw6vfy"�1؎#m@K�e��~�l���i����/Q������h4(�~�I�ٸBy�y	��us�ACK
                                                                               O���]X��L>�ݗ���dg����E���A�=%�h����ҽ�ˈ���&�q�}ˠ
��)3W�E��`30�K�ݝv���p��m�
                         �7+\J�?X�Az��}�"��@������T=d����O�f���	�s���N
```

## Protocolo de comunicación v5

El nuevo protocolo está basado en [JWT](https://jwt.io/) (JSON Web Token) y es autenticado y cifrado a la vez. Esto significa que, aunque se use el protocolo HTTP sin cifrado, las comunicaciones entre el cliente y servidor son seguras.

```txt
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ
```

## Sistema de plugins

Otro área de mejora que incorpora el nuevo cliente es el sistema de _plugins_ para PMS (sistemas de paquetería) y manejo de dispositivos (impresoras).

Está ideado para que el cliente se pueda extender en sistemas operativos que usan otros PMS distintos a los que lleva por defecto el cliente (`apt`, `yum`, `zypper`, `pacman` y `winget`) o que se quiera usar otro mecanismo para la gestión de las impresoras.

## Unificación de comandos

También ha cambiado la forma de invocar los comandos a través de la terminal (CLI). Todo se ha unificado bajo un mismo comando (`migasfree`) y algunos de los parámetros han sufrido cambios.

Tened esto muy en cuenta si tenéis _scripts_ que hacen uso del cliente.

```bash
$ migasfree -h
usage: migasfree [-h] [-d] [-q]
                 {register,search,sync,install,purge,traits,label,version,tags,upload,info,remove-keys} ...

Sistema de gestión de sistemas (lado cliente)

positional arguments:
  {register,search,sync,install,purge,traits,label,version,tags,upload,info,remove-keys}
    register            Registrar ordenador en el servidor
    search              Buscar un paquete en los repositorios
    sync                Sincronizar ordenador con el servidor
    install             Instalar paquete
    purge               Desinstalar paquete completamente
    traits              Obtener características del ordenador en el servidor
    label               Indentificación del ordenador
    version             Mostrar información de la versión
    tags                Etiquetas del ordenador
    upload              Subir ficheros al servidor
    info                Obtener información del ordenador en el servidor
    remove-keys         Borrar las claves del cliente

options:
  -h, --help            show this help message and exit
  -d, --debug           Habilitar el modo de depuración
  -q, --quiet           Habilitar modo silencioso (no verboso)
```

## Atomización de operaciones

Además, la API que consume el cliente se ha atomizado. Es decir, que se han separado acciones, para hacer más sencilla y extensible la operativa entre cliente y servidor. Esto hace posible que se puedan desarrollar otros clientes a futuro, tal vez especializándose en algunas de las operaciones disponibles.

```bash
$ migasfree sync -h
usage: migasfree sync [-h] [-f] [-dev | -hard | -soft | -att | -fau]

options:
  -h, --help           show this help message and exit
  -f, --force-upgrade  Fuerza la actualización de software
  -dev, --devices      Sincronizar dispositivos del ordenador con el servidor
  -hard, --hardware    Sincronizar hardware del ordenador con el servidor
  -soft, --software    Subir información del software del ordenador al servidor
  -att, --attributes   Subir información de los atributos al servidor
  -fau, --faults       Subir información de las fallas al servidor
```

## Python 3

Este nuevo cliente sólo se puede usar si en el sistema está Python 3. Ya no hay soporte oficial para la versión 2.

Gracias a esta modernización, se usa la librería [Python Rich](https://rich.readthedocs.io/) para mostrar la salida de los comandos.

## Ejemplos

Ejemplo de uso del argumento `tags` en el comando unificado `migasfree`.

```bash
$ sudo migasfree tags --get
Versión de migasfree: 5.0

Opciones de configuración: /etc/migasfree.conf
        Proyecto: ubuntu-20-04
        Servidor: localhost:2345
        Protocolo: http
        Actualizar paquetes automáticamente: True
        Gestión de dispositivos: True
        Proxy: None
        Proxy caché de paquetes: None
        Depuración: False
        Nombre del ordenador: pc26934

{"assigned": ["DMN-PLAZA-PILAR"], "available": {"DOMAIN": ["DMN-PLAZA-PILAR"]}
```

Nueva funcionalidad que da información acerca de la identificación del equipo en el sistema migasfree.

```bash
$ sudo migasfree info
Versión de migasfree: 5.0

Opciones de configuración: /etc/migasfree.conf
        Proyecto: ubuntu-20-04
        Servidor: localhost:2345
        Protocolo: http
        Actualizar paquetes automáticamente: True
        Gestión de dispositivos: False
        Subir hardware: True
        Proxy: None
        Proxy caché de paquetes: None
        Depuración: False
        Nombre del ordenador: PC22071

Opciones de ejecución:
        Versión de MigasFree Server: 5.0
        Certificado SSL: False
        PMS: apt
        Arquitectura: amd64

┏━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ID  ┃ NAME    ┃ SEARCH            ┃ UUID                                 ┃
┡━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ 292 │ PC22071 │ PC22071 (CID-292) │ 691CBD33-8CED-11E6-9C43-BC0000380000 │
└─────┴─────────┴───────────────────┴──────────────────────────────────────┘
```

## Mundo Windows

Necesitamos tener 3 programas en Windows para tener las mismas características que en Linux:

1. El cliente en sí, que proporciona la comunicación con el servidor.

2. Un detector de las características hardware del equipo que siga la misma estructura que el comando `lshw` de linux.

3. Un sistema de paquetería que permita auditar el software y realizar acciones de instalación.

Hasta ahora, tan sólo podíamos acometer los 2 primeros puntos, por lo que no habíamos invertido tiempo en el proyecto para tener el cliente en plataforma Windows. Sin embargo, en mayo de 2021, Microsoft liberó la versión 1.0 de [Windows Package Manager Client](https://github.com/microsoft/winget-cli) (winget), el sistema de paquetería "oficial" para Windows. Este es el hecho que nos ha decidido a preparar el cliente de migasfree para Windows. Además, hemos creado el proyecto [LsHw Windows Emulator](https://github.com/migasfree/lshw-windows-emulator), que es una simplificación de lshw, basado en llamadas a Windows Management Instrumentation (WMI).

Por el momento, el soporte del cliente en Windows es experimental, debido al sistema de paquetería _winget_ y a las novedades introducidas en el cliente.

## Despedida

Hasta aquí, hemos mostrado las novedades más importantes del cliente migasfree en su versión 5.

El cambio más radical es la atomización de la API que consume el cliente. Es decir, que se han separado acciones, para hacer más sencilla y extensible la operativa entre cliente y servidor.

Esto hace posible que se puedan desarrollar otros clientes a futuro, tal vez especializándose en algunas de las operaciones disponibles.

Quedamos a la espera de vuestros comentarios. Gracias.
