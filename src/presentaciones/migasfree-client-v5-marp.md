---
marp: true
theme: default
paginate: true
header: '![w:100](https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/migasfree.png)'
footer: 'migasfree-client | Systems Management Ecosystem'
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Raleway:wght@100;200;300&family=JetBrains+Mono:wght@300&display=swap');

  :root {
    --brand-primary: #431407;
    --brand-tertiary: #feda00;
    --accent: var(--brand-tertiary);
    --dark: #0a0808;
    --card: #151110;
    --border: #2a2220;
    --body: #999;
    --label: #666;
    --muted: #555;
    --light: #fff;
    --green: #22c55e;
    --red: #ef4444;
  }
  section {
    background: var(--dark);
    color: var(--light);
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    padding: 56px 72px;
  }
  h1 { font-family: 'Outfit'; font-weight: 800; font-size: 3em; color: var(--light); margin-bottom: 0.1em; }
  h2 { font-family: 'Raleway'; font-weight: 200; font-size: 1.4em; color: var(--brand-tertiary); margin-bottom: 1em; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: #888; text-transform: uppercase; letter-spacing: 0.2em; }
  p { color: #ccc; font-size: 0.95em; line-height: 1.6; }
  strong { color: var(--brand-tertiary); font-weight: 600; }
  code { font-family: 'JetBrains Mono'; background: #1a1a1a; color: #ffca28; border-radius: 4px; padding: 2px 6px; }
  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  .tag { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 4px; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 12px; margin-bottom: 6px; background: #110d0c; border: 1px solid #1a1514; }
  .row:hover { background: #1a1514; border-color: var(--brand-tertiary); }
  .card-grid { display: flex; gap: 20px; margin-top: 20px; }
  .card { flex: 1; background: var(--card); border: 1px solid var(--border); padding: 20px; border-radius: 12px; position: relative; overflow: hidden; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); }
  .card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--brand-tertiary), transparent); }

  /* Mermaid Fixes */
  .mermaid svg { max-width: 100%; height: auto; }
  .node rect { fill: #221a18 !important; stroke: var(--brand-tertiary) !important; stroke-width: 2px !important; }
  .node .label { color: #fff !important; font-family: 'Outfit' !important; font-weight: 600 !important; }
  .edgePath path { stroke: #666 !important; stroke-width: 2px !important; }
  .edgeLabel { background-color: #0a0808 !important; color: #888 !important; padding: 4px !important; }
  .cluster rect { fill: #110d0c !important; stroke: #332a28 !important; }

  /* Process Flow */
  .process-container { display: flex; flex-direction: column; align-items: center; gap: 2px; margin-top: -30px; }
  .step { background: linear-gradient(90deg, #181210, #0a0808); border: 1px solid #2a2220; padding: 7px 18px; border-radius: 8px; width: 92%; display: flex; align-items: center; gap: 14px; position: relative; box-shadow: 0 4px 15px rgba(0,0,0,0.4); }
  .step:hover { border-color: var(--brand-tertiary); background: #1a1514; }
  .step span { background: var(--brand-tertiary); color: #000; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.75em; flex-shrink: 0; font-family: 'Outfit'; box-shadow: 0 0 10px rgba(254, 218, 0, 0.3); }
  .step-arrow { color: #555; font-size: 1em; line-height: 1; margin: -2px 0; text-shadow: 0 0 5px rgba(254, 218, 0, 0.1); }
  .step small { color: #999; margin-left: auto; font-size: 0.68em; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
  .step strong { color: #fff; font-weight: 400; font-size: 1em; font-family: 'Outfit'; }
---

<!-- _class: lead -->

# migasfree-client

## La pieza clave del ecosistema **migasfree**

### Systems Management Lifecycle

<!-- 
Nota: Dar la bienvenida. Migasfree-client es el componente fundamental que se instala en los miles de puestos de trabajo para que el sistema de gestión cobre vida. Sin el cliente, el servidor es solo una base de datos.
-->

---

# ¿Qué es migasfree-client?

### El brazo ejecutor del servidor

Es el componente que sincroniza cada equipo con el servidor para la gestión centralizada de despliegue de software, inventario y periféricos.

<div class="card-grid">
<div class="card">
  <h3>Software</h3>
  <p>Instalación, actualización y borrado de paquetes.</p>
</div>
<div class="card">
  <h3>Hardware</h3>
  <p>Captura automática de inventario detallado.</p>
</div>
<div class="card">
  <h3>Devices</h3>
  <p>Configuración de impresoras y periféricos.</p>
</div>
</div>

<!-- 
Nota: Explicar que es el "puesto de mando" local. No solo instala software, sino que registra qué hardware tiene el equipo y autoconfigura periféricos sin intervención del usuario. Ejemplo real: Ayuntamiento de Zaragoza (miles de equipos).
-->

---

# Arquitectura Moderna (v5)

### Seguridad y Atomización

El salto a la versión 5 supuso una reingeniería completa centrada en la **seguridad** y la **modularidad**.

<div class="row">
  <strong>Protocolo v5:</strong> Basado en <strong>JWT</strong> (JSON Web Token), autenticado y cifrado.
</div>
<div class="row">
  <strong>Seguridad mTLS:</strong> Autenticación mutua TLS para identidad de confianza.
</div>
<div class="row">
  <strong>Payloads Cifrados:</strong> Uso de JWS (firma) y JWE (cifrado) para máxima privacidad.
</div>
<div class="row">
  <strong>Atomización:</strong> API dividida en acciones independientes para mayor escalabilidad.
</div>

<!-- 
Nota: El paso a la v5 no fue estético, fue estructural. Pasamos de un sistema monolítico a uno basado en micro-servicios internos. mTLS asegura que solo nuestros clientes hablen con nuestro servidor.
-->

---

# Comparativa de Protocolos

### De CRC a Cifrado de Grado Militar

<div class="card-grid">
<div class="card" style="border-top-color: var(--red);">
  <h3 style="color: var(--red);">Protocolo v4 (Legacy)</h3>
  <p>Mensajes firmados solo con CRC.</p>
  <pre style="font-size: 0.5em; color: #666;">{"upload_computer_message": ...}3_!Al</pre>
  <p><small>Intercepción fácil y datos en claro.</small></p>
</div>
<div class="card" style="border-top-color: var(--green);">
  <h3 style="color: var(--green);">Protocolo v5 (Modern)</h3>
  <p>JWT + JWE + JWS.</p>
  <pre style="font-size: 0.5em; color: #666;">eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...</pre>
  <p><small>Seguro incluso en canales HTTP sin SSL.</small></p>
</div>
</div>

<!-- 
Nota: En v4 si alguien "husmeaba" la red podía ver el JSON. En v5, aunque uses HTTP plano, el payload va firmado (JWS) y cifrado (JWE). Nadie puede suplantar al servidor ni leer los datos sensibles.
-->

---

# CLI Unificada y Potente

### UX mejorada con Python Rich

Adiós a los comandos dispersos. Ahora todo se gestiona bajo el comando base `migasfree`.

```bash
migasfree [subcomando]
```

- **register**: Vincula el equipo al servidor.
- **sync**: La operación principal de sincronización.
- **install/purge**: Gestión directa de paquetes.
- **info/label**: Identificación y telemetría.
- **tags**: Gestión de etiquetas dinámicas.

<!-- 
Nota: Se ha pasado de muchos comandos pequeños a uno solo con subcomandos. Destacar el uso de Python Rich: ahora las tablas son legibles, hay colores y barras de progreso reales en la terminal.
-->

---

# Sincronización Granular

### La potencia de la atomización

El comando `sync` permite ahora ejecuciones parciales para optimizar recursos y tiempo.

<div class="row">
  <code style="color: var(--brand-tertiary);">migasfree sync -dev</code> <span>Configuración de dispositivos (impresoras).</span>
</div>
<div class="row">
  <code style="color: var(--brand-tertiary);">migasfree sync -hard</code> <span>Subida de inventario de hardware.</span>
</div>
<div class="row">
  <code style="color: var(--brand-tertiary);">migasfree sync -soft</code> <span>Auditoría de software instalado.</span>
</div>
<div class="row">
  <code style="color: var(--brand-tertiary);">migasfree sync -fau</code> <span>Reporte de fallas y errores locales.</span>
</div>

<!-- 
Nota: Esto es vital para el ahorro de tiempo. Si solo quieres actualizar las impresoras de un aula entera, no necesitas que el cliente revise miles de paquetes de software. Ahorro de ancho de banda y CPU.
-->

---

# Multiplataforma Real

### Llegando al ecosistema Windows

Migasfree-client v5 rompe las barreras de Linux, integrándose plenamente en Windows 10/11.

<div class="card-grid">
<div class="card">
  <h3>PMS: wpt</h3>
  <p><strong>Windows Package Tool</strong>: el gestor propio desarrollado para el ecosistema migasfree.</p>
</div>
<div class="card">
  <h3>Hardware: lshw-win</h3>
  <p>Emulador <code>lshw</code> basado en WMI para Windows.</p>
</div>
<div class="card">
  <h3>Cross-Platform Core</h3>
  <p>Mismo lenguaje, misma lógica, diferente backend.</p>
</div>
</div>

<!-- 
Nota: Windows es ahora un "ciudadano de primera clase". Gracias a WPT y lshw-win, la gestión de un PC con Windows es técnicamente equivalente a la de un Linux desde el punto de vista del administrador del servidor.
-->

---

# Windows Package Tool (wpt)

### El PMS definitivo para Windows

WPT surge de la necesidad de tener un sistema de paquetería fiable, sencillo y bajo control total, sustituyendo la dependencia de _winget_.

<div class="row">
  <strong>Linux-like Experience:</strong> Comandos familiares (<code>update</code>, <code>search</code>, <code>install</code>).
</div>
<div class="row">
  <strong>Seguridad GPG:</strong> Verificación de integridad de repositorios mediante firmas GPG.
</div>
<div class="row">
  <strong>Formato Propio:</strong> Especificación técnica optimizada para el despliegue corporativo.
</div>
<div class="row">
  <strong>Independencia:</strong> Sin dependencias externas de stores comerciales o servicios de terceros.
</div>

<!-- 
Nota: ¿Por qué no usamos winget al final? Porque queríamos control total sobre la integridad (firmas GPG) y evitar la dependencia de la API de Microsoft. WPT es ligero, determinista y seguro.
-->

---

# Sistema de Plugins

### Diseñado para la extensibilidad

La arquitectura de plugins permite que migasfree-client se adapte a cualquier entorno sin modificar el núcleo.

<div class="card-grid">
<div class="card">
  <h3>Package Managers</h3>
  <p>Soporte nativo para: <strong>APT, YUM, ZYPPER, PACMAN, WPT</strong>.</p>
</div>
<div class="card">
  <h3>Devices</h3>
  <p>Módulos intercambiables para la gestión de periféricos específicos.</p>
</div>
</div>

<!-- 
Nota: Mencionar que cualquiera puede escribir un plugin para un nuevo gestor de paquetes (ej. Alpine/apk) sin tocar el código base del cliente. Es un diseño "Open-Closed" (abierto a extensión, cerrado a modificación).
-->

---

# Flujo de Sincronización

### Proceso determinista y secuencial

<div class="process-container">
  <div class="step"><span>1</span> <strong>Atributos y Fallas</strong> <small>Subida de telemetría inicial</small></div>
  <div class="step-arrow">↓</div>
  <div class="step"><span>2</span> <strong>Gestión de Paquetes</strong> <small>Configuración de repositorios y despliegue</small></div>
  <div class="step-arrow">↓</div>
  <div class="step"><span>3</span> <strong>Inventario Software</strong> <small>Auditoría de paquetes instalados</small></div>
  <div class="step-arrow">↓</div>
  <div class="step"><span>4</span> <strong>Inventario Hardware</strong> <small>Captura técnica con lshw</small></div>
  <div class="step-arrow">↓</div>
  <div class="step"><span>5</span> <strong>Dispositivos Lógicos</strong> <small>Configuración de impresoras/CUPS</small></div>
  <div class="step-arrow">↓</div>
  <div class="step"><span>6</span> <strong>Traits y Eventos</strong> <small>Finalización y reporte de errores</small></div>
</div>

<!-- 
Nota: Este es el "corazón" técnico. El orden es crítico: los atributos (IP, usuario) deciden qué software se instala. El inventario de software solo se sube si ha habido cambios exitosos.
-->

---

# ¡Gracias por vuestra atención

### Recursos y Contacto

<div class="card-grid">
<div class="card">
  <h3>Código Fuente</h3>
  <p><small>github.com/migasfree/migasfree-client</small></p>
</div>
<div class="card">
  <h3>Documentación</h3>
  <p><small>docs.migasfree.org</small></p>
</div>
</div>

### Preguntas?

<!-- _header: '' -->
<!-- _footer: 'migasfree | Modern Systems Management' -->
