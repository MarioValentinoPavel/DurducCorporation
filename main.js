(function(){
  "use strict";

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- i18n ---------- */
  var i18n = {
    es:{
      nav_services:"Servicios", nav_about:"Nosotros", nav_contact:"Contacto", nav_cta:"Hablemos",
      hero_eyebrow:"DURDUC CORPORATION · AGENCIA DE MARKETING",
      hero_title_html:'Marcas que <em>se notan</em>.',
      hero_sub:"Branding, diseño web, redes sociales y publicidad para marcas que quieren dejar de pasar desapercibidas.",
      hero_cta_primary:"Empecemos tu proyecto", hero_cta_secondary:"Ver servicios", hero_eyebrow2:"Descubre más",
      marquee_text:'<b>BRANDING</b>·<b>DISEÑO WEB</b>·<b>REDES SOCIALES</b>·<b>PUBLICIDAD</b>·<b>CONTENIDO</b>',
      quote_drop:"E", quote_rest:"l marketing no tiene que ser aburrido para funcionar.", quote_cite:"— Durduc Corporation",
      more_info:"Más información",
      services_eyebrow:"QUÉ HACEMOS", services_title:"Todo lo que tu marca necesita para destacar.",
      service1_title:"Branding &amp; Identidad", service1_hook:"Una marca que se recuerda a la primera.",
      service1_desc:"Naming, logotipo, paleta y guía de estilo pensados para que tu marca se reconozca en cualquier sitio.", service1_cta:"Quiero mi identidad",
      service2_title:"Diseño Web", service2_hook:"Una web que enamora y que vende.",
      service2_desc:"Sitios rápidos, cuidados al detalle y pensados para convertir visitas en clientes reales.", service2_cta:"Quiero mi web",
      service3_title:"Redes Sociales", service3_hook:"Presencia constante, sin que tú muevas un dedo.",
      service3_desc:"Estrategia, contenido y calendario editorial gestionados de principio a fin, con resultados medibles.", service3_cta:"Quiero gestionar mis redes",
      service4_title:"Publicidad &amp; Performance", service4_hook:"Campañas que generan resultados, no solo alcance.",
      service4_desc:"Publicidad en Meta y Google optimizada al detalle, con informes claros mes a mes.", service4_cta:"Quiero más clientes",
      about_eyebrow:"QUIÉNES SOMOS", about_title:"Una agencia con nombre propio, no un departamento anónimo.",
      about_p1:"Durduc Corporation nace con una idea simple: el marketing funciona mejor cuando hay alguien detrás que se lo toma como propio. Cada proyecto se piensa a medida, sin plantillas ni respuestas automáticas.",
      about_p2:"Cuando trabajas con nosotros, hablas siempre con la misma persona: quien diseña la estrategia es quien la ejecuta y quien te la explica.", about_cta:"Conoce cómo trabajamos",
      stat1_label:"Tiempo de respuesta", stat2_label:"Proyectos a medida", stat3_label:"Idiomas, un mismo equipo", stat4_label:"Permanencia obligatoria",
      why_eyebrow:"POR QUÉ DURDUC", why_title:"Trato cercano y resultados que no dependen de la suerte.",
      why_sub:"Nada de plantillas ni contratos eternos. Cada decisión se toma pensando en tu negocio, no en la comodidad de la agencia.",
      why1_title:"Sin permanencia", why1_desc:"Trabajamos mes a mes. Una buena relación se sostiene con resultados, no con letra pequeña.",
      why2_title:"Informes claros", why2_desc:"Sabrás siempre en qué se invierte cada euro, sin tecnicismos ni excusas.",
      why3_title:"Un único interlocutor", why3_desc:"Hablas siempre con quien lleva tu proyecto, nunca con un buzón de voz.",
      cta2_eyebrow:"SIGUIENTE PASO", cta2_title:"Démosle a tu marca el lugar que merece.",
      cta2_sub:"Cuéntanos tu proyecto y te decimos, sin compromiso, por dónde empezar.", cta2_button:"Cuéntanos tu proyecto",
      contact_eyebrow:"HABLEMOS", contact_title:"Escríbenos y empecemos.",
      contact_sub:"Respondemos en menos de 24 horas con una propuesta concreta, no con un formulario automático.",
      form_name:"Nombre", form_email:"Email", form_company:"Empresa (opcional)",
      form_service_label:"SERVICIO DE INTERÉS",
      opt_service1:"Branding &amp; Identidad", opt_service2:"Diseño Web", opt_service3:"Redes Sociales", opt_service4:"Publicidad &amp; Performance", opt_service5:"No estoy segura",
      form_message:"Cuéntanos tu proyecto", form_privacy:"He leído y acepto la política de privacidad.",
      form_submit:"Enviar mensaje", form_success:"Mensaje recibido. Te escribimos muy pronto.",
      footer_tagline:"Marcas que se notan.", footer_rights:"Todos los derechos reservados."
    },
    ca:{
      nav_services:"Serveis", nav_about:"Nosaltres", nav_contact:"Contacte", nav_cta:"Parlem",
      hero_eyebrow:"DURDUC CORPORATION · AGÈNCIA DE MÀRQUETING",
      hero_title_html:'Marques que <em>es noten</em>.',
      hero_sub:"Branding, disseny web, xarxes socials i publicitat per a marques que volen deixar de passar desapercebudes.",
      hero_cta_primary:"Comencem el teu projecte", hero_cta_secondary:"Veure serveis", hero_eyebrow2:"Descobreix més",
      marquee_text:'<b>BRANDING</b>·<b>DISSENY WEB</b>·<b>XARXES SOCIALS</b>·<b>PUBLICITAT</b>·<b>CONTINGUT</b>',
      quote_drop:"E", quote_rest:"l màrqueting no ha de ser avorrit per funcionar.", quote_cite:"— Durduc Corporation",
      more_info:"Més informació",
      services_eyebrow:"QUÈ FEM", services_title:"Tot el que la teva marca necessita per destacar.",
      service1_title:"Branding &amp; Identitat", service1_hook:"Una marca que es recorda a la primera.",
      service1_desc:"Naming, logotip, paleta i guia d'estil pensats perquè la teva marca es reconegui a qualsevol lloc.", service1_cta:"Vull la meva identitat",
      service2_title:"Disseny Web", service2_hook:"Una web que enamora i que ven.",
      service2_desc:"Llocs ràpids, cuidats al detall i pensats per convertir visites en clients reals.", service2_cta:"Vull la meva web",
      service3_title:"Xarxes Socials", service3_hook:"Presència constant, sense que tu moguis un dit.",
      service3_desc:"Estratègia, contingut i calendari editorial gestionats de principi a fi, amb resultats mesurables.", service3_cta:"Vull gestionar les meves xarxes",
      service4_title:"Publicitat &amp; Performance", service4_hook:"Campanyes que generen resultats, no només abast.",
      service4_desc:"Publicitat a Meta i Google optimitzada al detall, amb informes clars mes a mes.", service4_cta:"Vull més clients",
      about_eyebrow:"QUI SOM", about_title:"Una agència amb nom propi, no un departament anònim.",
      about_p1:"Durduc Corporation neix amb una idea senzilla: el màrqueting funciona millor quan hi ha algú al darrere que se l'estima com a propi. Cada projecte es pensa a mida, sense plantilles ni respostes automàtiques.",
      about_p2:"Quan treballes amb nosaltres, parles sempre amb la mateixa persona: qui dissenya l'estratègia és qui l'executa i qui te l'explica.", about_cta:"Descobreix com treballem",
      stat1_label:"Temps de resposta", stat2_label:"Projectes a mida", stat3_label:"Idiomes, un mateix equip", stat4_label:"Permanència obligatòria",
      why_eyebrow:"PER QUÈ DURDUC", why_title:"Tracte proper i resultats que no depenen de la sort.",
      why_sub:"Res de plantilles ni contractes eterns. Cada decisió es pren pensant en el teu negoci, no en la comoditat de l'agència.",
      why1_title:"Sense permanència", why1_desc:"Treballem mes a mes. Una bona relació es manté amb resultats, no amb lletra petita.",
      why2_title:"Informes clars", why2_desc:"Sabràs sempre en què s'inverteix cada euro, sense tecnicismes ni excuses.",
      why3_title:"Un únic interlocutor", why3_desc:"Parles sempre amb qui porta el teu projecte, mai amb una bústia de veu.",
      cta2_eyebrow:"SEGÜENT PAS", cta2_title:"Donem a la teva marca el lloc que es mereix.",
      cta2_sub:"Explica'ns el teu projecte i et diem, sense compromís, per on començar.", cta2_button:"Explica'ns el teu projecte",
      contact_eyebrow:"PARLEM", contact_title:"Escriu-nos i comencem.",
      contact_sub:"Responem en menys de 24 hores amb una proposta concreta, no amb un formulari automàtic.",
      form_name:"Nom", form_email:"Email", form_company:"Empresa (opcional)",
      form_service_label:"SERVEI D'INTERÈS",
      opt_service1:"Branding &amp; Identitat", opt_service2:"Disseny Web", opt_service3:"Xarxes Socials", opt_service4:"Publicitat &amp; Performance", opt_service5:"No n'estic segura",
      form_message:"Explica'ns el teu projecte", form_privacy:"He llegit i accepto la política de privacitat.",
      form_submit:"Enviar missatge", form_success:"Missatge rebut. T'escrivim molt aviat.",
      footer_tagline:"Marques que es noten.", footer_rights:"Tots els drets reservats."
    },
    ro:{
      nav_services:"Servicii", nav_about:"Despre noi", nav_contact:"Contact", nav_cta:"Hai să vorbim",
      hero_eyebrow:"DURDUC CORPORATION · AGENȚIE DE MARKETING",
      hero_title_html:'Branduri care <em>se remarcă</em>.',
      hero_sub:"Branding, design web, social media și publicitate pentru branduri care vor să nu mai treacă neobservate.",
      hero_cta_primary:"Hai să începem proiectul tău", hero_cta_secondary:"Vezi serviciile", hero_eyebrow2:"Descoperă mai mult",
      marquee_text:'<b>BRANDING</b>·<b>DESIGN WEB</b>·<b>SOCIAL MEDIA</b>·<b>PUBLICITATE</b>·<b>CONȚINUT</b>',
      quote_drop:"M", quote_rest:"arketingul nu trebuie să fie plictisitor ca să funcționeze.", quote_cite:"— Durduc Corporation",
      more_info:"Mai multe detalii",
      services_eyebrow:"CE FACEM", services_title:"Tot ce are nevoie brandul tău ca să iasă în evidență.",
      service1_title:"Branding &amp; Identitate", service1_hook:"Un brand care se ține minte din prima.",
      service1_desc:"Naming, logo, paletă și ghid de stil, gândite ca brandul tău să fie recunoscut oriunde.", service1_cta:"Vreau identitatea mea",
      service2_title:"Design Web", service2_hook:"Un site care place și care vinde.",
      service2_desc:"Site-uri rapide, lucrate în detaliu, gândite să transforme vizitatorii în clienți reali.", service2_cta:"Vreau site-ul meu",
      service3_title:"Social Media", service3_hook:"Prezență constantă, fără ca tu să miști un deget.",
      service3_desc:"Strategie, conținut și calendar editorial gestionate integral, cu rezultate măsurabile.", service3_cta:"Vreau să-mi gestionați rețelele",
      service4_title:"Publicitate &amp; Performance", service4_hook:"Campanii care aduc rezultate, nu doar afișări.",
      service4_desc:"Publicitate pe Meta și Google, optimizată în detaliu, cu rapoarte clare lună de lună.", service4_cta:"Vreau mai mulți clienți",
      about_eyebrow:"CINE SUNTEM", about_title:"O agenție cu nume propriu, nu un departament anonim.",
      about_p1:"Durduc Corporation pornește de la o idee simplă: marketingul funcționează mai bine când există cineva în spate care tratează proiectul ca fiind al său. Fiecare proiect este gândit pe măsură, fără șabloane sau răspunsuri automate.",
      about_p2:"Când lucrezi cu noi, vorbești mereu cu aceeași persoană: cea care creează strategia este cea care o pune în practică și ți-o explică.", about_cta:"Descoperă cum lucrăm",
      stat1_label:"Timp de răspuns", stat2_label:"Proiecte personalizate", stat3_label:"Limbi, aceeași echipă", stat4_label:"Contract pe termen lung",
      why_eyebrow:"DE CE DURDUC", why_title:"Relație apropiată și rezultate care nu depind de noroc.",
      why_sub:"Fără șabloane și fără contracte eterne. Fiecare decizie se ia gândindu-ne la afacerea ta, nu la confortul agenției.",
      why1_title:"Fără obligații pe termen lung", why1_desc:"Lucrăm lună de lună. O relație bună se susține prin rezultate, nu prin clauze ascunse.",
      why2_title:"Rapoarte clare", why2_desc:"Vei ști mereu exact unde se duce fiecare euro investit, fără termeni tehnici sau scuze.",
      why3_title:"Un singur interlocutor", why3_desc:"Vorbești mereu cu persoana care se ocupă de proiectul tău, niciodată cu o căsuță vocală.",
      cta2_eyebrow:"URMĂTORUL PAS", cta2_title:"Hai să dăm brandului tău locul pe care îl merită.",
      cta2_sub:"Spune-ne despre proiectul tău și îți spunem, fără obligații, de unde să începem.", cta2_button:"Spune-ne despre proiectul tău",
      contact_eyebrow:"HAI SĂ VORBIM", contact_title:"Scrie-ne și hai să începem.",
      contact_sub:"Răspundem în mai puțin de 24 de ore cu o propunere concretă, nu cu un formular automat.",
      form_name:"Nume", form_email:"Email", form_company:"Companie (opțional)",
      form_service_label:"SERVICIU DE INTERES",
      opt_service1:"Branding &amp; Identitate", opt_service2:"Design Web", opt_service3:"Social Media", opt_service4:"Publicitate &amp; Performance", opt_service5:"Nu sunt sigură",
      form_message:"Spune-ne despre proiectul tău", form_privacy:"Am citit și sunt de acord cu politica de confidențialitate.",
      form_submit:"Trimite mesajul", form_success:"Mesaj primit. Îți scriem foarte curând.",
      footer_tagline:"Branduri care se remarcă.", footer_rights:"Toate drepturile rezervate."
    }
  };

  function applyLang(lang){
    var dict = i18n[lang] || i18n.es;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var key = el.getAttribute('data-i18n-html');
      if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-langs] button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try{ localStorage.setItem('durduc_lang', lang); }catch(e){}
  }

  document.querySelectorAll('[data-langs] button').forEach(function(btn){
    btn.addEventListener('click', function(){ applyLang(btn.getAttribute('data-lang')); });
  });

  var savedLang = 'es';
  try{ savedLang = localStorage.getItem('durduc_lang') || 'es'; }catch(e){}
  applyLang(savedLang);

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burgerBtn');
  var menu = document.getElementById('mobileMenu');
  var closeBtn = document.getElementById('closeMenu');
  burger.addEventListener('click', function(){ menu.classList.add('open'); });
  closeBtn.addEventListener('click', function(){ menu.classList.remove('open'); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ menu.classList.remove('open'); }); });

  /* ---------- custom cursor ---------- */
  var cur = document.getElementById('cursor');
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(fine){
    window.addEventListener('mousemove', function(e){
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
      cur.classList.add('active');
    });
    document.querySelectorAll('a, button, input, textarea, select').forEach(function(el){
      el.addEventListener('mouseenter', function(){ cur.classList.add('big'); });
      el.addEventListener('mouseleave', function(){ cur.classList.remove('big'); });
    });
  }

  /* ---------- scroll reveal ---------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if('IntersectionObserver' in window && !reduced){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, {threshold:.15});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); });
  }

  /* ---------- contact form ---------- */
  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formSuccess').classList.add('show');
    form.reset();
  });

})();
