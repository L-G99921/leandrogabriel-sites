# Leandro Gabriel · Sites

Site do trabalho independente de criação de sites do Leandro Gabriel. Reúne os projetos-conceito, os preços e uma calculadora de orçamento que envia a estimativa para o WhatsApp.

**Endereço:** https://leandrogabriel.vercel.app/

## O que tem
- **Hero** com os projetos rodando em janelas e no celular.
- **Vitrine** com os 5 projetos-conceito (prints reais, recursos de cada um e link ao vivo).
- **Recursos** que um site pode ter, com link para o exemplo em cada projeto.
- **Quanto custa:** valores "a partir de" (vitrine R$ 2.000, com funcionalidades R$ 2.500), parcela no cartão, o custo de depender de iFood e Booking, o que faz o preço mudar, manutenção e condição de lançamento. Vem depois dos projetos e do "Como funciona", para o cliente ver o trabalho antes do número.
- **Calculadora de orçamento:** a estimativa sai na hora e segue pelo WhatsApp ou por e-mail, já formatada.
- **Como funciona**, **Sobre** (com LinkedIn e portfólio de redação técnica) e **Perguntas**.

É um site estático (HTML, CSS e JS), sem banco de dados e sem dependências.

## Rodar localmente
```bash
node server.js
```
Abra http://localhost:5505.

## Publicar na Vercel (plano gratuito)
1. Entre em https://vercel.com/new com a sua conta.
2. Em **Import Git Repository**, escolha `L-G99921/leandrogabriel-sites`. Se o repositório não aparecer, clique em **Adjust GitHub App Permissions** e libere o acesso a ele.
3. Em **Project Name**, escreva `leandrogabriel`. Isso gera o endereço `leandrogabriel.vercel.app`.
4. **Framework Preset:** `Other`. Não mexa em Build Command nem em Output Directory.
5. Clique em **Deploy**.

Depois disso, cada `git push` na branch `main` publica o site sozinho.

> **Sobre o plano gratuito:** a política da Vercel diz que o plano Hobby é para uso pessoal e não comercial, e divulgar um serviço conta como comercial. Enquanto o site é só uma vitrine pequena, o risco prático é baixo, mas a Vercel pode pausar o projeto. Se isso acontecer, é só migrar para o plano Pro ou para outro serviço gratuito que permita uso comercial.

## Atualizar os prints dos projetos
Os prints em `img/projetos/` foram tirados dos sites publicados (1440×900 e 390×844, em WebP). Se um projeto mudar, tire um print novo com as mesmas dimensões e mantenha o nome do arquivo.

## Estrutura
```
index.html              Página única
css/styles.css          Estilos (tokens no topo)
js/main.js              Calculadora de orçamento e animações
img/leandro-gabriel.png Foto
img/projetos/           Prints dos 5 projetos (desktop e celular)
img/og.jpg              Imagem da prévia do link (1200×630)
favicon.svg
server.js               Servidor local
REFERENCIAS.md          Pesquisa (portfólios, preços, Vercel, Turso)
PLANO.md                Plano de ação
```

## Design
**Vercel Geist** (preto e branco, Geist Sans e Geist Mono) com seções escuras e movimento no estilo **Linear**. A única cor de destaque é o índigo dos botões principais. As outras cores vêm dos prints dos projetos.
