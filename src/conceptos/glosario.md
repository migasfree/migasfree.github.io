---
title: Glosario de Integridad y Gestión de Flotas
description: Conceptos clave sobre la gestión de sistemas, integridad y automatización de flotas con Migasfree.
comment: false
feed: false
---

Para entender por qué **Migasfree** es diferente a un gestor de paquetes tradicional, es necesario dominar algunos conceptos que definen la administración de sistemas moderna.

## 1. Integridad de Sistemas (System Integrity)

Es el estado en el que un ordenador se mantiene exactamente como el administrador ha definido. Si un usuario o un proceso externo modifica un archivo crítico o desinstala un software necesario, el sistema de **integridad** de Migasfree lo detecta y lo restaura automáticamente a su estado "oficial".

## 2. System Drift (Deriva de Configuración)

Ocurre cuando, con el paso del tiempo, los equipos de una flota empiezan a diferenciarse entre sí debido a cambios manuales, actualizaciones fallidas o instalaciones locales. Migasfree elimina el _drift_ asegurando que todos los equipos de un mismo grupo sean clones lógicos en cuanto a configuración.

## 3. Despliegue Atómico (Atomic Deployment)

Un despliegue es atómico cuando se garantiza que la operación se completa al 100% o no se aplica en absoluto. WPT (Windows Package Tool) y Migasfree buscan este comportamiento para evitar que un equipo quede en un estado "roto" o inconsistente tras una actualización fallida.

## 4. Configuración Declarativa

A diferencia de la gestión imperativa (donde das órdenes paso a paso), en la **configuración declarativa** defines cómo _debe estar_ el equipo (ej: "este equipo debe tener Firefox v120 y la impresora de administración"). Migasfree se encarga de ejecutar las acciones necesarias para alcanzar ese estado.

## 5. Soberanía Tecnológica

Es la capacidad de una organización (especialmente administraciones públicas) para controlar su propia infraestructura sin dependencias críticas de un único proveedor comercial. El uso de software libre como Migasfree asegura que los datos y la lógica de gestión pertenezcan a la organización.

## 6. Unified Endpoint Management (UEM)

Categoría de herramientas que permiten gestionar todos los dispositivos finales (ordenadores, portátiles, quioscos) desde una única consola, independientemente de si están en la red local, en casa o en una delegación remota.

## 7. Firmado GPG (GPG Signing)

Método criptográfico para asegurar que un paquete de software no ha sido alterado desde su creación. Migasfree y WPT exigen firmas GPG en sus repositorios para garantizar que nadie pueda inyectar software malicioso en tu flota.

---

<div class="button-group center">

[Comparar con Ansible](/comparativas/ansible.md){.vp-button .primary}
[Ver casos de éxito](/casos-de-exito/vitalinux.md){.vp-button}

</div>
