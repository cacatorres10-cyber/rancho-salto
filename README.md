# Rancho Salto Taíno — Site

Landing page bilíngue (ES/EN) para o Rancho Salto Taíno, rancho ecológico em Anamuya, Higüey, República Dominicana (Instagram: [@ranchosaltotainord](https://www.instagram.com/ranchosaltotainord)).

Stack: Vite + React 19 + TypeScript + Tailwind CSS v3 + framer-motion, estrutura shadcn (`src/components/ui`).

## Rodar localmente

```bash
npm install
npm run dev       # desenvolvimento (http://localhost:5173)
npm run build     # build de producao em dist/
npm run preview   # serve o build (http://localhost:4173)
```

## Mídia

Praticamente todo o material é real: fotos do Instagram [@ranchosaltotainord](https://www.instagram.com/ranchosaltotainord) e recortes dos vídeos que o próprio rancho enviou. Tudo fica em `public/gallery/` e é referenciado por `src/assets/media.ts`.

- `hero-drone.mp4`: sobrevoo de drone do rancho, fundo do topo do site
- `video-rancho.mp4`: palapa e ponte pênsil sobre o rio
- `reel.mp4`: reel vertical do Instagram

Os vídeos originais enviados pelo rancho ficam em `media-fonte/` (fora do git, pesados demais). Para gerar novos recortes, use ffmpeg com um mosaico de contato para achar o trecho:

```bash
ffmpeg -i media-fonte/video.mp4 -vf "fps=1/4,scale=300:-1,tile=5x5" -frames:v 1 sheet.jpg
```

**Único ponto ainda com foto de banco de imagens**: o card "Paseos a caballo". Quando houver foto de cavalos do rancho, troque `IMG.horse` em `src/assets/media.ts`.

## Outros ajustes

- **Textos**: todo o copy ES/EN está em `src/i18n.tsx` (objetos `es` e `en`).
- **Contato**: `src/config.ts` (WhatsApp, telefones, endereço, mapa).
- **Preços**: estão no FAQ do i18n, com a ressalva de confirmar por WhatsApp.

## Estrutura

- `src/components/ui/circular-gallery.tsx`: galeria 3D circular (gira com o scroll)
- `src/components/*.tsx`: seções (Hero com vídeo, Marquee, About, Experiences, Lodging, GallerySection, VideoSection, InstagramSection, LocationSection, Faq, Contact, Footer, WhatsAppFloat)
- `src/i18n.tsx`: provider de idioma + todo o copy
- `scripts/shoot.mjs`: captura screenshots de verificação com Edge headless (dev only)

## Deploy (GitHub Pages)

O `vite.config.ts` já usa `base: './'`, então o build funciona em GitHub Pages sem ajuste:

```bash
git init && git add -A && git commit -m "Rancho Salto Taino site"
gh repo create rancho-salto-taino --public --source . --push
# publicar dist/ na branch gh-pages (ex: npx gh-pages -d dist)
```
