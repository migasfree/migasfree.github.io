import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c,b as a,d as e,a as o,w as t,i as d}from"./app-fbeb3c0f.js";const u="/img/patinete.jpg",m="/img/race_car.jpg",p={},f=a("div",{style:{"text-align":"center"}},[a("figure",null,[a("img",{src:u,alt:"migasfree actual",tabindex:"0",loading:"lazy"}),a("figcaption",null,"migasfree actual")])],-1),_=a("a",{href:"/blog/2015/2015-04-10-nullius-in-verba"},"proyecto migasfree-backend",-1),g={href:"http://www.restapitutorial.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.celeryproject.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://redis.io/",target:"_blank",rel:"noopener noreferrer"},y=a("p",null,"Era demasiado revolucionario y rompedor con la versión del servidor que teníamos en producción. Por eso se nos planteaba el reto de cómo hacer la transición entre uno y otro. Dos eran los escollos más importantes para dar el salto:",-1),q=a("li",null,"Qué hacer con los clientes antiguos que accederían al nuevo servidor.",-1),x=a("strong",null,"migasfree-frontend",-1),k=a("em",null,"mushrooms",-1),z={href:"https://github.com/migasfree/migasfree-backend",target:"_blank",rel:"noopener noreferrer"},T=a("em",null,"suite migasfree",-1),w=d('<p>Tenemos previsto que en la versión 6 (denominada extraoficialmente como <em>liver</em>), se elimine todo el código de compatibilidad que mantendremos en la versión 5 (tanto de protocolo de comunicación como de interfaz de explotación de datos). Para cuando llegue a las pantallas la versión 6, tendrá que estar listo el proyecto <strong>migasfree-frontend</strong> para consumir la API REST.</p><p>Seguramente, el proyecto <strong>migasfree-backend</strong> jamás verá la luz como un producto en producción. Sin embargo, nos ha venido que ni pintado para reflexionar sobre ideas nuevas sin tener que arrastrar lastres del pasado.</p><div style="text-align:center;"><figure><img src="'+m+'" alt="el migasfree que viene" tabindex="0" loading="lazy"><figcaption>el migasfree que viene</figcaption></figure></div><p>Nuestro deseo, con los próximos cambios que se avecinan, es convertir nuestro patinete (la versión actual) en un auténtico coche de carreras 😉.</p>',4);function E(S,j){const r=s("ExternalLinkIcon"),n=s("acronym");return l(),c("div",null,[f,a("p",null,[e("A principios del año 2015, comencé el "),_,e(" con la idea de redefinir el servidor migasfree. Enforcarlo hacia una solución escalable (con alta disponibilidad) y fácilmente explotable a través de una "),a("a",g,[e("API REST"),o(r)]),e(".")]),a("p",null,[e("Después de unos meses de trabajo, teníamos un prototipo bastante prometedor para empezar a depurar y perfilar. Venía con un nuevo protocolo de comunicación entre cliente y servidor que era a la vez cifrado y autenticado gracias a la tecnología "),a("a",v,[o(n,{title:"JSON Web Tokens"},{default:t(()=>[e("JWT")]),_:1}),o(r)]),e(", con un servicio de tareas en segundo plano gracias a "),a("a",h,[e("Celery"),o(r)]),e(" y "),a("a",b,[e("Redis"),o(r)]),e(" y con muchos cambios en el modelo de datos de la aplicación.")]),y,a("ol",null,[q,a("li",null,[e("Realizar una aplicación de "),o(n,{title:"Interfaz de Usuario"},{default:t(()=>[e("IU")]),_:1}),e(" ("),x,e(") para explotar los datos del nuevo servidor a través de la API REST.")])]),a("p",null,[e("Tras darle multitud de vueltas, hemos llegado a la conclusión de que la mejor forma de ir afrontando estos cambios tan radicales, es ir haciéndolos de manera progresiva. Para ello, en breve empezaremos a desarrollar la edición "),k,e(" del servidor de migasfree. Será la versión 5 y empezará a cambiar el modelo de datos para ir encaminándolo hacia el que tiene "),a("a",z,[e("migasfree-backend"),o(r)]),e(".")]),a("p",null,[e("Vendrá también con dos protocolos de comunicación para los clientes: el actual y el nuevo basado en "),o(n,{title:"JSON Web Tokens"},{default:t(()=>[e("JWT")]),_:1}),e(". De esta forma, esta versión 5 se convierte en una versión de transición entre lo que hay actualmente en producción y lo que queremos que se convierta la "),T,e(".")]),w])}const P=i(p,[["render",E],["__file","2016-05-25-el-plan-maestro.html.vue"]]);export{P as default};