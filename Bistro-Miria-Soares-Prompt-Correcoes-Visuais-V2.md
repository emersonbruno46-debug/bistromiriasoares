# Bistrô Miriã Soares — Prompt de correções visuais V2

Copie o prompt abaixo no projeto existente do Antigravity e anexe as três NOVAS referências visuais desta conversa, na ordem: abertura, sabores/homenagem e galeria/visita. Elas substituem as referências anteriores. Mantenha disponíveis a logo SVG e as fotografias individuais. As referências mostram trechos desktop da mesma página; não são três páginas diferentes.

As imagens são guias de composição. O texto exato, as dimensões e as regras deste prompt prevalecem sobre detalhes gerados nas imagens. O título de Sabores aparece no fim da referência 1 para indicar continuidade e no começo da referência 2: implemente-o apenas uma vez.

--- INÍCIO DO PROMPT ---

Reforme a landing page EXISTENTE do Bistrô Miriã Soares neste projeto. Referência da versão atual: https://bistromiriasoares.vercel.app/

Execute as alterações no código e entregue um preview verificável. Não pare em plano ou sugestões. Preserve a stack, a estrutura aproveitável, os assets originais, a configuração de hospedagem e as funcionalidades válidas. Não crie outra aplicação nem altere o domínio. Não faça deploy público, push que dispare deploy ou publicação sem solicitação.

## Objetivo da reforma

A versão atual está com uma aparência genérica de pousada: foto de ambiente ocupando o hero inteiro com camada escura, títulos serifados finos, muito fundo creme, blocos repetitivos de texto e imagem e galeria longa. Queremos uma identidade de bistrô clássico, mais reconhecível e gastronômica, baseada na logo vinho, na porta azul em arco, nos retratos e nas louças do estabelecimento.

A mudança deve ser perceptível no layout, na hierarquia e na sequência das seções. Não basta trocar a fonte e manter toda a estrutura antiga. Use as três referências V2 anexadas como guia visual.

## Inspeção inicial

Leia o projeto, identifique componentes, estilos, fontes, animações e assets. Trabalhe na implementação existente. Não sobrescreva alterações alheias. Identifique as fotos pelo conteúdo visual. Preserve os originais e reutilize versões otimizadas quando boas. Corrija caminhos quebrados, se encontrados. Não conclua que uma imagem está quebrada apenas porque ainda não carregou fora da área visível: verifique o carregamento ao entrar em tela.

## Sistema visual V2

- Vinho principal: #4D1110, extraído da logo SVG.
- Creme: #F7F1E7.
- Texto escuro: #302725.
- Azul pontual: #234D70, inspirado nas portas.
- Divisórias: #D9CABC nas áreas claras e creme com transparência nas escuras.
- Fundos sólidos: sem textura, granulado, ruído, vinheta, gradiente ou aparência envelhecida artificial, mesmo se a referência raster sugerir alguma variação.
- Títulos: Fraunces, pesos 500/600, estilo normal, sem excesso de contraste fino. Corpo e botões: Inter, pesos 400/500/600. Carregar apenas os pesos necessários, com font-display: swap e fallbacks. Se não houver acesso à fonte, usar fallback e informar isso na entrega técnica.
- Não modificar o desenho da logo nem reproduzi-la com texto. Usar o SVG original sobre fundo creme, com proporção preservada.
- Manuscrita somente na logo. Não adicionar outra fonte manuscrita.
- Container máximo: 1200 px. Margens laterais fluidas de 20 a 64 px.
- Ritmo compacto: 64–80 px entre seções no desktop, 40–56 px no mobile. Reduzir os grandes espaços vazios da versão atual sem apertar a leitura.
- Títulos H2 de 36–48 px no desktop; H1 de 56–76 px. Mobile: H1 de 38–46 px e H2 de 30–36 px, ajustados por clamp. Corpo de 16–18 px e entrelinha de 1,5–1,65.
- Botões: raio de 6 px, altura mínima de 48 px, texto sans-serif e foco visível. Evitar sombras.
- Motivos visuais: um arco na abertura; filetes de menu na seção Sabores. Usar poucos ornamentos simples, sem criar brasão ou monograma novo.

## Nova sequência

Cabeçalho → abertura vinho → sabores → homenagem → galeria compacta → endereço/horários/contato → rodapé discreto.

### 1. Cabeçalho

Fundo creme, logo à esquerda, menu à direita: “Sabores”, “A casa”, “Visite-nos”, seguido de “Como chegar”.

Logo claramente maior que na versão atual: aproximadamente 120–132 px de largura no desktop e 86–96 px no mobile, respeitando sua altura proporcional. Cabeçalho desktop de aproximadamente 112–128 px; não reproduzir a altura exagerada que uma referência raster possa sugerir. No celular, 84–96 px quando comportar a logo sem corte.

Menu por âncoras: Sabores → #sabores; A casa → #bistro; Visite-nos → #visite. Preserve #espaco para a galeria e links antigos. Logo volta ao topo por uma âncora real #inicio.

Manter menu mobile acessível. Evitar header fixo que ocupe muito espaço; se sticky, usar scroll-margin-top correto nas seções e não ocultar destinos.

### 2. Hero vinho com arco

Remover o pátio como foto de fundo do hero e a camada escura sobre toda a abertura. Ele será usado uma única vez na galeria.

Hero com fundo sólido vinho, duas colunas no desktop: texto à esquerda e fotografia vertical da entrada azul à direita. Nenhum texto sobre a foto. A imagem deve ser recortada em um arco alto, topo arredondado e base reta, inspirado na porta real. Usar CSS, sem redesenhar a arquitetura. Filete creme externo opcional com distância de 8 px, sem sombra e sem ocupar toda a tela.

Dimensões de referência: foto de 390–470 px de largura, proporção aproximada 4:5 ou 3:4, mantendo a porta legível; grid com gap 48–64 px. Altura do hero definida pelo conteúdo, aproximadamente 640–760 px no desktop. Não impor 100vh nem reproduzir a altura total da imagem de referência. Não cortar o título.

Textos exatos:
Eyebrow: “BISTRÔ EM TAIOBEIRAS”
H1: “Massas, risotos e boas conversas.”
Apoio: “Conheça os sabores e os cantos do Bistrô Miriã Soares.”
Botão principal creme: “Explorar sabores” → #sabores.
Link secundário creme: “Como chegar” → Google Maps.
Linha discreta inferior: “Avenida da Liberdade, 389 · Taiobeiras/MG”.

Mobile: texto primeiro, controles em seguida, foto em arco depois. Foto de até 320 px de largura, altura de cerca de 340–400 px conforme aparelho. Manter a promessa e a ação principal visíveis antes da foto. Sem dimensões fixas que provoquem overflow.

### 3. Sabores imediatamente após o hero

Fundo creme. Retirar a faixa antiga de especialidades entre hero e história e a numeração 01/02/03/04. Não duplicar as categorias em várias faixas.

Eyebrow: “À MESA”
H2: “Escolha o seu próximo sabor.”

Composição desktop: foto da vitrine à esquerda (aproximadamente metade da largura) e bloco tipográfico inspirado em um menu à direita. Filete vinho duplo fino ao redor do bloco, com espaçamento interno generoso, sem textura de papel. Quatro linhas, sem números, preços ou descrições inventadas:
“Massas”
“Risotos”
“Sobremesas”
“Pratos individuais”

Separar com linhas finas; ornamento azul mínimo opcional. O bloco não deve simular um cardápio completo ou permitir pedidos. A vitrine é uma foto geral do local, não uma imagem de todos os pratos citados.

Abaixo do bloco:
“Veja as novidades e as opções da casa no Instagram.”
Botão “Explorar sabores” → Instagram.

Remover as descrições genéricas da versão atual (“Receitas tradicionais com ingredientes selecionados”, etc.). Não temos comprovação desses atributos. Não gerar fotos de massas, risotos ou sobremesas; não buscar imagens de banco. Usar apenas os assets disponíveis. Se futuramente chegarem fotos reais dos pratos, esta seção pode recebê-las sem refazer a página.

Mobile: foto e menu empilhados, moldura com padding menor, categorias legíveis sem quebra inadequada de “Pratos individuais”.

### 4. Homenagem curta

Seção vinho compacta com foto da sala dos retratos e texto creme. Deve ser menor do que o longo bloco institucional atual. Foto com cerca de 40% e texto com 60% no desktop, altura total aproximada de 380–460 px conforme conteúdo. No mobile, empilhar sem espaços excessivos.

H2: “Um nome, uma homenagem.”
Texto FINAL, que prevalece sobre a referência visual:
“Uma homenagem de filho para mãe. O bistrô leva o nome de Miriã Soares.”

Não usar “mãe do proprietário” no texto público. Não identificar Miriã como proprietária ou chef. Não inventar receitas herdadas, história de vida, datas, tradição familiar ou falecimento. Não identificar pessoas dos quadros nem transcrever textos de parede das imagens tratadas. A foto ilustra o ambiente, não prova uma história específica.

### 5. Galeria compacta

H2: “Entre. A casa é sua.”

Usar apenas DUAS fotografias complementares nesta seção: pátio e ambiente vinho com pratos decorativos. Com a entrada no hero, a vitrine em Sabores e a sala dos retratos na homenagem, já mostramos cinco aspectos do espaço sem repetir ambientes em uma galeria extensa.

Desktop: uma linha assimétrica, pátio com aproximadamente 62% e interior com 38%, ambas com altura de 320–400 px. Legendas pequenas “O pátio” e “Por dentro do bistrô”. Não distorcer para igualar altura; usar recorte focal apropriado.

Mobile: empilhar, com proporções adequadas. Manter clique para ampliar e lightbox acessível se já existir. Escape fecha, foco é contido e devolvido ao botão original, controles visíveis e nomes acessíveis. Não implementar carrossel automático ou arrastar como único meio de navegação.

Eliminar as outras quatro imagens repetidas da galeria atual. Não apagar os arquivos originais do projeto apenas porque saíram da página.

### 6. Visita e contato reunidos

Retirar a foto da porta desta seção, pois ela já aparece no hero. Remover completamente a antiga faixa gigante “Sua próxima pausa tem endereço”. Fazer um único painel de informações sobre fundo creme, delimitado por um filete vinho superior.

Desktop: três colunas — endereço, horários e ações. Mobile: três blocos empilhados, sem tabela comprimida.

H2: “Nos vemos à mesa.”
Endereço: “Avenida da Liberdade, 389”
Cidade: “Taiobeiras/MG”

Horários exatos:
Segunda-feira: 16h às 23h
Terça e quarta: 14h às 21h
Quinta a sábado: 14h às 23h
Domingo: Fechado

Botão principal vinho: “Como chegar” → Maps.
Botão secundário contornado: “Visitar Instagram” → Instagram.
Perfil visível: “@miriasoaresbistro”.

Sem mapa fictício, WhatsApp não confirmado, reserva de mesa, indicador aberto/fechado ao vivo ou formulário.

### 7. Rodapé

Faixa vinho discreta com “Bistrô Miriã Soares” e “Taiobeiras/MG”, texto creme. Manter informações legais válidas existentes sem repetir o nome em vários lugares ou inserir nova chamada gigante. Não adicionar autoria de agência sem pedido.

## Links e dados que devem permanecer

Instagram: https://www.instagram.com/miriasoaresbistro/
Google Maps: https://maps.app.goo.gl/jbnngryGpdjD4dyG7

Não substituir o Instagram pelo perfil do buffet. Não usar endereço rural ou telefone cadastral do buffet. Não acrescentar bairro, CEP, preços, notas ou depoimentos. Links externos em nova aba com rel="noopener noreferrer".

## Imagens e fidelidade

Usar arquivos separados de logo e fotografias. Não usar as imagens de layout como background de uma página inteira. Toda tipografia, botão, tabela, linha e recorte deve ser construído em HTML/CSS acessível.

Há versões tratadas por IA, com laterais reconstruídas nas horizontais. Evitar novas gerações e novas reconstruções. Preferir a foto vertical da entrada para o hero. Não ampliar além da resolução útil. Manter documentada na entrega técnica a necessidade de conferir a fidelidade dos assets com o proprietário antes da publicação final; não inserir essa nota como elemento de marketing na página.

## Qualidade técnica

Não instalar bibliotecas grandes apenas para a reforma. Manter componentes e organização da stack existente. Ajustar conteúdo centralizado se já houver esse padrão.

Reservar dimensões de imagens para evitar deslocamentos; carregar hero com prioridade, demais imagens com lazy loading. Não carregar as duas versões da mesma imagem desnecessariamente. Servir WebP/AVIF quando já suportado ou converter corretamente preservando originais. Logo SVG com width/height e alt.

Um H1, H2 por seção, landmarks semânticos, tabela de horários acessível, texto selecionável, foco visível, contraste adequado e alvos de toque de pelo menos 44 px. Azul não deve ser usado para texto pequeno sobre vinho. Testar contraste dos controles e overlays, se houver.

Animações pequenas de 180–300 ms, respeitando prefers-reduced-motion. Sem parallax, scroll hijacking, texto animado letra por letra ou animações que deixem seções invisíveis se JavaScript falhar. Se já houver GSAP, simplificar e reutilizar somente o necessário.

Preservar SEO e metadados corretos. Não inventar avaliações estruturadas. Não alterar as regras atuais de indexação ou domínio apenas por causa desta reforma visual. Informar separadamente qualquer problema encontrado.

## Verificação e critério de conclusão

Executar build e verificações pertinentes já disponíveis. Inspecionar visualmente 360, 390, 768, 1024 e 1440 px. Conferir:
- hero é vinho com foto em arco, não foto de fundo;
- gastronomia vem antes da homenagem;
- logo ficou legível sem criar cabeçalho enorme;
- títulos têm peso e escala diferentes da versão antiga;
- cada foto aparece uma única vez no corpo;
- galeria possui duas fotos;
- homenagem usa o texto final deste prompt;
- horários e URLs corretos;
- seção final reúne visita e contato, sem CTA duplicado;
- menu, âncoras e lightbox funcionam por toque e teclado;
- nenhuma imagem quebrada após entrar em tela;
- sem overflow, texto cortado, console com erros do projeto ou botões fictícios.

Entregue resumo das alterações, preview e capturas desktop/mobile da nova versão. Se algum item estiver bloqueado, informe objetivamente. Não alegue testes ou notas de desempenho que não executou. Não publicar automaticamente.

--- FIM DO PROMPT ---
