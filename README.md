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

- `hero-drone.mp4`: sobrevoo de drone do rancho, fundo do topo do site (720p, 5,7MB)
- `hero-drone-sm.mp4`: mesmo sobrevoo em 854x480 (2,8MB), servido em telas abaixo de 768px
- `video-rancho.mp4`: palapa e ponte pênsil sobre o rio
- `reel.mp4`: reel vertical do Instagram

A fonte do sobrevoo veio pelo WhatsApp em 848x480, então o encode tenta preservar o pouco detalhe que existe em vez de adicionar artefatos por cima:

```bash
ffmpeg -ss 185.4 -t 15 -i "media-fonte/video.mp4" -an \
  -vf "hqdn3d=3:2:6:4,scale=1280:720:flags=lanczos+accurate_rnd,unsharp=5:5:0.5:5:5:0.0" \
  -c:v libx264 -preset veryslow -crf 26 -tune film -pix_fmt yuv420p \
  -movflags +faststart public/gallery/hero-drone.mp4
```

VP9 e AV1 foram testados nesse material e ficaram **maiores** que o H.264 (folhagem densa em movimento), então não vale a pena trocar de codec aqui.

Os vídeos originais enviados pelo rancho ficam em `media-fonte/` (fora do git, pesados demais). Para gerar novos recortes, use ffmpeg com um mosaico de contato para achar o trecho:

```bash
ffmpeg -i media-fonte/video.mp4 -vf "fps=1/4,scale=300:-1,tile=5x5" -frames:v 1 sheet.jpg
```

**Único ponto ainda com foto de banco de imagens**: o card "Paseos a caballo". Quando houver foto de cavalos do rancho, troque `IMG.horse` em `src/assets/media.ts`.

## Álbum de fotos

Todas as fotos do rancho ficam numa lista só, em [src/data/gallery.ts](src/data/gallery.ts). Dela saem tanto a galeria giratória (as 8 primeiras) quanto o álbum completo, que abre pelo botão "Ver todas las fotos" na seção do vídeo do rancho.

Para adicionar foto: copie o arquivo para `public/gallery/` e acrescente uma linha no array, com as legendas em ES e EN. Ela aparece sozinha no álbum. Se a foto for vertical e cortar mal, use `pos: '50% 25%'` para ajustar o enquadramento.

As fotos das excursões não entram aqui: elas ficam em `src/data/excursions.ts`.

## Excursões

As excursões ficam em [src/data/excursions.ts](src/data/excursions.ts). Cada uma vira um card enxuto (foto, preço, botão) e um modal com todos os detalhes, então adicionar excursões não deixa a página mais carregada.

Para adicionar uma nova: copie um bloco inteiro do array, troque o `id`, a imagem e os textos (ES e EN). A partir da terceira excursão a grade passa sozinha para três colunas.

**Os preços são valores de referência do aemitours.com e precisam ser confirmados com o rancho.** Se preferir não mostrar valor, use `price: null` e o card exibe "Consultar precio".

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
