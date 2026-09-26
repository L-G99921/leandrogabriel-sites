# Plano de ação: site do Leandro Gabriel (freela de criação de sites)

Base: [REFERENCIAS.md](REFERENCIAS.md). Design system: **Vercel Geist** (base) + **Linear** (seções escuras e movimento).

---

## 1. Marca e domínio

| Item | Decisão proposta |
|---|---|
| Marca | **Leandro Gabriel · Sites** (o mesmo nome do LinkedIn, o que gera confiança e reforça uma única identidade) |
| Domínio | **leandrogabriel.dev**, livre em 26/09/2026 e **grátis no 1º ano** com o Vercel Pro (depois, renovação no preço padrão) |
| Alternativas livres | `leandrogabriel.com.br` (registro.br, ~R$ 40/ano, apontado para a Vercel) · `lgsites.com.br` · `sitesdoleandro.com.br` |
| Já registrados (fora) | `leandrogabriel.com` · `lgsites.com` · `gabrielsites.com.br` · `lgestudio.com.br` |

> A Vercel **não registra .com.br**: removeu o suporte a domínios de país compostos. Um .com.br precisa ser registrado no registro.br e apontado por DNS.

## 2. Posicionamento

**Quem:** Leandro Gabriel, de João Pessoa (PB). Redator técnico sênior há mais de 6 anos (documentação da API do PIX no Itaú, plataformas da Sephora LATAM, infraestrutura de dados da L'Oréal). Os sites são um trabalho independente.

**O ângulo que ninguém mais tem:** passou 6 anos transformando sistemas complicados em algo que as pessoas entendem e usam. Faz o mesmo com o site de um pequeno negócio: claro, rápido, fácil de usar.

**Para quem:** donos de pequenos negócios (restaurante, pousada, loja, consultório, escritório) que dependem de Instagram, iFood ou Booking.

**Promessa:** um site próprio que traz cliente pelo WhatsApp e tira o negócio da dependência de comissão.

**Diferenciais concretos:**
- design feito para o negócio;
- funcionalidades reais (pedido, reserva, catálogo, agenda);
- **site em inglês e espanhol**, porque você é trilíngue (ótimo para pousadas e turismo em JP);
- domínio no nome do cliente;
- preço fechado.

## 3. Regras de honestidade (é o site real do Leandro)
- Os 5 portfólios aparecem como **"projetos-conceito"**: negócios fictícios, criados para mostrar o que dá para fazer.
- **Nenhum depoimento nem número inventado.**
- Foto real (a sua, já no projeto em `img/leandro-gabriel.png`).
- As conquistas do currículo (PIX, Sephora, L'Oréal) entram como estão no LinkedIn, sem exagero.

## 4. Preços (definidos pelo Leandro)

| Tipo | O que é | Preço |
|---|---|---|
| **Site vitrine** | Site estático: institucional, página única, apresentação de serviços (ex.: Lastro, Helena) | **R$ 2.000** |
| **Site com funcionalidades** | Pedidos, reservas, catálogo com filtros, banco de dados, painel (ex.: Tacho, Cajueiro, Lavra) | **R$ 2.500 a R$ 4.000**, após análise do projeto |

**Sugestões para completar** (a aprovar):
- **Extras:** versão em inglês ou espanhol R$ 500 por idioma · página adicional R$ 250.
- **Manutenção mensal:** Hospedagem R$ 69 · Cuidado R$ 149 (até 3 alterações/mês) · Sistema R$ 249 (sites com banco).
- **Condições:** 50% de entrada e 50% na entrega · 5% de desconto no Pix à vista · até 10x no cartão com a taxa repassada · primeiro mês de manutenção grátis.
- **Lançamento:** 20% de desconto para os 3 primeiros clientes em troca de depoimento real e autorização para mostrar o site.

**Custo seu:** Vercel Pro US$ 20/mês (≈ R$ 110, atende todos os clientes) + Turso grátis até 100 bancos. Com 2 clientes no plano Hospedagem, a Vercel se paga.

## 5. Estrutura do site (hub)

| # | Seção | Conteúdo |
|---|---|---|
| — | Header | Marca, menu, botão "Pedir orçamento" |
| 1 | **Hero** | Promessa + 2 CTAs + mosaico com os 5 sites rodando |
| 2 | **Vitrine** | 5 projetos-conceito com print real (desktop e celular), tipo de negócio, o que demonstram e link ao vivo |
| 3 | **O que seu site pode ter** | Pedido no WhatsApp, reserva com calendário, cardápio editável, catálogo com filtros, site bilíngue |
| 4 | **Preços** | Os dois tipos + extras + manutenção |
| 5 | **Orçamento em 1 minuto** | Calculadora: tipo + recursos + idiomas → faixa de preço → salva no Turso e abre o WhatsApp |
| 6 | **Como funciona** | Conversa → proposta → design → ajustes → no ar, com prazos |
| 7 | **Sobre** | Foto, trajetória em 3 linhas, links para LinkedIn e portfólio de redação técnica |
| 8 | **Perguntas** | Domínio, hospedagem, quem é dono do site, prazos, pagamento, alterações |
| — | Rodapé | WhatsApp (83) 98116-5331 · lgos99921@gmail.com · LinkedIn |

Texto do "Sobre" (rascunho, a revisar):
> Sou Leandro Gabriel, de João Pessoa. Há mais de 6 anos trabalho como redator técnico: documentei a API do PIX no Itaú e organizei a documentação de plataformas da Sephora e da L'Oréal. Meu trabalho é pegar coisa complicada e deixar fácil de usar. Faço o mesmo com sites para pequenos negócios, como trabalho independente.

## 6. Tecnologia e publicação
- **Front-end:** HTML, CSS e JS leves (mesmo padrão dos portfólios).
- **API:** função serverless na Vercel `/api/orcamento`, que grava o pedido no **Turso** (`@libsql/client`).
- **Painel** `/admin` protegido por senha, para ver os orçamentos.
- **Deploy:** repositório no GitHub (`L-G99921/leandrogabriel-sites`) importado na Vercel (time `stars-leon`). Cada `git push` publica sozinho.
- **Credenciais:** a URL e o token do Turso ficam **só nas variáveis de ambiente da Vercel**. Nunca no código, nunca no chat.

## 7. Etapas
1. Aprovação da marca, do domínio e dos preços complementares.
2. Prints dos 5 portfólios (desktop e celular).
3. Layout, hero, vitrine, recursos, preços, processo, sobre e FAQ.
4. Calculadora + API + Turso + painel (testados localmente com um banco SQLite de teste).
5. Testes automáticos no navegador real (fluxo, celular, acessibilidade) e revisão anti-"cara de IA".
6. Publicação: você faz 3 cliques na Vercel e cria o banco no Turso (passo a passo pronto), e eu cuido do resto.
