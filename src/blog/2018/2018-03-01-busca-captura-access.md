---
title: A la busca y captura de bases de datos Microsoft Access
date: 2018-03-01 22:37:00
author: agacias
comment: false
category:
  - Tutorial
---

Uno de los obstáculos importantes en una migración a un sistema operativo libre es el uso y abuso que hacen los usuarios de Microsoft Access.

<!-- more -->

> [WINE](https://www.winehq.org/) es la primera opción para su emulación y es intensamente utilizado para que las aplicaciones Microsoft Access sigan funcionando. Como última opción para aquellas aplicaciones que no son emulables con WINE se plantea el uso de máquinas virtuales VMWare ejecutadas localmente.»
>
> — Eduardo Romero, [Migración Escritorio Software Libre](http://www.zaragoza.es/contenidos/azlinux/migracionescritoriosl.pdf)

**Catalogar** las distintas bases de datos Microsoft Access, que han ido creando los usuarios de nuestra organización, para determinar **quién y desde qué ordenador** accede a un fichero de Microsoft Access, es crucial a la hora de decidir si un ordenador de puesto de trabajo es migrable o no.

Esta información podríamos obtenerla a través de los logs de nuestro servicio de archivos de red pero, ¿y qué hay de las BBDD locales?

Una solución simple y efectiva, haciendo uso de migasfree, podría ser:

1. Busca: Ejecutar un programa en cada ordenador que periódicamente mire, los archivos abiertos en el sistema y almacene su nombre en un fichero si el nombre del archivo abierto acaba en `.mdb` o `.mde`. Pasados unos días tendríamos almacenados localmente en un fichero las rutas de las BBDD a las que accede cada ordenador.
2. Captura: Crear una fórmula, de tipo lista, que «recolecte» estas rutas como atributos del ordenador.

¡Venga, manos a la obra!

## Busca

Programa python a ejecutar en los clientes:

```py
#!/usr/bin/env python
import psutil
import time
import json
import os
import platform
from datetime import datetime

_format_time = '%Y-%m-%d %H:%M:%S'
_extensions = ('.mdb', '.mde', '.accdb', '.accde')
_capture_time = 300


def get_filename():
    if platform.system() == "Windows":
        if platform.uname()[2] == "XP":
            return "c:/windows/temp/access.json"
        else:
            return "c:/users/public/temp/access.json"
    else:
        return "/var/tmp/access.json"


def read_json(_filename):
    if os.path.exists(_filename):
        with open(_filename) as json_data:
            data = json.load(json_data)
    else:
        data = {}
    return data


def save_json(_filename, data):
    obj = open(_filename, 'wb')
    json.dump(data, obj)
    obj.close


def main():
    _filename = get_filename()
    data = read_json(_filename)
    while True:
        changed = False
        for proc in psutil.process_iter():
            try:
                for f in proc.open_files():
                    if f.path.lower().endswith(_extensions):
                        if platform.system() == "Windows":
                            archive = f.path.replace("\\","/").replace(":","").lower()
                        else:
                            archive = f.path.replace("/red/","").lower()
                        if not archive in data:
                            data[archive] = datetime.now().strftime(_format_time)
                            changed = True
            except:
                pass
        if changed:
            save_json(_filename,data)
        time.sleep(_capture_time)


if __name__ == "__main__":
    main()
```

## Captura

Fórmula migasfree de tipo Lista y lenguaje python:

```py
import os
import json

def get_filename():
    if platform.system() == "Windows":
        if platform.uname()[2] == "XP":
            return "c:/windows/temp/access.json"
        else:
            return "c:/users/public/temp/access.json"
    else:
        return "/var/tmp/access.json"

def read_json(_filename):
    if os.path.exists(_filename):
        with open(_filename) as json_data:
            data = json.load(json_data)
    else:
        data = {}
    return data

_filename = get_filename()
_ret = ""

if os.path.exists(_filename):
    data = read_json(_filename)
    for key, value in data.iteritems():
        _ret += key + ","

if _ret:
    print unicode(_ret[:-1]).encode('utf-8')
else:
    print "none"
```

Ya sólo nos quedaría empaquetar esta solución y desplegarla con migasfree.

## Resultado

Una vez capturadas las BBDD como `atributos` de los ordenadores en el servidor migasfree, ya sólo nos queda analizar la información.

1. Conocer que BBDD se utilizan en un ordenador concreto es ahora tan sencillo como acceder al ordenador y mirar sus atributos.
2. Obtener la lista de ordenadores que hacen uso de una BD concreta tambien es posible desplegando su atributo.
3. Ver todo el catálogo de BBDD, tan simple como ir a los atributos y filtrar por ACCESS.

::: center
![Resultado](/img/access.png 'Resultado')
:::
