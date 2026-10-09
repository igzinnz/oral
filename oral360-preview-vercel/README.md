# Oral 360 — prévia comercial local

Landing page completa em Next.js App Router, TypeScript, Tailwind CSS e Lucide React. Projeto independente dos outros arquivos deste workspace. Não houve publicação em produção.

## Executar

Requer Node.js 20.9 ou superior (validado com Node.js 24).

```powershell
cd C:\Users\Administrator\Downloads\suplysteam1\oral360-preview
npm ci
npm run dev
```

Abra http://127.0.0.1:3600. Se a prévia desta entrega já estiver ativa, basta abrir esse endereço; não execute um segundo servidor na mesma porta.

```powershell
npm run typecheck
npm run lint
npm run build
```

Para servir o build localmente, encerre o servidor de desenvolvimento e execute `npm start`.

## Organização e personalização

- `app/page.tsx`: hero e composição da página.
- `components/header.tsx`: menu responsivo, navegação e fechamento por Escape.
- `components/sections.tsx`: sobre, diferenciais, tratamentos, unidades, contato, FAQ nativo acessível e rodapé.
- `components/ui.tsx`: marca tipográfica provisória, botões reutilizáveis e títulos auxiliares.
- `components/scroll-reveal.tsx`: aparições suaves, com conteúdo visível sem JavaScript e respeito a movimento reduzido.
- `lib/clinic.ts`: contato, mensagens, navegação, imagens e unidades. Os campos opcionais `address` e `mapUrl` ficam ausentes até confirmação. Novos tratamentos podem ser adicionados em `components/sections.tsx` após validação pela clínica.
- `app/globals.css`: identidade visual e estilos responsivos; Tailwind disponível via import e tema.
- `app/layout.tsx`: idioma, fontes locais e metadados SEO/Open Graph.
- `public/images`: fotografias demonstrativas locais. Substitua os arquivos ou atualize `clinic.images` e os textos alternativos.

Não foi encontrada logo oficial da Oral 360. A assinatura tipográfica e o favicon são provisórios. Substitua-os por arquivos aprovados antes de uma eventual publicação.

A página não afirma oferecer especialidades específicas, não inclui endereços exatos, avaliações, preços ou nomes de profissionais. Os CTAs abrem o WhatsApp com a mensagem preenchida, mas não enviam mensagens automaticamente nem confirmam agendamentos. Não há formulários, banco de dados, login ou rastreadores.

A prévia usa `noindex, nofollow` de propósito. Só alterar essa configuração após autorização de publicação. Open Graph inclui título, descrição, idioma e tipo; não há URL oficial, canonical ou imagem social inventados.

## Fotografias e fonte

Imagens de demonstração reutilizadas dos arquivos locais de `soridents-demo`, cujos créditos registram as seguintes fontes Pexels. Não representam a clínica, sua equipe, suas instalações nem pacientes reais da Oral 360.

- `acolhimento.jpg`: Andrea Piacquadio — https://www.pexels.com/photo/cheerful-young-female-dentist-talking-with-patient-during-therapy-in-modern-hospital-3884103/
- `experiencia.jpg`: Kaboompics — https://www.pexels.com/photo/smiling-woman-in-dentist-chair-looking-in-mirror-6627574/
- Licença das fotos: https://www.pexels.com/license/
- Manrope, distribuída via Fontsource; licença OFL incluída em `public/fonts/LICENSE-manrope.txt`.

As imagens são servidas localmente, otimizadas por Next Image, com tamanhos responsivos; hero antecipado e imagem secundária carregada sob demanda. As fontes não fazem requisições a provedores externos.

## Verificação de interface

Com `npm run dev` em execução e Microsoft Edge instalado:

```powershell
npm run verify
```

O teste usa Playwright e axe-core; verifica 1440, 768, 390 e 320 pixels, carregamento das imagens, overflow, destinos internos, URLs de WhatsApp, abertura em nova aba (interceptada localmente), menu mobile, Escape, acordeões por clique e teclado, movimento reduzido, metadados e erros JavaScript. Capturas e relatório ficam em `qa/`.

As verificações automáticas de acessibilidade não substituem avaliação com tecnologias assistivas reais.

## Dependências

O build e o runtime têm auditoria sem vulnerabilidades conhecidas (`npm audit --omit=dev`). A auditoria completa aponta cinco entradas na cadeia de ferramentas de lint, originadas em `braces` via `micromatch`/`fast-glob` do plugin oficial Next. A correção automática sugerida exigiria regredir a configuração para uma versão principal antiga; isso não foi aplicado. Essa cadeia afeta apenas ferramentas de desenvolvimento; as dependências de runtime não apresentam vulnerabilidades conhecidas.
## Hospedar na Vercel

O projeto está configurado para a Vercel com o preset Next.js. Não precisa de variáveis de ambiente: o contato, as fotos e as fontes usados nesta prévia já estão configurados e incluídos no projeto. Requer Node.js 20.9 ou superior.

### Publicar pela CLI

Com Node.js e uma conta Vercel:

```powershell
cd C:\Users\Administrator\Downloads\suplysteam1\oral360-preview
npx vercel
```

Na primeira execução, entre na sua conta e confirme a configuração sugerida. O comando cria uma implantação de prévia. Quando decidir publicar:

```powershell
npx vercel --prod
```

### Publicar conectando um repositório Git

Mantenha `oral360-preview` como a raiz do projeto no repositório. Se conectar um repositório que contém a pasta `oral360-preview`, informe essa pasta como **Root Directory** na configuração do projeto Vercel. A Vercel reconhece Next.js automaticamente. As configurações esperadas são:

- Preset: Next.js
- Install: `npm install` (automático)
- Build: `npm run build`
- Node.js: 20.9 ou superior
- Environment variables: nenhuma

Cada implantação usa o repositório selecionado e as definições de projeto da conta Vercel. A pasta local deste workspace não está conectada a um repositório Git; para a integração Git, crie ou use um repositório com o conteúdo de `oral360-preview`.

### Antes de apresentar como site oficial

Esta versão mantém `noindex, nofollow` e o aviso de prévia comercial. A hospedagem cria um endereço público acessível a quem tiver o link. Antes de apresentar como site oficial, confirme a identidade e os dados com a clínica, substitua a marca tipográfica, favicon e fotos demonstrativas pelos materiais aprovados e reveja o aviso e a configuração de indexação.

A Vercel oferece suporte nativo a Next.js e à otimização do `next/image`. Mais detalhes: [documentação oficial de Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) e [configuração do projeto](https://vercel.com/docs/builds/configure-a-build).

