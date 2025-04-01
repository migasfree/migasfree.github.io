import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as r,h as o,g as i,f as t,r as s,o as l}from"./app-TpQh9JgD.js";const c="/img/vitalinux-support.png",d={},p={style:{"text-align":"center"}},u={style:{"text-align":"center"}};function m(g,e){const a=s("LiteYoutubeEmbed");return l(),r("div",null,[e[0]||(e[0]=o('<p>Mientras reescribía &quot;Fun with Migasfree&quot; para la versión 5, sentí la necesidad de incluir un ejemplo práctico y sencillo que demostrara cómo funciona el proceso de Gestión de Configuración de Software (SCM) al integrar Migasfree. Aunque el paso de la teoría a la práctica puede parecer desafiante, observar un ejemplo concreto y equilibrado ayuda, y es aquí donde los conceptos complejos se vuelven accesibles y fáciles de aplicar.</p><p>A los días de tenerlo escrito, mi hijo me sorprendió con un:</p><p>-- Papá, me gustaría regalarte una animación para migasfree.</p><p>-- Muchas gracias, Jesús, me hace mucha ilusión. Pensaré en ello.</p><p>En ese momento no tenía ni idea sobre qué podría tratar mi regalo.</p><p>Al día siguiente me decidí. Quería una animación del ejemplo de <a href="https://docs.vitalinux.educa.aragon.es/" target="_blank" rel="noopener noreferrer">Vitalinux</a> que elegí para &quot;Fun with Migasfree v5&quot;. Era perfecto: daba para cierre de un capítulo de libro, una entrada en este blog e incluso para una animación.</p><p>Vitalinux es la distribución Linux de la Diputación General de Aragón diseñada especialmente para el ámbito educativo.</p><p>Una de las características que diferencia a Vitalinux de otras distribuciones es que lleva instalado un cliente migasfree, permitiendo gestionar de forma remota, automatizada y desatendida el software de los equipos.</p><p>Lo que más me sorprende de Vitalinux es cómo, con solo dos técnicos al mando, logran gestionar alrededor de 10.000 equipos. Por supuesto, esto no sería posible sin el apoyo de los coordinadores Vitalinux de cada centro. Esta colaboración me parece un auténtico ejemplo de eficiencia y organización. ¡Chapeau!</p><p>Te invito a ver cómo quedó la animación, y después, te comentaré algunos detalles:</p>',10)),i("div",p,[t(a,{id:"kuCle7s2IGw",title:"Migasfree es como, ¿mermelada?"})]),e[1]||(e[1]=o('<p>Gestionar la personalización de 145 <a href="https://docs.vitalinux.educa.aragon.es/info/MapaCentros.html" target="_blank" rel="noopener noreferrer">centros educativos</a>, cada uno con solicitudes individuales, es un desafío impresionante. No se trata sólo de cambiar los fondos de pantalla de cada colegio, sino de hacerlo de manera automatizada y dentro de rangos de fechas predefinidos, ¡a solicitud de cada centro! ¿Qué clase de bendita locura es esta? Sin duda, es una auténtica locura, pero maravillosamente bien organizada.</p><p>Aunque cambiar un fondo de pantalla pueda no parecer un caso de uso técnicamente complejo, es un excelente ejemplo de cómo gestionan sus tareas con eficacia.</p><p>Este caso en particular es perfecto para ilustrar su magia.</p><p>Dado que su trabajo se basa en tecnologías abiertas y está accesible al público, voy a explicarte cómo llevan a cabo la Gestión de Cambios de Software. Para ello, te muestro un caso sencillo.</p><figure><img src="'+c+'" alt="Petición de cambio" tabindex="0" loading="lazy"><figcaption>Petición de cambio</figcaption></figure><p>En la imagen, puedes ver una <strong>solicitud de cambio</strong> en <a href="https://www.redmine.org/" target="_blank" rel="noopener noreferrer">Redmine</a>, el sistema de gestión de proyectos de Vitalinux. Esta petición fue enviada al <a href="https://soporte.vitalinux.educa.aragon.es/projects/vitallinux-dga-soporte" target="_blank" rel="noopener noreferrer">soporte de Vitalinux</a> y resuelta mediante el proceso de Integración Continua y Despliegue Continuo (CI/CD). El caso en particular consiste en un cambio de fondo de pantalla para todos los ordenadores del <a href="https://www.colegiotenerias.com/" target="_blank" rel="noopener noreferrer">Colegio de Educación Infantil y Primaria Tenerías</a> de Zaragoza, que debía mostrarse sólo entre el 24 y el 29 de noviembre.</p><p>A continuación, te explico cómo se llevó a cabo el proceso:</p><ol><li><p>La solicitud fue realizada por Daniel el 19/11/2024, quien pidió que el fondo de pantalla del colegio se modificara, adjuntando imagen y el rango de fechas.</p></li><li><p>Arturo realizó el <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/commit/3b16cec8e46a1fa0e54d4a4a57fdeb85c5451e26" target="_blank" rel="noopener noreferrer">cambio</a> en el paquete <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias" target="_blank" rel="noopener noreferrer">vx-dga-l-conf-centro-ceiptenerias</a> el 20/11/2024 a las 13:00:06.</p></li><li><p>Inmediatamente después <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/tags" target="_blank" rel="noopener noreferrer">etiquetó</a> este cambio de configuración incrementando la versión <code>1.0-18</code> en el paquete. Al etiquetar, tal y como está programada la CI/CD para este paquete en el fichero <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/blob/master/.gitlab-ci.yml" target="_blank" rel="noopener noreferrer">.gitlab-ci.yml</a>, se lanzaron los diferentes trabajos automatizados.</p></li><li><p>El <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/pipelines/3729" target="_blank" rel="noopener noreferrer">proceso de CI/CD</a> de Vitalinux automáticamente <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/jobs/12211" target="_blank" rel="noopener noreferrer">construyó</a> la nueva versión del paquete tanto para Vitalinux 18 como para Vitalinux 3x en la etapa &quot;Build&quot; del <em>pipeline</em> de la CI/CD.</p></li><li><p>Estos paquetes fueron <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/jobs/12213" target="_blank" rel="noopener noreferrer">subidos</a> automáticamente al servidor migasfree en la etapa &quot;Upload&quot; y <a href="https://gitlab.vitalinux.educa.aragon.es/vitalinux-devops/vx-dga-l-conf-centro-ceiptenerias/-/jobs/12215" target="_blank" rel="noopener noreferrer">liberados</a> en el despliegue Migasfree <code>repo-ceip-tenerias-zaragoza</code> en la etapa &quot;Deployment&quot;, todo ello para las dos versiones de Vitalinux mencionadas. Toda la CI/CD se realizó en 53 segundos.</p></li><li><p>A partir de este momento, los equipos del colegio actualizarían su configuración de fondo de pantalla cuando los usuarios iniciaron sesión, sin necesidad de intervención manual alguna.</p></li><li><p>Así, entre 24 al 29 de noviembre, apareció automáticamente el fondo de pantalla solicitado en todos los ordenadores del colegio Tenerías.</p></li></ol><p>Es importante destacar que Arturo se centró <strong>exclusivamente</strong> en la tarea técnica de modificar los archivos necesarios del paquete. Luego, simplemente etiquetó la versión del paquete incrementándola y finalmente registró su acción en la solicitud de cambio. El resto del proceso fue completamente automatizado gracias a la CI/CD de Vitalinux y a Migasfree. Así, con un mínimo esfuerzo, este cambio se implementó de forma rápida, eficiente y sin errores.</p><p>Aunque tengo una relación estrecha con Arturo y Nacho, los técnicos de Vitalinux, y compartimos ideas y conocimientos periódicamente, debo aclarar que toda esta información la he obtenido accediendo a su gestor de proyectos público. ¿Te has dado cuenta que sin ser ni tú ni yo parte de Vitalinux ni conocer a priori como trabajan, hemos podido seguir todo lo que hicieron? Este ejemplo demuestra cómo las herramientas de la <strong>SCM</strong> pueden hacer que tareas complejas y repetitivas se realicen de manera controlada, rastreable, auditable y eficaz.</p><p>Vitalinux siempre está mejorándose y renovándose. No me extrañaría ver a los colegios de Aragón autogestionando su propia configuración con algo que inventen. Sólo necesitarían un poco de tiempo y algo más de recursos. Con esto último o sin ello, apuesto a que nos dejarán de nuevo boquiabiertos, ¡al tiempo! Nosotros estaremos con ellos, apoyándoles en lo que humildemente podamos.</p><p>Si quieres explorar más sobre los paquetes de Vitalinux, te invito a <a href="https://gitlab.vitalinux.educa.aragon.es/explore" target="_blank" rel="noopener noreferrer">explorar</a>. Ya te aviso, lo de los fondos de escritorios es sólo una gotita comparado con el resto de cosas que hacen.</p><p>Enhorabuena <a href="https://www.aragon.es/" target="_blank" rel="noopener noreferrer">Gobierno de Aragón</a>. Aprovecho el momento para recordarte lo de los recursos, que cada año son más los colegios Vitalinux en Aragón y esto no para 😉</p><p>Felicidades Arturo, felicidades Nacho. Se os quiere.</p><p>Pero sobre todo, felicidades y &quot;sorpresas&quot; a toda la comunidad Vitalinux.</p><p>¡Espera, espera! Para un musical este ejemplo no da, pero, ¿y para una canción?</p>',16)),i("div",u,[t(a,{id:"r6ROllPVs3M",title:"La magia de Migasfree"})])])}const v=n(d,[["render",m],["__file","vitalinux.html.vue"]]),h=JSON.parse(`{"path":"/blog/2025/vitalinux.html","title":"Vitalinux y su magia","lang":"es-ES","frontmatter":{"title":"Vitalinux y su magia","date":"2025-03-27T21:20:00.000Z","author":"agacias","comment":false,"category":["Noticia"],"description":"Mientras reescribía \\"Fun with Migasfree\\" para la versión 5, sentí la necesidad de incluir un ejemplo práctico y sencillo que demostrara cómo funciona el proceso de Gestión de Co...","head":[["meta",{"property":"og:url","content":"http://migasfree.org/blog/2025/vitalinux.html"}],["meta",{"property":"og:site_name","content":"Migasfree"}],["meta",{"property":"og:title","content":"Vitalinux y su magia"}],["meta",{"property":"og:description","content":"Mientras reescribía \\"Fun with Migasfree\\" para la versión 5, sentí la necesidad de incluir un ejemplo práctico y sencillo que demostrara cómo funciona el proceso de Gestión de Co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://migasfree.org/img/vitalinux-support.png 'Petición de cambio'"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2025-04-01T19:58:31.000Z"}],["meta",{"property":"article:author","content":"agacias"}],["meta",{"property":"article:published_time","content":"2025-03-27T21:20:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-01T19:58:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vitalinux y su magia\\",\\"image\\":[\\"http://migasfree.org/img/vitalinux-support.png 'Petición de cambio'\\"],\\"datePublished\\":\\"2025-03-27T21:20:00.000Z\\",\\"dateModified\\":\\"2025-04-01T19:58:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"agacias\\"}]}"]]},"git":{"createdTime":1743537511000,"updatedTime":1743537511000,"contributors":[{"name":"jact","username":"jact","email":"jachavar@gmail.com","commits":1,"url":"https://github.com/jact"}]},"readingTime":{"minutes":3.81,"words":1143},"filePathRelative":"blog/2025/vitalinux.md","localizedDate":"27 de marzo de 2025","excerpt":"<p>Mientras reescribía \\"Fun with Migasfree\\" para la versión 5, sentí la necesidad de incluir un ejemplo práctico y sencillo que demostrara cómo funciona el proceso de Gestión de Configuración de Software (SCM) al integrar Migasfree. Aunque el paso de la teoría a la práctica puede parecer desafiante, observar un ejemplo concreto y equilibrado ayuda, y es aquí donde los conceptos complejos se vuelven accesibles y fáciles de aplicar.</p>\\n","autoDesc":true}`);export{v as comp,h as data};
