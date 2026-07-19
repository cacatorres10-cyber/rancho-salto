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

## O que personalizar antes de publicar

1. **WhatsApp**: em `src/config.ts`, troque `WHATSAPP_NUMBER` (placeholder `18090000000`) pelo número real, formato internacional sem `+`.
2. **Fotos e vídeos**: `src/assets/media.ts` centraliza todas as URLs. Hoje são stock (Unsplash/Pexels) no clima do rancho; troque pelas fotos/vídeos reais do Instagram quando tiver os arquivos (pode colocar em `public/` e usar caminhos locais).
3. **Textos**: todo o copy ES/EN está em `src/i18n.tsx` (objetos `es` e `en`).
4. **Distâncias/endereço**: `src/config.ts` e a seção `location` do i18n (valores aproximados marcados com ±).

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
