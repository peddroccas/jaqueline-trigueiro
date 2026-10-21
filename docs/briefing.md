# Briefing — Site Jaqueline Trigueiro

> Fonte: formulário "Briefing Site Profissional" (Tally), resposta de **Jaqueline Gomes Trigueiro**, enviada em 21/10/2026, mais o logotipo e os arquivos anexados ao formulário.
> Legenda usada neste documento: **[Confirmado]** = informado pela cliente · **[Sugerido]** = decisão criativa ou texto proposto · **[Pendente]** = dado ausente ou a confirmar.

---

## 1. Projeto

Site de página única (one-page) para **Jaqueline Trigueiro**, designer de sobrancelhas e micropigmentadora em **Ceilândia Sul (DF)**. O site precisa aparecer no Google para quem procura esses serviços na região e levar a visitante a **agendar pelo WhatsApp**.

## 2. Objetivo do site

- **[Confirmado]** Objetivo principal: aumentar os agendamentos.
- **[Confirmado]** Ação principal: chamar no WhatsApp para agendar. O agendamento acontece pelo WhatsApp e não há ferramenta de agenda.
- **[Confirmado]** A cliente quer que o site seja pensado para aparecer no Google.
- **[Confirmado]** As informações indispensáveis são "informação e agendamento".

## 3. Perfil da cliente e do negócio

| Item | Dado |
| --- | --- |
| Nome profissional | Jaqueline Trigueiro (gosta de ser chamada de "Jaqueline") **[Confirmado]** |
| Profissão | Designer de sobrancelhas e micropigmentadora **[Confirmado]** |
| Especialidade principal | Sobrancelhas **[Confirmado]** |
| Outra área | Depilação **[Confirmado]** |
| Experiência | 17 anos em design de sobrancelhas e depilação; 12 anos em micropigmentação **[Confirmado]** |
| Atendimento | Presencial **[Confirmado]** |
| Endereço | QNM 19, Conjunto C, Lote 47, Sala 105 — Ceilândia Sul, Ceilândia (DF) **[Confirmado]** |
| Horário | Das 8h às 20h **[Confirmado]**. Os dias da semana não foram informados **[Pendente]** |
| Regiões importantes | Distrito Federal e Goiás, num raio de cerca de 400 km do DF **[Confirmado]** |
| Registro profissional | Não será exibido. A atividade não tem conselho regulador, conforme orientação da equipe |

**Por que escolheu a profissão [Confirmado]:** para ter flexibilidade de trabalhar e montar os próprios horários de acordo com a rotina da família.

**Fato de confiança [Confirmado]:** há clientes que a acompanham desde o início da carreira.

## 4. Público-alvo e suas situações

- **[Confirmado]** Mulheres a partir de 15 anos.
- **[Confirmado]** O que procuram: "ter uma sobrancelha perfeita" e "pagar e receber um serviço de qualidade".
- **[Confirmado]** Dúvidas mais comuns antes do contato: se a micropigmentação dói e se a epilação com linha dói.
- **[Confirmado]** Objeção: a cliente procurar uma técnica com que Jaqueline não trabalha.

**Situações de busca [Sugerido, a partir dos serviços informados]:**
1. Quer a sobrancelha alinhada sem perder o desenho natural → design de sobrancelhas.
2. Quer a sobrancelha desenhada no dia a dia, sem preencher com maquiagem → micropigmentação de sobrancelhas.
3. Quer os fios alinhados e penteados → brow lamination.
4. Quer mais cor e definição nos lábios → micropigmentação labial.
5. Quer resolver a depilação com a mesma profissional → epilação de corpo inteiro.

**Principal barreira para agir:** confiança ("vai ficar do jeito que eu quero?") e medo de dor. O design responde com: fotos reais de antes e depois logo no início, a explicação de **como** ela trabalha (medição, desenho aprovado pela cliente antes de pigmentar, anestésico) e respostas diretas às dúvidas sobre dor.

## 5. Serviços e proposta de valor

**Serviços [Confirmado]:**
- Design de sobrancelhas com henna e sem henna
- Tintura de sobrancelha
- Brow lamination
- Micropigmentação de sobrancelhas
- Micropigmentação labial
- Epilação de corpo inteiro

**Principal serviço [Confirmado]:** design de sobrancelhas.
**Serviço a destacar [Confirmado]:** micropigmentação.

**Como ela descreve o trabalho [Confirmado, texto revisado]:**
- *Design:* feito à mão livre. A limpeza é feita com epilação com linha e o design com pinça, respeitando o desenho original da sobrancelha, a quantidade de pelos e o desejo da cliente.
- *Micropigmentação:* começa pelo design. Depois vêm as marcações e medições para encontrar a simetria de acordo com o rosto, respeitando a originalidade e uma cor que combine com a cliente. Com o desenho aprovado pela cliente, a pele é preparada para o anestésico e, com ele em efeito, é feita a pigmentação, usando a técnica escolhida conforme a necessidade da sobrancelha e o gosto da cliente.

**Diferencial [Confirmado]:** "Tirar pelo de sobrancelha qualquer pessoa consegue; saber qual pelo tirar é o meu diferencial." Inclui atendimento personalizado.
**O que as clientes valorizam [Confirmado]:** o tempo dedicado a cada uma, a qualidade do serviço e "a confiança de fechar os olhos e saber que terá uma sobrancelha bem feita".
**Resultado buscado [Confirmado]:** entregar o que a cliente deseja e sonha.
**Frase-resumo da cliente [Confirmado]:** "Aqui eu posso confiar."
**O que faria ela dizer "é isso" [Confirmado]:** "Segurança, foco no cliente; a venda é consequência."

## 6. Conversão

- **Botão principal, igual em todo o site:** **"Agendar pelo WhatsApp"**, definido em `src/content/site.ts` (`primaryCta.label`).
- **Ação secundária:** link discreto "Ver antes e depois" no hero (âncora para os resultados).
- **Pontos de entrada no WhatsApp, cada um com a sua mensagem pré-preenchida** *(a validar com a cliente)*:

| Local (`data-cta`) | Mensagem |
| --- | --- |
| `header`, `menu-mobile`, `hero`, `resultados`, `metodo`, `sobre`, `contato`, `contato-numero`, `rodape` | Olá, Jaqueline! Vi seu site e gostaria de agendar um horário. |
| `servico-design` | Olá, Jaqueline! Gostaria de agendar um design de sobrancelhas. |
| `servico-micropigmentacao` | Olá, Jaqueline! Tenho interesse em micropigmentação de sobrancelhas. |
| `servico-brow-lamination` | Olá, Jaqueline! Gostaria de agendar um brow lamination. |
| `servico-micropigmentacao-labial` | Olá, Jaqueline! Tenho interesse em micropigmentação labial. |
| `servico-depilacao` | Olá, Jaqueline! Gostaria de agendar uma depilação. |
| `duvidas` | Olá, Jaqueline! Tenho uma dúvida antes de agendar. |

- O botão principal fica no cabeçalho (tablet e desktop), no menu mobile, no hero, no fim de cada serviço (como link), no fim dos resultados, do método, da seção "Sobre" e das dúvidas, e na seção de contato.
- **Sem barra fixa no rodapé da tela no mobile**, por decisão da equipe. No celular, o botão aparece na primeira tela (hero), no fim das seções e dentro do menu.
- **Evitado:** preços (não informados), urgência artificial, promessas de resultado e depoimentos (a cliente diz ter, mas não enviou).

## 7. Direção de arte

### 7.1. Conceito criativo — "O traço certo" [Sugerido]

O trabalho da Jaqueline é decidir o traço: qual pelo tirar, onde a sobrancelha começa e termina, qual cor combina com cada rosto. O site traduz isso em **linhas finas douradas em arco**, como o desenho de uma sobrancelha (o mesmo arco que aparece no logotipo), em **molduras de foto em arco** e em muito espaço respirando ao redor das fotos de resultado. O site é **claro**, nas cores que a cliente informou: fundos em rosa chá e papel quente, texto em marrom cacau e dourado nos detalhes. O preto do arquivo do logotipo foi removido; a cliente não pediu fundo preto.

### 7.2. Personalidade [Confirmado pelas escolhas do formulário]

Profissional · Confiável · Acolhedor · Elegante · Humano.

Por isso: elegância sem frieza, com tons de pele e rosa chá, cartões brancos com sombra suave, textos em primeira pessoa e diretos, e nenhum excesso de efeitos.

### 7.3. Diferenciação de outros projetos da equipe

Por pedido da equipe, o site **não repete** o design dos projetos Mateus Marques e Pôrto:
- Sem paleta azul-marinho/creme nem azul tecnológico; aqui a paleta é rosa chá, marrom cacau e dourado.
- Sem as fontes desses projetos (Inter, Manrope, Figtree e Instrument Serif); aqui são Cormorant Garamond e Jost.
- Composições próprias: molduras em arco, serviços em formato de "cardápio" numerado, antes e depois lado a lado, arco dourado como motivo gráfico.

### 7.4. Paleta

**[Confirmado]** Cores da marca: rosa chá e dourado. **Evitar: vermelho, laranja e amarelo.**

| Token Tailwind | Hex | Uso |
| --- | --- | --- |
| `paper` | `#FCF8F5` | Fundo claro principal (cabeçalho, serviços, método, espaço, contato) |
| `cha` | `#F5E6DF` | Rosa chá — seções alternadas (resultados, sobre, dúvidas, rodapé) e cartões |
| `cha-deep` | `#EAD2C7` | Rosa chá médio — bordas e divisores |
| `blush` | `#E6C4B6` | Rosa chá escuro — só no degradê do hero |
| `ink` | `#3A2923` | Marrom cacau, texto principal (13:1 sobre `paper`; 11,3:1 sobre `cha`) |
| `muted` | `#6A534B` | Texto secundário (≥ 5:1 sobre `paper` e `cha`) |
| `gold` | `#875A26` | Dourado para texto (sobretítulos, números, ênfase do título): 5,6:1 sobre `paper` e 4,9:1 sobre `cha` |
| `gold-line` | `#C9A16B` | Dourado decorativo: arcos, losangos e sublinhados (não usado em texto) |
| `focus` | `#9C6B30` | Contorno de foco do teclado |
| `accent` | `#C2955A` | **Reservado ao botão principal** (texto `ink` sobre `accent`: 5,1:1) |

O dourado preenchido (`accent`) aparece **somente** no botão "Agendar pelo WhatsApp". Nas outras partes, o dourado aparece apenas como linha fina ou texto. Cartões e destaques usam branco com sombra suave.

### 7.5. Tipografia [Sugerido]

- **Títulos:** *Cormorant Garamond* (500/600, com itálico para a palavra de ênfase). É uma serifa de alto contraste, elegante e próxima do "TRIGUEIRO" do logotipo.
- **Texto, navegação e botões:** *Jost* (400/500). É uma sans geométrica, limpa e muito legível em tela pequena.
- Escala: `h1` com 40 px no mobile e 72 px no desktop; `h2` com 34 px no mobile e 52 px no desktop; texto corrido entre 16 e 18 px com entrelinha de 1,65; sobretítulos em Jost 13 px, caixa alta e espaçamento de 0,2em.
- Carregadas com `next/font/google`, `display: swap`, somente os pesos usados.

### 7.6. Imagens

- **[Confirmado]** Fotos enviadas: resultados reais de sobrancelhas e lábios (quatro montagens de antes/depois e várias fotos de resultado) e uma foto da sala de atendimento.
- As montagens de antes/depois foram separadas em duas imagens (antes e depois), para aparecerem lado a lado com rótulos.
- Os metadados das fotos (EXIF, que pode conter localização) foram removidos e as imagens foram reduzidas para no máximo 1600 px.
- Tratamento: fotos sem filtros. As fotos de resultado não devem ser alteradas, para não descaracterizar o trabalho.
- Molduras: arco no topo (`rounded-t-full`) para as fotos de destaque e cantos suaves para a galeria.
- **Não há foto da Jaqueline** entre os anexos, embora o formulário diga que ela tem fotos profissionais **[Pendente]**. Por regra, não usamos banco de imagens no lugar dela. O hero usa uma foto real de resultado e a seção "Sobre" usa o logotipo e os números de experiência.
- **Logotipo:** o fundo preto do arquivo enviado foi removido (PNG transparente, com bordas suaves), para o logo se apoiar direto no fundo rosa chá. A frase do logotipo está escrita "Depitação" em vez de "Depilação" **[Pendente: avisar a cliente; o arquivo não foi alterado]**.

### 7.7. Acabamento

- Um arco dourado fino (SVG inline) como motivo recorrente: no hero, acima dos títulos de seção e no rodapé.
- Divisores de 1 px em `cha-deep`.
- Raio: botões em pílula, 24 px nos cartões e arco completo nas molduras de destaque.
- Sombras suaves e quentes (`shadow-soft`) nos cartões brancos e no botão principal; nada além disso.
- Animações apenas de transição em hover/foco, desativadas com `motion-reduce`.

## 8. Materiais disponíveis

| Arquivo original | Uso no site | Arquivo no projeto |
| --- | --- | --- |
| Logotipo (imagem enviada no chat) | Cabeçalho, contato, rodapé, imagem de compartilhamento | `public/images/jaqueline-trigueiro-logo.png` (fundo preto removido) |
| IMG_5659.jpeg | Seção "Espaço" | `espaco-atendimento.jpg` |
| IMG_6661.jpeg | Antes/depois de sobrancelha 1 | `sobrancelha-1-antes.jpg`, `sobrancelha-1-depois.jpg` |
| IMG_7077.jpeg | Antes/depois de sobrancelha 2 | `sobrancelha-2-antes.jpg`, `sobrancelha-2-depois.jpg` |
| IMG_9092.jpeg | Antes/depois de sobrancelha 3 | `sobrancelha-3-antes.jpg`, `sobrancelha-3-depois.jpg` |
| IMG_8985.jpeg | Antes/depois de lábios | `labios-1-antes.jpg`, `labios-1-depois.jpg` |
| 9D5A303A….jpeg | Imagem do hero | `resultado-sobrancelha-perfil.jpg` |
| IMG_8982.jpeg | Galeria de resultados | `resultado-labios-sobrancelha.jpg` |
| IMG_8246.jpeg | Galeria de resultados | `resultado-sobrancelha-olhos-fechados.jpg` |
| IMG_7093.jpeg | Galeria de resultados | `resultado-sobrancelha-rosto.jpg` |
| IMG_6654.jpeg | Não usada: mostra a pele avermelhada logo após o procedimento, o que pode reforçar o medo de dor | — |
| 5c1f60cd….jpeg, AEC281B2….jpeg | Não usadas: são colagens com quatro fotos, que ficam ilegíveis em tela pequena. Podem ser reaproveitadas se a cliente enviar as fotos separadas | — |
| IMG_5770.mov, 3 vídeos .mp4 | **Não analisados.** Não há ferramenta para extrair quadros neste ambiente, então os vídeos ficaram fora da primeira versão **[Pendente]** | — |

Referências visuais: a cliente não enviou nenhuma.

## 9. Estrutura

Página única com âncoras. **[Confirmado]** Seções pedidas: Serviços, Especialidades, Formação, Experiência profissional, Estrutura/consultório, Contato, Localização e Agendamento. "Início", "Sobre mim", "Depoimentos" e "Perguntas frequentes" não foram marcadas.

Como cada pedido foi atendido:
- **Serviços + Especialidades** → uma seção, "Serviços". São o mesmo conteúdo, e duas seções repetiriam a informação.
- **Formação + Experiência profissional** → seção "Sobre a Jaqueline", com os números de experiência e a lista de formação.
- **Estrutura/consultório** → seção "O espaço".
- **Contato + Localização + Agendamento** → seção "Agende seu horário", com WhatsApp, endereço, mapa e horário.
- **Acrescentadas [Sugerido]:** "Antes e depois" (prova real, essencial para quem decide pela aparência), "Como eu trabalho" (responde à barreira de confiança) e "Dúvidas" (a cliente listou dúvidas recorrentes sobre dor e técnica).

Ordem: Cabeçalho → Hero → Serviços → Antes e depois → Como eu trabalho → Sobre a Jaqueline → O espaço → Dúvidas → Agende seu horário → Rodapé (+ barra fixa no mobile).

## 10. Seções

### 10.1. Cabeçalho (`Header`)
- **Finalidade:** identificar a marca e manter o agendamento sempre a um clique.
- **Conteúdo:** logotipo; navegação (Serviços, Antes e depois, Como trabalho, Sobre, Espaço, Contato); botão principal.
- **Composição:** fundo `paper` levemente translúcido, fixo no topo (`sticky`), com divisor `cha-deep`. Logo transparente.
- **Mobile:** logo e botão de menu (com `aria-expanded`, fechamento por Esc e por clique em link). O menu aberto lista as seções, o botão principal e o WhatsApp escrito. No tablet (≥ 768 px), o botão principal também aparece no cabeçalho.

### 10.2. Hero (`Hero`)
- **Finalidade:** dizer em 3 segundos o que é, onde fica e como agendar.
- **Sobretítulo [Sugerido]:** "Designer de sobrancelhas · Ceilândia Sul".
- **h1 [Sugerido]:** "Design de sobrancelhas e micropigmentação em Ceilândia, DF".
- **Subtítulo [Sugerido]:** "Há 17 anos desenho sobrancelhas à mão livre, respeitando o seu desenho natural, a quantidade de pelos e o formato do seu rosto."
- **Slogan [Confirmado pela equipe]:** "Tirar pelo de sobrancelha todos conseguem, saber qual pelo tirar é o meu diferencial." Aparece em destaque, como citação, logo abaixo da dobra do hero (fundo do hero), assinada por Jaqueline Trigueiro. "Pelo" está sem acento, conforme a ortografia vigente.
- **Fundo:** degradê suave de `blush` → `cha` → `paper`.
- **Ações:** "Agendar pelo WhatsApp" + link "Ver antes e depois".
- **Sinais de confiança [Confirmado]:** 17 anos de experiência · Atendimento presencial na Ceilândia Sul · Das 8h às 20h.
- **Imagem:** foto real de resultado em moldura de arco, com o cartão "Trabalho de Jaqueline Trigueiro · Sobrancelhas · Ceilândia Sul" e um arco dourado fino passando por trás.
- **Desktop:** texto à esquerda (7/12) e foto à direita (5/12). **Mobile:** título → subtítulo → botão → sinais de confiança → foto (a foto fica abaixo do botão).

### 10.3. Serviços (`Services`) — `#servicos`
- **Finalidade:** a visitante se reconhecer numa situação e agendar aquele serviço.
- **h2 [Sugerido]:** "O que você procura hoje?"
- **Composição:** formato de "cardápio" de estúdio. Os dois serviços principais (Design e Micropigmentação de sobrancelhas) aparecem como cartões grandes com foto de resultado; os outros três aparecem como linhas numeradas. Cada item tem a linha "Para quem", o título, uma descrição curta, os termos usados pela cliente (henna, tintura, linha, pinça, anestésico) e o link "Agendar este serviço" com mensagem própria.
- **Mobile:** cartões empilhados; as linhas numeradas viram blocos com divisor.

### 10.4. Antes e depois (`Results`) — `#resultados`
- **Finalidade:** prova visual real.
- **h2 [Sugerido]:** "Antes e depois, feitos aqui"
- **Composição:** quatro cartões brancos (três de sobrancelha e um de lábios), cada um com "Antes" em cima e "Depois" embaixo, rotulados por texto (não só por cor), como nas montagens originais. Abaixo, uma faixa com três fotos de resultado. Nota: "Fotos de clientes atendidas pela Jaqueline. O resultado varia de pessoa para pessoa."
- **Fundo:** `cha`. **Ação:** botão principal no fim.
- **Mobile:** os cartões ficam em uma coluna; a faixa de resultados vira uma grade de duas colunas, com a terceira foto (horizontal) ocupando a largura toda.

### 10.5. Como eu trabalho (`Method`) — `#metodo`
- **Finalidade:** reduzir a insegurança mostrando o processo e o diferencial.
- **Destaque [Confirmado, texto revisado]:** "Quero que você tenha a confiança de fechar os olhos e saber que vai sair com uma sobrancelha bem feita." (o que a cliente disse que as clientes mais valorizam; o slogan já está no hero, então não se repete aqui).
- **Etapas [Confirmado na descrição do trabalho; redação sugerida]:**
  1. Você chama no WhatsApp, conta o que deseja e escolhe o horário.
  2. Avaliação do seu desenho natural, da quantidade de pelos e do formato do seu rosto.
  3. Marcações e medições para encontrar a simetria. Na micropigmentação, a cor é escolhida para combinar com você.
  4. Você aprova o desenho antes de começar. Na micropigmentação, a pele é preparada e o procedimento só começa com o anestésico em efeito.
- **Fundo:** `paper`, com as etapas num cartão com divisores. **Ação:** botão principal.

### 10.6. Sobre a Jaqueline (`About`) — `#sobre`
- **Finalidade:** humanizar e mostrar experiência (Formação + Experiência profissional).
- **h2:** "Prazer, eu sou a Jaqueline"
- **Texto [Sugerido, com base nos dados confirmados]:** são 17 anos de design de sobrancelhas e depilação e 12 de micropigmentação; ela escolheu a profissão para conciliar o trabalho com a família; tem clientes que a acompanham desde o começo; dedica tempo a cada atendimento.
- **Números [Confirmado]:** 17 anos (design e depilação) · 12 anos (micropigmentação).
- **Formação [Confirmado pela equipe]:** Curso de design de sobrancelhas e depilação · Micropigmentação básica · Micropigmentação avançada.
- **Foto:** a cliente ainda não enviou foto dela **[Pendente]**. Até chegar, a coluna da esquerda mostra o logotipo e os números de experiência em cartões brancos.
- **Fundo:** `cha`. **Ação:** botão principal ("momento de maior confiança").

### 10.7. O espaço (`Space`) — `#espaco`
- **Finalidade:** mostrar onde ela atende e dar segurança a quem vai pela primeira vez.
- **Conteúdo:** foto da sala em moldura de arco, endereço completo e link "Como chegar" (Google Maps).
- **Mobile:** foto acima, texto abaixo.

### 10.8. Dúvidas (`Faq`) — `#duvidas`
- **Finalidade:** responder às dúvidas listadas pela cliente.
- **Perguntas (respostas apenas com fatos informados):**
  1. A micropigmentação dói? → A pele é preparada e recebe anestésico; a pigmentação só começa com ele em efeito. A sensibilidade varia de pessoa para pessoa.
  2. A linha dói? → É a técnica usada na limpeza da sobrancelha. A sensação varia; quem tiver receio pode conversar antes pelo WhatsApp.
  3. A minha sobrancelha vai ficar artificial? → O desenho respeita o original, a quantidade de pelos e o formato do rosto, e você aprova antes.
  4. Você trabalha com a técnica que eu quero? → A técnica é escolhida conforme a sobrancelha e o seu gosto. Pergunte pelo WhatsApp antes de agendar (responde à objeção).
  5. Como agendar e qual o horário? → Pelo WhatsApp, das 8h às 20h.
  6. Atende quem vem de outras cidades? → Sim. O atendimento é presencial na Ceilândia Sul, e a cliente recebe pessoas do DF e de Goiás.
- **Componente:** `<details>/<summary>`, com o estado aberto estilizado.
- **Ação:** "Não encontrou sua dúvida? Pergunte pelo WhatsApp" + botão principal.

### 10.9. Agende seu horário (`Contact`) — `#contato`
- **Finalidade:** concentrar agendamento, contato e localização.
- **Conteúdo [Confirmado]:** WhatsApp (61) 98453-7188 escrito e clicável; e-mail jaquelinetrigueiro0@gmail.com; Instagram @jaqueline.trigueiro; endereço; horário das 8h às 20h + `[A CONFIRMAR: dias de atendimento]`; link "Abrir no Google Maps".
- O telefone fixo informado é o mesmo número do WhatsApp, por isso aparece uma vez só.
- O campo LinkedIn trazia um e-mail, por isso foi ignorado.
- Sem formulário: não há destino para os dados, e o WhatsApp é a ação escolhida.
- Sem mapa incorporado (iframe), para não carregar scripts de terceiros. Usamos um link para o Google Maps.
- **Fundo:** `paper`, com os dados num painel de cartões brancos.

### 10.10. Rodapé (`Footer`)
- Fundo `cha`, com logo, navegação, contatos clicáveis, endereço e direitos.
- Não há barra fixa com botão no mobile (decisão da equipe).

## 11. Dados reais (em `src/content/site.ts`)

- WhatsApp: +55 61 98453-7188 → `wa.me/5561984537188`
- E-mail: jaquelinetrigueiro0@gmail.com
- Instagram: https://www.instagram.com/jaqueline.trigueiro (parâmetros de rastreamento removidos do link enviado)
- Endereço: QNM 19, Conjunto C, Lote 47, Sala 105 — Ceilândia Sul, Ceilândia — DF
- Horário: 8h às 20h (dias a confirmar)

## 12. Experiência do usuário, responsividade e acessibilidade

- Mobile-first; larguras verificadas: 360, 390, 768 e 1440 px. Conteúdo com no máximo 1248 px.
- Uma `h1`; `h2` por seção; `h3` nos serviços, nas etapas e na formação. As perguntas frequentes ficam no `<summary>` (que funciona como botão), sem título dentro. Marcos `header`, `nav`, `main` e `footer`.
- Foco visível dourado em todos os elementos interativos; áreas de toque de no mínimo 48 px.
- Ícones decorativos com `aria-hidden`; rótulos "Antes"/"Depois" em texto.
- Contraste AA conferido para todos os pares de cor usados (seção 7.4).
- `scroll-mt` nas âncoras por causa do cabeçalho fixo; rolagem suave só sem `prefers-reduced-motion`.

## 13. SEO local

- `title`: "Design de Sobrancelhas e Micropigmentação em Ceilândia (DF) | Jaqueline Trigueiro".
- `description` com serviços, bairro, experiência e a ação de agendar.
- Termos que o público pesquisa, usados em títulos e textos: *design de sobrancelhas*, *sobrancelha com henna*, *micropigmentação de sobrancelhas*, *micropigmentação labial*, *brow lamination*, *depilação*, *Ceilândia*, *Ceilândia Sul*, *DF*.
- JSON-LD `BeautySalon` com nome, endereço, telefone, e-mail, Instagram (`sameAs`), área atendida (DF e Goiás) e catálogo de serviços. **Sem** `openingHoursSpecification`, porque os dias não foram informados, e **sem** avaliações.
- JSON-LD `FAQPage` com as perguntas da seção Dúvidas.
- `sitemap.ts`, `robots.ts`, Open Graph com imagem do logotipo e `lang="pt-BR"`.
- Domínio inexistente: `SITE_URL` usa um marcador **[Pendente]**.
- **Recomendação [Sugerido]:** criar o Perfil da Empresa no Google. A cliente não tem, e para negócio local esse perfil costuma trazer mais agendamentos que o próprio site.

## 14. Restrições

- Não exibir registro, órgão ou conselho profissional (orientação da equipe).
- Não usar vermelho, laranja ou amarelo na interface.
- Não exibir preços, depoimentos ou avaliações (não foram enviados).
- Não prometer resultado; as fotos têm a nota "o resultado varia de pessoa para pessoa".
- Usar somente os dados desta cliente.

## 15. Decisões técnicas

- Next.js (App Router, TypeScript) + Tailwind CSS v4, site 100% estático.
- Conteúdo centralizado em `src/content/site.ts`; links do WhatsApp gerados em `src/lib/whatsapp.ts`.
- Sem formulário, sem analytics e sem pixels (não foram pedidos). Toda chamada para ação tem `data-cta` para medição futura.
- Única dependência extra: nenhuma (ícones em SVG inline).

## 16. Pendências

| # | Pendência | Onde está no código |
| --- | --- | --- |
| 1 | Dias da semana de atendimento (marcador visível no site) | `src/content/site.ts` → `contact.days` |
| 2 | Domínio do site | `src/content/site.ts` → `SITE_URL` (comentário `[A CONFIRMAR: domínio do site]`) |
| 3 | Foto profissional da Jaqueline (4:5, mínimo 1200 × 1500 px) | `src/content/site.ts` → `about` (comentário) |
| 4 | Qual serviço aparece em cada foto de antes/depois (as legendas usam "Sobrancelhas" e "Lábios") | `src/content/site.ts` → `results` (comentário) |
| 5 | Autorização das clientes que aparecem nas fotos de resultado | (não aparece no site) |
| 6 | Vídeos enviados (não analisados) e depoimentos (a cliente diz ter) | (não aparecem no site) |
| 7 | Validar as mensagens pré-preenchidas do WhatsApp | `src/content/site.ts` → `whatsappMessages` |
| 8 | Erro de digitação no logotipo ("Depitação") | arquivo original da cliente |

Resolvidas nesta versão: slogan e cursos (informados pela equipe em 21/10/2026).

## 17. Checklist de conversão e qualidade

- [x] O título do hero diz o que é oferecido, para quem e onde ("Design de sobrancelhas e micropigmentação em Ceilândia, DF").
- [x] O botão principal aparece na primeira tela no desktop e no mobile (no mobile a 390 × 844, o botão fica a cerca de 515 px do topo).
- [x] O texto do botão principal é o mesmo em todo o site ("Agendar pelo WhatsApp") e está definido em um único lugar (`primaryCta.label`).
- [ ] Foto real da profissional no hero: **não há foto da Jaqueline** (pendência 3). O hero usa uma foto real de resultado, identificada com o nome dela.
- [x] Sinais de confiança verificáveis logo abaixo do botão (17 anos, Ceilândia Sul, horário).
- [x] Serviços organizados pela situação da visitante ("Para quem"), cada um com ação própria.
- [x] As seções "Sobre", "Como eu trabalho" e "Dúvidas" terminam com um próximo passo.
- [x] Dados de contato reais visíveis e clicáveis na seção de contato e no rodapé.
- [ ] Barra fixa mobile: **removida por decisão da equipe**. O botão fica no hero, no fim das seções e no menu mobile.
- [x] Perguntas frequentes e menu funcionam por teclado (Esc fecha o menu e devolve o foco ao botão), com estado aberto estilizado.
- [x] Sem rolagem horizontal em 360, 390, 768 e 1440 px.
- [x] Contraste AA nos pares de cor usados (seção 7.4), foco visível e áreas de toque de 48 px.
- [x] Metadados, JSON-LD (`BeautySalon` e `FAQPage`, só com dados reais), sitemap, robots, ícone e imagem de compartilhamento configurados.
- [x] `npm run lint` e `npm run build` sem erros.
- [x] Sem blocos redundantes, urgência artificial, promessas de resultado ou dados inventados; os dados ausentes estão marcados com `[A CONFIRMAR]`.
