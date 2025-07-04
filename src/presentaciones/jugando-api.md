---
title: Jugando con la API de migasfree
author: jact
date: 2020-04-01 10:00:00
timeline: false
description: Describe la evolución de las API dentro del proyecto migasfree. Enfatiza los beneficios de adoptar las API RESTful, incluida la seguridad mejorada, la documentación estandarizada y un ecosistema de aplicaciones más rico.
---

## Introducción

Extendiendo la aplicación a través del uso de la API.

Presentación para la MigasCon de abril de 2020. Lamentablemente, no se pudo celebrar por el confinamiento general que hubo en esas fechas.

## Conceptos previos

### Definición de API

Contrato, con documentación, que representa un acuerdo entre las partes: si una de las partes envía una solicitud remota con cierta estructura en particular, esa misma estructura determinará cómo responderá el software de la otra parte.

### Ventajas

Facilita la integración: interfaz de operaciones que proporciona la aplicación (caja negra).

Ahorra tiempo y costes: aprovecha código y funcionalidades ya hechos y probados.

Favorece la innovación: posibilidad de crear productos nuevos alrededor de otros ya existentes.

Rentabiliza datos: pago por número de llamadas a la API, etc.

### Inconvenientes

Falta de documentación: no todas las APIs suelen estar bien documentadas.

Una página web suele tener múltiples llamadas a la API Rest para conseguir datos relacionados.

Las llamadas a una API pueden cambiar según la versión de la misma y puede no quedar claro qué llamada corresponde a tal versión.

Si hay múltiples llamadas a una API en cada página y ese sitio web empieza a ser muy solicitado, puede colapsar el servidor muy fácilmente.

Cuidado con exponer información sensible a través de una API sin tener en cuenta la seguridad.

## Historia de migasfree y las APIs

### La edad de la inocencia

En los principios del proyecto, nos inventamos una especie de API para la comunicación del cliente (aplicación de escritorio) con el servidor. Todas las llamadas iban a parar a una misma URL. El formato de los argumentos tenía un formato inusual y para darle algo de seguridad se hacía un CRC con una clave que enviaba el servidor. Sin embargo, los datos estaban en texto claro.

También había una API pública con algunos puntos de entrada, pero que no seguían ningún estándar de API Rest.

### El hombre en busca de sentido

Pero en el año 2016, se inició una API REST experimental para proporcionar acceso público y privado (con token) sobre los datos de la interfaz del servidor.

Esto abrió un abanico de nuevas posibilidades y de ahí nacieron proyectos como `migasfree-play` o PUA (Project Upgrade Assistant), así como integraciones con programas de terceros, que podían hacer uso de la API fácilmente a través de `migasfree-sdk`.

### Encuentros en la 3ª fase

Pero todavía quedaba pendiente la comunicación entre los clientes y el servidor. Por eso, se ha desarrollado, para la versión 5 de la suite, un nuevo protocolo basado en JWT (JSON Web Token). De esta forma los mensajes van, al mismo tiempo, firmados y cifrados. Así, incrementamos la seguridad y la privacidad aunque el protocolo de comunicación sea HTTP.

También se ha aprovechado para segmentar los mensajes y facilitar el uso de las operaciones.

En la versión 5 de la suite migasfree, estamos empezando a jugar con GraphQL (experimentalmente) para mejorar el rendimiento con la idea de hacer menos peticiones para recabar más datos del servidor. Por el momento no se está usando en `migasfree-frontend`.

## Explotación

### Comparativa operaciones

Relación entre las operaciones de un CRUD y sus equivalencias con los verbos de una API REST.

- Create -> POST
- Retrieve -> GET
- Update -> PUT, PATCH
- Delete -> DELETE

### Swagger

Swagger es un conjunto de herramientas de software de código abierto para diseñar, construir, documentar, y utilizar servicios web RESTful.

Usamos Swagger en Django para autodocumentar la API REST del servidor (tanto la pública como la privada).

Se encuentra disponible en `/docs/`.

### Django Rest Framework

Como usamos Django Rest Framework en nuestro código, también tenemos autodocumentada la API REST en la ruta `/api-docs/`.

### cURL

Ejemplo de uso de la API REST con cURL.

```bash
_SERVER=http://localhost
_TOKEN=$(curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"username":"xxx","password":"xxx"}' \
  $_SERVER/token-auth/ | jq -r ".token")

curl -X GET \
  -H "Authorization: Token $_TOKEN" \
  -H "Content-Type: application/json" \
  $_SERVER/api/v1/token/packages/orphan/ \
  | jq -c '.[] | select(.name | contains("azl-"))?'
```

El principal propósito y uso de cURL es automatizar transferencias de archivos o secuencias de operaciones no supervisadas. Es por ejemplo, una herramienta válida para simular las acciones de usuarios en un navegador web.

### CORE API

Core API es un modelo de objetos de documento independiente del formato para representar APIs.

Existe una herramienta de línea de comandos que puede utilizar para interactuar con las APIs, así como una biblioteca cliente de Python.

Aquí, un ejemplo de uso contra la API de migasfree:

```bash
pip install coreapi-cli
coreapi get http://localhost/api-docs/
coreapi action api v1 public server info create
```

Ejemplo de uso de Core API con la librería de Python:

```py
import coreapi

# Initialize a client & load the schema document
client = coreapi.Client()
schema = client.get("http://localhost/api-docs/")

# Interact with the API endpoint
action = ["api", "v1", "public", "server", "info", "create"]
result = client.action(schema, action)
```

### Python requests

Requests es una biblioteca HTTP para el lenguaje de programación Python. El objetivo del proyecto es hacer que las solicitudes HTTP sean más simples y amigables para los humanos.

Requests es una de las bibliotecas de Python más populares que no se incluye con Python (todavía).

```py
import requests
import json

server = 'http://localhost'
data = {'username': 'xxx', 'password': 'xxx'}
url = '{}/token-auth/'.format(server)
response = requests.post(url, data)
print(response.json())
token = response.json()['token']

headers = {'Authorization': 'Token {}'.format(token)}
url = '{}/api/v1/token/projects/'.format(server)
response = requests.get(url, headers=headers)
print(response.json())
```

### Migasfree SDK

Ejemplo de uso de la explotación de la API de migasfree con el proyecto migasfree SDK.

```py
import datetime
from migasfree_client.utils import get_mfc_project, get_hardware_uuid
from migasfree_sdk.api import ApiToken

server = 'http://localhost'
api = ApiToken(server=server, user=user)
project_name = get_mfc_project()
project_id = api.id("projects", {"name": project_name})
all_systems_id = api.id("attributes", {"prefix": "SET", "value": "ALL SYSTEMS"})
cid = api.id("computers", {"uuid": get_hardware_uuid()})
attribute_cid = api.id("attributes", {"prefix": "CID", "value": cid})

data = {
    "name": "bluefish_geany", "start_date": datetime.datetime.now().strftime('%Y-%m-%d'),
    "project": project_id, "packages_to_install": ["bluefish", "geany"], "included_attributes": [all_systems_id, attribute_cid]
}
deployment_id = api.add("deployments/internal-sources", data)
print(deployment_id)
```

Este proyecto nace con la idea de facilitar y simplificar la utilización de la API del servidor migasfree.

### Postman

Otra herramienta que se puede usar para interactuar con APIs es Postman.

### Axios

Si quieres atacar la API de migasfree desde JavaScript, una buena alternativa es la librería [Axios](https://flaviocopes.com/axios/).

Este es un ejemplo de uso:

```js
let server = 'http://localhost'
let data = { username: 'xxx', password: 'xxx' }
const response = await axios.post(`${server}/token-auth/`, data)
let token = response.data.token

response = await axios
  .get(`${server}/api/v1/token/computers/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
  .catch((error) => {
    console.log(error)
  })
console.log(response.data.results)
```

### GraphQL

Estos son dos ejemplos de consultas GraphQL que ya están implantadas en la suite 5 de migasfree.

```txt
query projects {
  allProjects {
    id
    name
  }
}

query platforms {
  allPlatforms {
    id
    name
    projectSet {
      id
      name
      slug
      pms
      architecture
    }
  }
}
```

```txt
query computers {
  allComputers {
    id
    name
    ipAddress
    syncStartDate
    syncEndDate
    errorSet {
      description
    }
  }
}

query errors {
  allErrors {
    id
    description
    computer {
      id
    }
  }
}
```

Están disponibles en la ruta `/graphql/` del servidor.

### Aplicaciones derivadas de la API

A lo largo de todos estos años, hemos ido explotando la API del servidor a través de diversas aplicaciones.

Empezando con el cliente, después le ha seguido `migasfree-play`.

Con posterioridad creamos PUA para uso interno en el Ayuntamiento de Zaragoza. Esta aplicación nos sirve para estudiar a qué sistema operativo se puede migrar un cierto ordenador, basándonos en el software que tiene actualmente y en una serie de restricciones que son diferentes en cada sistema operativo.

También tenemos un _script_ para obtener estadísticas de equipos mensualmente. Este _script_ realiza llamadas a la API.

Incluso es posible automatizar migraciones del servidor usando la misma API que este proporciona.

## Conclusiones

El buen uso del concepto de API REST nos ha servido estos últimos años para:

- Mejorar la seguridad del proyecto (sobre todo la comunicación entre clientes y servidor).
- Estandarizar y documentar el uso de las llamadas (DRF, Swagger).
- Ampliar el ecosistema de aplicaciones (`migasfree-play`, `migasfree-sdk`, `migasfree-frontend`).
- Facilitar la integración con terceros (a través de múltiples herramientas, como cURL, python requests, Core API, Axios, ...).
