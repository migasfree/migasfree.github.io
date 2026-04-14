---
title: Migasfree vs Landscape (Canonical)
description: Comparativa entre Migasfree y Landscape, la herramienta oficial de gestión de Ubuntu.
comment: false
feed: false
---

# Migasfree vs Landscape: Flexibilidad frente a Homogeneidad

**TL;DR**: **Landscape** es una excelente herramienta si tu parque es 100% Ubuntu y cuentas con suscripciones Ubuntu Pro. **Migasfree** ofrece una alternativa agnóstica a la distribución, totalmente gratuita y con una gestión de inventario y atributos mucho más granular.

## Diferencias Clave

| Característica          | Landscape                                                                   | Migasfree                                                |
| ----------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Soporte de Distros**  | Centrado exclusivamente en Ubuntu                                           | Multi-distro (Debian, Fedora, openSUSE, etc.)            |
| **Soporte Windows**     | No dispone de gestión para Windows                                          | Soporte nativo para Windows (vía WPT)                    |
| **Modelo de Coste**     | Gratuito hasta cierto punto; requiere Ubuntu Pro para más de 10-50 máquinas | 100% Free Software sin límites de equipos                |
| **Inventario Hardware** | Básico                                                                      | Muy profundo (basado en estándares como `lshw`)          |
| **Personalización**     | Limitada a las funciones de Canonical                                       | Alta (altamente extensible mediante scripts y atributos) |

## ¿Por qué elegir Migasfree sobre Landscape?

### 1. Independencia de la Distribución

En el mundo real, las flotas no son siempre homogéneas. Puede que tengas servidores Debian, estaciones de trabajo con Fedora o incluso equipos antiguos con openSUSE. Migasfree los gestiona todos desde una única consola, mientras que Landscape te obliga a permanecer en el ecosistema Ubuntu.

### 2. Gestión de Atributos Dinámicos

Migasfree no solo gestiona paquetes; gestiona la **integridad** basada en el contexto del equipo (ubicación, hardware, usuario). Sus sistemas de atributos permiten crear reglas de despliegue extremadamente complejas que superan la gestión de "etiquetas" básica de Landscape.

### 3. Costes Escalables

Con Landscape, a medida que tu flota crece, tus costes de soporte de Canonical suelen aumentar. Migasfree permite gestionar **10.000 equipos con coste de licencia cero**, permitiendo invertir ese presupuesto en mejorar el hardware o en formación técnica.

---

## ¿Cuándo elegir Landscape?

- Si tu organización ya tiene un contrato de Ubuntu Pro y solo usas Ubuntu.
- No gestionas ni planeas gestionar equipos de otras distribuciones o Windows.

## ¿Cuándo elegir Migasfree?

- Tienes un **parque heterogéneo** (varias distros Linux y/o Windows).
- Necesitas un **inventario de hardware detallado** para auditorías técnicas.
- Quieres una solución impulsada por la comunidad sin dependencias comerciales.
- Buscas la **eficiencia extrema** demostrada en proyectos como Vitalinux.

---

::: center
[Caso de éxito Vitalinux](/casos-de-exito/vitalinux.md){.vp-button.primary}
[Comparar con Ansible](/comparativas/ansible.md){.vp-button}
:::
