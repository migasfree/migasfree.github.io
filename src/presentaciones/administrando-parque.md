---
title: Administrando tu parque de ordenadores con migasfree
author: jact
date: 2014-11-12 10:00:00
timeline: false
description: Destaca los desafíos de administrar una red informática con diversos usuarios y necesidades, haciendo hincapié en la necesidad de soluciones controladas y replicables. Enfatiza la importancia de la integridad del sistema y el uso de empaquetado para garantizar configuraciones consistentes en toda la red.
---

## Presentación

Charla realizada durante la LibreCon del año 2014, celebrada en Bilbao.

## El día a día del administrador de sistemas

En ocasiones, la administración de ordenadores puede llegar a ser un tanto... caótica.

## Trabajo de un administrador de sistemas

Este es el caos al que cada día se enfrenta un administrador de sistemas.

Los usuarios tienen unos problemas y necesidades concretos, las máquinas tienen que estar siempre a punto y la organización dicta unas directrices que todos deben cumplir.

Necesidades diferentes, pero que se repiten en muchas ocasiones..., ¿cómo agruparlas y aplicarlas de forma controlada y replicable?

Ejemplo: una persona reporta que el departamento de marketing no puede entrar en Facebook porque el navegador es demasiado antiguo (y sólo es de hace 2 meses...), pero con una nueva versión, la aplicación web de contabilidad (cuya empresa de origen ya no existe) no se vería muy bien. Para solventar la situación, se nos plantean varias alternativas:

- ¿Tenemos que ir por cada ordenador de marketing instalando una versión diferente del navegador?

- Si hiciéramos una distribución masiva, ¿cómo excluimos a los de contabilidad?

- O, si queremos que todos tengan la misma versión, ¿cómo aplicamos una CSS de usuario que arregle los problemas de visualización al departamento de contabilidad?

## ¿Qué es migasfree?

### Conceptos de migasfree

Migasfree es un software libre que se encarga de gestionar repositorios dinámicos de software basados en atributos y calendarios.

Los atributos sirven para agrupar equipos y así distribuir diferente software. Como hemos visto antes, la organización es un sistema complejo y heterogéneo.

Los calendarios (basados en atributos) sirven para no saturar la red de la organización y para dar tiempo de reacción frente a posibles problemas en la distribución del software.

### Funcionamiento básico de migasfree

El cliente instalado en la máquina a administrar se conecta al servidor y le transmite su lista de atributos. Estos están relacionados con la persona que está conectada y con el ordenador:

- Qué usuario está conectado en ese momento.
- A qué grupos de la organización pertenece ese usuario.
- Qué modelo de tarjeta gráfica tiene el equipo.
- Qué dirección IP tiene asignada.
- Y cualquier otra cosa que nos pueda ser útil, ya que pueden ser programables.

El servidor, basándose en esos parámetros, le manda al cliente una lista de repositorios disponibles para actualizar el software y, adicionalmente, una lista de software a instalar o desinstalar del equipo.

### Lo importante es el concepto

Migasfree se fundamenta sobre un concepto sencillo: **mantener y asegurar la integridad** de un sistema informático.

Un sistema se considera íntegro si:

- Es capaz de mantener las relaciones entre los distintos cambios que se le realizan (por ejemplo, control de dependencias).

- Permite la auditoría de cambios (estado del sistema).

En los sistemas Linux, esta integridad del sistema se mantiene con los sistemas de paquetería. Por eso, migasfree, sólo se limita a distribuir paquetes. La paquetería se encarga del resto. En ella reside la verdadera magia.

## Características de un Sistema Gestor de Sistemas

### Aprovisionamiento de estaciones nuevas

Para registrar un ordenador en el servidor migasfree, tan sólo es necesario instalar el cliente y ejecutarlo. No hay que dar de alta el equipo previamente. Es lo que llamamos configuración cero.

### Inventario de máquinas

El control del software instalado en cada máquina se realiza guardando el volcado de paquetes instalados.

El hardware se inventaría guardando la salida del comando `lshw`.

Toda esta información de cada equipo se guarda en el servidor de migasfree.

### Actualización y despliegue de aplicaciones

La novedad que aporta migasfree a la administración de equipos, es la actualización planificada a través de repositorios dinámicos gestionados con un calendario de demoras.

Estos calendarios pueden dilatarse más o menos en el tiempo. Una actualización crítica puede desplegarse en un sólo día, pero otra menos urgente y más voluminosa puede efectuarse durante varios meses.

Además, a estos repositorios se les han añadido algunas mejoras que ayudan al despliegue controlado de aplicaciones. En cada repositorio se pueden indicar una serie de paquetes de software que el cliente se encargará de instalar o desinstalar cada vez que se conecte con el servidor. Así nos aseguramos que la lista de software crítico para un área de negocio está siempre disponible en los equipos adecuados.

### Gestión de configuración remota y centralizada

Hemos visto que migasfree se apoya en los sistemas de paquetería para mantener la integridad de los sistemas.

Eso significa que cada **elemento de configuración software** (ECS) debe empaquetarse para que se distribuya y asegurar así la integridad.

Migasfree también se encarga de verificar si los cambios se han realizado y avisa de los errores producidos durante el proceso.

### Realizar acciones individualmente o por grupos

¿Cómo es posible crear grupos de ordenadores para realizar diferentes conjuntos de actualizaciones?

En migasfree existen 2 formas de crear estos grupos:

- Automáticamente: programando propiedades.

- Manualmente: definiendo etiquetas.

Una vez creados estos grupos, podemos asignarles repositorios dinámicos y realizar los cambios en la configuración software.

### Soporte al usuario

Otro aspecto muy importante en la gestión de un parque de ordenadores es el soporte al usuario. Este se puede realizar muy fácilmente con herramientas de control remoto.

Para que esto funcione dentro de la solución migasfree, primero deberemos configurar los servicios remotos (SSH, VNC) a través de paquetes de configuración software y, posteriormente, conectarnos a los equipos a través de la aplicación web del servidor migasfree.

El soporte al usuario debe servir para descubrir problemas que, posteriormente, solucionaremos empaquetando elementos de configuración software (ECS) para replicar el remedio en tantos equipos como haga falta.

## Consejos básicos para implantar migasfree en tu organización

### Servidor privado de migasfree: uno o varios

Para optimizar el tráfico de red al actualizar los equipos, lo mejor es tener un servidor de migasfree dentro de la red de la organización.

Pero, ¿cuántos son necesarios? Un sólo servidor es capaz de gestionar varias versiones con diferente sistema de paquetería. En el Ayuntamiento de Zaragoza tenemos 1100 equipos Linux (con 2 sistemas diferentes de paquetería) controlados con un único servidor.

Pero si tenemos varias redes internas separadas, puede ser buena idea tener varios servidores (por ejemplo, para una red con puntos de información públicos).

### Congelamiento de repositorios

Para una organización es crucial controlar el software que hay en los equipos. Una buena forma de hacerlo es **congelando** los repositorios.

Se pueden bajar las versiones concretas de programas y tenerlas disponibles en el servidor migasfree privado.

De esta forma podemos evitar sorpresas al actualizar a versiones no probadas o que dejen fuera de juego algún equipo (al instalar un nuevo kernel en hardware no muy nuevo) o una aplicación de la organización (como una nueva versión del navegador web).

### Cómo subir software al servidor de migasfree

¿Cómo se consiguen esos repositorios congelados?

Se pueden bajar paquetes de los sitios oficiales de las distribuciones Linux o de repositorios privados.

Después se suben al servidor migasfree mediante la utilidad de línea de comando `migasfree-upload`. Está diseñado para subir grandes cantidades de paquetes al servidor y usarlo en _scripts_.

Finalmente, se distribuyen los cambios. Primero se testea en un banco de pruebas, luego en un grupo de usuarios test y después al resto, con demoras, para no saturar la red.

### Distribución de software a los equipos

La configuración software empaquetada ofrece un nivel de personalización enorme, pero si no sabes hacer paquetes, puedes empezar a usar migasfree asignando paquetes de software ya hechos a diferentes equipos del parque (no todos tienen por qué tener lo mismo).

### Uso de etiquetas y propiedades para agrupar ordenadores

El servidor migasfree permite programar propiedades para recolectar atributos automáticamente de los equipos.

Sin embargo, hay ciertos atributos que sólo se pueden matizar a través de las etiquetas. Estas sirven para determinar:

- que un determinado equipo lo va a usar una persona con una funcionalidad muy específica
- que un grupo de ordenadores forman un aula o están en una planta de un edificio
- que un ordenador va a tener una funcionalidad determinada (juegos, diseño gráfico, desarrollo, ...)

### Usos y desusos de las fallas en migasfree

Una falla es un mecanismo de detección de un comportamiento no deseado. En migasfree, son totalmente programables.

Hay otros sistemas gestores de sistemas que se basan en enviar comandos a los equipos para cambiar la configuración software.

Aunque en las fallas de migasfree también se puede acometer esa tarea, siempre es preferible que sirvan para detectar anomalías y que el problema se solucione empaquetando y distribuyendo (la importancia de la integridad del sistema).

### Paquetes prêt-à-porter para la organización

Cuando te hayas habituado al sistema migasfree, llega el momento de adentrarse en la confección de paquetes a medida para solventar necesidades específicas de la organización:

- Configuración personalizada de aplicaciones y servicios (mi NTP, mi LDAP, ...).
- Distribución de aplicaciones propias.
- Resolución de incidencias.

## Epílogo

### Todo está en el libro

Estas han sido sólo unas pinceladas de qué es y cómo usar migasfree.

Para adentraros más en el universo migasfree, podéis consultar el libro que ha escrito (y que sigue escribiendo) Alberto Gacías, creador de esta solución.

Al igual que la aplicación migasfree, el libro también es código abierto y está disponible para todo el mundo.

### Lo que podría ser (si usas migasfree)

Porque la vida de un administrador puede ser más relajada. Incluso más a menudo de lo que pensáis.

Migasfree nace con ese objetivo. Facilitarnos tareas de gestión para que podamos dedicar más tiempo a cosas realmente importantes.

### Enlaces de interés

- [migasfree.org](https://migasfree.org)
- [github.com/migasfree](https://github.com/migasfree/)
- @migasfree, #migasfree
- fun.with@migasfree.org

¡Muchas gracias por vuestra atención!
