# Durduc Corporation

Sitio web de la agencia de marketing Durduc Corporation. Es una web estática (HTML + CSS + JS, sin frameworks ni build), disponible en español, catalán y rumano.

## Estructura

```
durduc-corporation/
├── index.html        # estructura de la página
├── css/style.css      # estilos
├── js/main.js          # idiomas, menú móvil, cursor, animaciones, formulario
├── images/
│   ├── hero.jpg        # foto del hero
│   └── about.jpg        # foto de la sección "Nosotros"
└── package.json
```

## Ver la web en tu ordenador

No hace falta instalar nada: puedes abrir `index.html` directamente con doble clic en el navegador.

Si prefieres servirla desde un servidor local (recomendado para que las rutas se comporten igual que en producción):

```bash
npm start
```

Esto usa `npx serve` para levantar un servidor en `http://localhost:3000`.

## Publicar en GitHub Pages

1. Crea el repositorio en GitHub y sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primera versión de la web de Durduc Corporation"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/durduc-corporation.git
   git push -u origin main
   ```
2. En el repositorio, ve a **Settings → Pages**.
3. En "Source" elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub te dará una URL tipo `https://<tu-usuario>.github.io/durduc-corporation/`.

## Editar contenido

- **Textos e idiomas**: todos los textos de la web están en el objeto `i18n` al principio de `js/main.js`, con una clave por idioma (`es`, `ca`, `ro`). Cada texto tiene su propia clave (por ejemplo `hero_title_html`, `service1_cta`) que se corresponde con el atributo `data-i18n` del HTML.
- **Fotos**: sustituye `images/hero.jpg` y `images/about.jpg` por otras del mismo nombre para cambiarlas, o cambia la ruta en `index.html` si usas otro nombre de archivo.
- **Datos de contacto**: edita el email, Instagram y teléfono dentro de la sección `#contacto` en `index.html` (son de ejemplo, sustitúyelos por los reales).
- **Colores**: están definidos como variables CSS al principio de `css/style.css` (`--black`, `--nude`, `--cream`, etc.).
