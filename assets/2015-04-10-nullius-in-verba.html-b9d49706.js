import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c,b as a,d as e,a as o,e as l,w as d,i as u}from"./app-62475e9b.js";const p="/img/scaling_migasfree.png",m={},g={href:"https://royalsociety.org/about-us/history/",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,"Con esa intención, desde hace unos meses, estamos construyendo un nuevo migasfree. Que se apoya en conceptos que funcionan en lo que ya está hecho, pero que le da unas cuantas vueltas de tuerca a otros que, a pesar de ser funcionales, no dan la suficiente versatilidad a un proyecto de esta envergadura.",-1),h={href:"http://www.librecon.io/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://kaleidos.net/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://taiga.io/",target:"_blank",rel:"noopener noreferrer"},q=u("<p>Durante 5 años, migasfree se ha ido construyendo con parches sobre parches alrededor de una idea inicial y hay algunas cosas que ya no se aguantan sobre esos inestables andamios. Además, para construir un núcleo sólido había que clarificar y repensar algunos conceptos clave. Los tres más importantes tienen que ver con la semántica y la importancia de escoger nombres adecuados.</p><ul><li><p><strong>Repositorio</strong> evoluciona a <strong>liberación</strong>. La denominación de repositorio resultaba confusa porque se podía confundir con los repositorios estáticos de cualquier distribución Linux. Sin embargo, en migasfree se le está dando otra vertiente mucho más dinámica tanto en el eje temporal como en funcionalidades. Por esto se cambia a liberación: se distribuyen cambios de software (instalación/actualización/desinstalación) a equipos según unos atributos y un calendario.</p></li><li><p>El concepto de <strong>versión</strong> ha sido cambiado por el de <strong>proyecto</strong>. Versión daba una idea de evolución y de posibilidad de intercambio de los equipos entre otras versiones, pero la idea de proyecto es algo más estanco y deja claro que cada ordenador pertenece a un solo proyecto y no a otro. Por proyecto se entiende una distribución base (como Fedora 21 o Ubuntu 14.04) más una capa de personalización para una organización concreta.</p></li><li><p><strong>Actualización</strong> pasa a ser <strong>sincronización</strong>. La idea de actualización es demasiado genérica ya que cambios en los equipos puede haber muchos. La idea de sincronización es mucho más concreta ya que refleja el conjunto de operaciones que realizan cliente y servidor para dejar en condiciones adecuadas el puesto de trabajo.</p></li></ul>",2),y={href:"https://github.com/migasfree/migasfree-backend",target:"_blank",rel:"noopener noreferrer"},v={href:"http://es.wikipedia.org/wiki/Representational_State_Transfer",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.celeryproject.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},E={href:"http://circus.readthedocs.org/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://chaussette.readthedocs.org/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://wiki.nginx.org/",target:"_blank",rel:"noopener noreferrer"},z={href:"http://www.haproxy.org/",target:"_blank",rel:"noopener noreferrer"},P=a("div",{style:{"text-align":"center"}},[a("figure",null,[a("img",{src:p,alt:"Escalabilidad de migasfree",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Escalabilidad de migasfree")])],-1),A=a("p",null,"El trabajo dista mucho de estar acabado, pero tenemos claro que esta es la dirección sobre la que tenemos que seguir avanzando. Tampoco sabemos qué pasará cuando tengamos una versión funcional y se quiera implantar sobre un migasfree actual. Será algo que nos plantearemos en su momento. El protocolo entre cliente y servidor ha cambiado sustancialmente y, aunque es trivial cambiar los clientes, habrá que pensar muy bien cómo actualizar el servidor.",-1),C=a("strong",null,"migasfree-backend",-1);function L(I,S){const n=r("ExternalLinkIcon"),s=r("acronym");return t(),c("div",null,[a("p",null,[e("Que significa "),a("a",g,[e("cuestiónalo todo"),o(n)]),e(". Cuestiona lo que tienes alrededor pero, sobre todo, cuestiónate a ti mismo, lo que haces y cómo lo haces. Es reinventarse a sí mismo, mejorando cada día con lo que aprendes por la experiencia adquirida y por la experencia que proporcionan los conocimientos de otras personas.")]),l(" more "),b,a("p",null,[e("Esta idea de reinvención germinó en Bilbao, el pasado noviembre, mientras asistía a la "),a("a",h,[e("LibreCon"),o(n)]),e(". Allí me di cuenta de dos cosas. La primera, que el concepto de migasfree, aun siendo bueno, no terminaba de calar entre el público por su aparente complejidad. Y la segunda y más importante, que encontré la pista para que fuera más atrayente. Esta pista se basa en algo muy sencillo: deja que otros jueguen con tu aplicación para que la puedan extender y adaptar.")]),a("p",null,[e("Y para que otros puedan jugar con migasfree, había que facilitar las reglas de juego. Esta idea me llegó durante la charla de "),a("a",f,[e("Kaleidos"),o(n)]),e(" sobre "),a("a",_,[e("Taiga"),o(n)]),e(". Habían construido su proyecto dividiéndolo en capas, en otros proyectos independientes pero que se comunicaban con el principal a través de una REST API. Esto posibilita a cualquiera que conozca esta API, interactuar y explotar los datos de la forma en que más le convenga, posibilitando que la comunidad se sienta más atraida porque pueden construir otras piezas a partir de un núcleo sólido. El concepto no es revolucionario, pero de repente, comprendí que eso mismo era lo que le faltaba a migasfree.")]),q,a("p",null,[e("Pero hay muchos más cambios. El más relevante se refiere precisamente a la API que pondrá el núcleo (llamado a partir de ahora "),a("a",y,[e("migasfree-backend"),o(n)]),e(") a disposición de quien la quiera usar. Una API mucho más amplia y basada en "),a("a",v,[e("REST"),o(n)]),e(". Otro cambio, también significativo, es la nueva escalabilidad que se va a conseguir al usar un conjunto de tecnologías: "),a("a",k,[e("Celery"),o(n)]),e(", "),a("a",x,[e("Redis"),o(n)]),e(", "),a("a",E,[e("Circus"),o(n)]),e(", "),a("a",j,[e("Chaussette"),o(n)]),e(", "),a("a",w,[e("Nginx"),o(n)]),e(", "),a("a",z,[e("HAProxy"),o(n)]),e("…")]),P,A,a("p",null,[e("Cuando hayamos encauzado todos estos cambios, migasfree habrá ascendido de categoría y estará en condiciones de ser usado en organizaciones muy grandes (con más de 10 mil equipos). Además, dará la libertad de programar clientes para cualquier plataforma imaginable y frontends en cualquier tecnología que se quiera. Tan solo tendrán que seguir la API proporcionada por "),C,e(" y añadir algún nuevo "),o(s,{title:"Package Management System"},{default:d(()=>[e("PMS")]),_:1}),e(" si fuera necesario.")])])}const V=i(m,[["render",L],["__file","2015-04-10-nullius-in-verba.html.vue"]]);export{V as default};
