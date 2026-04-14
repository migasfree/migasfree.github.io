# Product Marketing Context

_Last updated: 2026-04-14_

## Product Overview

**One-liner:** Gestión de sistemas e integridad para flotas de ordenadores a gran escala.
**What it does:** Es una plataforma de configuración dinámica que automatiza el despliegue de software, la gestión de inventario y la integridad de los sistemas basándose en atributos (hardware, ubicación, usuario) y calendarios inteligentes.
**Product category:** Unified Endpoint Management (UEM) / Fleet Configuration Management.
**Product type:** Open Source Software (GPL-3.0).
**Business model:** Open Source con potencial para servicios de soporte/consultoría y despliegues empresariales.

## Target Audience

**Target companies:** Sector Educativo Público (Consejerías de Educación), Universidades y Centros de FP. También aplicable a administraciones públicas locales.
**Decision-makers:** Coordinadores TIC de centros educativos, Responsables de Sistemas en Consejerías, Directores de Centros.
**Primary use case:** Gestionar una red masiva de centros educativos con configuraciones personalizadas por aula o colegio sin desbordar al equipo técnico central.
**Jobs to be done:**

- "Gestionar miles de equipos distribuidos en cientos de centros con solo 2 o 3 técnicos."
- "Automatizar el despliegue de software educativo específico para currículos o exámenes en fechas concretas."
- "Permitir que los centros se coordinen con el equipo central de forma ágil y rastreable."

## Personas

| Persona                | Cares about                  | Challenge                                                | Value we promise                                               |
| ---------------------- | ---------------------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
| **Sysadmin Senior**    | Automatización y estabilidad | Equipos que se desconfiguran o requieren atención manual | Paz mental: una vez empaquetado, Migasfree lo mantiene.        |
| **Director IT (CTO)**  | Costes y Cumplimiento        | Auditoría difícil de realizar y costes de soporte altos  | Visibilidad total del inventario y reducción de tickets.       |
| **Técnico de Soporte** | Facilidad de despliegue      | Instalar equipos nuevos es lento y propenso a errores    | Configuración 0: Instalar cliente y el equipo se autogestiona. |

## Problems & Pain Points

**Core problem:** Gestionar un parque de ordenadores heterogéneo es un caos manual que consume recursos y genera brechas de seguridad.
**Why alternatives fall short:**

- Ansible/Puppet/Chef están orientados a servidores y fallan con flotas de portátiles (conexiones intermitentes, NAT).
- SCCM (Microsoft) es caro, complejo y solo para Windows.
- Winget carece de gestión centralizada y control de firmas GPG robusto.
  **What it costs them:** Tiempo de soporte (horas-hombre), inestabilidad de red y falta de control sobre qué hay instalado realmente.
  **Emotional tension:** Estrés por parches de seguridad críticos no aplicados y miedo a la desincronización de configuraciones.

## Competitive Landscape

**Direct:** Landscape (Ubuntu), SCCM (Microsoft Explorer), ManageEngine.
**Secondary:** Ansible, Puppet (se usan para fleet management pero no son su foco primario).
**Indirect:** Scripts manuales de bash/regedit, imágenes de disco clonadas (Clonezilla/Ghost).

## Differentiation

**Key differentiators:**

- **Atributos y Calendarios:** Despliegue inteligente basado en quién es el equipo y cuándo es mejor actualizar.
- **Integridad:** No solo instala, "mantiene". Si algo cambia localmente, Migasfree lo devuelve a su estado deseado.
- **Multiplataforma:** Gestión unificada de Linux y Windows desde una única consola.
- **Empaquetar la configuración:** Trata la configuración como software, versionable y reproducible.

## Objections

| Objection                     | Response                                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| "Ya usamos Ansible"           | Ansible es genial para servidores; Migasfree está diseñado para la "selva" de los escritorios y redes intermitentes. |
| "Es solo para Linux"          | Falso. Con la v5, la gestión de Windows (vía WPT) es de primer nivel.                                                |
| "Parece complejo de instalar" | Nuestra "Configuración 0" permite que un equipo se registre y configure solo.                                        |

## Brand Voice

**Tone:** Profesional, Técnico pero accesible, Maduro (15+ años de experiencia).
**Style:** Directo, enfocado en la resolución de problemas reales (ingeniería sobre marketing).
**Personality:** FIABLE, ROBUSTO, LIBRE (Soberanía tecnológica).

## Proof Points

**Metrics:** Gestión de ~10.000 equipos con solo 2 técnicos (Ratio 1:5000).
**Customers:** Vitalinux (Gobierno de Aragón), Ayuntamiento de Zaragoza.
**Value themes:**

| Theme                | Proof                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Eficiencia Extrema   | 2 técnicos gestionando 145 centros educativos (Vitalinux).                                                             |
| Adaptabilidad        | Capacidad de personalizar configuraciones hasta el nivel de centro o aula (Fondos de escritorio, software específico). |
| Automatización CI/CD | Integración total con Gitlab/Redmine para despliegues en segundos (Ejemplo: cambio de fondo en 53 segundos).           |

## Goals

**Business goal:** Aumentar la adopción en el sector empresarial y educativo fuera de España.
**Conversion action:** Solicitar una demo o descargar la imagen Docker de "migasfree-swarm" para pruebas.
